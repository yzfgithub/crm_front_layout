import axios from 'axios'
import network_util from '@/utils/netword_util'
import config from '@/config'

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
