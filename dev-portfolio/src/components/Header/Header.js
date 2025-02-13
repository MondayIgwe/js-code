import Link from 'next/link';
import React from 'react';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, NavLink, Span } from './HeaderStyles';
import SocialDetails from './SocialDetails';

const Header = () => (
	<Container>
		<Div1>
			<Link href='/'>
				<a
					style={{
						display: 'flex',
						alignItems: 'center',
						color: 'white',
						marginBottom: '10px',
					}}
				>
					<DiCssdeck size='3rem'></DiCssdeck>
					<Span>Portfolio</Span>
				</a>
			</Link>
		</Div1>
		<Div2>
			<li>
				<Link href='#projects'>
					<NavLink>Projects</NavLink>
				</Link>
			</li>
			<li>
				<Link href='#tech'>
					<NavLink>Technologies</NavLink>
				</Link>
			</li>
			<li>
				<Link href='#projects'>
					<NavLink>About</NavLink>
				</Link>
			</li>
		</Div2>
		<SocialDetails></SocialDetails>
	</Container>
);

export default Header;
