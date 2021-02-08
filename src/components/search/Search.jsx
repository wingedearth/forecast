import React, { useState } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import './Search.scss';

const Search = () => {
	// searchType can be BY_ZIP or BY_CITY
	const [searchType, updateSearchType] = useState('BY_ZIP');

	// when searchParams is null, SearchResults won't render
	const [searchParams, updateSearchParams] = useState(null);

	return (
		<div className="search">
			<div className="container">
				<SearchForm
					searchType={searchType}
					updateSearchType={updateSearchType}
					updateSearchParams={updateSearchParams}
				/>
				<SearchResults searchType={searchType} searchParams={searchParams} />
			</div>
		</div>
	);
};

export default Search;
