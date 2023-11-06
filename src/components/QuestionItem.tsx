import { Question } from "@/types/Question";
import { useState } from "react";

type Props = {
    question: Question;
    count: number;
    onAnswer: (answer: number) => void;
}

export const QuestionItem = ({ question, count, onAnswer }: Props) => {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

    const checkQuestion = (key: number) => {
        if (selectedAnswer === null) {
            setSelectedAnswer(key);
            onAnswer(key);
        }
    }

    return (
        <div>
            <div className="text-3xl font-bold mb-5">{count}. {question.question}</div>
            <div>
                {question.options.map((item, key) => (
                    <div
                        key={key}
                        onClick={() => checkQuestion(key)}
                        className={`border px-3 py-2 mb-3 rounded-md text-lg bg-blue-200
                        ${selectedAnswer !== null ? 'cursor-auto' : 'cursor-pointer hover:bg-blue-400'}
                        ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === key && 'bg-green-200'}
                        ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === key && 'bg-red-200'}
                        `}
                    >{item}</div>
                ))}
            </div>
        </div>
    );
}