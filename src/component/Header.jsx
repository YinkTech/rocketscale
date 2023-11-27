import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="logo text-lg font-bold">
        Rocket Scale
      </div>
      <nav>
        <ul className=' nav-list flex'>
          <li>Service</li>
          <li>industris</li>
          <li>work</li>
          <li>company</li>
          <li><i className='bi bi-emoji-heart-eyes'></i></li>
        </ul>
      </nav>

      <div className=''>book intro call</div>
    </div>
  )
}

export default Header