import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {useAuth} from '../hook/useAuth'
import { Access } from '../api/storageAcces';
import { ILoginRequest } from '../api/MainApi';

export default function Login() {
   
   const navigate = useNavigate();
   const location = useLocation();
   const {signIn} = useAuth();

   const fromPage = location.state?.from?.pathname || '/'

   const [isLoading, setIsLoading] = useState(false)

   const [name, setLogin] = useState('')
   const [password, setPass] = useState('')


   
 
 const handleSubmit =  async (e) => {
    e.preventDefault()

    ILoginRequest(name, password)
    // .then(result => console.log(result))
    .then((res) =>  signIn(res.accessToken, res.role, ()=>navigate(fromPage)))
    // .then(result => console.log(result))
    // .then( signIn('user', ()=>navigate(fromPage)))
    .catch(error=>console.log('Error'))
    .finally(() => setIsLoading(false))
  }
 


  return (
   <>
   <div className="">{fromPage}</div>
   <form className='form' onSubmit={handleSubmit}>
     <div className='form__item'>
       <label htmlFor="name" className='form__title'>Логин</label>
       <input type="text" placeholder='Логин' id="login" className='form__input input' onChange={(e) => setLogin(e.target.value)} />
     </div>
     <div className='form__item'>
       <label htmlFor="lastName" className='form__title'>Пароль</label>
       <input type="password" placeholder='Пароль' id="password" className='form__input input' onChange={(e) => setPass(e.target.value)} />
     </div>
     {/* <div className='form__item'>
       <label htmlFor="email" className='form__title'>Категория</label>
       <input type="email" placeholder='Категория' id="email" className='form__input input' onChange={(e) => setEmail(e.target.value)} />
     </div> */}
     <button className='button form__button' type='submit'>Авторизация</button>
   </form>
   <div>{isLoading && <p className='loading'>Грузим ответ</p>}</div>
 </>
  )
}
