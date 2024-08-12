import { Container, Stack, Typography } from "@mui/material"
import { JavascriptLogo } from "./components/logos/JavascriptLogo"
import './App.css'
import { Start } from "./components/Start"
import { useQuestionStore } from "./store/questions"
import { Game } from "./components/Game"

function App() {
  const hasQuestions = useQuestionStore(state => state.questions).length > 0;
  
  return (
    <main>
    <Container maxWidth="sm">
      <Stack direction='row' alignItems={'center'} justifyContent={'center'} gap={2}>

        <JavascriptLogo /> 
        <Typography component='h1' variant="h2">
          Javascript quizz
        </Typography>
      
      </Stack>

      {!hasQuestions && <Start/>}
      {hasQuestions  && <Game/>}

    </Container>
    </main>
  )
}

export default App
