import React, { useState } from 'react'
import Quiz from '../Quiz/Quiz'
import quizData from '../../staticData/staticData'
function Home() {
    const [questions,setQuestions]= useState(quizData)
  return (
    <main>
    <div className='container'>
        <h3>Quiz App</h3>
        <section className='info'>
            {
                questions.map((question)=>{
                    return(
                        <Quiz key={question.id}{...question}/>
                    )
                })
            }
           
        </section>
    </div>
    </main>
  )
}

export default Home
