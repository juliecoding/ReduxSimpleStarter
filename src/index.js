// Go find the library 'react' and assign it to the variable 'React' (and same
// for 'ReactDOM')
import _ from 'lodash'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list.js'
import VideoDetail from './components/video_detail.js'

import SearchBar from './components/search_bar.js' //Path from index.js

const API_KEY = 'AIzaSyDzciiMEOnMGNLXnjE-VffO8c4eSjvNJN0'

//Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('mountain climbing')
  }

  videoSearch(term) {
    YTSearch({
      key: API_KEY,
      term: term
    }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300, { trailing: true })
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos} /> {/* Video is a prop */}
      </div>
    )
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
// Insert an instance of the component (first arg), then put it in a valid HTML
// spot (the second argument) STATE: state is a plain javascript object that is
// used to record and react to user events. When a component's state is changed,
// that component and its children are re-rendered. Before we use state inside
// of a component, we must initialize the state object. We initialize state, we
// set the property state to a plain Javascript object inside of the class's
// constructor method. DOWNWARDS DATAFLOW: Only the most parent (top-level)
// component should be responsible for fetching data that then gets passed to
// children. Boom.

ReactDOM.render(< App />, document.querySelector('.container'))
