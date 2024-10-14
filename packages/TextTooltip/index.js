import test from './TextTooltip.vue';
test.install = function (Vue) {
  Vue.component(test.name, test);
};
export default test;
