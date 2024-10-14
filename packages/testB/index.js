import test from './TestB.vue';
test.install = function (Vue) {
  Vue.component(test.name, test);
};
export default test;
