import React from 'react';
import { useState } from 'react'
import './App.css';
import { Grid } from '@material-ui/core'
import { WordContainer } from './components/WordContainer';
import { TextFieldComponent } from './components/TextFieldComponent';

function App() {
  const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  const [leftTextBox, setLeftTextBox] = useState(lorem)
  const [rightTextBox, setRightTextBox] = useState(lorem)
  return (
      <div className="App">
      <header className="App-header">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="space-evenly" spacing={2}>
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
            <Grid container justify="space-evenly" spacing={2}>
              <WordContainer texts={[leftTextBox, rightTextBox]} type="added" />
              <WordContainer texts={[leftTextBox, rightTextBox]} type="added" />
            </Grid>
          </Grid>
        </Grid>
      </header>
      </div>
  );
}

export default App;
