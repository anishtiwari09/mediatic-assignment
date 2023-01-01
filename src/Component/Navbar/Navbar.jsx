import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./navbar.module.css"
export default function Navbar() {
  return (
    <div className={styles.container}>
      <div >
        <Link to="/">Home</Link>
      </div>
    
    </div>
  )
}