/**
 * Created by 보운 on 2016-11-06.
 */

import React from 'react'

const Item = ({video, selectVideo}) => {
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => selectVideo(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default Item