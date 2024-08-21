import React, { useEffect } from 'react'
import { radar_visualization } from '../utils/utils';
import data from '../components/Radar/config.json'
import * as d3 from 'd3';

export function Radar() {
console.log('rerender')
  useEffect(() => {
    setTimeout(() => {
      radar_visualization({
        repo_url: "https://t1.ru/",
        title: "Технический радар T1",
        date: data.date,
        quadrants: [
          { name: "Languages" },
          { name: "Tools" },
          { name: "Techniques" },
          { name: "Platforms" },
        ],
        rings: [
          { name: "ADOPT", color: "#8eff59" },
          { name: "TRIAL", color: "#abe52f" },
          { name: "ASSESS", color: "#f6c033" },
          { name: "HOLD", color: "#ff5b69" },
        ],
        entries: data.entries,
      }, d3);
    }, 0)
      
    
    }, [])

  return (
    <>
    <section className='container radar'>
    <svg id="radar" />

    <h1>Radar</h1>
    </section>
    </>
  )
}
