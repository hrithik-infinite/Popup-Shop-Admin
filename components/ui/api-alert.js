"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Copy, ServerIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "./button";
import toast from "react-hot-toast";

const textMap = {
  public: "Public",
  admin: "Admin",
};

const variantMap = {
  public: "secondary",
  admin: "destructive",
};

export const ApiAlert = ({ title, description, variant = "public" }) => {
  const onCopy = () => {
    navigator.clipboard.writeText(description);
    toast.success("API route copied to clipboard!");
  };
  return (
    <Alert>
      <ServerIcon className="h-4 w-4" />
      <AlertTitle className="flex items-center gap-x-2">
        {title}
        <Badge variant={variantMap[variant]}>{textMap[variant]}</Badge>
      </AlertTitle>
      <AlertDescription className="mt-4 flex items-center justify-between">
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          {description}
        </code>
        <Button variant="outline" size="icon" onClick={onCopy}>
          <Copy className="h-4 w-4" />
        </Button>
      </AlertDescription>
    </Alert>
  );
};
