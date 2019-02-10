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
