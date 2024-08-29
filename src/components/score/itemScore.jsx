import {React, useState} from 'react'

export default function ItemScore() {


   const [score, setScore] = useState('')

   const handleChange = (e) => {
    // e.preventDefault()
    console.log(e)
    
    fetch('http://localhost:8080/api/tech/createSolution', {
      'method': 'POST',
      'body': JSON.stringify(),
       'headers': {
        'accept': '*/*',
        'Authorization': '',
        'Content-Type': 'application/json' 
        }
  
    })
      .then(response => response.json())
      .then(result => console.log(result))}



   
  return (
    <>
      <article className='item-score'>
         <div className="item-score__title">JavaScript</div>
         <select name="" id="roles" className="score__input" defaultValue={'default'} required onChange={(e)=>handleChange(e.target.value)}>
            <option value="default" disabled selected>score</option>
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
