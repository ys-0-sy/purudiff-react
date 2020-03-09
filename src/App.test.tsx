import React from 'react';
import {mount, configure} from 'enzyme'
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const sel = (id: string) => `[data-test="${id}"]`

test('renders initial Check', () => {
  const wrapper = mount(<App />);
  const wordField1 = wrapper.find(sel('TextField1'))
  expect(wordField1.text()).toBe('Text')

  const wordField2 = wrapper.find(sel('TextField2'))
  expect(wordField2.text()).toBe('Text')

  const word1 = wrapper.find(sel('Word1'))
  expect(word1.text()).toBe('Lorem Ipsum is simply dummy \n[←]text of the printing and typesetting industry.\n[←]')
  const word2 = wrapper.find(sel('Word2'))
  expect(word2.text()).toBe('Lorem Ipsam is samply dammy text of the printing and typosetting industry.\n[←] .')
});
