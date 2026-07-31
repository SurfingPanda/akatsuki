"use client";

import { useState, useTransition } from "react";
import { Plus } from "lucide-react";

import { addGuildMember } from "@/app/dashboard/roster/actions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RANKS = ["Member", "Officer", "WoE Commander", "Vice Leader", "Guild Leader"];

export function AddMemberDialog() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    const form = event.currentTarget;
    const formData = new FormData(form);
    startTransition(async () => {
      const result = await addGuildMember(formData);
      if (result?.error) {
        setError(result.error);
      } else {
        form.reset();
        setOpen(false);
      }
    });
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) setError(null);
      }}
    >
      <DialogTrigger render={<Button className="gap-2" />}>
        <Plus className="size-4" />
        Add Member
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading">Add Guild Member</DialogTitle>
          <DialogDescription>
            Add a new member to the Akatsuki roster.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Discord name" required />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="ign">IGN</Label>
            <Input
              id="ign"
              name="ign"
              placeholder="In-game character name"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="job">Job</Label>
              <Input id="job" name="job" placeholder="e.g. Priest" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="level">Level</Label>
              <Input
                id="level"
                name="level"
                type="number"
                min={1}
                max={99}
                placeholder="99"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="rank">Rank</Label>
            <Select name="rank" defaultValue="Member">
              <SelectTrigger id="rank" className="w-full">
                <SelectValue placeholder="Select rank" />
              </SelectTrigger>
              <SelectContent>
                {RANKS.map((rank) => (
                  <SelectItem key={rank} value={rank}>
                    {rank}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <DialogFooter>
            <DialogClose render={<Button type="button" variant="outline" />}>
              Cancel
            </DialogClose>
            <Button type="submit" disabled={pending}>
              {pending ? "Adding…" : "Add Member"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
