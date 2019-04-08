import React, { Component } from 'react'
import styled from 'styled-components'
import { styles } from '../../../utils'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'

export default class NavbarIcons extends Component {

	state = {
		icons: [
			{
				id: 1,
				iconName: <FaFacebook className="icon facebook-icon" />,
				path: 'https://www.facebook.com'
			},
			{
				id: 2,
				iconName: <FaTwitter className="icon twitter-icon" />,
				path: 'https://www.twitter.com'
			},
			{
				id: 3,
				iconName: <FaInstagram className="icon instagram-icon" />,
				path: 'https://www.instagram.com'
			},
		]
	}

	render() {
		return <IconWrapper>
			{
				this.state.icons.map(item => {
					return <a href={item.path} key={item.id} target="_blank" rel="noopener noreferrer" >{item.iconName}</a>
				})
			}
		</IconWrapper>
	}
}


const IconWrapper = styled.div`
	display: none

	.icon {
		font-size: 1.3rem;
		cursor: pointer;
		${styles.transFunction()};

		&:hover {
			color: ${styles.colors.mainYellow}
		}

	}

	.facebook-icon {
		color: #3d579d;
	}

	.twitter-icon {
		color: #3ab7f0;
	}

	.instagram-icon {
		color: #da5f53;
	}

	@media (min-width:768px) {
		display: flex;
		width: 10rem;
		justify-content: space-around;
	}

`