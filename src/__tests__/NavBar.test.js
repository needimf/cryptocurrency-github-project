import React from 'react';
import NavBar from './../components/NavBar/NavBar';
import { shallow } from 'enzyme';

test("Navbar calls handleNavBarClickMobile when navbar-hamburger button is clicked.", () => {
  const wrapper = shallow(<NavBar />);
  const button = wrapper.find('.navbar-burger');
  let instance = wrapper.instance();
  jest.spyOn(instance, 'handleNavBarClickMobile');

  button.simulate('click');
  expect(instance.handleNavBarClickMobile).toHaveBeenCalled();
})