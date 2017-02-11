import _ from 'lodash';
import React, { Component } from 'react'; //assigns react library to React. Creates and manages elements
import ReactDOM from 'react-dom'; //separate lib that takes care of rendering
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBAwPDX8ZxMaW9N8Ln9qdXN9aoiUHBtk6w'; // for youtube

// save the results of search to a state

// 1. Create a component/view. This should create some HTML
// ES6 function declaration
class App extends Component { 		// this is a type of component, a class. not an instance
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};   // default instantiation
		this.videoSearch('surfboards');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});  // shortcut ES6 if keyName == variableName then: videos : videos
		});
	}

	render() {
		// good way to throttle user input
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300); // gets inner function with a delay (in 2nd param)

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
				// Messy. Declaring a fn, called 2 levels down, changes at state at this level.
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div> 		// jsx. this gets compile by webpack into messy javascript
		);	
	}
}

// 2. Take this components' generated HTML and put it in the DOM
// <App></App> OR <App />  is an instance 
// renders App instance into .container DOM
ReactDOM.render(<App />, document.querySelector('.container')); // NOT Reactdom.render(App)