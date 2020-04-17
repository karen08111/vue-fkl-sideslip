<template>
    <div :style="`width: 100%;height: ${height};position: relative;overflow: hidden`">
        <div class="sideslip" @touchmove="touchmove" :data-id="name"
             :style="`transition: all ${transaction} linear;`">
            <slot></slot>
            <div class="menuList">
                <div v-for="(item,key) in operationList" :style="item.disabledStyle ? item.disabledStyle + item.style : item.style"
                     :key="key" @click="item.disabled? '': $emit('click', item.click, name)" v-html="item.html(item)"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "vue-sideslip",
        props: {
            name: {
                type: Number,
            },
            height: {
                type: String,
                default: '100px'
            },
            transaction: {
                type: String,
                default: '.3s'
            },
            operationList: {
                type : Array,
                default: () => [
                    {
                        name: '删除',
                        style: 'background: #f44336;color: #ffffff;line-height: 100px;width: 50px;text-align: center;',
                        click: 'del',
                        html: (item) => {
                            return `<div>${item.name}</div>`
                        },
                    },{
                        name: '编辑',
                        style: 'background: #42b983;color: #ffffff;line-height: 100px;width: 50px;text-align: center;',
                        click: 'set',
                        html: (item) => {
                            return `<div>${item.name}</div>`
                        }
                    }
                ]
            },
        },
        data () {
            return {
                distance: 0,
                x: 0,
                id: null
            }
        },
        watch: {
            x (val, old) {
                let sideslip = Array.from(document.getElementsByClassName('sideslip'));
                let tarDom = sideslip.filter(data => +data.dataset.id === +this.name)[0];
                let notTarDom = sideslip.filter(data => +data.dataset.id !== +this.name);
                this.id = +(tarDom.dataset.id);
                let width = tarDom.getElementsByClassName('menuList')[0].clientWidth;
                if (val && old) {
                    if (val - old >  0) {
                        this.distance = 0;
                    } else if (val - old <  0) {
                        this.distance = -width;
                    }
                }
                tarDom.style.transform = `translateX(${this.distance+'px'})`;
                notTarDom.forEach(data => {
                    if(data.style.transform) {
                        data.style.transform = `translateX(0px)`
                    }
                });
            }
        },
        methods: {
            touchmove (e) {
                this.x = e.touches[0].pageX;
            }
        }
    }
</script>

<style scoped>
.sideslip {
   width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
}
.menuList {
    position: absolute;
    display: flex;
    left: 100%;
    top: 0;
    z-index: 1;
    /*transition: all .3s linear;*/
}
    .btn {
        display: inline-block;
        height: 100%;
    }
</style>