import React from 'react';
import {mount, configure, shallow} from 'enzyme'
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import { TextField } from '@material-ui/core';

configure({ adapter: new Adapter() });

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
