import React from 'react';
import './More.css';

const More = ({ languages, habilities, volunteer }) => {
  return (
    <div className='container'>
      <div className='card card--more'>
        <h4 className='title'>Languages</h4>
        <p>{languages.language}</p>
        <p>Writing: {languages.wrlevel}</p>
        <p>Speaking: {languages.splevel}</p>
      </div>
      <div className='card card--more'>
        <h4 className='title'>Skills</h4>
        {habilities.map((item) => {
          return <p>{item}</p>
        })}
      </div>
      <div className='card card--more'>
        <h4 className='title'>Volunteer</h4>
        {volunteer.map((item) => {
          return (
            <div>
              <p>{item.name}</p>
              <p>{item.where}</p>
              <p>{item.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default More

