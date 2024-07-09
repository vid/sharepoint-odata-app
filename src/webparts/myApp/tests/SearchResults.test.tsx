import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SearchResults from '../components/SearchResults';

describe('SearchResults', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchResults results={[]} />, div);
  });
});
