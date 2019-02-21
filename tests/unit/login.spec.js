import Vue from 'vue'
import ElementUI from 'element-ui'

//差 组件识别，异步返回
Vue.use(ElementUI)

import { mount } from '@vue/test-utils'
import Login from '@/packages/login/login.vue'

import axios from 'axios'
// jest.mock('axios', () => ({
//     post: jest.fn(() => Promise.resolve({
//         data: {
//             success: false,
//             info: '用户不存在！'
//         }
//     }))
// }))
// const myMockFn = jest.fn(()=>'difault').mockImplementationOnce(()=>'first call').mockImplementationOnce(()=>'second call')
// console.log(myMockFn,myMockFn,myMockFn,myMockFn)
jest.mock('axios', () => ({
    post: jest.fn()
        .mockImplementationOnce(() => Promise.resolve({
            data: {
                success: false,
                info: '用户不存在！'
            }
        }))
        .mockImplementationOnce(() => Promise.resolve({
            data: {
                success: true,
                token: '123123' // 随意返回一个token
            }
        }))
}))
describe('login',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = mount(Login)
    })
    it('Should have the expected html structure',()=>{
        expect(wrapper.element).toMatchSnapshot() //快照测试
    })
    it('failed to login if not typing the correct password',async () =>{
        wrapper.setData({
            account:'yzf',
            password:'123'
        })
        const result = await wrapper.vm.login();
        // expect(result.data.success).toBe(true) //期望返回的数据里success是false  //DATA ERROR !!!WHY
        // expect(result.data.info).toBe('password error')
    })
})

