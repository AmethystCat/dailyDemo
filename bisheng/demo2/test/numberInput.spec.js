import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NumberInput from '../components/numberInput';

Enzyme.configure({ adapter: new Adapter() });

describe('NumberInput UT: ', () => {
  test('snapshot', () => {
    const component = renderer.create(<NumberInput />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
  
  test('should_input_value_is_0_when_do_not_set_default_value_and_value_prop', () => {
    // given
    const wrapper = shallow(<NumberInput />);
    // when
    const inputProps = wrapper.props();
    const { value } = inputProps;
    // then 
    expect(value).toEqual('0');
  });
  
  test('should_input_value_is_1_when_set_default_value_prop_is_1', () => {
    // given
    const wrapper = shallow(<NumberInput defaultValue="1" />);
    // when
    const inputProps = wrapper.props();
    const { value } = inputProps;
    // then 
    expect(value).toEqual('1');
  });
  
  test('should_input_value_is_2_when_set_value_prop_is_2', () => {
    // given
    const wrapper = shallow(<NumberInput value="2" />);
    // when
    const { value } = wrapper.props();
    // then
    expect(value).toEqual('2');
  });
  
  test('should_input_value_is_-1_when_click_"-"_button', () => {
    // given
    const wrapper = mount(<NumberInput />);
    // when
    wrapper.find('.anticon-minus').simulate('click');
    // 注意children().props()才会输出Input的props；注意区分root instance (NumberInput)和 children(Input)
    const { value } = wrapper.children().props();
    // then
    expect(value).toEqual('-1'); 
  });
  
  test('should_input_value_is_1_when_click_"+"_button', () => {
    // given
    const wrapper = mount(<NumberInput />);
    // when
    wrapper.find('.anticon-plus').simulate('click');
    // 注意children().props()才会输出Input的props；注意区分root instance (NumberInput)和 children(Input)
    const { value } = wrapper.children().props();
    // then
    expect(value).toEqual('1'); 
  });
  
  test('should_input_value_is_-0.9_when_set_accuracy_is_0.1_and_click_"-"_button', () => {
    // given
    const wrapper = mount(<NumberInput accuracy={0.1} />);
    // when
    wrapper.find('.anticon-minus').simulate('click');
    // 注意children().props()才会输出Input的props；注意区分root instance (NumberInput)和 children(Input)
    const { value } = wrapper.children().props();
    // then
    expect(value).toEqual('-0.1'); 
    wrapper.unmount();
  });
  
  test('should_input_value_is_0.1_when_set_accuracy_is_0.1_and_click_"+"_button', () => {
    // given
    const wrapper = mount(<NumberInput accuracy={0.1} />);
    // when
    wrapper.find('.anticon-plus').simulate('click');
    // 注意children().props()才会输出Input的props；注意区分root instance (NumberInput)和 children(Input)
    const { value } = wrapper.children().props();
    // then
    expect(value).toEqual('0.1'); 
    wrapper.unmount();
  });
  
  test('should_call_onChange_handler_and_pass_1_in_onChange_handler_when_click_"+"_button', () => {
    // given
    const onChangeMock = jest.fn();
    const wrapper = mount(<NumberInput onChange={onChangeMock} />);
    // when
    wrapper.find('.anticon-plus').simulate('click');
    // then
    expect(onChangeMock).toHaveBeenCalled();
    expect(onChangeMock).toHaveBeenCalledWith('1');
    wrapper.unmount();
  });
  
  test('should_call_onChange_handler_and_pass_-1_in_onChange_handler_when_click_"-"_button', () => {
    // given
    const onChangeMock = jest.fn();
    const wrapper = mount(<NumberInput onChange={onChangeMock} />);
    // when
    wrapper.find('.anticon-minus').simulate('click');
    // then
    expect(onChangeMock).toHaveBeenCalled();
    expect(onChangeMock).toHaveBeenCalledWith('-1');
    wrapper.unmount();
  });

  test('should_stop_plus_operation_when_interceptor_return_false', () => {
    // given
    const interceptorMock = jest.fn((originValue, newValue, operate) => false); 
    const wrapper = mount(<NumberInput interceptor={interceptorMock} />);
    // when
    wrapper.find('.anticon-plus').simulate('click');
    const inputValue = wrapper.children().props().value;
    // when
    expect(interceptorMock).toHaveBeenCalled();
    expect(interceptorMock).toHaveBeenCalledWith('0', '1', 'PLUS');
    expect(inputValue).toEqual('0');
    wrapper.unmount();
  });
  
  test('should_stop_minus_operation_when_interceptor_return_false', () => {
    // given
    const interceptorMock = jest.fn((originValue, newValue, operate) => false); 
    const wrapper = mount(<NumberInput interceptor={interceptorMock} />);
    // when
    wrapper.find('.anticon-minus').simulate('click');
    const inputValue = wrapper.children().props().value;
    // when
    expect(interceptorMock).toHaveBeenCalled();
    expect(interceptorMock).toHaveBeenCalledWith('0', '-1', 'MINUS');
    expect(inputValue).toEqual('0');
    wrapper.unmount();
  });

  test('should_input_value_is_1_when_the_value_prop_which_is_equal_1_is_passed_dynamic', () => {
    // 测试动态传入value的情景，就是在Form被装饰后值被getFieldDecorator接管的情景
    // given
    const wrapper = mount(<NumberInput />);
    // when
    wrapper.setProps({ value: '1' });
    const inputValue = wrapper.children().props().value;
    // then
    expect(inputValue).toEqual('1');
    wrapper.unmount();
  });

  test('should_call_onChange_handler_when_input_value_by_keyboard', () => {
    // given
    const onChangeMock = jest.fn();
    const wrapper = shallow(<NumberInput onChange={onChangeMock} />);
    const instance = wrapper.instance();
    const value = '100';
    const mockEvent = { target: { value } };
    // when
    instance.onChangeHandler(mockEvent);
    // then
    expect(onChangeMock).toHaveBeenCalled();
    expect(onChangeMock).toHaveBeenCalledWith(value);
  });

  test('should_not_call_onChange_handler_when_the_input_value_is_not_number_by_keyboard', () => {
    // given
    const onChangeMock = jest.fn();
    const wrapper = shallow(<NumberInput onChange={onChangeMock} />);
    const instance = wrapper.instance();
    const value = 'a';
    const mockEvent = { target: { value } };
    // when
    instance.onChangeHandler(mockEvent);
    // then
    expect(onChangeMock).not.toHaveBeenCalled();
  });
  
  test('should_call_onChange_handler_when_the_input_value_is_"-"_by_keyboard', () => {
    // 兼容负数的前缀
    // given
    const onChangeMock = jest.fn();
    const wrapper = shallow(<NumberInput onChange={onChangeMock} />);
    const instance = wrapper.instance();
    const value = '-';
    const mockEvent = { target: { value } };
    // when
    instance.onChangeHandler(mockEvent);
    // then
    expect(onChangeMock).toHaveBeenCalled();
    expect(onChangeMock).toHaveBeenCalledWith(value);
  });
});
