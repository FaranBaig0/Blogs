import { useState } from 'react'
import React from 'react'
import "./css/navbar.css"


const navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const [isSearch, setisSearch] = useState(false);
  const [query, setQuery] = useState('');

  const toggleSearch=()=>{
    setisSearch(!isSearch);
  }
  const show=()=>{
  setisOpen(!isOpen)
}
  return (
    <div>
      <nav  className='mybg'>
        <div className="btn">
          <button onClick={show}>

          {isOpen? 
          ((<div className='menu'>✖️ Menu</div>))
          : (<div className='menu'>☰ Menu</div>)}
          </button>
          
          {isOpen && (
            <ol>
            <li>Home</li>
            <li>Menu</li>
            <li>Contact</li>
            </ol>
          )}
        </div>

        <div className="center">
          <h4>FARAN</h4>
        </div>

        <div className="right">
          <button onClick={toggleSearch}>{isSearch? 'Cancel': 'SEARCH 🔍'}</button>
          {isSearch &&(
            <input type="text"
            placeholder='Search'
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            />
          )}
        </div>

      </nav>
    </div>
  )
}

export default navbar
