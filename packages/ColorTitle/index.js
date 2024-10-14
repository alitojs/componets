import test from './ColorTitle.vue';
test.install = function (Vue) {
  Vue.component(test.name, test);
};
export default test;
