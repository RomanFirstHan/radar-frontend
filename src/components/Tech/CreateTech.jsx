import React, { useEffect, useState } from 'react'
import { token } from '../../utils/token'
import {useAuth} from '../hook/useAuth'
import Technology from './Technology/itemTechnology'
import { request } from '../api/MainApi'


export default function CreateTech() {

  const [isLoading, setIsLoading] = useState(false)
  let url = 80
  
  const token = `Bearer ${useAuth().token}`


  const [name, setName] = useState('')
  const [URL, setURL] = useState('')
  const [role, setRole] = useState('')
  // const [solution, setSolution] = useState(null)
  const [entries, setEntries] = useState([])

  const body = {
   "name": name,
   "documentationUrl": URL,
   "category": role
}

  

 
  
  useEffect(()=>{request(token, setEntries)
  }, [])

  const handleUpdate = () => request(token, setEntries)



// const response = ()=> {
//   fetch('http://localhost:8080/api/tech/getAllSolutions', {
//         'method': 'GET',
//         'headers': {
//           'accept': '*/*',
//           'Authorization': token,
//           'Content-Type': 'application/json' 
//         }
//       })
//       .then(response => response.json())
//       // .then(res=> res.id)
// }

// const techSolution = response()



console.log(token)
// console.log(response())
// console.log(body)
// console.log(token)

const handleSubmit = async (e) => {
  e.preventDefault()
  setIsLoading(true)
  fetch('http://localhost:8080/api/tech/createSolution', {
    'method': 'POST',
    'body': JSON.stringify(body),
     'headers': {
      'accept': '*/*',
      'Authorization': token,
      'Content-Type': 'application/json' 
      }

  })
    .then(response => response.json())
    .then(result => console.log(result))
    .then(()=>setName(''))
    // .then(result => setAnswer(result))
    .catch(err => console.log(err))
    .finally(() => setIsLoading(false))
}

const techName = '2'


  return (
    <>
      <div className="body container">
        <div className='body__form'>
          <form className='form' onSubmit={handleSubmit}>
        <div className='form__item'>
          <label htmlFor="name" className='form__title'>Название технологии</label>
          <input type="text" placeholder='Название технологии' id="name" className='form__input input' onChange={(e) => setName(e.target.value)} value={name} />
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
          
             <option value='LANGUAGES' >Languages</option>
             <option value='TOOLS' >Tools</option>
             <option value='TECHNIQUES' >Techniques</option>
             <option value='PLATFORMS' >Platforms</option>

        </select>
        </div>
        <button className='button form__button' type='submit' onSubmit={handleUpdate}>Добавить технологию</button>
          </form>
        <div>{isLoading && <p className='loading'>Грузим ответ</p>}</div>
      </div>
      <div className="scrollable-container">
      <ul className='scrollable__list'>
         
         {entries.map((el) => <Technology key={el.id} techname={el.label} id={el.id} handleUpdate={handleUpdate}/>)}
         
                
       </ul>
      </div>
      </div>
    </>
  )
}


