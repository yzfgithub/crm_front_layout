import axios from 'axios'
import network_util from '@/utils/network_util'
import config from '@/config'

export default {
    list(params,cb,fb){
        axios.get(config.sysUrl+'/crm-system/role/getRoleList', {params:params})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    createRoles(params,cb,fb){
        axios.post(config.sysUrl+'/crm-system/role/createRole', params)
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    getRoleInfoById(params,cb,fb){
        axios.get(config.sysUrl+'/crm-system/role/getRoleInfoById', {params:params})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    updateRoles(params,cb,fb){
        axios.post(config.sysUrl+'/crm-system/role/saveRolePermissions', params)
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
};
