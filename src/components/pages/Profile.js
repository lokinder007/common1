import React from 'react'
import Typical from 'react-typical'
import "../stylesheets/profile.css"

const Profile = () => {
    return (
        <div className='profile-container'>
            <div className="profile-parent">

                <div className="profile-details">
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {""}
                            Hello, I'M <span className='highlighted-text'>Lokinder</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {""}
                            <h1>
                                {""}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Ethusiastic Dev 🙂 ",
                                        2000,
                                        "Full Stack Developer 💻",
                                        2000,
                                        "MERN Stack Dev 🖥",
                                        2000,
                                        "Cross Platform Dev 😎",
                                        2000,
                                        "React/React Native Dev ⌨ ",
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Knack of building applications with front & back end operations.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me{""}
                        </button>
                        <a href="lokicv.pdf" download="Lokinder lokicv.pdf">
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background"></div>
                </div>

            </div>
        </div>
    )
}

export default Profile