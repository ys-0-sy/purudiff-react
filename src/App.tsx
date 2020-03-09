import React from 'react';
import { useState } from 'react'
import './App.scss';
import { Grid, Tabs, Tab, AppBar } from '@material-ui/core'
import { WordContainer } from './components/WordContainer';
import { TextFieldComponent } from './components/TextFieldComponent';
import { CardWrapper } from './components/CardWrapper';
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

function App() {
  const [leftTextBox, setLeftTextBox] = useState(leftLorem)
  const [rightTextBox, setRightTextBox] = useState(rightLorem)
  const [value, setValue] = useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const isPuru = value ? false : true

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Tabs
          value={value}
          variant="fullWidth"
          onChange={handleChange}
          className={"TabStyle"}
        >
          <Tab label="Purudiff" />
          <Tab label="Diff" />
        </Tabs>
        </AppBar>
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
        </ThemeProvider>
    </div>
  );
}

export default App;
