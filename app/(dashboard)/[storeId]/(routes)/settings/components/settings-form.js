"use client";
import { Heading } from "@/components/ui/heading";
export const SettingsForm = ({ initialData }) => {
  return (
    <div className="flex items-center justify-between">
      <Heading title="Settings" description="Manage store prefernces" />
    </div>
  );
};
