import { TextField } from '@material-ui/core';
import React from 'react'
import "./Search.css"

function Search() {
    return (
      <div className="search">
        <TextField
          id="standard-full-width"
          fullWidth
          label="Search movies, tv series"
          margin="normal"
          color="primary"
        />
      </div>
    );
}

export default Search
