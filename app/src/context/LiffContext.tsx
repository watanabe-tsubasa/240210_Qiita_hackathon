import liff, { Liff } from "@line/liff";
import { ReactNode, createContext, useEffect, useState } from "react";

interface LiffContextValue {
  liffObject: Liff | null;
  message: string;
  error: string;
  userId: string;
}
export const LiffContext = createContext<LiffContextValue | null>(null);

interface LiffProviderProps {
  children: ReactNode;
}

export const LiffProvider: React.FC<LiffProviderProps> = ({ children }) => {
  const [liffObject, setLiffObject] = useState<Liff | null>(null);
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID as string
      })
      .then(() => {
        setMessage("LIFF init succeeded.");
        setLiffObject(liff);
        liff.getProfile()
          .then((profile) => {
            setUserId(profile.userId);
            console.log(profile.userId)
          })
          .catch((e: Error) => {
            setMessage("LIFF init failed.");
            setError(`${e}`);
          });
      })
      .catch((e: Error) => {
        setMessage("LIFF init failed.");
        setError(`${e}`);
      });
  });

  return (
    <LiffContext.Provider value={{ liffObject, message, error, userId }} >
      {children}
    </LiffContext.Provider>
  )
}