import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {

    return (
        <div className='nav'>
            <h1 className='nav-title'><Link to='/'>Parent Helper</Link></h1>
            {/* <h2><Link to='/topics'>Topics</Link></h2> */}
        </div>
    )
}

export default Nav