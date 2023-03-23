import React, {useState} from 'react'
import questions from "../../questions.json"

function Hero() {
  
const [currentQuestion, setCurrentQuestion] = useState(0)
const [score, setScore] = useState(0)


const handleAnswer = isCorrect =>{
  if(isCorrect){
    setScore(score + 1)
  }

  const nextQuestion = currentQuestion + 1
  if(nextQuestion < questions.length){
    setCurrentQuestion(nextQuestion)
  } else{
    alert(`You scored a total of ${score} from the Quiz`)
  }
}

  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md ">
      {questions.map((qst, id)=>(
        <div>
          <h1 className="flex justify-start text-3xl">{qst.id}</h1>
          <h2 key={id} className='text-black text-bold text-2xl py-3'>{qst.qstText}</h2>
          <p className="text-black" >{qst.answers.map(ans=>(
            <span className="flex flex-col justify-between my-6" > <button onClick={()=> handleAnswer(ans.isCorrect)} className="py-3 px-4 bg-yellow-500 rounded text-center" >{ans.answer}</button> </span>
          ))}</p>
        </div>
        
))}
      <button className="btn btn-primary">Get Started</button>

    </div>
  </div>
</div>
  )
}

export default Hero