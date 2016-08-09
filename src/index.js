<<<<<<< HEAD
// Create new components that create HTML
const App = function () {
  return <div>Hi!</div>;
}

// places HTML in the DOM
=======
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const YOUTUBE_API_KEY = '';

YTSearch({key: YOUTUBE_API_KEY, term: 'surfboards'}, function(data){
  console.log(data);
})

// Create a new component. This component should produce some html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it on the page (in DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
>>>>>>> 886bdf064a52aecd4e8f0c4680c530f897de820c
