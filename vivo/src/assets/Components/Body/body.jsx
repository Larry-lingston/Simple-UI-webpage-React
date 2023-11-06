import React from 'react'
import { useState } from 'react'
import './body.css'
import gridIcon1  from '../../images/tgi1.png'
import gridIcon2  from '../../images/tgi3.png'
import gridIcon3  from '../../images/tgi2.png'
import gridIcon4  from '../../images/tgi4.png'
import gridIcon5  from '../../images/tgi5.png'
import gridIcon6  from '../../images/tgi6.png'
import gridIcon7  from '../../images/tgi7.png'
import gridIcon8  from '../../images/tgi8.png'
import gridIcon9  from '../../images/tgi9.png'

const body = () => {
  const [grids,setGrids]=useState([
    {logo:<img src={gridIcon1} alt="" className='imgtg'/> ,titles:'Business Development',id:1},
    {logo:<img src={gridIcon2} alt="" className='imgtg'/> ,titles:'Customer Services',id:2},
    {logo:<img src={gridIcon3} alt="" className='imgtg'/> ,titles:'Design',id:3},
    {logo:<img src={gridIcon4} alt="" className='imgtg'/> ,titles:'Development',id:4},
    {logo:<img src={gridIcon5} alt="" className='imgtg'/> ,titles:'Finance',id:5},
    {logo:'',titles:'',id:6},
    {logo:<img src={gridIcon6} alt="" className='imgtg'/> ,titles:'Human Resources',id:7},
    {logo:<img src={gridIcon7} alt="" className='imgtg'/> ,titles:'Marketing & Communication',id:8},
    {logo:<img src={gridIcon8} alt="" className='imgtg'/> ,titles:'Project Management',id:9},
    {logo:<img src={gridIcon9} alt="" className='imgtg'/> ,titles:'Sales',id:10}
  ]);

  return (
    <div className='body'>
      <div>
      <h2>
        Explore by category
      </h2>
      </div>
      <div class="grid-container">
        {grids.map((grid)=>(
        <div className="box" key={grid.id}>
          <p>{grid.logo}</p>
          <p className='p'>{grid.titles}</p>
        </div>
        ))}
    </div>
    </div>
  )
}

export default body
