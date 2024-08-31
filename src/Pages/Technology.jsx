// import React from 'react'
import CreateTech from '../components/Tech/CreateTech'


export function Technology() {

  const tech = <CreateTech />

  return (
    <>
      <section className='container'>
        <div className='tech-form'>{tech}</div>
        
      </section>
    </>
  )
}
