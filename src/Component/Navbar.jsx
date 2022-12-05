import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
export default function Navbar() {
  const count = useSelector((state)=>state.count)
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">Reduxapp</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-light active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a type="button" className="nav-link text-light position-relative">
                <span className="material-symbols-outlined">
                  shopping_cart
                </span>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                 {count}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </a>

            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}
