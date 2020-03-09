import React from 'react';
import { useState } from 'react'
import './App.css';
import { Grid } from '@material-ui/core'
import { WordContainer } from './components/WordContainer';
import { TextFieldComponent } from './components/TextFieldComponent';


const leftLorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\nLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n"
const rightLorem = "Lorem Ipsum is samply dammy text of the printing and typosetting industry.\n Lorem Ipsam has bean the industri's standard dummy txt evr sieuce tha 1700s, we hn an unknon printer took a galley of type and scrambled it to make a type specimen book."

function App() {
  const [leftTextBox, setLeftTextBox] = useState(leftLorem)
  const [rightTextBox, setRightTextBox] = useState(rightLorem)
  return (
      <div className="App">
      <header className="App-header">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="space-evenly" spacing={1}>
              <TextFieldComponent
                TextBox={
                  {
                    state: leftTextBox,
                    setState: setLeftTextBox
                  }
                }
              />
              <TextFieldComponent
                TextBox={
                  {
                    state: rightTextBox,
                    setState: setRightTextBox
                  }}
              />
            </Grid>
            <Grid container justify="space-evenly" spacing={1}>
              <WordContainer texts={[leftTextBox, rightTextBox]} type="added" />
              <WordContainer texts={[leftTextBox, rightTextBox]} type="removed" />
            </Grid>
          </Grid>
        </Grid>
      </header>
      </div>
  );
}

export default App;
