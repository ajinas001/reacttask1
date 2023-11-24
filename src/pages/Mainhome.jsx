import React from 'react'
import './mainhome.css'

function Mainhome() {
  return (
    <>
      <span style={{ fontFamily: "verdana, geneva, sans-serif" }}>
  <meta charSet="UTF-8" />
  <title>Dashboard | By Code Info</title>
  
  <div className="container22">
    <nav>
      <ul>
        <li>
          <a href="#" className="logo">
            <img src="/logo.jpg" alt="" />
            <span className="nav-item">DashBoard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-home" />
            <span className="nav-item">Home</span>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fas fa-user" />
            <span className="nav-item">Profile</span>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fas fa-wallet" />
            <span className="nav-item">Wallet</span>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fas fa-chart-bar" />
            <span className="nav-item">Analytics</span>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fas fa-tasks" />
            <span className="nav-item">Tasks</span>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fas fa-cog" />
            <span className="nav-item">Settings</span>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fas fa-question-circle" />
            <span className="nav-item">Help</span>
          </a>
        </li>
        <li>
          <a href="" className="logout">
            <i className="fas fa-sign-out-alt" />
            <span className="nav-item">Log out</span>
          </a>
        </li>
      </ul>
    </nav>
    <section className="main">
      <div className="main-top">
        <h1>Skills</h1>
        <i className="fas fa-user-cog" />
      </div>
      <div className="main-skills">
        <div className="card">
          <i className="fas fa-laptop-code" />
          <h3>Web developemt</h3>
          <p>Join Over 1 million Students.</p>
          <button>Get Started</button>
        </div>
        <div className="card">
          <i className="fab fa-wordpress" />
          <h3>WordPress</h3>
          <p>Join Over 3 million Students.</p>
          <button>Get Started</button>
        </div>
        <div className="card">
          <i className="fas fa-palette" />
          <h3>graphic design</h3>
          <p>Join Over 2 million Students.</p>
          <button>Get Started</button>
        </div>
        <div className="card">
          <i className="fab fa-app-store-ios" />
          <h3>IOS dev</h3>
          <p>Join Over 1 million Students.</p>
          <button>Get Started</button>
        </div>
      </div>
      <section className="main-course">
        <h1>My courses</h1>
        <div className="course-box">
          <ul>
            <li className="active">In progress</li>
            <li>explore</li>
            <li>incoming</li>
            <li>finished</li>
          </ul>
          <div className="course">
            <div className="box">
              <h3>HTML</h3>
              <p>80% - progress</p>
              <button>continue</button>
              <i className="fab fa-html5 html" />
            </div>
            <div className="box">
              <h3>CSS</h3>
              <p>50% - progress</p>
              <button>continue</button>
              <i className="fab fa-css3-alt css" />
            </div>
            <div className="box">
              <h3>JavaScript</h3>
              <p>30% - progress</p>
              <button>continue</button>
              <i className="fab fa-js-square js" />
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</span>

    </>
  )
}

export default Mainhome
