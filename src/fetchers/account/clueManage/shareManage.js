import axios from 'axios'
import network_util from '@/utils/network_util'
import config from '@/config'


export default {
//我的客户各阶段列表
    rank_channel_list(params,cb,fb){
        axios.get(config.hostUrl+'/crm-customer/channel/list/name', {params:params})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    rank_list(params,cb,fb){
        axios.get(config.hostUrl+'/crm-customer/channel/list/rank/page', {params:params})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },


    assign_list(params,cb,fb){
        axios.get(config.hostUrl+'/crm-customer/cluedistributionrule/get/list', {params:params})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    }
};