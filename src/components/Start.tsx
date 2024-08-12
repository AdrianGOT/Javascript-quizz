import { Button } from "@mui/material"
import { useQuestionStore } from "../store/questions"

export const Start = () => {
    const getQuestions = useQuestionStore(state => state.getQuestions);
    
    const handleClick = () => {
        getQuestions(4);
    }


    return (
        <Button variant="contained" onClick={handleClick}>
            ¡Empezar!
        </Button>
    )
}