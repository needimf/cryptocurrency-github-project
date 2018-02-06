import React from 'react';
import Cards from './../components/Cards/Cards';
import { shallow } from 'enzyme';

test("Cards returns '<div className='has-text-centered'>Trouble obtaining Top Six data, try refreshing the page.</div>' if no project data is passed down to it", () => {
  const wrapper = shallow(<Cards projectData={undefined} />);
  expect(wrapper.text()).toBe('Trouble obtaining Top Six data, try refreshing the page.');
});

test('Cards renders 4 cards if given an array of projects of length 4', () => {
  const wrapper = shallow(<Cards projectData={[{},{},{},{}]} />);
  expect(wrapper.find('.columns').children().length).toBe(4);
})