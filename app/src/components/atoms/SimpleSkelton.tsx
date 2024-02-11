import { Skeleton } from "../ui/skeleton"

export const SimpleSkelton = () => {
  return (
    <div className="flex justify-center h-screen w-full">
      <Skeleton className="w-[350px] h-[400px] mt-2"/>
    </div>
  )
}