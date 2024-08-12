import { create } from 'zustand'
import { Question } from '../interfaces/questions'
import { Question } from '../components/Question';


interface State {
    questions:       Question[];
    getQuestions:    (limit: number) => Promise<void>;
    selectAnswer:    (answer: string, questionId: number) => void;
    currentQuestion: number;
}


export const useQuestionStore = create<State>((set, get) => {
    return {
        questions: [],
        getQuestions: async (limit: number) => {
            const json = await fetch('http://localhost:5173/data/info.json');
            const data = await json.json();
            const questions = data.questions.sort(() => Math.random() - 0.5).slice(0, limit)
            
            set({ questions })
        },
        selectAnswer: (answer: string, questionId: number) =>{
            const state = get().questions;
            const newQuestions = structuredClone(state);
            const indexQuestion = newQuestions.findIndex(q => q.id === questionId);

            const questionSelected = newQuestions[indexQuestion];
            questionSelected.userAnswer = answer;
            questionSelected.isCorrectUserAnswer = questionSelected.correctAnswer === answer;
            
            newQuestions[indexQuestion] = {
                ...questionSelected
            }

            set({ questions: newQuestions });
        },
        currentQuestion: 1

    }
})