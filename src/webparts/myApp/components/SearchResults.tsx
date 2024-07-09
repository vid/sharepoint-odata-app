import * as React from 'react';

export interface ISearchResultsProps {
  results: any[];
}

const SearchResults: React.FunctionComponent<ISearchResultsProps> = (props) => {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {props.results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
