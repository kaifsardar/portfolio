import React from 'react'

const Education = () => {
  return (
    <div className='education-section'>

        <h2>Education</h2>

        <div className='education-card-container'>

        <div className='institution present'>

                <p className='year'>2021 - Present</p>
                <p className='institute-name'>Jadavpur University</p>
                <p className='course'>BE , Computer Science and Engineering </p>
        </div>
        <div className='institution'>

                <p className='year'>2018 - 2020</p>
                <p className='institute-name'>The Park Institution, Kolkata</p>
                <p className='course'>10+2 Science (Physics, Chemistry, Maths)<span className='grade'>94%</span></p>
        </div>
        <div className='institution'>

                <p className='year'>2016 - 2018</p>
                <p className='institute-name'>Al Ameem Mission</p>
                <p className='course'>WBBSE , 10th Level <span className='grade'>92.4%</span></p>
        </div>
        </div>

    </div>
  )
}

export default Education