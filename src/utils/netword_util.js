export default {
    success(response, cb){
        if(cb){
            cb(response)
        }else{
            vm.$message({
                type: 'success',
                message: '操作成功'
            });
        }
    },
    fail(err, fb){
        if(fb){
            fb(err)
        }else{
            if(err.response && err.response.status == 403){
                vm.$message({
                    type: 'error',
                    message: '权限不足'
                });
            }else if(err.response && err.response.status == 401){
                vm.$message({
                    type: 'error',
                    message: '权限不足'
                });
            }else{
                vm.$message({
                    type: 'error',
                    message: err.response.data.message
                });
            }
        }
    }
};
