import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { siteMetadata } from '../../../gatsby-config';

const HeroIcons = () => {
  const [hoverIcon, setHoverIcon] = useState(null);

  const toggleHover = (iconName) => {
    setHoverIcon(iconName);
  };

  const icons = {
    email: {
      href: `mailto:${siteMetadata.email}`,
      img: faEnvelope,
      onHoverColor: '#ff2826',
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/saiful-i/',
      img: faLinkedinIn,
      onHoverColor: '#0077b9',
    },
    github: {
      href: 'https://github.com/saifulislamdev',
      img: faGithub,
      onHoverColor: '#8d0085',
    },
  };

  return (
    <>
      {Object.entries(icons).map(([iconName, iconData], i) => {
        return (
          <a
            href={iconData.href}
            target='_blank'
            style={{ color: 'inherit' }}
            key={`hero-icon-${i}`}
            rel='noreferrer'
          >
            <FontAwesomeIcon
              className='fa-2x px-2'
              icon={iconData.img}
              onMouseEnter={() => toggleHover(iconName)}
              onMouseLeave={() => toggleHover(null)}
              style={{
                color:
                  hoverIcon === iconName
                    ? icons?.[iconName]?.onHoverColor
                    : 'black',
              }}
            />
          </a>
        );
      })}
    </>
  );
};

export default HeroIcons;
