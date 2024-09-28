import React, { useEffect, useState } from "react";
import "./App.css";
import { questionData , characterImages} from "./questionData";

import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function QuizParent() {


  const questionArray = questionData();
  const imagesArr = characterImages();

  //console.log(imagesArr)

  const [selectedOption, setSelectedOption] = useState(null);

  const [questionNo, setQuestionNo] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(
    questionArray[questionNo]
  );
  const [individualAns, setIndividualAns] = useState(null);
  const [answersArr, setAnsArr] = useState([]);
  const[characterName, setCharacterName] = useState(null)
  const [characterImg, setCharacterImg] = useState(null);
  function optionHandler(opValue, points) {
    setIndividualAns(points);
    setSelectedOption(opValue);
  }

  const openModal = () => {
    // e.preventDefault();
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    // e.preventDefault();
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
    if (answersArr.length >= 10) {
      let character = predictCharacter(answersArr);
      setCharacterName(character);
      console.log(character);
      const imgUrlObj = imagesArr.find((item => item.fName === character.toLowerCase()))
      console.log("Image url",imgUrlObj.imgUrl);
      setCharacterImg(imgUrlObj.imgUrl)
      openModal();
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
    return(predictedChar);
    
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
              {answersArr.length >= 9 ?  "Predict" : "Next"}
            </button>

            {/* <button onClick={openModal}>Open Modal</button> */}

            {isModalOpen && (
              <div className="modal">
                <div className="modal-content">

                  <p id="title-ans">In the World of Ninjas, You're Most Like: <span className="ch-name">{characterName.toUpperCase()}</span> </p>
                  {/* Button to close the modal */}
                  <img className="img-result" src={characterImg}/>
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
