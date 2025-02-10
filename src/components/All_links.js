import React from 'react'
import { Link } from 'react-router-dom'
import './All_links.css'


export default function links() {
  return (
    <div>
        <Link to="/about">Click here to go to about page</Link> <br/> 
        <Link to="/contact">Click here to go to contact page</Link> <br/>
        <Link to="/">Click here to go to home page</Link> <br/>
    </div>
  )
}
