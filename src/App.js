import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, useNavigate, Outlet, Link } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import './App.css';
import Gear from './Gear';
import Profile from './Main';

import back from './assets/back.png';
import yuli from './assets/yuli.png';
import boat from './assets/boat.png';
import anchor from './assets/anchor.png';
import compass from './assets/compass.png';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

function App() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route path="/" element={<Header />}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/gear" element={<Gear />} />
            </Route>
        </Routes>
    );
}

function LandingPage() {
    const navigate = useNavigate();
    const [isExiting, setIsExiting] = useState(false);
    const yayStart = () => {
        setIsExiting(true);
        setTimeout(() => {
            navigate('/profile');
  }, 480);
    };


    return (
        <div class={`landing ${isExiting ? 'out' : ''}`}>
            <button type="button" class="landingbut" onClick={yayStart} id="exitb">Choose Character</button>
            <img id="yuli" src={yuli}></img>
            <img id="boat" src={boat}></img>
            <img id="comp" src={compass}></img>
            <img id="anchor" src={anchor}></img>
        </div>
    );
}

function Header() {
    return (
        <>
        <header>
            <Link to="/"><img id="back" src={back}></img></Link>
        </header>
            <div>
                <Outlet />
            </div>
            <footer>
                <nav>
                    <NavLink id="prof" to="/profile" end>Profile</NavLink>
                    <NavLink id="gear" to="/gear" end>Gear</NavLink>
                </nav>
                <p>
                    UI Inspiration and logos from Zenless Zone Zero <br></br>
                    © All rights reserved by miHoYo
                </p>
            </footer>
        </>
    );
}

export default App;
