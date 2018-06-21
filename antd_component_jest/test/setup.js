/**
 * 升级到最新版本的react，react-dom及react-test-renderer 则不需要下面的配置，react 15.x版本需要，被坑惨了
 * https://github.com/YouCanBookMe/react-datetime/issues/384
 * https://github.com/facebook/react/issues/8324
 * https://github.com/chenglou/react-motion/issues/447
 */

// // when unhandledRejection happens, do nothing
// process.on('unhandledRejection', () => {
// });

// jest.mock('react-dom', () => ({
//   findDOMNode() {
//     return {};
//   },
//   render() {
//     return {};
//   }
// }));
