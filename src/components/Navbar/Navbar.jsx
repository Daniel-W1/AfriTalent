import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {

  const [active, setActive] = useState(false);
  const [menu, setmenu] = useState(false)

  const current_user = {
    id:1,
    username: "John Doe",
    isSeller: true
  }

  useEffect(() => {
    window.addEventListener("scroll", ()=>{
      console.log(scrollY);
      window.scrollY > 30 ? setActive(true) : setActive(false);
    })
  
    return () => {
      window.removeEventListener("scroll",  ()=>{

        window.scrollY > 30 ? setActive(true) : setActive(false);
      })
    }
  }, [])
  
  return (
    <>
    <div className= {active ? "navbar active" : "navbar"}>
        <div className="container">
            <div className="logo">
              <Link to = "/">
                <span className="text">AfriTalent</span>
                <span className="dot">.</span>
              </Link>
            </div>

            <div className="links">
                <span>Afri Business</span>
                <span>Explore</span>
                <span>English</span>
                {!current_user.isSeller && <span>Show Your Talent</span>}
                {!current_user && <span>Sign in</span>}
                {!current_user && <button>Join</button>}

                {current_user && (
                  <div className="user" onClick={()=> setmenu(!menu)}>
                    <img src="https://img.freepik.com/free-photo/portrait-black-man-isolated_53876-40305.jpg" alt="profile image" />
                    <span>{current_user.username}</span>
                    {menu && <div className="options">
                      {
                        current_user.isSeller && (
                          <>
                          <Link to= '/gigs' className='link'>Gigs</Link>
                          <Link to='/add' className='link'>Add a Gig</Link>
                          </>
                        )
                      }
                        <Link to='/orders' className='link'>Orders</Link>
                        <Link to='messages' className='link'>Messages</Link>
                        <Link to='/' className='link'>Log Out</Link>
                    </div>}
                  </div>
                )}
            </div>
        </div>
          <hr />
        {active && <>
        <div className="menu">
          <span>Graphics & Design</span>
          <span>Digital Marketing</span>
          <span>Writing and Translation</span>
          <span>Video Animation</span>
          <span>Music & Audio</span>
          <span>Programming & Tech</span>
          <span>Business</span>
        </div>  
        </>
        }
        
    </div>
    </>

  )
}

export default Navbar