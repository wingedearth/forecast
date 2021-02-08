import React, { useState } from 'react';
import { func } from 'prop-types';
import Button from '@/components/buttons/Button';
import zipcodes from 'zipcodes';
import './SearchZip.scss';

const searchType = 'BY_ZIP';

/**
 * @function SearchZip
 * @param {Object} formInput
 * @param {Functin} updateFormInput
 */
const SearchZip = ({ updateSearchParams }) => {
	const [formInput, updateFormInput] = useState('');

	const handleChange = (event) => {
		event.preventDefault();

		updateFormInput(event?.target?.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const location = zipcodes.lookup(formInput);
		const { city, country, state } = location;

		updateSearchParams({
			city,
			country,
			state,
			searchType,
			zip: formInput
		});
	};

	return (
		<div className="search-zip">
			<label className="search-zip__label">Zip Code</label>
			<input
				type="text"
				className="search-zip__input"
				onChange={handleChange}
				value={formInput}
			/>
			<Button className="search-zip__button" onClick={handleSubmit}>
				Submit
			</Button>
		</div>
	);
};

SearchZip.propTypes = {
	updateSearchParams: func.isRequired
};

export default SearchZip;
