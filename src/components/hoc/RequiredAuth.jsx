import { useLocation, Navigate } from 'react-router-dom';
import {useAuth} from '../hook/useAuth'


export function RequiredAuth({children}) {

   const location = useLocation();
   const {token} = useAuth();
   const {role} = useAuth()
   console.log(role)

   if (role!=='ADMIN' ) {
      return <Navigate to='/Auth' state= {{from: location}} />
   } 

  return children;
}
