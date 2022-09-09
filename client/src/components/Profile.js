import React from 'react'


function Profile() {
    
    const token = localStorage.getItem("token")
  return (
    <div>{token.email}</div>
  )
}

export default Profile