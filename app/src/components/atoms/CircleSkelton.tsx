import { Skeleton } from "../ui/skeleton";

interface NameIconProps {
  name: string | null
  picture: string | undefined
}

export const NameIcon: React.FC<NameIconProps> = ({ name, picture }) => {
  return (
    <div className="flex items-center space-x-4 px-4">
      {picture ? (
        <img src={picture} className="h-12 w-12 rounded-full"/>
      ) : (
        <Skeleton className="h-12 w-12 rounded-full" />
      )}
      <div className="space-y-2">
        {name ? (
          <>{name}さん</>
        ) : (
          <>
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </>
        )}       
      </div>
    </div>
  )
}
