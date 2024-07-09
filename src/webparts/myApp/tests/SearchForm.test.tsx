import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SearchForm from '../components/SearchForm';

describe('SearchForm', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchForm onSearch={() => {}} />, div);
  });
});
