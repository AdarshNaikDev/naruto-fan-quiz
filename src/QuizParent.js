import React, { useEffect, useState } from 'react'
import './App.css';
import { questionData } from './questionData';

import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function QuizParent() {



    const questionArray = questionData();

    const [selectedOption, setSelectedOption] = useState(null);


    const [questionNo, setQuestionNo] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(questionArray[questionNo])
    const [individualAns, setIndividualAns] = useState(null);
    const [answersArr, setAnsArr] = useState([]);
    function optionHandler(opValue, points) {
        setIndividualAns(points);
        setSelectedOption(opValue)
    }

function errorToast(msg){
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
      
       if(selectedOption !==null)
       {
        if (individualAns != null && answersArr.length <= 9) {
            setAnsArr([...answersArr, individualAns])
            if (questionNo <= 8) {
                setQuestionNo(questionNo + 1)
    
            }
        }
       }
       else{
        errorToast("Please choose your answer")
       }
        
        



       
        

    }

    useEffect(() => {

        if (questionArray[questionNo] !== undefined) {
            setCurrentQuestion(questionArray[questionNo])


        }

        setSelectedOption(null)
    }, [questionNo])

    useEffect(() => {
        console.log("Answer array", answersArr)
    }, [answersArr])

    return (
        <div>
            <section className="section-1" id="section-1">
                <main>
                    <div className="text-container">
                        <h2>Which Naruto Character Are You?</h2>
                        <p>QUESTION {questionNo + 1} OF {questionArray.length}</p>
                        <p className='question'>{currentQuestion.question}</p>
                    </div>

                    <form>

                        <div className="quiz-options">


                            {currentQuestion.options.map((item, ind) => {
                                return <label className={selectedOption === item.optionValue ? "options-click" : "options"}
                                    onClick={() => optionHandler(item.optionValue, item.points)} key={ind} >
                                    <span className="alphabet">{item.optionValue}</span>
                                    {item.answer}
                                </label>
                            })}

                        </div>
                        <button id="btn" onClick={(event) => nextQuestionHandler(event)} >{answersArr.length >= 9 ? "Predict" : "Next"}</button>
                    </form>
                </main>
            </section>
            <ToastContainer />
        </div>
    )
}

export default QuizParent