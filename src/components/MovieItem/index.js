// Write your code here

import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <Popup
      modal
      trigger={
        <div className="movie-thumbnail">
          <img className="thumbnail-img" src={thumbnailUrl} alt="thumbnail" />
        </div>
      }
    >
      {close => (
        <div className="player-popup">
          <button
            type="button"
            className="close-btn"
            data-testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose />
          </button>
          <div className="player-container">
            <ReactPlayer
              url={videoUrl}
              controls="true"
              width={550}
              height={300}
            />
          </div>
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
