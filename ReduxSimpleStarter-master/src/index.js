import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCL9tQ_Q0di312R7PDbIVe74Ah-PYyw6QM';

const App = function () {
  return (
    <div>
        <SearchBar/>
     </div>
  );
};

ReactDOM.render(<App/>, document.querySelector('.container'));
