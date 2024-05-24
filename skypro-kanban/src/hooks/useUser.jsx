import { useContext } from "react";
import { UserContext } from "../comtexts/user";

export const useUser = () => {
  return useContext(UserContext);
};