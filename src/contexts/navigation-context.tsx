import { createContext } from "react";

const NavigationContext = createContext({
  push: (url: string) => {},
  almightyPush: (url: string) => {},
});

export default NavigationContext;
