import axios from 'axios'
import network_util from '@/utils/network_util'
import config from '@/config'

export default {
    employee_list(params,cb,fb){
        axios.get(config.sysUrl+'/crm-system/adminmember/getAdminMemberList', {params:params})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    /*
    * 还没写的
    * */
    getEmployeeById(params,cb,fb){
        axios.get(config.sysUrl+'/crm-system/adminmember/getAdminMemberList', {params:params})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    getRoleList(){
        axios.get(config.sysUrl+'/crm-system/adminmember/getAdminMemberList', {params:params})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    updateEmployee(params,cb,fb){
        axios.post(config.sysUrl+'/crm-system/adminmember/getAdminMemberList', params)
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
};
