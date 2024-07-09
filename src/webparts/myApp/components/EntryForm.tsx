import * as React from 'react';

export interface IEntryFormProps {
  description: string;
}

const EntryForm: React.FunctionComponent<IEntryFormProps> = (props) => {
  return (
    <div>
      <h2>Entry Form</h2>
      <form>
        <div>
          <label htmlFor="entry">Enter Data:</label>
          <input type="text" id="entry" name="entry" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EntryForm;
