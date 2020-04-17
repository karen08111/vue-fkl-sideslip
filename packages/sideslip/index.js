import vueSideslip from './src/vue-sideslip.vue'

// 为组件添加 install 方法，用于按需引入
vueSideslip.install = function (Vue) {
    Vue.component(vueSideslip.name, vueSideslip)
};

export default vueSideslip