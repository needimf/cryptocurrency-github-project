import React from 'react';
import Card from './../components/Card/Card';
import { shallow, mount } from 'enzyme';

test('Card renders the name given', () => {
  const wrapper = shallow(<Card project={{name: 'Bitcoin'}}/>);
  const p = wrapper.find('.name');
  expect(p.text()).toBe('Bitcoin');
});

test('Card does not render the image if it is not a Top Six card', () => {
  const wrapper = shallow(<Card project={{}} isTopSix={false} />);
  expect(wrapper.find('.image').exists()).toEqual(false);
});