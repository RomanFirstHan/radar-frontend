import React from 'react'
import { NavLink, Route, Routes, link } from 'react-router-dom'

import CategoryScores from './categoryScores'

const setActive = ({isActive})=> isActive ? 'active-link-score' : 'score__link'

export default function Scores() {
  return (
   <>
   <ul className='header-score__items'>
      <li className='score__item'><NavLink to='Languages' className={setActive}>Languages</NavLink></li>
      <li className='score__item'><NavLink to='Tools' className={setActive}>Tools</NavLink></li>
      <li className='score__item'><NavLink to='Techniques' className={setActive}>Techniques</NavLink></li>
      <li className='score__item'><NavLink to='Platforms' className={setActive}>Platforms</NavLink></li>
      <li className='score__item'><NavLink to='Done' className={setActive}>Done</NavLink></li>
   </ul>
    <Routes>
      <Route path="Languages" element={<CategoryScores category='LANGUAGES' />} />
      <Route path="Tools" element={<CategoryScores category='TOOLS' />} />
      <Route path="Techniques" element={<CategoryScores category='TECHNIQUES' />} />
      <Route path="Platforms" element={<CategoryScores category='PLATFORMS' />} />
      <Route path="Done" element={<CategoryScores category='Done' />} />
    </Routes>
    </>
  )
}
