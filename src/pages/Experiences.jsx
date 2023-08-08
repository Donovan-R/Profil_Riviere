import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import {
  Controller,
  EffectCoverflow,
  Keyboard,
  Mousewheel,
  Pagination,
} from "swiper";
import Footer from "../../components/Footer";
const Experiences = () => {
  return (
    <>
      <section className="section expSection">
        <h2>expériences</h2>
        <Swiper
          modules={[EffectCoverflow, Pagination, Mousewheel, Keyboard]}
          loop={"true"}
          direction="vertical"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="expCard">
              <h4 className="expTitle">
                <span className="expDate">Depuis le 11/04/2018 :</span>
                <br /> agent d'exploitation qualifié dans un parc de
                stationnement de la société Indigo
              </h4>
              <div className="expDetails">
                <ul>
                  <li>Accueil des clients.</li>
                  <li>Petite maintenance.</li>
                  <li>Sécurité incendie et assistance aux personnes</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="expCard">
              <h4 className="expTitle">
                <span className="expDate">
                  {" "}
                  De décembre 2015 à avril 2018 :
                </span>
                <br /> assistant de recherche pour le CNRS (J-Pal Europe)
              </h4>
              <div className="expDetails">
                <ul>
                  <li>
                    Intermédiaire entre le chef de projet et la structure
                    enquêtée
                  </li>
                  <li>Administration de questionnaires</li>
                  <li>Observation des pratiques professionnelles</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="expCard">
              <h4 className="expTitle">
                <span className="expDate">
                  {" "}
                  De septembre 2016 à avril 2017 :
                </span>
                <br /> tuteur pédagogique au sein de l'université Lille3
              </h4>
              <div className="expDetails">
                <ul>
                  {" "}
                  <li>
                    Enseignement de matières relevant de la linguistique auprès
                    d'étudiants en première année de licence
                  </li>
                  <li>Conception et animation de cours</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="expCard">
              <h4 className="expTitle">
                <span className="expDate">De 2011 à avril 2018 : </span>
                <br />
                intérimaire pour Kelly-Services et Crit
              </h4>
              <div className="expDetails">
                <ul>
                  <li>Manutention (Castorama, BTR services)</li>
                  <li>Agent d'exploitation (Vinci Park, Indigo, Autocité)</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="expCard">
              <h4 className="expTitle">
                <span className="expDate">
                  {" "}
                  De septembre 2012 à juin 2013 :
                </span>
                <br />
                enseignant de français (FLE) à Antananarivo
              </h4>
              <div className="expDetails">
                <ul>
                  <li>
                    Enseignement de la langue française à des adultes militaires
                  </li>
                  <li>
                    Préparation aux examens du cours de français et de
                    l'alliance française (DELF/ DALF)
                  </li>
                  <li>Élaboration de cours et d'évaluations</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="expCard">
              <h4 className="expTitle">
                <span className="expDate">
                  Périodes estivales de 2010 à 2013 :{" "}
                </span>
                <br /> Taal-trainer animator à Courtrai pour BLCC Kids
              </h4>
              <div className="expDetails">
                <ul>
                  <li>Enseignement de la langue française à des enfants</li>
                  <li>Élaboration d'activités ludo-éducatives</li>
                  <li>
                    Animation et élaboration de jeux intérieurs et extérieurs
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="expCard">
              <h4 className="expTitle">
                <span className="expDate">D'octobre 2010 à juillet 2011 :</span>
                <br /> enseignant de français (FLE) à Bucarest
              </h4>
              <div className="expDetails">
                <ul>
                  <li>Enseignement de la langue française</li>
                  <li>conception pédagogique</li>
                  <li>organisation des épreuves</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="expCard">
              <h4 className="expTitle">
                <span className="expDate">Du 16/12/2005 au 15/08/2010 :</span>
                <br /> équipier polyvalent en restauration rapide (Quick et KFC)
              </h4>
              <div className="expDetails">
                <ul>
                  <li>Préparation et anticipation des commandes</li>
                  <li>Délégation de tâches aux équipiers</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <Footer />
    </>
  );
};

export default Experiences;
