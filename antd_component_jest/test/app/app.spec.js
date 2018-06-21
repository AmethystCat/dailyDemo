import React from 'react';
import TestRenderer from 'react-test-renderer';
import { T } from '../../src/app';

describe('app snapshot', () => {
  test('test', () => {
    const component = TestRenderer.create(<T />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});