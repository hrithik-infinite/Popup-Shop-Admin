"use client";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Trash } from "lucide-react";
export const SettingsForm = ({ initialData }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title="Settings" description="Manage store prefernces" />
        <Button variant="destructive" size="sm" onClick={() => {}}>
          <Trash className="h-4 w-4"></Trash>
        </Button>
      </div>
      <Separator />
    </>
  );
};
