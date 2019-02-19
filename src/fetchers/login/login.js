import axios from 'axios'
import network_util from '@/utils/netword_util'
import config from '@/config'
//
// axios.interceptors.request.use((config) => {
//     config.headers['X-Requested-With'] = 'XMLHttpRequest'
//     return config
// })
// axios.interceptors.response.use((response)=>{
//     const data = response.data;
// })


export default {
    login(params,cb,fb){
        axios.post(config.sso_host+'/api/auth/login', params)
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    get_code(user_name, cb, fb){
        axios.post(config.sso_host+'/api/auth/send_member_new_password', {user_name: user_name})
            .then( (response) => {
                network_util.success(response, cb)
            })
            .catch((err) => {
                network_util.fail(err, fb)
            })
    },
    me(cb, fb){
        axios.get(config.sso_host+'/api/auth/me')
            .then( (response) => {
                network_util.success(response, cb)
            })
            .catch((err) => {
                network_util.fail(err, fb)
            })
    },
};
