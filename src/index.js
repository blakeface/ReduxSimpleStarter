import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBpQc5Ijd1bXG0nmIPVn-0qcKYwkl7Hqtk';

// Create new components that create HTML
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      SelectedVideo: null,
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({
        videos: videos,
        SelectedVideo: videos[0],
      });
    });
  }
  render(){
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.SelectedVideo}/>
        <VideoList
          onVideoSelect = { SelectedVideo => this.setState({SelectedVideo}) }
          videos = {this.state.videos} />
      </div>
    );
  }
}

// places HTML in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
