import { Skeleton } from "../ui/skeleton"

export const SimpleSkelton = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <Skeleton className="h-screen w-full" />
    </div>
  )
}