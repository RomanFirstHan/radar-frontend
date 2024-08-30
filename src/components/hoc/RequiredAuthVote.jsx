import { useLocation, Navigate } from 'react-router-dom';
import {useAuth} from '../hook/useAuth'


export function RequiredAuthVote({children}) {

   const location = useLocation();
   const {token} = useAuth();
   const {role} = useAuth()
   console.log(role)

   if (role!=='VOTER' && role!=='ADMIN') {
      return <Navigate to='/Auth' state= {{from: location}} />
   } 

  return children;
}
