import {createContext, useState} from 'react'

export const AuthContext = createContext(null);

export const AuthProvider =  ({children}) => {

   const [token, setToken] = useState(null);
   const [role, setRole] = useState(null);

   const signIn = (newToken, newRole, cb) => {
      setToken(newToken);
      setRole(newRole);
      cb();
   }
   const singout = (cb) => {
      setToken(null);
      setRole(null);
      cb();
   }

   const value = {role, token, signIn, singout}

   return <AuthContext.Provider value={value}>
      {children}
   </AuthContext.Provider>
}
