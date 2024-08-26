import {createContext, useState} from 'react'

export const AuthContext = createContext(null);

export const AuthProvider =  ({children}) => {

   const [token, setToken] = useState(null);

   const signIn = (newToken, cb) => {
      setToken(newToken);
      cb();
   }
   const singout = (cb) => {
      setToken(null);
      cb();
   }

   const value = {token, signIn, singout}

   return <AuthContext.Provider value={value}>
      {children}
   </AuthContext.Provider>
}
