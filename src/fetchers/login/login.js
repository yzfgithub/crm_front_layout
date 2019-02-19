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
    post(datas, cb, fb){
        axios.post(config.baseUrl + '/login', {'data': datas})
            .then((response) => {
                network_util.success(response, cb)
            })
            .catch((err) => {
                network_util.fail(err, fb)
            })
    },

};
