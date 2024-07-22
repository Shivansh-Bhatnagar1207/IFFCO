import React from 'react'
import { Link } from 'react-router-dom'
export default function Welcome() {
  return (
    <div>
      Welcome to the Portal

      <ul><li><Link to={'/dashboard'}>Dashboard</Link></li></ul>
    </div>
  )
}
