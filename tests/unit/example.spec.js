import Vue from 'vue'
import ElementUI from 'element-ui'

//差 组件识别，异步返回
Vue.use(ElementUI)

import { mount,shallowMount } from '@vue/test-utils'
import query from '@/commons/clue_query_form/query.vue'
import myTab from '@/commons/myTab/tab.vue'

import clue_detail from '@/components/clue_detail/first.vue'

//可以通过wrapper.vm属性访问一个实例所有的方法和属性 ,test computed
describe('query',()=>{
    // it('submit method should be called',()=>{
    //     const wrapper = mount(query,{
    //         propsData: {
    //             clueAForm:{
    //                 name:'yzf'
    //             }
    //         }
    //     })
    //     expect(wrapper.props().clueAForm.name).toBe('yzf')
    //     wrapper.destroy()
    // })
    it('点击搜索触发查询',()=>{
        const wrapper = mount(query,{
            propsData: {
                clueAForm:{
                    name:'yzf'
                }
            }
        });
        const mokeFn = jest.fn();
        wrapper.setMethods({
            onSubmit:mokeFn
        })
        // const elBtn = mount({name:'el-button'})
        // wrapper.vm.$on('add', mockFn1);  自定义event  触发s
        // wrapper.find(el-button).vm.$emit('add', 100);自定义事件使用$emit触发
        wrapper.find('.btn').trigger('click');
        //
        // expect(mokeFn).toBeCalled();
        // expect(mockFn).toHaveBeenCalledTimes(1)
    })
})

describe('myTab',()=>{
    let wrapper
    it('render a div',()=>{
        beforeEach(()=>{
            wrapper = mount(myTab,{
                slots:{
                    default : '<div class="fake-msg"></div>'
                }
            })
        })
        afterEach(()=>{
            wrapper.destroy()
        })

    })
    it('msg',()=>{
        const list =wrapper.find('.content');
        expect(list.contains('div.fake-msg')).toBe(true)//toBeTruthy()
    })
})



// var request = require('request');
// describe('Test', function() {
//     it('a test', function() {
//         var p = new Promise(function(resolve) {
//             request('http://www.163.com', function(err, res, body) {
//                 resolve(res);
//             });
//         });
//         return p.then(function(res) {
//             expect(res.statusCode).toBe(200);
//         });
//     });
// });

//test watch
// describe('Test watch', () = > {
//     let spy;
//     beforeEach(() = > {
//         wrapper = shallow(Test2);
//         spy = jest.spyOn(console, 'log')
//     });
//     afterEach(() = > {
//         wrapper.destroy();
//         spy.mockClear()
//     });
//     it('is called with the new value in other cases', (done) = > {
//         wrapper.vm.inputValue = 'ok';
//         wrapper.vm.$nextTick(() = > {
//             expect(spy).toBeCalled();
//             done()
//             })
//     });
//     it('is not called with same value', (done) = > {
//         wrapper.vm.inputValue = 'ok';
//         wrapper.vm.$nextTick(() = > {
//             // 清除已发生的状态
//             spy.mockClear();
//             wrapper.vm.inputValue = 'ok';
//             wrapper.vm.$nextTick(() = > {
//                 expect(spy).not.toBeCalled();
//                 done()
//             })
//         })
//     });
// })
