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
import { allData, data } from "@/utils/sampleData"
import { Separator } from "../ui/separator"
import { PointConfirm } from "./PointConfirm"
import { useLiffContext } from "@/context/useLiffContext"
import { useState } from "react"

export const PointPage = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>エモポイント</CardTitle>
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
  const { liffObject } = useLiffContext();
  const redirectUri = import.meta.env.REDIRECT_URL || 'null'
  if (liffObject && !liffObject.isLoggedIn()) {
    liffObject.login({ redirectUri: redirectUri });
  }
  const [name, setName] = useState<string>('null');
  liffObject?.getProfile()
    .then((profile) => {
      setName(profile.displayName);
    })
    .catch((error) => {
      console.log("error:",error)
    })

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          <NameIcon name={name} />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CommonRaderChart data={data} />
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <Button>再読み込み</Button>
      </CardFooter>
    </Card>
  )
}

export const AdminPage = () => {
  return (
    <Card className="flex-grow overflow-scroll h-[90vH]">
      {allData.map(data => {
        return (
          <div>
            <CardHeader>
              <CardTitle>
                <NameIcon name='defaultName' />
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