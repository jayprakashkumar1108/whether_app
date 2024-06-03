import React, { useState } from 'react';
import Switch from '@mui/material/Switch';

export default function DarkMode() {
    const [darkMode, setDarkMode] = useState(false);

    const handleChange = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <div className="dark-mode-switch">
            <div className="switch-and-label">
                <Switch
                    checked={darkMode}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'dark mode switch' }}
                />
                <p>{darkMode ? 'Dark Mode' : 'Light Mode'}</p>
            </div>
            {/* Apply additional styles dynamically based on dark mode state */}
            <style>{`
                .dark-mode-switch {
                    position: relative;
                    top: 10px;
                    
                    display: flex;
                    align-items: center;
                }
                .searchBox{
                    background-color: ${darkMode ? 'white' : 'white'};
                    border-radius: .5rem;
                }
                .switch-and-label {
                    display: flex;
                    align-items: center;
                    margin-right: 10px;
                }
                .switch-and-label p {
                    margin-left: 5px;
                }
                .card {
                    background-color: ${darkMode ? '#454545' : '#fff'};
                    color: ${darkMode ? '#fff' : '#222'};
                }
                .card-para {
                    color: ${darkMode ? '#fff' : '#222'};
                }
                .searchBox {
                    color: #fff; /* Default color */
                }
                .container {
                    background-color: ${darkMode ? '#222' : '#fff'};
                    color: ${darkMode ? '#fff' : '#222'};
                }
            `}</style>
        </div>
    );
}
