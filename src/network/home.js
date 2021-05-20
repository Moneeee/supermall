//因为不是 export default，所以这样导入
//home引入request，开始掉接口
import {request} from 'network/request'

//防止页面多次调用request，所以要面向getHomeMultidata()开发，引入到home组件里。
export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}

export function getHomeGoods(type,page) {
    return request({
        url: '/home/data',
        params:{
           type,
            page,
        }
    })
}





// 函数调用 -> 压入函数栈(保存函数调用过程中所有变量)
// 函数调用结束 -> 弹出函数栈(释放函数所有的变量)
// function test() {
//   const names = ['why', 'aaa']
// }
//
// test()