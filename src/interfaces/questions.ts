export interface Question {
    id:                   number;
    question:             string;
    options:              string[];
    correctAnswer:        string;
    code:                 string;
    userAnswer?:          string;
    isCorrectUserAnswer?: boolean;
}
