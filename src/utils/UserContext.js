import { createContext } from "react";
const Usercontext = createContext({
  user: {
    name: "Dummy name",
    email: "dummy@gmail.com",
  },
});

Usercontext.displayName='Usercontex'

export  default Usercontext;