import React from 'react'
import './content.css'
import gym from '../../assets/dumbbell.png';
import wgt from '../../assets/weight.png';
import trdmil from '../../assets/treadmill.png';

function Content() {
  return (
    <div className="programs">
      <container >
        <h1 style={{color: 'white', marginTop: '40px',textAlign:"center"}}>CHOOSE <span style={{color: ' #1de74f',}}>PROGRAMS</span></h1>
        <hr />
        <p style={{textAlign: 'center',color: 'white',marginTop: '30px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odio eius cupiditate est distinctio fugit libero iure repellendus aliquam error.<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, tempore.</p>
      </container>

      <container className="container2">
        <div className="card">
        <img src={gym} alt="" />
        <h1>Proffesponal training plan</h1>
        <p className="lorem1"> Lorem ipsum dolor sit amet, consectetur  elit,<br/> sed do eiusmod tempor incididunt ut dolore facilisis.</p>
        </div>

        <div className="card">
        <img src={wgt} alt="" />
        <h1>Unique to your needs</h1>
        <p className="lorem1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut dolore facilisis.</p>
        </div>


        <div className="card">
        <img src={trdmil} alt="" />
        <h1>Modern equipment</h1>
        <p className="lorem1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut dolore facilisis.</p>
        </div>

      </container>
    </div>
  )
}

export default Content
