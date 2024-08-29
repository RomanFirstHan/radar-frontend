import React, { useEffect } from 'react'
import { radar_visualization } from '../utils/utils';
import data from '../components/Radar/config.json'
import * as d3 from 'd3';
import { useAuth } from '../components/hook/useAuth';




export function Radar() {

  const token = `Bearer ${useAuth().token}`
  console.log(token)

  useEffect(() => {
    fetch('http://localhost:8080/api/tech/getAllSolutions', {
      'method': 'GET',
      'headers': {
        'accept': '*/*',
        'Authorization': token,
        'Content-Type': 'application/json' 
      }
    })
    .then(response => response.json())
    // .then(console.log(123))
    .then(res => {

      console.log(res.entries.filter(sol=>sol.ring!=4))
      // debugger
        radar_visualization({
          repo_url: "https://t1.ru/",
          title: "Технический радар T1",
          // date: data.date,
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
          entries: res.entries.filter(sol=>sol.ring!=4),
        }, d3);
      
    })
    .catch(()=>radar_visualization({
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
      entries: {
        "entries": []},
    }, d3))
    // .catch(err => console.log(err))
    // .then(setTimeout((res) => {
    //   radar_visualization({
    //     repo_url: "https://t1.ru/",
    //     title: "Технический радар T1",
    //     date: data.date,
    //     quadrants: [
    //       { name: "Languages" },
    //       { name: "Tools" },
    //       { name: "Techniques" },
    //       { name: "Platforms" },
    //     ],
    //     rings: [
    //       { name: "ADOPT", color: "#8eff59" },
    //       { name: "TRIAL", color: "#abe52f" },
    //       { name: "ASSESS", color: "#f6c033" },
    //       { name: "HOLD", color: "#ff5b69" },
    //     ],
    //     entries: res.entries,
    //   }, d3);
    // })
    // , 0)
      
    
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
