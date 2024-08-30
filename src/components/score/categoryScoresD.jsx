import {React, useEffect, useState} from 'react'
import ItemScore from './itemScore'
import { useAuth } from '../hook/useAuth'
import { getByScores } from '../api/MainApi'

export default function CategoryScoresD({category}) {
  const [entries, setEntries] = useState([])
  const token = `Bearer ${useAuth().token}`

  useEffect(()=>{getByScores(token, setEntries)
  }, [category])

  const handleUpdate = () => getByScores(token, setEntries)
  
  return (
    
    <div className='score-body'>
      
      {entries.map((el) => <ItemScore key={el.id} techname={el.techSolution.name} id={el.techSolution.id} handleUpdate={handleUpdate} curScore={el.scoreValue}/>)}
      
    </div>
  )
}
