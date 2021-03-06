import React from 'react';
import { useState } from 'react'
import './App.scss';
import { Grid } from '@material-ui/core'
import { WordContainer } from './components/WordContainer';
import { TextFieldComponent } from './components/TextFieldComponent';
import { CardWrapper } from './components/CardWrapper';
import { Header } from './components/Header'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#43a047',
      main: '#388e3c',
      dark: '#1b5e20',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ef5350',
      main: '#f44336',
      dark: '#b71c1c',
      contrastText: '#000',
    },
  },
});

const leftLorem = "Lorem Ipsum is simply dummy \ntext of the printing and typesetting industry.\n"
const rightLorem = "Lorem Ipsam is samply dammy text of the printing and typosetting industry.\n ."

const App: React.FC = () => {
  const [leftTextBox, setLeftTextBox] = useState(leftLorem)
  const [rightTextBox, setRightTextBox] = useState(rightLorem)
  const [value, setValue] = useState(0);
  const isPuru = value ? false : true

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header handleChange={handleChange} value={value} />
        <Grid container justify="space-evenly" alignItems="flex-start">
          <CardWrapper>
            <TextFieldComponent
              data-test="TextField1"
              TextBox={{
                state: leftTextBox,
                setState: setLeftTextBox
              }}
            />
            <WordContainer data-test="Word1" texts={[leftTextBox, rightTextBox]} puru={isPuru} type="added" />
          </CardWrapper>
          <CardWrapper>
            <TextFieldComponent
              data-test="TextField2"
              TextBox={{
                state: rightTextBox,
                setState: setRightTextBox
              }}
            />
            <WordContainer data-test="Word2" texts={[leftTextBox, rightTextBox]} puru={isPuru}  type="removed" />
          </CardWrapper>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
