import React, { useState } from 'react'

const App = (props) => {
  const [hue, setHue] = useState(Math.round(Math.random() * 360))
  const [saturation, setSaturation] = useState(Math.round(Math.random() * 100))
  const [light, setLight] = useState(Math.round(Math.random() * 100))
  const [random, setRandom] = useState(Math.round(Math.random() * 256))

  const randomHue = (e) => {
    const hue = e.target.value
    setHue(hue)
  }
  const randomSaturation = (e) => {
    const saturation = e.target.value
    setSaturation(saturation)
  }
  const randomLight = (e) => {
    const light = e.target.value
    setLight(light)
  }
  const newColor = `hsl(${hue}, ${saturation}%, ${light}%)`
  console.log(newColor)

  const randomColor = (e) => {
    console.log('button clicked')
    setRandom(random)
  }

  return (
    <>
      <section class="slidecontainer" style={{ backgroundColor: newColor }}>
        <ul>
          <li class="hue">
            <input
              type="range"
              min="1"
              max="360"
              onChange={randomHue}
              value={hue}
              class="slider"
            />
          </li>

          <li class="saturation">
            <input
              type="range"
              min="1"
              max="100"
              onChange={randomSaturation}
              value={saturation}
              class="slider"
            />
          </li>
          <li class="light">
            <input
              type="range"
              min="1"
              max="100"
              onChange={randomLight}
              value={light}
              class="slider"
            />
          </li>
          <button onClick={randomColor}>Random Color</button>
        </ul>
      </section>
    </>
  )
}
export default App
