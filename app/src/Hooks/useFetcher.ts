import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const baseURL = 'https://script.google.com/macros/s/AKfycbx82SX2k58XRPYDC5vrp7Bm7PgvEfwjuI-PN6EKs56wIy2TvSwtCO14T1UZSYVmo-Ag/exec'

interface PointData {
  emopoint: number;
}

export const useFetchPoint = () => {
  const { data, error } = useSWR<PointData, string>(
    `${baseURL}?type=emopoint`,
    fetcher,
    { suspense: true }
  );

  return {
    point: data,
    isError: error
  }
}

interface UserData {
  qiitaCount: number;
  eventCount: number;
  chatCount: number;
  snsCount: number;
  uniqueKpi: {
    product: number;
    sales: number;
    userCount: number;
  };
}

export interface DataItem {
  subject: string;
  A: number;
  fullMark: number;
}

export const useUserPoint = (userId: string | undefined) => {
  const { data, error } = useSWR<UserData, string>(
    `${baseURL}?user_id=${userId}&type=point`,
    fetcher,
    { suspense: true }
  );

  const userPoint = [
    { subject: '投稿数', A: data?.qiitaCount, fullMark: 15 },
    { subject: 'イベント', A: data?.eventCount, fullMark: 15 },
    { subject: 'チャット', A: data?.chatCount, fullMark: 15 },
    { subject: 'SNS', A: data?.snsCount, fullMark: 15 },
    { subject: '目標', A: data?.uniqueKpi.product, fullMark: 15 },
  ]

  return {
    point: userPoint as DataItem[],
    isError: error
  }
}

interface Users {
  id: number,
  lineUserId: string,
  liffUserId: string | null,
  name: string,
  connpassUserId: string | null,
  qiitaUserId: string | null,
}

export const useAllData = () => {
  const [allData, setAllData] = useState<DataItem[][]>([]);
  const [allNameList, setAllNameList] = useState<string[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ユーザーリストを取得
        const usersResponse: Users[] = await fetcher(`${baseURL}?type=users`);
        const userIds = usersResponse.map(user => user.id);
        const userNames = usersResponse.map(user => user.name);
        setAllNameList(userNames);

        // 各ユーザーのデータを非同期に取得
        const promises = userIds.map(id =>
          fetcher(`${baseURL}?user_id=${id}&type=point`)
        );

        const results = await Promise.all(promises);
        const allData = results.map(data => {
          return [
            { subject: '投稿数', A: data?.qiitaCount, fullMark: 15 },
            { subject: 'イベント', A: data?.eventCount, fullMark: 15 },
            { subject: 'チャット', A: data?.chatCount, fullMark: 15 },
            { subject: 'SNS', A: data?.snsCount, fullMark: 15 },
            { subject: '目標', A: data?.uniqueKpi.product, fullMark: 15 },
          ]
        })
        setAllData(allData);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchData();
  }, []);

  return { allData, allNameList, isError, isLoading };
}