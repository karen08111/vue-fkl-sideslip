# vue-plug-in
```javascript
 cnpm install vue-fkl-sideslip // 或者npm
```

```javascript
// 引入
import vueSideslip from 'vue-fkl-sideslip'
import 'vue-fkl-sideslip/lib/vue-fkl-sideslip.css'

Vue.use(vueSideslip);
```

```javascript
// 调用
<vue-sideslip @click="call" v-for="(item, index) in arr" :operationList="item.operationList" :name="index" :key="index">
    <p>标题</p>
</vue-sideslip>
```

```javascript
//  这是demo   可自己随意定制自己想要的样式  
  data () {
    return {
        arr: [
          {
            title: '标题1',
            operationList: [ // 侧滑菜单列表  
              {
                name: '删除', // 
                style: 'background: #f44336;color: #ffffff;line-height: 100px;width: 50px;text-align: center;', // 自定义样式
                click: 'del', // 点击事件回调
                disabledStyle: 'opacity:0.5;', // 按钮禁用样式
                html: (item) => { // 这里可自由添加侧滑结构内容
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
```

```javascript
methods: {
    call (val, index) {
      console.log(val, index);
    },
  }
```
|参数|描述  |
|--|--|
| operationList（Array） | 侧滑菜单列表（列表项字段按demo所示） |
| name（Number） | 循环列表的索引(必填，demo所示) |
| click（Function） | 侧滑菜单点击回调 |
| height（String） | 列表项高度，默认‘100px’ |
| transaction（String） | 过度时间，默认‘0.3s’ |
| 支持插槽 | solt，demo所示 |

