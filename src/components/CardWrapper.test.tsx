import React from 'react';
import { mount, shallow } from 'enzyme'
import { CardWrapper } from './CardWrapper';
import { Card } from '@material-ui/core';

const sel = (id: string) => `[data-test="${id}"]`
const wrapper = mount(<CardWrapper/>);

it('renders without crashing', () => {
    shallow(<CardWrapper />);
});

test('renders CardContainer', () => {
    const card = wrapper.find(sel('Cards'))
    expect(card.contains(<Card />)).toBeFalsy()
})