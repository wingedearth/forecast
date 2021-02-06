import React from 'react';
import Banner from './Banner';
import { useAppContext } from './AppContext';
import githubLogo from '@/images/github.png';
import trelloLogo from '@/images/trello.png';
import Icon from './Icon';
import './Navigation.scss';

const icons = [
	{
		alt: 'github',
		className: 'github-icon',
		href: 'http://www.github.com/wingedearth/forecast',
		src: githubLogo
	},
	{
		alt: 'trello',
		className: 'trello-icon',
		href: 'https://trello.com/b/OQqm0IL3/forecast',
		src: trelloLogo
	}
];

/**
 * @function Navigation
 * @returns {React.ReactElement}
 */
const Navigation = () => {
	const { appTitle } = useAppContext();

	return (
		<Banner>
			<p className="navigation__title">{appTitle}</p>
			<div className="navigation__icons">
				{icons.map((icon, index) => (
					<Icon {...icon} key={`${appTitle}-banner-icon-${index}`} />
				))}
			</div>
		</Banner>
	);
};

export default Navigation;
