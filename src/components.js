import React, { useState, useEffect } from 'react';


function Navbar() {

    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>Projects</li>
            </ul>
        </nav>
    );
}

export default function TabTitle() {

    const [ title, setTitle ] = useState('React App');

    useEffect(() => {
        document.title = title;
    })

    const handleChange = ({target}) => {
        const typedInput = target.value;
        setTitle(typedInput);
    }

    return (
        <>
            <p>Type to change tab title</p>
            <input onChange={handleChange} value={title} type="text" />
        </>
    )
}
