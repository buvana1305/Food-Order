import { createContext } from "react";

const UserContext = createContext({
  loggedName: "Test User",
});
export default UserContext;
