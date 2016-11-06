/**
 * Created by 보운 on 2016-11-06.
 */

import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: ''
        };
    }

    inputBoxChange(text) {
        this.setState({
            inputText: text
        });
        this.props.insertVideos(text)
    }

    render() {
        return (
            <div className="searchBar">
                <input className="inputText" value={this.state.inputText} onChange={(event) => {this.inputBoxChange(event.target.value)}}/>
            </div>
        );
    }
}

export default SearchBar