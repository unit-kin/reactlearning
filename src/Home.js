import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>Home

            <Link to="/toggle">Toggle</Link>
            <Link to="/TodoApp">TodoApp</Link>


        </div>
    )
}

export default Home;