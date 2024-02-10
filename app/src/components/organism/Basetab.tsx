import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { AdminPage, PointPage, UserPage } from "../molecules/Pages"
import { useState } from "react"

export default function Basetab() {

  const [isAdmin] = useState(true);
  const tabsListClassName = `grid w-full ${isAdmin ? 'grid-cols-3' : 'grid-cols-2'}`;
  return (
    <div className='w-full h-[93vH] flex justify-center my-4'>
      <div className="h-screen flex flex-col">
        <Tabs defaultValue="point" className="flex-1">
          <TabsList className={tabsListClassName}>
            <TabsTrigger value="point">point</TabsTrigger>
            <TabsTrigger value="user">user</TabsTrigger>
            {isAdmin && <TabsTrigger value="admin">admin</TabsTrigger>}
          </TabsList>
          <TabsContent value="point">
            <PointPage />
          </TabsContent>
          <TabsContent value="user">
            <UserPage />
          </TabsContent>
          <TabsContent value="admin">
            <AdminPage />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
