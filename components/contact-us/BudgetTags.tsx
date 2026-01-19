"use client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

function BudgetTags({ query = "" }: { query: string | undefined }) {
  const router = useRouter();

  const handleTabClick = (tabName: string) => {
    const query = new URLSearchParams();
    query.set("budget", tabName);
    const newPath = `?${query.toString()}`;
    router.push(newPath);
  };

  return (
    <ul className="mt-4 flex items-center flex-wrap gap-3">
      <li
        className={cn("budgetTagV2", query === "5k-15k" ? "activeBudgetTag" : "")}
        onClick={() => handleTabClick("5k-15k")}
      >
        5k-15k
      </li>
      <li
        className={cn(
          "budgetTagV2",
          query === "15k-50k" ? "activeBudgetTag" : ""
        )}
        onClick={() => handleTabClick("15k-50k")}
      >
        15k-50k
      </li>
      <li
        className={cn(
          "budgetTagV2",
          query === "50k-250k" ? "activeBudgetTag" : ""
        )}
        onClick={() => handleTabClick("50k-250k")}
      >
        50k-250k
      </li>
      <li
        className={cn("budgetTagV2", query === "250k" ? "activeBudgetTag" : "")}
        onClick={() => handleTabClick("250k")}
      >
        {" "}
        250k
      </li>
    </ul>
  );
}

export default BudgetTags;
