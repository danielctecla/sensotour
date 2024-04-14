import React, { useState, useRef } from 'react'
import Slider from 'react-slick'

function VideoCarousel({ videos }) {
  const [muted, setMuted] = useState(true)
  const videoRefs = useRef(videos.map(() => React.createRef()))

  // Cambiar el estado de silencio de todos los videos
  const toggleMute = () => {
    setMuted(!muted)
    videoRefs.current.forEach((ref) => {
      if (ref.current) {
        ref.current.muted = muted
      }
    })
  }

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
  }

  return (
    <div className="video-carousel">
      <button
        onClick={toggleMute}
        className="unmute-button bg-white text-black px-4 py-1 rounded-2 my-4 font-semibold"
      >
        {muted ? 'Sonido' : 'Silenciar'}
      </button>
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div className="flex justify-center">
            <div key={index}>
              <video
                ref={videoRefs.current[index]}
                autoPlay
                loop
                muted={muted}
                className="h-auto w-auto"
              >
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default VideoCarousel
