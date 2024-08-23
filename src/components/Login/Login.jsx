import React, {useState} from 'react'


export default function Login() {

   const [isLoading, setIsLoading] = useState(false)

   const [name, setLogin] = useState('')
   const [URL, setPass] = useState('')
 
 const handleSubmit = async (e) => {
    e.preventDefault()
  }
 


  return (
   <>
   <form className='form' onSubmit={handleSubmit}>
     <div className='form__item'>
       <label htmlFor="name" className='form__title'>Логин</label>
       <input type="text" placeholder='Логин' id="login" className='form__input input' onChange={(e) => setLogin(e.target.value)} />
     </div>
     <div className='form__item'>
       <label htmlFor="lastName" className='form__title'>Пароль</label>
       <input type="text" placeholder='Пароль' id="password" className='form__input input' onChange={(e) => setPass(e.target.value)} />
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
