import login from '@/packages/login/login'

export default {
    mappings:[
        {
            path:'/login',
            meta:{
                flag:false
            },
            components:{default:login}
        }
    ]
}
