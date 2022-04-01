import React from 'react';
import classes from './Search.module.css';
import SearchBar from './SearchBar';
import FilterButton from './FilterButton';

const Search = () => {
	return (
		<div className={classes.container}>
			<SearchBar />
			<FilterButton />
		</div>
	);
};

export default Search;
