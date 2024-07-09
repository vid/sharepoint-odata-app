import * as React from 'react';

export interface ISearchFormProps {
  onSearch: (query: string) => void;
}

const SearchForm: React.FunctionComponent<ISearchFormProps> = (props) => {
  const [query, setQuery] = React.useState('');

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    props.onSearch(query);
  };

  return (
    <div>
      <h2>Search Form</h2>
      <form onSubmit={handleSearch}>
        <div>
          <label htmlFor="search">Search:</label>
          <input
            type="text"
            id="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
