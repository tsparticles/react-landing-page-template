import React from 'react';
import Particles from "react-tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab);

function App() {
    return (
        <div className="App">
            <Particles options={particlesOptions}/>
            <div className="flex-container">
                <div className="row">
                    <h1 className="flex-item">Hello, I'm Matteo Bruni</h1>
                    <h2 className="flex-item">I'm a Full Stack Developer!</h2>
                    <div className="social">
                        <a href="https://github.com/matteobruni/tsparticles">
                            <FontAwesomeIcon icon={[ "fab", "github" ]} size="2x"/>
                        </a>
                        <a href="https://github.com/matteobruni/tsparticles">
                            <FontAwesomeIcon icon={[ "fab", "facebook" ]} size="2x"/>
                        </a>
                        <a href="https://github.com/matteobruni/tsparticles">
                            <FontAwesomeIcon icon={[ "fab", "twitter" ]} size="2x"/>
                        </a>
                        <a href="https://github.com/matteobruni/tsparticles">
                            <FontAwesomeIcon icon={[ "fab", "linkedin-in" ]} size="2x"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
