import { useLocation, Navigate } from 'react-router-dom';
import {useAuth} from '../hook/useAuth'


export function RequiredAuth({children}) {

   const location = useLocation();
   const {token} = useAuth();

   if (!token) {
      return <Navigate to='/Auth' state= {{from: location}} />
   } 

  return children;
}
