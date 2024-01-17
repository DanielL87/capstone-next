'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link.js';
import styles from '../page.module.css';
import PokemonDetails from '@/app/components/PokemonDetails.jsx';
import { CgPokemon } from 'react-icons/cg';
import { FaRegCopyright } from 'react-icons/fa6';
import { GoMoveToTop } from 'react-icons/go';
import { Link as ScrollLink } from 'react-scroll';

export default function LandingPage() {
  const [pokemonArray, setPokemonArray] = useState([]);

  async function fetchPokemon() {
    const pokemons = [];

    const pokemonId = [11, 19, 23, 39, 56, 77, 124, 132, 133, 143, 147, 151];

    for (let i = 0; i < pokemonId.length; i++) {
      const request = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId[i]}`
      );
      const pokemonData = await request.json();

      const pokemonObject = {
        pokedexId: pokemonData.id,
        name: pokemonData.name,
        capitalizedName:
          pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1),
        type: pokemonData.types[0].type.name,
        spriteUrl: pokemonData.sprites.front_default,
      };

      pokemons.push(pokemonObject);
    }
    setPokemonArray(pokemons);
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  const randomIndex = Math.floor(Math.random() * pokemonArray.length);
  const randomPokemon = pokemonArray[randomIndex];

  return (
    <>
      {/* Hero Container */}
      <div className={styles.heroContainer}>
        <div className={styles.heroMainContainer}>
          <div className={styles.heroCardContainer}>
            {randomPokemon && (
              <div>
                <PokemonDetails
                  key={randomPokemon.name}
                  pokemon={randomPokemon}
                />
              </div>
            )}
          </div>

          <div className={styles.heroNavContainer}>
            <p className={styles.heroSiteTitle}>Pet Taskmaster</p>
            <hr className={styles.hRule} />
            <p className={styles.blurb}>
              Welcome to Pet Taskmaster - Where Pet Passion Meets Play!
            </p>
            
            <p className={styles.blurb}>
              Start your journey with Pet Taskmaster and receive your first pet for free! Engage in delightful activities, earn points, and unlock a world of possibilities in our virtual store.
            </p>
          </div>
        </div>
      </div>

      {/* About Container */}
      <div className={styles.heroAboutContainer} id='aboutSection'>
        <div className={styles.aboutMainContainer}>
          <div className={styles.aboutSectionContainer}>
          <p className={styles.aboutTitle}>ABOUT</p>
            <div className={styles.heroAboutInfoContainer}>
            
            <p className={styles.aboutSubtitle}>
              Welcome to Pet Taskmaster, the ultimate pet adventure game that
              brings fun and responsibility together!
            </p>
            <img
            className={styles.pokemonImage}
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
            alt=''
          />
          </div>

          <div className={styles.heroBlurbContainer}>
            <p className={styles.aboutBlurbSubtitle}>Your Mission</p>
            <p className={styles.aboutBlurb}>
              In this exciting world, you get to choose your own pet and embark
              on a journey filled with tasks and challenges. Your mission? Keep
              your pet happy and prevent it from running away by accomplishing
              tasks. But that’s not all!
            </p>
            
            <p className={styles.aboutBlurbSubtitle}>Earn and Spend Coins</p>
            <p className={styles.aboutBlurb}>
              As you progress, you’ll earn coins that open up a world of
              possibilities. Want to add more pets to your collection? Trade in
              your coins at our store. Fancy a different kind of pet? Use your
              coins to evolve your current pet into a new form. Or maybe you’ve
              always wanted a rare pet? Save up and buy one from our store!
            </p>
            <p className={styles.aboutBlurbSubtitle}>Join the Community</p>
            <p className={styles.aboutBlurb}>
              Pet Taskmaster is more than just a game - it’s a vibrant community
              of pet lovers and taskmasters just like you. So why wait? Sign up
              today and let the fun begin!
            </p>
            </div>
            <div><Link href={'/register'} className={styles.loginBtn}>Sign Up!</Link></div>
          </div>

          
        </div>
      </div>

      {/* Video Container */}
      <div className={styles.heroVideoMainContainer}>
        <div className={styles.heroVideoContainer}>
          <CgPokemon className={styles.heroVideoIcon} />
          <p className={styles.heroVideoTitle}>Video Title</p>
          <div className={styles.heroVideo}>
            <iframe
              width='800'
              height='500'
              src='https://www.youtube.com/embed/1roy4o4tqQM?si=09w81yFz3LRMxeef'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            ></iframe>
          </div>
        </div>
      </div>

      {/* Store Container */}
      <div className={styles.heroStoreMainContainer}>
        <div className={styles.heroStoreContainer}>
          <p className={styles.heroStoreTitle}>STORE TITLE</p>
          <p className={styles.heroStoreSubtitle}>STORE SUBTITLE</p>

          <div className={styles.heroStoreCardMainContainer}>
            <div className={styles.heroStoreCardContainer}>
              <div className={styles.heroStoreCard}>Pokemon Card</div>
              <p className={styles.heroStoreCardTitle}>Store Card Title</p>
              <p className={styles.heroStoreCardSubtitle}>
                Store Card Subtitle
              </p>
              <p className={styles.heroStoreCardPrice}>Store Card Price</p>
            </div>

            <div className={styles.heroStoreCardContainer}>
              <div className={styles.heroStoreCard}>Pokemon Card</div>
              <p className={styles.heroStoreCardTitle}>Store Card Title</p>
              <p className={styles.heroStoreCardSubtitle}>
                Store Card Subtitle
              </p>
              <p className={styles.heroStoreCardPrice}>Store Card Price</p>
            </div>

            <div className={styles.heroStoreCardContainer}>
              <div className={styles.heroStoreCard}>Pokemon Card</div>
              <p className={styles.heroStoreCardTitle}>Store Card Title</p>
              <p className={styles.heroStoreCardSubtitle}>
                Store Card Subtitle
              </p>
              <p className={styles.heroStoreCardPrice}>Store Card Price</p>
            </div>

            <div className={styles.heroStoreCardContainer}>
              <div className={styles.heroStoreCard}>Pokemon Card</div>
              <p className={styles.heroStoreCardTitle}>Store Card Title</p>
              <p className={styles.heroStoreCardSubtitle}>
                Store Card Subtitle
              </p>
              <p className={styles.heroStoreCardPrice}>Store Card Price</p>
            </div>

            <div className={styles.heroStoreCardContainer}>
              <div className={styles.heroStoreCard}>Pokemon Card</div>
              <p className={styles.heroStoreCardTitle}>Store Card Title</p>
              <p className={styles.heroStoreCardSubtitle}>
                Store Card Subtitle
              </p>
              <p className={styles.heroStoreCardPrice}>Store Card Price</p>
            </div>
          </div>

          <button className={styles.loginBtn}>See Store! </button>
        </div>
      </div>

      {/*  5th Container */}
      <div className={styles.heroFiveMainContainer}>
        <div>
          <p className={styles.heroFiveTitle}>5th Container Title</p>
          <div className={styles.heroFiveContainer}>
            Container
          </div>
        </div>
      </div>

      {/* Footer Container */}
      <div className={styles.heroFooterMainContainer}>
        <div className={styles.heroFooterContainer}>
          <div className={styles.heroFooterMenuLinks}>
            <div className={styles.heroFooterHomeLink}>
              <Link href='/'>Home</Link>
            </div>
            <div className={styles.heroFooterAboutLink}>
              <ScrollLink to='aboutSection' smooth={true} duration={500}>
                About
              </ScrollLink>
            </div>
          </div>
          <div className={styles.heroFooterCopyright}>
            <FaRegCopyright /> 2024 Copyright
          </div>
          <div className={styles.heroFooterIconsContainer}>
            <div className={styles.heroFooterSocialLinks}>
              Social Media links
            </div>
            <div className={styles.heroFooterTopIcon}>
              <GoMoveToTop onClick={() => window.scrollTo(0, 0)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
