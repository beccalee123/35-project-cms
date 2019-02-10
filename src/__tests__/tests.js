import React from "react";

import renderer from "react-test-renderer";
import CMS from "../components/cms/cms.js";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';

import createStore from "../store/";
const store = createStore();

describe('testing check', () => {
  it("is alive", () => {
    expect(true).toBeTruthy();
  });
});

describe('content', () => {
  it('renders an h1 on pageload', () => {
    let component = shallow(<CMS/>);
    expect(component.find("h1").exists()).toBeTruthy();
  });

  // it('contains li elements that can render records', () => {
  //   let component = mount(
  //     <Provider store={store}>
  //       <CMS />
  //     </Provider>
  //   );
  //   let li = component.find("li");
  //   li.simulate("click");
  //   expect(component.find(".records").exists()).toBeTruthy();
  // });

});