import axios from 'axios'
import network_util from '@/utils/network_util'
import config from '@/config'

export default {
    list(params,cb,fb){
        axios.get(config.sysUrl+'/permission/getPermissionList', {params:params})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    create_permission(params,cb,fb){
        axios.post(config.sysUrl+'/permission/createPermission', params)
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    getPermissionById(params,cb,fb){
        axios.get(config.sysUrl+'/permission/getPermissionById', {params:params})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    updatePermissionById(params,cb,fb){
        axios.get(config.sysUrl+'/permission/savePermission', {params:params})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    detelePermissionById(params,cb,fb){
        axios.get(config.sysUrl+'/permission/delPermission', {params:params})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },

    getAllPermission(params,cb,fb){
        axios.get(config.sysUrl+'/permission/getAllPermissions',{params:params})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    }

};
