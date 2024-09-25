import React from 'react'
import './App.css';
function QuizParent() {
    return (
        <div>
            <section className="section-1" id="section-1">
                <main>
                    <div class="text-container">
                        <h3>Pure CSS Quiz</h3>
                        <p>QUESTION 1 OF 5</p>
                        <p>What does CSS stand for?</p>
                    </div>

                    <form>

                        <div class="quiz-options">
                            <input
                                type="radio"
                                className=""
                                
                                name="yes-1"
                                value="A"
                                // checked={selectedOption === 'A'}
                                // onChange={handleOptionChange}
                                required
                            />
                            <label className="radio-label " >
                                <span className="alphabet">A</span> Cascading Style Sheets
                                <img
                                    className="icon jdsjkefkefkefefexco"
                                    src="https://res.cloudinary.com/dvhndpbun/image/upload/v1588518387/jdsjkefkefkefefexco.svg"
                                    alt="icon"
                                />
                            </label>


                            <input
                                type="radio"
                                className=" "
                                
                                name="yes-1"
                                value="A"
                                // checked={selectedOption === 'A'}
                                // onChange={handleOptionChange}
                                required
                            />
                            <label className="radio-label jsjwjdwjdwjdwco" >
                                <span className="alphabet">B</span> Cascading Style Sheets
                                <img
                                    className="icon jdsjkefkefkefefexco"
                                    src="https://res.cloudinary.com/dvhndpbun/image/upload/v1588518387/jdsjkefkefkefefexco.svg"
                                    alt="icon"
                                />
                            </label>


                            <input
                                type="radio"
                              
                                name="yes-1"
                                value="A"
                                // checked={selectedOption === 'A'}
                                // onChange={handleOptionChange}
                                required
                            />
                            <label className="radio-label jsjwjdwjdwjdwco" >
                                <span className="alphabet">C</span> Cascading Style Sheets
                                <img
                                    className="icon jdsjkefkefkefefexco"
                                    src="https://res.cloudinary.com/dvhndpbun/image/upload/v1588518387/jdsjkefkefkefefexco.svg"
                                    alt="icon"
                                />
                            </label>


                            <input
                                type="radio"
                                
                                name="yes-1"
                                value="A"
                                // checked={selectedOption === 'A'}
                                // onChange={handleOptionChange}
                                required
                            />
                            <label className="radio-label jsjwjdwjdwjdwco" >
                                <span className="alphabet">D</span> Cascading Style Sheets
                                <img
                                    className="icon jdsjkefkefkefefexco"
                                    src="https://res.cloudinary.com/dvhndpbun/image/upload/v1588518387/jdsjkefkefkefefexco.svg"
                                    alt="icon"
                                />
                            </label>
                        </div>
                        <button id="btn">Next</button>
                    </form>
                </main>
            </section>

        </div>
    )
}

export default QuizParent