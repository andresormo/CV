import React, { useState } from 'react'
import "./Work.css";
import Education from './Education'
import Experience from './Experience'


const Work = ({ experience, education }) => {
    const [showWork, setShowWork] = useState(true)

    return (
        <div className='work'>
            <div className='buttons'>
                <button
                    className='custom-btn btn-4'
                    onClick={() => setShowWork(true)}
                >Education</button>

                <button
                    className='custom-btn btn-4'
                    onClick={() => setShowWork(false)}
                >Experience</button>
            </div>

            <div>
                {showWork ? (
                    <Education education={education} />
                ) : (

                    <Experience experience={experience} />
                )}
            </div>
        </div>
    )
}

export default Work
