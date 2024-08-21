import React, { useState } from 'react'


export default function CreateTech() {

  const [isLoading, setIsLoading] = useState(false)
  let url = 80

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [role, setRole] = useState('')

  const body = {
   "last_name": lastName,
   "first_name": name,
   "email": email
}



  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    fetch(url +'/api/get-roles', { 
      'method': 'POST',
      'body': body

    })
      .then(response => response.json())
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form__item'>
          <label htmlFor="name" className='form__title'>Название технологии</label>
          <input type="text" placeholder='Название технологии' id="name" className='form__input input' onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='form__item'>
          <label htmlFor="lastName" className='form__title'>Ссылка</label>
          <input type="text" placeholder='Ссылка' id="lastName" className='form__input input' onChange={(e) => setLastName(e.target.value)} />
        </div>
        {/* <div className='form__item'>
          <label htmlFor="email" className='form__title'>Категория</label>
          <input type="email" placeholder='Категория' id="email" className='form__input input' onChange={(e) => setEmail(e.target.value)} />
        </div> */}
        <div className='form__item'>
        <label htmlFor="lastName" className='form__title'>Выберите категорию</label>
        <select name="" id="roles" className="form__input" defaultValue={'default'} required onChange={(e)=> setRole(e.target.value)}>
          <option value="default" disabled>Выберите категорию</option>
          
             <option value='0' key={0}>Languages</option>
             <option value='1' key={1}>Tools</option>
             <option value='2' key={2}>Techniques</option>
             <option value='3' key={3}>Platforms</option>

        </select>
        </div>
        <button className='button form__button'>Добавить технологию</button>
      </form>
      <div>{isLoading && <p className='loading'>Грузим ответ</p>}</div>
    </>
  )
}


