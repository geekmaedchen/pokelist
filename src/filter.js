import React from 'react'


export default function filter() {
  return (
      <div>
          <form name='regions'>
          <label for="region-select">Choose a region:</label>

            <select onChange={showNext} name="region" id="region-select">
                <option value="">--Please choose an option--</option>
                <option value="kanto">Kanto</option>
                <option value="johto">Johto</option>
                <option value="hoenn">Hoenn</option>
                <option value="sinnoh">Sinnoh</option>
                <option value="unova">Unova</option>
                <option value="galar">Galar</option>
            </select>
        </form>
      </div>
  )
  function showNext() {
      if (document.regions.region.options[0].selected === true) {
          console.log('No region')
          return
      }
      /* Rausfinden wie man nun den selected.value auslesen kann */
      console.log(document.regions.region.options)
  }
}