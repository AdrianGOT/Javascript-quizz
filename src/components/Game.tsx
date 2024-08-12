import { Card } from "@mui/material"
import { Question } from "./Question"
import { useQuestionStore } from "../store/questions"

export const Game = () => {
    const questions = useQuestionStore(state => state.questions);
    const currentQuestion = useQuestionStore(state => state.currentQuestion);

    return(
        <Card>
            <div></div> {/* Para hacer la navegación */}
            <Question info={questions[currentQuestion]}  />
        </Card>    
    )
}