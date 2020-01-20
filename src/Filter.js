import React from 'react'

export default function Filter() {
  return (
    <>
      <label for="region-select">Select a region: </label>

      <select name="region" id="region-select">
        <option value="">--Please choose an option--</option>
        <option value="kanto">Kanto</option>
        <option value="johto">Johto</option>
        <option value="hoenn">Hoenn</option>
        <option value="sinnoh">Sinnoh</option>
      </select>
    </>
  )
}
