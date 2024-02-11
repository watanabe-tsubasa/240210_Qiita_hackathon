import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CommonRaderChart } from "./Chart"
import { NameIcon } from "../atoms/CircleSkelton"
import { Separator } from "../ui/separator"
import { PointConfirm } from "./PointConfirm"
import { useLiffContext } from "@/context/useLiffContext"
import { useState } from "react"
import { useAllData, useUserPoint } from "@/Hooks/useFetcher"
import { SimpleSkelton } from "../atoms/SimpleSkelton"

export const PointPage = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>つながりポイント</CardTitle>
        <CardDescription>
          コミュニティみんなの成果
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-10 px-4">
        <PointConfirm />
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button>再読み込み</Button>
      </CardFooter>
    </Card>
  )
}

export const UserPage = () => {
  const { liffObject, userId } = useLiffContext();
  if (liffObject && !liffObject.isLoggedIn()) {
    liffObject.login({ redirectUri: import.meta.env.REDIRECT_URL as string });
  }
  const [name, setName] = useState<string | null>(null);
  const [pictureUrl, setPictureUrl] = useState<string | undefined>(undefined);
  liffObject?.getProfile()
    .then((profile) => {
      setName(profile.displayName);
      setPictureUrl(`${profile.pictureUrl}/small`);
    })
    .catch((error) => {
      console.log("error:",error)
    })
  const { point } = useUserPoint(userId);
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          <NameIcon name={name} picture={pictureUrl} />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CommonRaderChart data={point} />
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <Button>再読み込み</Button>
      </CardFooter>
    </Card>
  )
}

export const AdminPage = () => {
  const { allData, allNameList, isLoading } = useAllData();
  return isLoading ? <SimpleSkelton /> :
  (
    <Card className="flex-grow overflow-scroll h-[90vH]">
      {allData.map((data, idx) => {
        const name = allNameList[idx];
        return (
          <div key={idx}>
            <CardHeader>
              <CardTitle>
                <NameIcon name={name} picture={undefined} />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <CommonRaderChart data={data} />
            </CardContent>
            <Separator className="mb-4" />
          </div>
        )
      })}
      <CardFooter className="flex items-center justify-center">
        <Button>再読み込み</Button>
      </CardFooter>
    </Card>
  )
}