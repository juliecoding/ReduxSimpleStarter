import React from 'react';
import VideoListItem from './video_list_item'

const VideoList = props => {
  const videoItems = props.videos.map(video => <VideoListItem video={video} key={video.etag} />)    //Functional components can use straight props; class-based components need this.props

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
}

export default VideoList

