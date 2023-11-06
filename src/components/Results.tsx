import { Question } from "@/types/Question";

type Props = {
    questions: Question[];
    answers: number[];
}

export const Results = ({ questions, answers }: Props) => {
    return (
        <div>
            {questions.map((item, key) => (
                <div key={key} className="mb-3">
                    <div className="font-bold">{key + 1}. {item.question}</div>
                    <div>
                        <span className="mr-3">{item.answer === answers[key] ? '(Sure thing!)' : '(Try again...)'}</span>
                        {item.options[item.answer]}
                    </div>
                </div>
            ))}
        </div>
    );
}