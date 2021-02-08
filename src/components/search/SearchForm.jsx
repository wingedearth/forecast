import React from 'react';
import { func, string } from 'prop-types';
import SearchZip from './SearchZip';
import './SearchForm.scss';

const SearchForm = ({ searchType, updateSearchType, updateSearchParams }) => {
	return (
		<div className="search-form">
			<div className="container">
				<form>
					<SearchZip updateSearchParams={updateSearchParams} />
					{/* <Button onClick={handleSubmit}>Submit</Button> */}
				</form>
			</div>
		</div>
	);
};

SearchForm.propTypes = {
	searchType: string,
	updateSearchParams: func.isRequired,
	updateSearchType: func
};

export default SearchForm;
