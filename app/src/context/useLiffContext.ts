import { useContext } from "react";
import { LiffContext } from "./LiffContext";

export const useLiffContext = () => {
  const context = useContext(LiffContext);
  if(!context) {
    throw new Error('no context');
  }
  return context;
}