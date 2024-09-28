import React, { useEffect, useState } from "react";
import "./App.css";
import { questionData , characterImages} from "./questionData";

import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function QuizParent() {


  const questionArray = questionData();
  const imagesArr = characterImages();

  console.log(imagesArr)

  const [selectedOption, setSelectedOption] = useState(null);

  const [questionNo, setQuestionNo] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(
    questionArray[questionNo]
  );
  const [individualAns, setIndividualAns] = useState(null);
  const [answersArr, setAnsArr] = useState([]);
  function optionHandler(opValue, points) {
    setIndividualAns(points);
    setSelectedOption(opValue);
  }

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  function errorToast(msg) {
    toast.error(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }

  function nextQuestionHandler(event) {
    event.preventDefault();

    if (selectedOption !== null) {
      if (individualAns != null && answersArr.length <= 9) {
        setAnsArr([...answersArr, individualAns]);
        if (questionNo <= 8) {
          setQuestionNo(questionNo + 1);
        }
      }
    } else {
      errorToast("Please choose your answer");
    }
  }

  useEffect(() => {
    if (questionArray[questionNo] !== undefined) {
      setCurrentQuestion(questionArray[questionNo]);
    }

    setSelectedOption(null);
  }, [questionNo]);

  useEffect(() => {
    if (answersArr.length === 10) {
      let character = predictCharacter(answersArr);
    }
  }, [answersArr]);

  function predictCharacter(answersArr) {
    let characterobj = new Object();

    for (let eachAns of answersArr) {
      for (let item in eachAns) {
        if (characterobj[item]) {
          characterobj[item] += eachAns[item];
        } else {
          characterobj[item] = eachAns[item];
        }
      }
    }

    let maxPoints = 0;
    let predictedChar = "";
    console.log("characters", characterobj);
    for (let character in characterobj) {
      if (characterobj[character] > maxPoints) {
        predictedChar = character;
        maxPoints = characterobj[character];
      }
    }

    console.log("Final predicted character", predictedChar);
  }

  return (
    <div>
      <section className="section-1" id="section-1">
        <main className="glass-card">
          <div className="text-container">
            <h2>Which Naruto Character Are You?</h2>
            <p>
              QUESTION {questionNo + 1} OF {questionArray.length}
            </p>
            <p className="question">{currentQuestion.question}</p>
          </div>

          <form>
            <div className="quiz-options">
              {currentQuestion.options.map((item, ind) => {
                return (
                  <label
                    className={
                      selectedOption === item.optionValue
                        ? "options-click"
                        : "options"
                    }
                    onClick={() => optionHandler(item.optionValue, item.points)}
                    key={ind}
                  >
                    <span className="alphabet">{item.optionValue}</span>
                    {item.answer}
                  </label>
                );
              })}
            </div>
            <button id="btn" onClick={(event) => nextQuestionHandler(event)}>
              {answersArr.length >= 9 ? "Predict" : "Next"}
            </button>

            <button onClick={openModal}>Open Modal</button>

            {isModalOpen && (
              <div className="modal">
                <div className="modal-content">

                  <p id="title-ans">In the World of Ninjas, You're Most Like: <span className="ch-name">CharacterName</span> </p>
                  {/* Button to close the modal */}
                  <img className="img-result" src="https://staticg.sportskeeda.com/editor/2022/05/6ba27-16536769676367.png"/>
                  <button className="close-btn" id="btn" onClick={closeModal}>Close</button>
                </div>
              </div>
            )}
          </form>
        </main>
      </section>
      <ToastContainer />
    </div>
  );
}

export default QuizParent;
