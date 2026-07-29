import './App.css';
import neps from './assets/neps.png';

function Profile() {
    return (
        <div className="body">
            <div className="profile">
                <div>
                    <h2>Engineering Undergrad</h2>
                    <h1>Cindy Pei</h1>
                </div>
                <div>
                    <img id="nepslogo" loading="lazy" src={neps} alt=""></img>
                </div>
            </div>
            <div className="stats">
                <div>
                    <h3>Stats</h3>
                </div>
                <ul>
                    <li>Arduino</li>
                    <li>AutoCADing</li>
                    <li>Programming</li>
                    <li>MS Suite</li>
                </ul>
            </div>
            <div className="stats">
                <div>
                    <h3>Contacts</h3>
                </div>
                <ul>
                    <li><a href="https://www.linkedin.com/in/cindy-pei-74a796277/" target="_blank" rel="noreferrer">Linkedin</a></li>
                    <li><a href="mailto:cindypei96@gmail.com" target="_blank" rel="noreferrer">Gmail</a></li>
                    <li>EMPTY</li>
                    <li>EMPTY</li>
                </ul>
            </div>
        </div>
    );
}
export default Profile;