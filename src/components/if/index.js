import React from 'react';
// import PropTypes from 'prop-types';

/**
 * render
 * renders initial conditions for conditional statements
 * @param {boolean} [condition=false]
 * @param {*} [children=null]
 * @returns
 */
const render = (condition = false, children = null) => {
  return !!condition ? children : null;
};

export /**
 * If
 * Conditional to handle if a condition is met
 * @param {*} props
 */
const If = props =>
  React.Children.map(props.children, child =>
    React.cloneElement(child, { condition: props.condition }),
  );

export /**
 * Then
 * The condition to render if the If has been met 
 * @param {*} props
 */
const Then = props => render(props.condition, props.children);
export /**
 * Else
 * The condition to render if the If has not been met
 * @param {*} props
 */
const Else = props => render(!props.condition, props.children);
export /**
 * When
 * Render when a certain condition has been met
 * @param {*} props
 */
const When = props => render(props.condition, props.children);
export /**
 * Unless
 * Render unless a specific condition has been met
 * @param {*} props
 */
const Unless = props => render(!props.condition, props.children);
