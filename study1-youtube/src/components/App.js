import React, {Component} from 'react';
import SearchBar from './SearchBar';
import videoSearch from 'youtube-api-search';
import _ from 'lodash'
import VideoList from './VideoList'
import Video from './Video'

const API_KEY = 'AIzaSyBjYDuf9VN9bx2E0RYFyATR_Y8UJY9vyqY';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectVideo: null
        };

        this.insertVideos('망가녀')
    }

    insertVideos(text) {
        videoSearch({ key : API_KEY , term : text}, (crap) => {
            console.log(crap);
            this.setState({
                videos : crap,
                selectVideo: crap[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((text) => {this.insertVideos(text)}, 300);

        return (
            <div className="App">
                <SearchBar insertVideos={videoSearch}/>
                <Video video={this.state.selectVideo}/>
                <VideoList selectVideo={selectVideo => this.setState({selectVideo: selectVideo})} videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;
