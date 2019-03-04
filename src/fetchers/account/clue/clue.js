import axios from 'axios'
import network_util from '@/utils/network_util'
import config from '@/config'


export default {
//公海列表
    list(params,cb,fb){
        axios.get(config.hostUrl+'/crm-customer/clue/list/page', {params:params})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
//客户详情
    clue_top(params,cb,fb){
        axios.get(config.hostUrl+'/crm-customer/clue/top/info', {params:params})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
//基本信息
    details(params,cb,fb){
        axios.get(config.hostUrl+'/crm-customer/clue/get/details',{params:params})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
//操作日志
    operation_logs(params,cb,fb){
        axios.get(config.hostUrl+'/crm-customer/operationrecord/list/page',{params:params})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
//来源记录
    source_records(params,cb,fb){
        axios.get(config.hostUrl+'/crm-customer/registerrecord/list',{params:params})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    //沟通记录列表
    getCommunicationRecord(params,cb,fb){
        axios.get(config.hostUrl+'/crm-customer/communicationrecord/get/list',{params:params})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
};
