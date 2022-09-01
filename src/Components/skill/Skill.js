import React from 'react'
import Advence from './Advence'
import Basic from './Basic'
import './skill.scss'
const Skill = () => {
  return (
    <section className='skill section' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <span className='section__subtitle'>
        My thechnical level
      </span>
      <div className='skills__container container grid'>
          <Basic />
          <Advence />
      </div>
    </section>
  )
}

export default Skill