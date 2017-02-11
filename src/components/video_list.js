import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return <VideoListItem 
			onVideoSelect={props.onVideoSelect}
			key={video.etag} 
			video={video} />
	});

	// react is smart and will auto render the array
	// given id, react will just edit that single list element!
	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
};

// if this fn was a class component, we access parent props by
// this.props


export default VideoList;