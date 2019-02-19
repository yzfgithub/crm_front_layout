<template>
    <div class="login_bg">
        <div class="box">
            <div class="logo"><img src="../../assets/logo.png" alt=""></div>
            <div class="box-left">
                <img src="../../assets/login_left.png" alt="">
            </div>
            <div class="box-right">
                <div class="title">WLC单点登陆登陆</div>
                <div class="user">
                    <span>账号</span>
                    <div class="input">
                        <input v-model="account" type="text" placeholder="请输入拼音缩写">
                    </div>

                </div>
                <div class="qrcode">
                    <div class="input">
                        <input v-model="qrcode" type="text" placeholder="请输入拼音缩写">
                    </div>
                    <div class="qrcode_btn" @click = 'getCode'>
                        钉钉验证码
                    </div>

                </div>
                <div class="btn" @click = 'login'>
                    登录
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import fetcher from '@/fetchers/login/login'
    export default {
        data(){
            return{
                account:'',
                qrcode:''
            }
        },
        methods:{
            getCode(){
                fetcher.get_code({username:this.account},(response)=>{
                    this.$message.success('验证吗发送成功')
                })

            },
            login(){
                fetcher.login({user_name:this.account,password:this.qrcode},(response)=>{
                    var token = response.data.data.token;

                    //单点登陆
                    // let from = this.getUrlParam('from');
                    // console.log(from,'from',token)
                    // if(from){
                    //     window.location.href = from+'/?token='+token;
                    //     window.navigate("http://shanghepinpai.com");
                    // }
                    //
                    // if(token){
                    //     localStorage.setItem('token', token);
                    //     axios.defaults.headers['Authorization'] = 'Bearer '+ token;
                    //
                    //     fetcher.me((response) => {
                    //       localStorage.setItem('permissions', JSON.stringify(response.data.permissions));
                    //       localStorage.setItem('applications', JSON.stringify(response.data.applications));
                    //       localStorage.setItem('user_name',response.data.user_name);
                    //     this.$router.push({path:'account'})
                    //     })
                    // }else{
                    //     this.$message('用户名或密码错误,请重新输入!');
                    // }
                },(err)=>{
                    this.$message('用户名或密码错误,请重新输入!');
                })

            },
            getUrlParam(name){
                var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
                var r = window.location.search.substr(1).match(reg);  //匹配目标参数
                if (r!=null) return unescape(r[2]); return null; //返回参数值
            },

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .login_bg{
        width:100%;
        height: 100%;
        background-image: url("../../assets/login_bg.png");
        background-size: 100% 100%;
        position: relative;
    }
    .box{
        position: absolute;
        left: 0;
        right: 0;
        top:0;
        bottom: 0;
        margin: auto;
        width: 784px;
        height: 484px;
        background-color: #fff;
        display: flex;
        border-radius: 16px;
        overflow: hidden;
    }
    .logo{
        position: absolute;
        left: 25px;
        top: 25px;
    }
    .logo img{
        display: inline-block;
        height: 30px;
    }

    .box-left{
        height: 484px;
        width: 484px;
        background-color: #F3F6F8;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .box-left img{
        display: inline-block;
        height: 340px;
    }
    .box-right{
        flex: 1;
        padding:0 40px;
    }
    .box-right .title{
        margin-top: 86px;
        width:200px;
        height:28px;
        font-size:24px;
        font-family:PingFangSC-Semibold;
        font-weight:600;
        color:rgba(248,84,46,1);
        line-height:28px;
    }
    .box-right .user{
        margin-top: 32px;
        height: 40px;
        width: 220px;
        padding-left: 50px;
        border-radius:4px;
        border:1px solid rgba(217,220,222,1);
        position: relative;
        box-sizing: border-box;

    }
    .box-right .user span{
        width: 50px;
        text-align: center;
        position: absolute;
        left: 0;
        top: 0;
        line-height: 40px;
        font-size:14px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(102,102,102,1);
    }
    .box-right .user .input{
        width: 100%;
        height: 100%;
        display: flex;
    }
    .box-right .user .input input::placeholder,.box-right .qrcode .input input::placeholder{
        color:rgba(199,199,199,1);
        font-size:14px;
        font-family:PingFangSC-Regular;
        font-weight:400;
    }
    .box-right .user input, .box-right .qrcode input{
        border: none;
        outline-style: none;
        padding-left: 5px;
    }
    .box-right .qrcode{
        margin-top: 16px;
        height: 40px;
        width: 220px;
        /*border-radius:4px;*/
        /*border:1px solid rgba(217,220,222,1);*/
        position: relative;
        display: flex;
    }
    .box-right .qrcode .input{
        width: 100%;
        height: 100%;
        flex: 1;
        display: flex;
        border-radius: 4px 0 0 4px;
        border:1px solid rgba(217,220,222,1);
        border-right-width: 0;
        box-sizing: border-box;

    }
    .box-right .qrcode input{
        border-radius: 4px 0 0 4px;
    }
    .box-right .qrcode .qrcode_btn{
        width: 88px;
        background-color: #FFA80B;
        font-size:12px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(255,255,255,1);
        border-radius:0 4px 4px 0;
        line-height: 40px;
        text-align: center;
        cursor: pointer;

    }

    .box-right .btn{
        margin-top: 70px;
        width:220px;
        height:40px;
        background:rgba(248,84,46,1);
        border-radius:4px;
        line-height: 40px;
        color:#fff;
        cursor: pointer;
    }
</style>
