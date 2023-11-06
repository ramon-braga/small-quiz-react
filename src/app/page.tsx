"use client"

import { questions } from "@/data/questions";
import { useState } from "react";
import { QuestionItem } from "@/components/QuestionItem";

export const Page = () => {

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handAnswered = (answer: number) => {
    
  }
  
  const title = 'React Quiz';
  
  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-600">
        <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
          <div className="p-5 font-bold text-2xl border-b border-gray-300">{title}</div>
          <div className="p-5">
          <QuestionItem
            question={questions[currentQuestion]}
            count={currentQuestion + 1}
            onAnswer={handAnswered}
          />
        </div>
        <div className="p-5 text-center border-t border-gray-300">
        x of {questions.length}
        </div>
        </div>
        
    </div>
  );
}

export default Page;