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
    getRankById(params,cb,fb){
        axios.get(config.hostUrl+'/crm-customer/channelrankingrule/get/details', {params:params})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    updateRankById(params,cb,fb){
        axios.post(config.hostUrl+'/crm-customer/channelrankingrule/update/details', params)
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
    },

    //排班
    scheduling_list(params,cb,fb){
        axios.get(config.hostUrl+'/crm-customer/scheduling/get/details', {params:params})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    edit_scheduling_list(params,cb,fb){
        axios.post(config.hostUrl+'/crm-customer/scheduling/save/list', params)
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },


};
