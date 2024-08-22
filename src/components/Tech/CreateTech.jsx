import React, { useState } from 'react'
import { token } from '../../utils/token'


export default function CreateTech() {

  const [isLoading, setIsLoading] = useState(false)
  let url = 80


  const [name, setName] = useState('')
  const [URL, setURL] = useState('')
  const [role, setRole] = useState('')

  const body = {
   "name": name,
   "documentationUrl": URL,
   "currentAverageScore": 0,
   "category": role
}

console.log(body)
console.log(token)

const handleSubmit = async (e) => {
  e.preventDefault()
  setIsLoading(true)
  fetch('http://localhost:8080/api/tech/createSolution', {
    'method': 'POST',
    'body': JSON.stringify(body),
     'headers': {
      'accept': '*/*',
      'Authorization': token,
      'Content-Type': 'application/json', 
      }

  })
    .then(response => response.json())
    .then(result => console.log(result))
    // .then(result => setAnswer(result))
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
          <input type="text" placeholder='Ссылка' id="URL" className='form__input input' onChange={(e) => setURL(e.target.value)} />
        </div>
        {/* <div className='form__item'>
          <label htmlFor="email" className='form__title'>Категория</label>
          <input type="email" placeholder='Категория' id="email" className='form__input input' onChange={(e) => setEmail(e.target.value)} />
        </div> */}
        <div className='form__item'>
        <label htmlFor="lastName" className='form__title'>Выберите категорию</label>
        <select name="" id="roles" className="form__input" defaultValue={'default'} required onChange={(e)=> setRole(e.target.value)}>
          <option value="default" disabled>Выберите категорию</option>
          
             <option value='Languages' key={0}>Languages</option>
             <option value='Tools' key={1}>Tools</option>
             <option value='Techniques' key={2}>Techniques</option>
             <option value='Platforms' key={3}>Platforms</option>

        </select>
        </div>
        <button className='button form__button' type='submit'>Добавить технологию</button>
      </form>
      <div>{isLoading && <p className='loading'>Грузим ответ</p>}</div>
    </>
  )
}


