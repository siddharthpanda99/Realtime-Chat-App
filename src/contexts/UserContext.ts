import { Dispatch, SetStateAction, createContext } from "react";

export type User = {
  name: string
  email: string
  password: string,
  loggedIn: boolean
}

export interface UserContextInterface {
  user: User,
  setUser: Dispatch<SetStateAction<User>>,
  updateUser: (key: string, value: any) => void,
  // loggedIn: boolean,
  // setLoggedIn: Dispatch<SetStateAction<boolean>>,
}

// export const UserContext = createContext<Partial<UserContextInterface>>({});
const initialState = {
  user: {
    name: '',
    email: '',
    password: '',
    loggedIn: false
  },
  setUser: (user: User) => { },
  updateUser: (key: string, value: any) => {},
  // loggedIn: true,
  // setLoggedIn: (loggedIn: boolean) => { },
} as UserContextInterface;

export const UserContext = createContext<UserContextInterface>(initialState);