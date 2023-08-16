import React from "react";
import Typewriter from "typewriter-effect";
import Footer from "../../components/Footer";

// const CandidatesList = [
//   { name: "Donovan Rivière", specificity: "the best guy for the job" },
//   { name: "whatever", specificity: "want a job" },
// ];

// function lookingForTheBestWorkStudy() {
//   return CandidatesList.filter(
//     (candidate) => candidate.specificity == "the best guy for the job"
//   )
//     .map((bestCandidate) => bestCandidate.name)
//     .toString("");
// }

// console.log(lookingForTheBestWorkStudy());

const Presentation = () => {
  function revealMyName() {
    const name = document.querySelector(".myNameHidden");
    name.classList.add("myNameRevealed");
  }

  setTimeout(() => {
    revealMyName();
  }, "200");

  return (
    <>
      <section className="homeSection section">
        <div>
          <h1>
            Bonjour, je suis
            <br />
            <span className="myNameHidden">Donovan Rivière</span>
            <br />
            développeur web/ web mobile
            <br />
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(2000)
                  .typeString("Sérieux")
                  .pauseFor(1500)
                  .deleteChars(10)
                  .typeString("motivé")
                  .pauseFor(1500)
                  .deleteChars(10)
                  .typeString("passionné")
                  .start();
              }}
            />
          </h1>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Presentation;
