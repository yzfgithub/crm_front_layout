import axios from 'axios'
import network_util from '@/utils/network_util'
import config from '@/config'

export default {
    list(params,cb,fb){
        axios.get(config.mcUrl+'/crm-order/orderList', {params:params})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    order_details(params,cb,fb){
        axios.get(config.mcUrl+'/crm-order/orderDetail', {params:params})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    uploadImg(params,cb,fb){
        axios.post(config.mcUrl+'/crm-order/uploadCert', params)
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    submitUpload(params,cb,fb){
        axios.get(config.mcUrl+'/crm-order/uploadCallBack', {params:params})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },


};
