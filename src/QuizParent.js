import React, { useEffect, useState } from 'react'
import './App.css';
function QuizParent() {



    const questionArray = [
        {
            
            question: "Do you want to be a pervy ninja?",
            options: [
                { answer: "Yes, Of Course!", points: { Jiraiya: 10, Naruto: 5 }, optionValue: "A" },
                { answer: "No, that’s gross!", points: { Sakura: 10, Sasuke: 5 }, optionValue: "B" },
                { answer: "I'll use it as research (like Orochimaru)!", points: { Orochimaru: 10, Itachi: 5 }, optionValue: "C" }
            ]
        },
        {
         
            question: "Which is your favorite pet animal?",
            options: [
                { answer: "Snake", points: { Orochimaru: 10, Sasuke: 5 }, optionValue: "A" },
                { answer: "Toad", points: { Jiraiya: 10, Naruto: 5 }, optionValue: "B" },
                { answer: "Crow", points: { Itachi: 10, Sasuke: 5 }, optionValue: "C" }
            ]
        },
        {
           
            question: "What would your fighting style be?",
            options: [
                { answer: "Using genius-level strategy", points: { Shikamaru: 10, Itachi: 5 }, optionValue: "A" },
                { answer: "Pure physical power", points: { "Rock Lee": 10, Naruto: 5 }, optionValue: "B" },
                { answer: "Destructive eye powers", points: { Sasuke: 10, Itachi: 5 }, optionValue: "C" }
            ]
        },
        {
            question: "What’s your dream job in the ninja world?",
            options: [
                { answer: "Hokage, of course!", points: { Naruto: 10, Hashirama: 5 }, optionValue: "A" },
                { answer: "Legendary ninja, feared by all", points: { Madara: 10, Orochimaru: 5 }, optionValue: "B" },
                { answer: "I’ll settle for taking lots of naps", points: { Shikamaru: 10 }, optionValue: "C" }
            ]
        },
        {
            question: "If you could master one jutsu, what would it be?",
            options: [
                { answer: "Wood Style", points: { Hashirama: 10, Madara: 5 }, optionValue: "A" },
                { answer: "Rasengan", points: { Naruto: 10, Jiraiya: 5 }, optionValue: "B" },
                { answer: "Reanimation Jutsu", points: { Orochimaru: 10, Itachi: 5 }, optionValue: "C" }
            ]
        },
        {
            question: "How do you feel about your family?",
            options: [
                { answer: "I’d do anything for them", points: { Itachi: 10, Sasuke: 5 }, optionValue: "A" },
                { answer: "I don’t really care, I’m on my own path", points: { Sasuke: 10, Madara: 5 }, optionValue: "B" },
                { answer: "Family? They only slow me down", points: { Orochimaru: 10 }, optionValue: "C" }
            ]
        },
        {
            question: "How do you handle emotions?",
            options: [
                { answer: "Hide them and focus on revenge", points: { Sasuke: 10, Itachi: 5 }, optionValue: "A" },
                { answer: "Cry openly but never give up", points: { Naruto: 10, "Rock Lee": 5 }, optionValue: "B" },
                { answer: "Act cool, but get super awkward when it matters", points: { Rock_Lee: 10, Naruto: 5 }, optionValue: "C" }
            ]
        },
        {
            question: "Which weapon would you carry?",
            options: [
                { answer: "A fan larger than your body", points: { Madara: 10, Sasuke: 5 }, optionValue: "A" },
                { answer: "A bunch of paper bombs", points: { Sakura: 10, Itachi: 5 }, optionValue: "B" },
                { answer: "My fists, no weapons needed!", points: { Rock_Lee: 10, Naruto: 5 }, optionValue: "C" }
            ]
        },
        {
            question: "Who’s your ideal sensei?",
            options: [
                { answer: "Someone who teaches me cool techniques", points: { Kakashi: 10, Sasuke: 5 }, optionValue: "A" },
                { answer: "A super wise (and slightly creepy) master", points: { Orochimaru: 10, Itachi: 5 }, optionValue: "B" },
                { answer: "A legendary ninja who's a bit... pervy", points: { Jiraiya: 10, Naruto: 5 }, optionValue: "C" }
            ]
        },
        {
            question: "Which hairstyle suits you best?",
            options: [
                { answer: "Wild and spiky", points: { Naruto: 10, Jiraiya: 5 }, optionValue: "A" },
                { answer: "Slicked back and serious", points: { Itachi: 10, Sasuke: 5 }, optionValue: "B" },
                { answer: "Bowl-cut perfection", points: { Rock_Lee: 10 }, optionValue: "C" }
            ]
        }
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    
    const [questionNo, setQuestionNo] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(questionArray[questionNo])
    function optionHandler(opValue) {
        setSelectedOption(opValue)
    }

    function nextQuestionHandler(event){
       event.preventDefault();
       console.log(questionNo)
       if(questionNo <=8)
       {
        setQuestionNo(questionNo+1)
       }
        
        
        
    }

    useEffect(()=>{
        
        if(questionArray[questionNo] != undefined)
        {
            setCurrentQuestion(questionArray[questionNo])
        }
        
        setSelectedOption(null)
    },[questionNo])

    return (
        <div>
            <section className="section-1" id="section-1">
                <main>
                    <div className="text-container">
                        <h2>Which Naruto Character Are You?</h2>
                        <p>QUESTION {questionNo+1} OF {questionArray.length}</p>
                        <p className='question'>{currentQuestion.question}</p>
                    </div>

                    <form>

                        <div className="quiz-options">


                            {currentQuestion.options.map((item, ind) => {
                                return <label className={selectedOption === item.optionValue ? "options-click" : "options"} onClick={()=>optionHandler(item.optionValue)} key={ind} >
                                    <span className="alphabet">{item.optionValue}</span>
                                    {item.answer}
                                </label>
                            })}




                        </div>
                        <button id="btn" onClick={(event)=>nextQuestionHandler(event)} >Next</button>
                    </form>
                </main>
            </section>

        </div>
    )
}

export default QuizParent