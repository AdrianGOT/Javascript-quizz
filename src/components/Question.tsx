import { Card, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material"
import { type Question as QuestionData } from "../interfaces/questions"

import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useState } from "react";
import { useQuestionStore } from "../store/questions";

interface Props{
    info: QuestionData
}

export const Question = ({info}: Props) => {
    const selectAnswer = useQuestionStore(state => state.selectAnswer);

    const selectionOption = (option: string) => {
        selectAnswer(option, info.id);
    }

    const getBackground = (answer: string) => {
        const isOptionSelected = answer === info.userAnswer;
        const bgColor = isOptionSelected?
            ( info.isCorrectUserAnswer? 'green' : 'red' ) 
            : (info.userAnswer && info.correctAnswer === answer)? 'green': 'transparent';
        return bgColor;
    }

    return (
        <Card sx={{p: '10px', textAlign: 'left'}}>

            <Typography variant="h5" component='h3'>
                {info.question}
            </Typography>

            <SyntaxHighlighter language="javascript" style={nightOwl}>
                {info.code}
            </SyntaxHighlighter>

            <List disablePadding sx={{bgcolor: '#333', borderRadius: '10px', color: 'white'}}>
                {info.options.map((option, index) =>
                   (
                    <ListItem 
                        key={index} 
                        disablePadding 
                        sx={{ bgcolor: getBackground(option) }}
                        >
                        <ListItemButton 
                            sx={{textAlign: 'center'}} 
                            onClick={()=> selectionOption(option)}>
                            <ListItemText primary={option} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Card>
    )
}