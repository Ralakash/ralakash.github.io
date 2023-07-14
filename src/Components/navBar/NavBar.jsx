import React from 'react';
import { useLayoutEffect, useState } from 'react';
import Pdf from '../../assets/Resume2023.pdf';
import HeadShot from '../../assets/images/profile-picture.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileText, faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function useWindowSize() {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, []);
	return size;
}

function NavBar() {
	const [width, height] = useWindowSize();
	const inlineDisplay = (
		<ul className="justify-content-end">
			<li className="m-2 display-6">
				<a href="https://github.com/Ralakash">
					<FontAwesomeIcon icon={faGithub} title="Github" />
				</a>
			</li>
			<li className="m-2 display-6">
				<a href="mailto: shawnkaralash@gmail.com">
					<FontAwesomeIcon icon={faEnvelope} title="Email" />
				</a>
			</li>
			<li className="m-2 display-6">
				<a href={Pdf} target="_blank">
					<FontAwesomeIcon icon={faFileText} title="Resume" />
				</a>
			</li>
		</ul>
	);

	const hamburgerMenu = <FontAwesomeIcon icon={faBars} title="Menu" />;

	return (
		<header className="row m-5">
			<h1 className="col">
				<img src={HeadShot} alt="Headshot" />
			</h1>
			<nav className="col">{width <= 700 ? hamburgerMenu : inlineDisplay}</nav>
		</header>
	);
}

export default NavBar;
