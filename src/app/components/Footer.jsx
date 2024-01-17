'use client';
import React from 'react';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaRegCopyright,
  FaTwitter,
} from 'react-icons/fa';
import { GoMoveToTop } from 'react-icons/go';
import styles from '../page.module.css';
import { Link as ScrollLink } from 'react-scroll';

export default function Footer() {
  return (
    <div className={styles.heroFooterMainContainer}>
      <div className={styles.heroFooterContainer}>
        <div className={styles.heroFooterInfoContainer}>
          <h2 className={styles.heroFooterInfoTitle}>Pet Taskmaster</h2>
          <p className={styles.heroFooterBlurb}>
            Unleash the joy of virtual companionship.
          </p>
        </div>

        <div className={styles.heroFooterIconsContainer}>
          <p>Follow us!</p>

          <div className={styles.heroFooterSocialLinks}>
            <a
              href='https://twitter.com/imdesignsllc'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTwitter className={styles.heroFooterIcon} />
            </a>
            <a
              href='https://www.facebook.com/Pokemon'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFacebook className={styles.heroFooterIcon} />
            </a>
            <a
              href='https://github.com/Moreen-n/Moreen-n'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub className={styles.heroFooterIcon} />
            </a>
            <a
              href='https://instagram.com/YourInstagramHandle'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagram className={styles.heroFooterIcon} />
            </a>
          </div>
        </div>

        <div className={styles.heroFooterMenuLinks}>
          
            <h2 className={styles.heroFooterLinkTitle}>Links</h2>
            <ul>
              <li className={styles.heroFooterHomeLink}>
                <span href={'/'}>Home</span>
              </li>
              <li className={styles.heroFooterHomeLink}>
                <ScrollLink to='aboutSection' smooth={true} duration={500}>
                  About
                </ScrollLink>
              </li>
            </ul>
          
        </div>

        <div className={styles.heroFooterTopIcon}>
          <GoMoveToTop onClick={() => window.scrollTo(0, 0)} />
        </div>
      </div>

      <div className={styles.heroFooterCopyright}>
        <FaRegCopyright /> 2024 Pet Taskmaster. All rights reserved.
      </div>
    </div>
  );
}
