import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { WebSocket } from "ws";

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // setAll called from a Server Component — safe to ignore when
            // middleware is refreshing the session.
          }
        },
      },
      // Node < 22 has no native WebSocket; without this the realtime
      // client throws at construction time on every server-side call.
      realtime: {
        transport: WebSocket as unknown as typeof globalThis.WebSocket,
      },
    }
  );
}
