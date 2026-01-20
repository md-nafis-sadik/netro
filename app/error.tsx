"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <div className="max-w-md space-y-6">
        <div className="flex justify-center">
          <AlertTriangle className="h-14 w-14 text-destructive" />
        </div>

        <h1 className="text-3xl font-semibold tracking-tight">
          Something went wrong
        </h1>

        <p className="text-muted-foreground">
          An unexpected error occurred. Please try again or refresh the page.
        </p>

        <div className="flex justify-center gap-3">
          <Button onClick={reset}>Try again</Button>

          <Button variant="outlined" onClick={() => window.location.reload()}>
            Reload
          </Button>
        </div>
      </div>
    </div>
  );
}
