import React, {useState} from 'react'
import questions from "../../questions.json"

function Hero() {
  
const [currentQuestion, setCurrentQuestion] = useState(0)
const [score, setScore] = useState(0)
const [result, setResult] = useState("")


const handleAnswer = isCorrect =>{
  if(isCorrect){
    setScore(score + 1)

  }

  const nextQuestion = currentQuestion + 1
  if(nextQuestion < questions.length){
    setCurrentQuestion(nextQuestion)
  } else{
    setResult(`You scored a total of ${score} from the Quiz`)
  }
}

const handleNext = ()=>{
   const nextQuestion = currentQuestion + 1
  if(nextQuestion < questions.length){
    setCurrentQuestion(nextQuestion)
  }
}

const handlePrev = () =>{
  const prev = currentQuestion - 1
  if(prev < questions.length ){
    setCurrentQuestion(prev)
  }
  
}

  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md ">
    {result && <p className="py-4 px-6 bg-green-500 my-10">{result}</p>}
      <h1 className="flex justify-start text-3xl">{questions[currentQuestion].id}</h1>
      <h2 className='text-black text-bold text-2xl py-3'>{questions[currentQuestion].qstText}</h2>
      {questions[currentQuestion].answers.map(ans =>(
        <div key={ans.id}>
        
            <span className="flex flex-col justify-between my-6" > <button onClick={()=> handleAnswer(ans.isCorrect)} className="py-3 px-4 bg-yellow-500 rounded text-center" >{ans.answer}</button> </span>
        
        </div>
        
))}
<div className="flex justify-between mx-4">

      <button onClick={handlePrev} className="btn btn-primary">Previous</button>
      {/* <button onClick={handleNext} className="btn btn-primary">Next</button> */}

</div>

    </div>
  </div>
</div>
  )
}

export default Hero