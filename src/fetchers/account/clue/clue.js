import axios from 'axios'
import network_util from '@/utils/netword_util'
import config from '@/config'


export default {
    list(params,cb,fb){
        axios.get(config.hostUrl+'/cluesubject/list', {params:params})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    details(id,cb,fb){
        axios.get(config.hostUrl+'/cluesubject/get/'+id)
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
};
