import React from 'react'
import styled from 'styled-components'
import friendsData from './friends.json'

export default function Overview() {
  return (
    <div>
      <h2>Hello User!</h2>
      <p>Your friends need these pokemon:</p>
      {friendsData.allWantedIds.map(id => (
        <div>{id}</div>
      ))}
      <div>
        {friendsData.allWantedIds
          .map(id => friendsData.allWanted[id] || [])
          .map(friends => (
            <div>{friends.join(', ')}</div>
          ))}
      </div>
    </div>
  )
}
