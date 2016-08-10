import React from 'react';
import ReactDOM from 'react-dom';

// Create new components that create HTML
const App = () => <div>Hello Ida</div>;

// places HTML in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
