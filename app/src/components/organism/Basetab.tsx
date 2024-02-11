import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { AdminPage, PointPage, UserPage } from "../molecules/Pages"
import { Suspense, useEffect, useState } from "react"
import { useLiffContext } from "@/context/useLiffContext";
import { SimpleSkelton } from "../atoms/SimpleSkelton";

const adminId = [
  'U439dc3807475b0b2091a3a712ab6fb90',
  'U50307cc62d8ee6872c06aa554d47df4f'
];

export default function Basetab() {

  const { userId } = useLiffContext();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    console.log(isAdmin);
    console.log(`context: ${userId}`);
    if (adminId.includes(userId)) {setIsAdmin(true);}
  }, [isAdmin, userId])

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
            <Suspense fallback={<SimpleSkelton />}>
              <PointPage />
            </Suspense>
          </TabsContent>
          <TabsContent value="user">
            <Suspense fallback={<SimpleSkelton />}>
              <UserPage />  
            </Suspense>
          </TabsContent>
          <TabsContent value="admin">
            <AdminPage />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
