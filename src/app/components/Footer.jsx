import React from "react";

import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

import styles from "../page.module.css";

export default function Footer() {
  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.column}>
          <h2>Pet Taskmaster</h2>
          <p>
            Unleash the joy of virtual companionship.
            <br /> Join now and make every click count.
          </p>
        </div>

        <div className={styles.column}>
          <h2>Get in touch </h2>

          <p>
            Email:{" "}
            <a href="mailto:pettaskmaster@gmail.com">pettaskmaster@gmail.com</a>
          </p>

          <div className={styles.socialIcons}>
            <a
              href="https://twitter.com/imdesignsllc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/Pokemon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/Moreen-n/Moreen-n"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com/YourInstagramHandle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="column">
          <h2>Links</h2>
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href="/Footer/about">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>
          &copy; <small>2024 Pet Taskmaster. All rights reserved.</small>
        </p>
      </div>
    </div>
  );
}
