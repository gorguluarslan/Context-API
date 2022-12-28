import { createContext } from "react";

const LangContext = createContext();

export const LangContextProvider = () => {
  return <LangContext.Provider value={"tr"}></LangContext.Provider>;
};
export default LangContext;
