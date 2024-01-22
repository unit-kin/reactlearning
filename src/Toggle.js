import React, { useState } from 'react'

const Toggle = () => {
    const [toggle, setToggle] = useState('toggle')

    const handleToggleon = () => {
        if (toggle === 'On') {
            alert('Already on')
        } else {
            setToggle('On')
        }

    }

    const handleToggleoff = () => {
        setToggle('off')
    }
    return (
        <>
            <div>Toggle</div>

            <button onClick={handleToggleon}>On</button>
            <span>{toggle}</span>
            <button onClick={handleToggleoff}>Off</button>
        </>

    )
}

export default Toggle