import { useState } from "react";
import { Skeleton } from "../ui/skeleton";

export function NameIcon() {
  const [name] = useState('defaultName');
  return (
    <div className="flex items-center space-x-4 px-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        {name}さん
      </div>
    </div>
  )
}
