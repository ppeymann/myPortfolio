import React, { useState } from 'react'
import './qualification.scss'

const Qualification = () => {
    const [ toggle , setToggle ] = useState(1)

    const toggleTab = (index) =>{
        setToggle(index)
    }

  return (
    <section className='qualification section' id='Qualification'>
        <h2 className='section__title'>
            Qualification
        </h2>
        <span className='section__subtitle'>My personal journey</span>
        <div className='qualification__container container'>
            <div className='qualification__tabs'>
                <div onClick={()=>toggleTab(1)} className={toggle === 1 ? "qualification__button qualification__active button--flex":"qualification__button button--flex"}>
                    <i className='uil uil-graduation-cap  qualification__icon'></i>{' '}
                    Education
                </div>
                <div onClick={()=>toggleTab(2)} className={toggle === 2 ? "qualification__button qualification__active button--flex":"qualification__button button--flex"}>
                    <i className='uil uil-laptop qualification__icon'></i>{' '}
                    Experience
                </div>
            </div>
            <div className='qualification__sections'>
               <div className={toggle===1?'qualification__content qualification__content-active':'qualification__content'}>
                    <div className='qualification__data'>
                      <div>
                        <h3 className='qualification__title'>C++</h3>
                        <span className='qualification__subtitle'>
                        in University </span>
                        <div className='qualification__calendar'>
                            <i className='uil uil-calendar-alt'></i>
                            2017-2018
                        </div>
                      </div>
                      <div>
                          <span className='qualification__rounder'>

                          </span>
                          <span className='qualification__line'></span>
                      </div>
                    </div>
                    <div className='qualification__data'>
                        <div></div>

                      <div>
                          <span className='qualification__rounder'>

                          </span>
                          <span className='qualification__line'></span>
                      </div>
                      <div>
                        <h3 className='qualification__title'>Lazer & Optic</h3>
                        <span className='qualification__subtitle'>
                        Kermanshah university of technology </span>
                        <div className='qualification__calender'>
                            <i className='uil uil-calendar-alt'></i>
                            2016 - 2021
                        </div>
                      </div>
                    </div>

               </div>
               <div className={toggle===2?'qualification__content qualification__content-active':'qualification__content'}>
               <div className='qualification__data'>
                      <div>
                        <h3 className='qualification__title'>Front-End<br/>(React)</h3>
                        <span className='qualification__subtitle'>
                        Self-Study </span>
                        <div className='qualification__calendar'>
                            <i className='uil uil-calendar-alt'></i>
                            2021-present
                        </div>
                      </div>
                      <div>
                          <span className='qualification__rounder'>

                          </span>
                          <span className='qualification__line'></span>
                      </div>
                    </div>
               </div>
            </div>
        </div>

    </section>
  )
}

export default Qualification