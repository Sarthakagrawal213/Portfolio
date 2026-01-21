import React from 'react'
import Macwindow from './Macwindow'
import "./spotify.scss"
const Spotify = () => {
  return (
    <Macwindow>
      <div id="spot">
        <iframe
  data-testid="embed-iframe"
  style={{ borderRadius: "12px" }}  // ✅ React style object
  src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"
  width="100%"
  height="352"
  frameBorder="0"
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  allowFullScreen      // ✅ React camelCase
  loading="lazy"
/>

      </div>
    </Macwindow>
  )
}

export default Spotify

