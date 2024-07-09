import * as React from 'react';
import * as ReactDOM from 'react-dom';
import EntryForm from '../components/EntryForm';

describe('EntryForm', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EntryForm description="Test" />, div);
  });
});
