import React from 'react';
import Footer from '../../components/Footer';

const Projets = () => {
  return (
    <>
      <section className='projetsSection section'>
        <h2>Projets</h2>
        <div className='cardsSection'>
          <article className='projetCard'>
            <h4>Site Autour des jardins de Chéreng</h4>
            <p>Projet fullstack: React, NodeJS, PostgreSQL</p>
            <a
              href='https://autourdesjardinsdechereng.netlify.app/'
              target='_blank'
            >
              <img
                src='https://res.cloudinary.com/dlovq0hsk/image/upload/v1679577234/profil/siteADJDC_exo1vk.png'
                alt="page d'accueil du site Autour des jardins de chéreng"
              />
            </a>
          </article>{' '}
          <article className='projetCard'>
            <h4>changement de profil</h4>
            <p>Projet front utilisant l'API randomUser</p>
            <a href='https://persons-profiles.netlify.app/' target='_blank'>
              <img
                src='https://res.cloudinary.com/dlovq0hsk/image/upload/v1679577234/profil/profiles_jwp77y.png'
                alt='profils de personnes'
              />
            </a>
            <a href='https://persons-profiles.netlify.app/' target='_blank'>
              <img
                src='https://res.cloudinary.com/dlovq0hsk/image/upload/v1679577234/profil/profil2_son72s.png'
                alt='profils de personnes'
              />
            </a>
          </article>{' '}
          <article className='projetCard'>
            <h4>liste de courses</h4>
            <p>Exercice front type todo</p>
            <a href='https://liste-courses.netlify.app/' target='_blank'>
              <img
                src='https://res.cloudinary.com/dlovq0hsk/image/upload/v1679577233/profil/liste2_t6gut6.png'
                alt='liste de courses'
              />
            </a>
            <a href='https://liste-courses.netlify.app/' target='_blank'>
              <img
                src='https://res.cloudinary.com/dlovq0hsk/image/upload/v1679577234/profil/listeCourses_s1glfr.png'
                alt='liste de courses'
              />
            </a>
          </article>{' '}
          <article className='projetCard'>
            <h4>Menu</h4>
            <p>
              Exercice front pour afficher un menu filtrable. Page responsive.{' '}
            </p>
            <a href='https://menu-diner.netlify.app/' target='_blank'>
              <img
                src='https://res.cloudinary.com/dlovq0hsk/image/upload/v1679577234/profil/menu_wittc6.png'
                alt='menu'
              />
            </a>
          </article>{' '}
          <article className='projetCard'>
            <h4>Générateur aléatoire de cocktails</h4>
            <p>Projet front avec Vuejs</p>
            <a
              href='https://cocktails-from-donovan-to-vade.netlify.app/'
              target='_blank'
            >
              <img
                src='https://res.cloudinary.com/dlovq0hsk/image/upload/v1686996560/profil/cocktailsRandom_qv4f2k.png'
                alt="page d'accueil du générateur de cocktails"
              />
              <img
                src='https://res.cloudinary.com/dlovq0hsk/image/upload/v1686996666/profil/singleCocktail_xryfxw.png'
                alt='page single cocktail'
              />
            </a>
          </article>{' '}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projets;
