import React from 'react'
import { deletes } from '../api/MainApi'
import { useAuth } from '../hook/useAuth'

export default function Modal({active, setActive, id, handleUpdate}) {

   const token = `Bearer ${useAuth().token}`

   const handleSubmit = ()=> {
      deletes(token, id, handleUpdate)
      setActive(false)

   }

  return (
    <div className={active ? "modal active" : "modal"} onClick={()=>setActive(false)}>
      <div className="modal__content" onClick={e=>e.stopPropagation()}>
         <button className='cancel' onClick={()=>setActive(false)}>Отмена</button>
         <div className="modal__title">Удалить технологию?</div>
         <button className='button button__center' onClick={handleSubmit}>Удалить</button>
         
      </div>
    </div>
  )
}
