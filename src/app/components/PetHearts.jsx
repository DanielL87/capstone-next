'use client';
import React, { useState, useEffect } from 'react';
import styles from '../page.module.css';

export default function PetHearts() {
       const [hearts, setHearts] = useState(5);

       useEffect(() => {
              const timer = setInterval(() => {
                     setHearts((prevHearts) => (prevHearts > 0 ? prevHearts - 1 : 0));
              }, 24 * 60 * 60 * 1000); // Decrease a heart every day

              return () => clearInterval(timer); // Clean up on component unmount
       }, []);

       return (
              <>
              <div className={styles.petHeartContainer}>
                     {hearts > 0 ? (
                            <p>{'❤️ '.repeat(hearts)}</p>
                     ) : (
                            <p>Pet has Run Away!</p>
                     )}
              </div>
              </>
       );
}