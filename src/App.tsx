import React from 'react';
import { useState } from 'react'
import './App.scss';
import { Grid, Tabs, Tab } from '@material-ui/core'
import { WordContainer } from './components/WordContainer';
import { TextFieldComponent } from './components/TextFieldComponent';
import { CardWrapper } from './components/CardWrapper';


const leftLorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\nLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n"
const rightLorem = "Lorem Ipsum is samply dammy text of the printing and typosetting industry.\n Lorem Ipsam has bean the industri's standard dummy txt evr sieuce tha 1700s, we hn an unknon printer took a galley of type and scrambled it to make a type specimen book."

function App() {
  const [leftTextBox, setLeftTextBox] = useState(leftLorem)
  const [rightTextBox, setRightTextBox] = useState(rightLorem)
  const [value, setValue] = useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const isPuru = value? false : true
  return (
    <div className="App">
        <Tabs
          value={value}
          variant="fullWidth"
          onChange={handleChange}
        >
          <Tab label="Purudiff" />
          <Tab label="Diff" />
      </Tabs>
      <Grid container justify="space-evenly" alignItems="flex-start">
        <CardWrapper>
          <TextFieldComponent
              TextBox={{
                state: leftTextBox,
                setState: setLeftTextBox
              }}
          />
          <WordContainer texts={[leftTextBox, rightTextBox]} puru={isPuru} type="added" />
        </CardWrapper>
        <CardWrapper>
          <TextFieldComponent
            TextBox={{
                state: rightTextBox,
                setState: setRightTextBox
            }}
          />
          <WordContainer texts={[leftTextBox, rightTextBox]} puru={isPuru}  type="removed" />
        </CardWrapper>
      </Grid>
    </div>
  );
}

export default App;
