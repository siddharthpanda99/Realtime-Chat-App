import { useState, ReactNode } from "react";
import { UserContext, User } from "../contexts/UserContext";

type UserProviderProps = {
    children: ReactNode;
};

const UserProvider = ({ children }: UserProviderProps) => {
    const [user, setUser] = useState<User>({
        name: "Siddharth", email: "siddharth.panda@gmail.com", password: "12345678", loggedIn: false
    });

    const updateUser = (key: string, value: any) => {
      console.log("🚀 ~ file: UserProvider.tsx:15 ~ updateUser ~ value:", value)
      console.log("🚀 ~ file: UserProvider.tsx:15 ~ updateUser ~ key:", key)
      
      setUser({
        ...user, // Copy the old fields
        [key]: value, // But override this one
      });
    };

    return (
      <UserContext.Provider value={{ user, setUser, updateUser }}>
        {children}
      </UserContext.Provider>
    );
};

export default UserProvider;