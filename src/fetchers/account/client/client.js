import axios from 'axios'
import network_util from '@/utils/network_util'
import config from '@/config'


export default {
//我的客户各阶段列表
    stage_list(params,cb,fb){
        axios.get(config.hostUrl+'/clue/list/stage/page', {params:params})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },




    //product
    getProductList(params,cb,fb){
        axios.get(config.mcUrl+'/productList', {params:params})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    createOrder(params,cb,fb){
        axios.get(config.mcUrl+'/createOrder', {params:params})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    //赠课
    edit_presentation(params,cb,fb){
        axios.post(config.hostUrl+'/giveclassrecord/save/giveclassrecords', params)
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    //取消设备检测
    edit_quxiao_device(params,cb,fb){
        axios.post(config.hostUrl+'/examineRecordService/update/examinerecords', params)
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    //取消设备检测
    edit_yuyue_device(params,cb,fb){
        axios.post(config.hostUrl+'/examinerecord/save/examinerecords', params)
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    }
};
