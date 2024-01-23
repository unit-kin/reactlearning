// Contexttry.js
import React, { useContext } from 'react';
import { UserContext } from './MyContext';  // Make sure the import path is correct

const Contexttry = () => {
    const { userName } = useContext(UserContext);
    return (
        <div>Contexttry {userName}</div>
    );
}

export default Contexttry;
