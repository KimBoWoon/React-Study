/**
 * Created by 보운 on 2016-11-06.
 */

import React, {Component} from 'react';
import Item from './Item'

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <Item selectVideo = {props.selectVideo} key={video.etag} video={video}/>
        );
    });
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
};

export default VideoList;