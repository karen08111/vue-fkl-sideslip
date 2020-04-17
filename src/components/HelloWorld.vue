<template>
  <div class="hello">
    <div class="mode">
       <vue-sideslip @click="call" v-for="(item, index) in arr" :operationList="item.operationList" :name="index" :key="index">
         <p>标题</p>
       </vue-sideslip>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
        arr: [
          {
            title: '标题1',
            operationList: [
              {
                name: '删除',
                style: 'background: #f44336;color: #ffffff;line-height: 100px;width: 50px;text-align: center;',
                click: 'del',
                disabledStyle: 'opacity:0.5;',
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
          },{
            title: '标题2',
            operationList: [
              {
                name: '删除',
                style: 'background: #f44336;color: #ffffff;line-height: 100px;width: 50px;text-align: center;',
                click: 'del',
                html: (item) => {
                  return `<div>${item.name}</div>`
                },
              }
            ]
          },{
            title: '标题3',
            operationList: [
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
              },{
                name: '详情',
                style: 'background: #42b943;color: #ffffff;line-height: 100px;width: 50px;text-align: center;',
                click: 'detail',
                disabledStyle: 'opacity:0.5;',
                html: (item) => {
                  return `<div>${item.name}</div>`
                }
              }
            ]
          }
        ]
    }
  },
  methods: {
    dian(val) {
      console.log(val);
    },
    call (val, index) {
      console.log(val, index);
    },
    hand () {
      console.log('点击标题了')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  .mode {
     background: grey;
  }
</style>
