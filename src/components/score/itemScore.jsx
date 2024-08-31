import {React} from 'react'
import { useAuth } from '../hook/useAuth'
import { url } from '../api/utilsApi'

export default function ItemScore({techname, id, handleUpdate, curScore}) {

  const token = `Bearer ${useAuth().token}`

  //  const [score, setScore] = useState('')

  //  const body = {
  //   "techId": id,
  //   "scoreValue": score
  //  }




   const handleChange = (e) => {
    // e.preventDefault()
    console.log(e)
    
    fetch(url+'api/score/addOrUpdate', {
      'method': 'POST',
      'body': JSON.stringify(
        {
        "techId": id,
        "scoreValue": Number(e)
        }
      ),
       'headers': {
        'accept': '*/*',
        'Authorization': token,
        'Content-Type': 'application/json' 
        }
  
    })
      .then(response => response.json())
      .then(result => console.log(result))
      .then(()=>handleUpdate())
      .catch(er=>console.log(er))  
    }
   
  return (
    <>
      <article className='item-score'>
         <div className="item-score__title">{techname}</div>
         <select name="" id="roles" className="score__input" defaultValue={curScore||'default'} required onChange={(e)=>{
          
          handleChange(e.target.value)}}>
            <option value="default"  disabled selected>score</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>


        </select>
      </article>
    </>
  )
}
