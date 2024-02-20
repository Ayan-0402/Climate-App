import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-[10vh] bg-blue-300 flex justify-center items-center'>
        <Link className='h-[6vh] p-2 bg-purple-400 rounded-xl hover:bg-yellow-300 hover:text-white' to='/' >Weather</Link>
    </div>
  )
}

export default Navbar