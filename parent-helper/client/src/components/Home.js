import React from 'react'
import { Link } from 'react-router-dom'
import jjByrne from '../images/jj-byrne-pg.jpg'


const Home = () => {

    return (
        <div className='home'>
            <h2><Link to='/topics'>Browse Topics</Link></h2>
            <h2><Link to='/new-post'>Create Post</Link></h2>
            <img src={jjByrne} alt='jj-byrne-pg' />
        </div>
    )







}

export default Home