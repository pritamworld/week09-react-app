import React from 'react'

export default function college({collegeDetails}) {
  return (
    <div>
        <h1>College Information</h1>
        <h2>Name: {collegeDetails.name}</h2>
        <h2>Location: {collegeDetails.location}</h2>
        <h2>Established: {collegeDetails.established}</h2>
    </div>
  )
}
