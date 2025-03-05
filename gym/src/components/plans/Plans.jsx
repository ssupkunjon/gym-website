import React from 'react'
import './Plans.css'

function Plans() {
  return (
    <div className="plan">
      <container >
        <p id='our'>OUR SERVICES</p>
        <h1 id='choose'>
            CHOOSE YOUR PRICING PLAN
        </h1>
        <div className="box">
        <div className="price">
            <p className="title">CLASS DROP-IN</p>
            <h1 className="plan-price">$ 39.0</h1>
            <div className="featurs">
            <p>single class</p>
            <p>free riding</p>
            <p>unlimited equipment</p>
            <p>personal trainer</p>
            <p>month to mouth</p>
            <p>no time restriction</p>
            <button className='enroll'>ENROLL NOE</button>
            </div>
        </div>

        <div className="price">
            <p className="title">12 MONTH UNLIMITED </p>
            <h1 className="plan-price">$ 99.0</h1>
            <div className="featurs">
            <p>single class</p>
            <p>free riding</p>
            <p>unlimited equipment</p>
            <p>personal trainer</p>
            <p>month to mouth</p>
            <p>no time restriction</p>
            <button className='enroll'>ENROLL NOE</button>
            </div>
        </div>

        <div className="price">
            <p className="title">6 MONTH UNLIMITED</p>
            <h1 className="plan-price">$ 59.0</h1>
            <div className="featurs">
            <p>single class</p>
            <p>free riding</p>
            <p>unlimited equipment</p>
            <p>personal trainer</p>
            <p>month to mouth</p>
            <p>no time restriction</p>
            <button className='enroll'>ENROLL NOE</button>

            </div>
        </div>
        </div>
      </container>

    </div>
  )
}

export default Plans


