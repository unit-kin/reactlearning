import React, { useState } from 'react'
import { UserContext } from './MyContext'
import Contexttry from './Contexttry'

const MyProvider = () => {
    const [userName, setUserName] = useState("Alvin Kang'ara")
    return (
        <UserContext.Provider value={{ userName, setUserName }}>
            <Contexttry />

        </UserContext.Provider>

    )
}

export default MyProvider