import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBpQc5Ijd1bXG0nmIPVn-0qcKYwkl7Hqtk';

// Create new components that create HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// places HTML in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
