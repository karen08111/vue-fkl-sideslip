import fklInput from './src/fkl-input.vue'

// 为组件添加 install 方法，用于按需引入
fklInput.install = function (Vue) {
    Vue.component(fklInput.name, fklInput)
};

export default fklInput