import React from 'react';
import {mount, shallow} from 'enzyme'
import App from './App';
import { TextField } from '@material-ui/core';
import { ThemeProvider } from "@material-ui/core/styles";
import { createMount } from "@material-ui/core/test-utils";

const sel = (id: string) => `[data-test="${id}"]`
const wrapper = mount(<App />);

it('renders without crashing', () => {
  shallow(<App />);
});

test('renders Header Button', () => {
  const puruButton = wrapper.find(sel('PuruButton'))
  expect(puruButton.contains(<button />)).toBeFalsy()

  const diffButton = wrapper.find(sel('DiffButton'))
  expect(diffButton.contains(<button />)).toBeFalsy()
})

test('render true color theme', () => {

  const exceptTheme = {
    palette: {
      primary: {
        light: "#43a047",
        main: "#388e3c",
        dark: "#1b5e20",
        contrastText: "#fff"
      },
      secondary: {
        light: "#ef5350",
        main: "#f44336",
        dark: "#b71c1c",
        contrastText: "#000"
      }
    }
  }
})

test('renders initial TextField', () => {
  const wordField1 = wrapper.find(sel('TextField1'))
  expect(wordField1.contains(<TextField />)).toBeFalsy()

  const wordField2 = wrapper.find(sel('TextField2'))
  expect(wordField2.contains(<TextField />)).toBeFalsy()
});

test('renders initial word', () => {
  const word1 = wrapper.find(sel('Word1'))
  expect(word1.text()).toBe('Lorem Ipsum is simply dummy \n[←]text of the printing and typesetting industry.\n[←]')

  const word2 = wrapper.find(sel('Word2'))
  expect(word2.text()).toBe('Lorem Ipsam is samply dammy text of the printing and typosetting industry.\n[←] .')
});
