import {React, useState} from 'react'
import { useAuth } from '../../hook/useAuth'
import Modal from '../../modal/Modal'




export default function Technology({techname, id, handleUpdate}) {

  const [modalActive, setModalActive]=useState(false)

  const token = `Bearer ${useAuth().token}`
  

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   fetch('http://localhost:8080/api/tech/delete/'+id, {
  //     'method': 'DELETE',
  //      'headers': {
  //       'accept': '*/*',
  //       'Authorization': token,
  //       'Content-Type': 'application/json' 
  //       }
  
  //   })
  //     // .then(response => response.json())
  //     .then(()=>handleUpdate())
  //     .then(result => console.log(result))
      
  //     // .then(result => setAnswer(result))
  //     .catch(err => console.log(err))
  // }
  

  return (
    <>
    <li className='tech__item'>
      <article className='tech__title'>
         {techname}
      </article>
      <button type='submit' className='button__trash' onClick={()=>setModalActive(true)}>
      <svg svg fill="#000000" width="30px" height="30px" viewBox="0 0 400 400" id="Trash" version="1.1" >
          <g id="XMLID_10_">
            <polygon id="XMLID_11_" points="213.3,26.7 240,26.7 240,0 213.3,0 186.7,0 160,0 160,26.7 186.7,26.7  "/>
            <polygon id="XMLID_58_" points="80,80 106.7,80 133.3,80 160,80 186.7,80 213.3,80 240,80 266.7,80 293.3,80 320,80 346.7,80    373.3,80 373.3,53.3 346.7,53.3 320,53.3 293.3,53.3 266.7,53.3 266.7,26.7 240,26.7 240,53.3 213.3,53.3 186.7,53.3 160,53.3    160,26.7 133.3,26.7 133.3,53.3 106.7,53.3 80,53.3 53.3,53.3 26.7,53.3 26.7,80 53.3,80  "/>
            <polygon id="XMLID_59_" points="373.3,80 373.3,106.7 346.7,106.7 320,106.7 293.3,106.7 266.7,106.7 240,106.7 213.3,106.7    186.7,106.7 160,106.7 133.3,106.7 106.7,106.7 80,106.7 53.3,106.7 26.7,106.7 26.7,80 0,80 0,106.7 0,133.3 26.7,133.3    53.3,133.3 80,133.3 106.7,133.3 133.3,133.3 160,133.3 186.7,133.3 213.3,133.3 240,133.3 266.7,133.3 293.3,133.3 320,133.3    346.7,133.3 373.3,133.3 400,133.3 400,106.7 400,80  "/>
            <polygon id="XMLID_93_" points="53.3,240 53.3,213.3 53.3,186.7 53.3,160 26.7,160 26.7,186.7 26.7,213.3 26.7,240 26.7,266.7    26.7,293.3 53.3,293.3 53.3,266.7  "/>
            <polygon id="XMLID_94_" points="346.7,186.7 346.7,213.3 346.7,240 346.7,266.7 346.7,293.3 373.3,293.3 373.3,266.7 373.3,240    373.3,213.3 373.3,186.7 373.3,160 346.7,160  "/>
            <polygon id="XMLID_95_" points="133.3,293.3 133.3,266.7 133.3,240 133.3,213.3 133.3,186.7 133.3,160 106.7,160 106.7,186.7    106.7,213.3 106.7,240 106.7,266.7 106.7,293.3 106.7,320 133.3,320  "/>
            <polygon id="XMLID_96_" points="293.3,293.3 293.3,266.7 293.3,240 293.3,213.3 293.3,186.7 293.3,160 266.7,160 266.7,186.7    266.7,213.3 266.7,240 266.7,266.7 266.7,293.3 266.7,320 293.3,320  "/>
            <polygon id="XMLID_97_" points="80,320 80,293.3 53.3,293.3 53.3,320 53.3,346.7 53.3,373.3 80,373.3 80,346.7  "/>
            <polygon id="XMLID_98_" points="213.3,320 213.3,293.3 213.3,266.7 213.3,240 213.3,213.3 213.3,186.7 213.3,160 186.7,160    186.7,186.7 186.7,213.3 186.7,240 186.7,266.7 186.7,293.3 186.7,320 186.7,346.7 213.3,346.7  "/>
            <polygon id="XMLID_99_" points="320,320 320,346.7 320,373.3 346.7,373.3 346.7,346.7 346.7,320 346.7,293.3 320,293.3  "/>
            <polygon id="XMLID_100_" points="266.7,373.3 240,373.3 213.3,373.3 186.7,373.3 160,373.3 133.3,373.3 106.7,373.3 80,373.3    80,400 106.7,400 133.3,400 160,400 186.7,400 213.3,400 240,400 266.7,400 293.3,400 320,400 320,373.3 293.3,373.3  "/>
            </g>
      </svg>
      </button>
    </li>
    <Modal active={modalActive}  setActive={setModalActive} id={id} handleUpdate={handleUpdate}/><Modal/>
    </>
  )
}
