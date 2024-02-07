"use client";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex items-center justify-center h-screen bg-background text-foreground">
      <div className="bg-card p-8 rounded-lg shadow-lg border">
        <h1 className="text-3xl text-red-500 font-bold mb-4">Error!</h1>
        <p className="text-lg">Oops! {error.message}.</p>
        <p className="text-lg">Please try again later.</p>
        <div className="flex justify-center mt-2">
          <Button
            variant="outline"
            onClick={() => {
              reset();
            }}
          >
            Try again
          </Button>
        </div>
      </div>
    </div>
  );
}
