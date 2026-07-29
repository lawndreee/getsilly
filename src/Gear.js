import './App.css';
import React, { useState } from 'react'
import siteboat from './assets/siteclick.png'
import nhlboat from './assets/nhlclick.png'
import turnerboat from './assets/turnerclick.png'





function Gear() {
    const [activeDiv, setActiveDiv] = useState('div');

    return (
        <>
            <div class="body">
                <div className="profile">
                <h1>Projects</h1>
                </div>
                <div id="site" style={{display: activeDiv === 'site' ? 'block' : 'none'}}><h2>This Website</h2><p>
                    Really fun personal project where I got to combine coding with cool art stuff! I was inspired by ZZZ's character selection menu for the layout of this site.
                    <br />All graphics were made using Affinity, and the site is built with React.js using HTML & CSS
                    <br />*In Progress* Creating a 3D character model using Blender to add to the video game vibe
                    <br /><br />
                    Applications Used:<br />
                    Blender<br />
                    React.js<br />
                    Affinity
                </p></div>
                <div id="nhl" style={{display: activeDiv === 'nhl' ? 'block' : 'none'}}><h2>NHL Arduino Display</h2>
                    <p>
                        *In progress* Creating a live score display for me so I can 'tune' into games when I'm busy OR watching another team's game atm!
                        <br />Additionally going to add a feature to look at the game schedules of teams
                       <br /><br /> Applications Used:
                        <br />Arduino
                        <br />Rest API</p>
                </div>
                <div id="turner" style={{display: activeDiv === 'turner' ? 'block' : 'none'}}><h2>Automated Page Turner</h2>
                    <p>
                        1st year project where I made a automated page turner for a client with some of my peers.
                        <br />Circuitry and coding were done by me, and we CADed some custom 3D parts.
                        <br /><br />
                        Applications Used:
                        <br />Autodesk Inventor Professional
                       <br /> Arduino
                    </p></div>
            </div>
            <div class="gears">
            <img src={siteboat} style={{filter: activeDiv === 'site' ? 'brightness(55%)' : 'none'}} onClick={() => setActiveDiv('site')}></img>
            <img src={nhlboat} style={{filter: activeDiv === 'nhl' ? 'brightness(55%)' : 'none'}} onClick={() => setActiveDiv('nhl')}></img>
            <img src={turnerboat} style={{filter: activeDiv === 'turner' ? 'brightness(55%)' : 'none'}} onClick={() => setActiveDiv('turner')}></img>
            </div>
        </>
    );
}

export default Gear;