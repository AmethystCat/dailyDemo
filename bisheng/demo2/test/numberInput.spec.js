import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Input } from 'antd';
import NumberInput from '../components/numberInput';

Enzyme.configure({ adapter: new Adapter() });

describe('NumberInput UT: ', () => {
  test('snapshot', () => {
    const component = renderer.create(<NumberInput />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
  
  test('should_input_default_value_is_1_and_value_is_undefined_when_set_default_value_prop_is_1', () => {
    // when
    const wrapper = shallow(<NumberInput defaultValue="1" />);
    // given
    const inputProps = wrapper.props();
    const { defaultValue, value } = inputProps;
    // then 
    expect(defaultValue).toEqual('1');
    expect(value).toEqual(undefined);
  });
  
});
