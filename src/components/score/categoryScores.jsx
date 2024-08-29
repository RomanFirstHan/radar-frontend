import {React, useEffect, useState} from 'react'
import ItemScore from './itemScore'
import { useAuth } from '../hook/useAuth'
import { getByCategory } from '../api/MainApi'

export default function CategoryScores({category}) {
  const [entries, setEntries] = useState([])
  const token = `Bearer ${useAuth().token}`

  useEffect(()=>{getByCategory(token, category, setEntries)
  }, [category])

  const handleUpdate =() => getByCategory(token, category, setEntries)

  

  
  
  return (
    <div className='score-body'>
      
      {entries.map((el) => <ItemScore key={el.id} techname={el.label} id={el.id} handleUpdate={handleUpdate}/>)}
      
    </div>
  )
}
