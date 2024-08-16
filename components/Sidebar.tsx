"use client";

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Sidebar: React.FC = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <div className={`fixed top-0 z-30 min-h-screen ${showNav ? 'w-full' : 'w-16'} h-full bg-gray-900 left-0`}>
      <Link href="/" passHref>
        {/* You don't need the <a> tag here */}
        <div className="flex flex-col items-center py-2" onClick={() => setShowNav(false)}>
          <div className="w-6 h-auto">
            {/* Replace with LogoS */}
            Logos
          </div>
          <div className="mt-2 w-12">
            {/* Replace with LogoSubtitle */}
            LogoSubtitle
          </div>
        </div>
      </Link>

      <nav className={`absolute flex flex-col top-1/2 transform -translate-y-1/2 w-full ${showNav ? 'block' : 'hidden'} bg-gray-900 h-full`}>
        <Link href="/" passHref>
          <div className="block text-gray-400 text-xl h-12 leading-12 text-center hover:text-yellow-400 relative" onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faHome} />
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">HOME</span>
          </div>
        </Link>

        <Link href="/about" passHref>
          <div className="block text-gray-400 text-xl h-12 leading-12 text-center hover:text-yellow-400 relative" onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">ABOUT</span>
          </div>
        </Link>

        <Link href="/portfolio" passHref>
          <div className="block text-gray-400 text-xl h-12 leading-12 text-center hover:text-yellow-400 relative" onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faSuitcase} />
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">PORTFOLIO</span>
          </div>
        </Link>

        <Link href="/contact" passHref>
          <div className="block text-gray-400 text-xl h-12 leading-12 text-center hover:text-yellow-400 relative" onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">CONTACT</span>
          </div>
        </Link>

        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className="absolute top-4 right-4 cursor-pointer"
        />
      </nav>

      <ul className="absolute bottom-5 w-full flex flex-col justify-center space-x-4">
        <li>
          <a
            href="https://www.linkedin.com/in/slobodan-gaji%C4%87-006bb8b8/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-yellow-400"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/bobangajicsm"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-yellow-400"
          >
            <FontAwesomeIcon icon={faGithub} className="text-xl" />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCBu5ulO4d-d47lAVybpRTkw"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-yellow-400"
          >
            <FontAwesomeIcon icon={faYoutube} className="text-xl" />
          </a>
        </li>
        <li>
          <a
            href="skype:live:bobangajicsm"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-yellow-400"
          >
            <FontAwesomeIcon icon={faSkype} className="text-xl" />
          </a>
        </li>
      </ul>

      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className='absolute top-4 right-4 cursor-pointer block md:hidden'
      />
    </div>
  )
}

export default Sidebar;
