<template>


    <div class="box">
        <div class="swith_box_check">
            <el-button-group>
                <el-button icon='el-icon-arrow-left' @click="prev"/>
                <el-button icon='el-icon-arrow-right'  @click="next"/>
            </el-button-group>
        </div>
        <div>
            <el-table :data="days" border :show-header="false" ref="days_table">
                <el-table-column prop="hour" :align="'center'"></el-table-column>
                <el-table-column prop="0" :align="'center'"></el-table-column>
                <el-table-column prop="1" :align="'center'"></el-table-column>
                <el-table-column prop="2" :align="'center'"></el-table-column>
                <el-table-column prop="3" :align="'center'"></el-table-column>
                <el-table-column prop="4" :align="'center'"></el-table-column>
                <el-table-column prop="5" :align="'center'"></el-table-column>
                <el-table-column prop="6" :align="'center'"></el-table-column>
            </el-table>
            <el-table disabled :data="occupies" border :show-header="false">
                <el-table-column prop="hour" :formatter="format_hour" :align="'center'"></el-table-column>
                <el-table-column label="周一" prop="0" :align="'center'">
                    <template slot-scope="scope">
                        <el-switch
                                v-model="scope.row[scope.column.property]"
                                :disabled="isCurrentWeek"
                                active-color="#13ce66"
                                inactive-color="#ff4949">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="周二" prop="1" :align="'center'">
                    <template slot-scope="scope">
                        <el-switch
                                v-model="scope.row[scope.column.property]"
                                :disabled="isCurrentWeek"
                                active-color="#13ce66"
                                inactive-color="#ff4949">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="周三" prop="2" :align="'center'">
                    <template slot-scope="scope">
                        <el-switch
                                v-model="scope.row[scope.column.property]"
                                :disabled="isCurrentWeek"
                                active-color="#13ce66"
                                inactive-color="#ff4949">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="周四" prop="3" :align="'center'">
                    <template slot-scope="scope">
                        <el-switch
                                v-model="scope.row[scope.column.property]"
                                :disabled="isCurrentWeek"
                                active-color="#13ce66"
                                inactive-color="#ff4949">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="周五" prop="4" :align="'center'">
                    <template slot-scope="scope">
                        <el-switch
                                v-model="scope.row[scope.column.property]"
                                :disabled="isCurrentWeek"
                                active-color="#13ce66"
                                inactive-color="#ff4949">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="周六" prop="5" :align="'center'">
                    <template slot-scope="scope">
                        <el-switch
                                v-model="scope.row[scope.column.property]"
                                :disabled="isCurrentWeek"
                                active-color="#13ce66"
                                inactive-color="#ff4949">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="周日" prop="6" :align="'center'">
                    <template slot-scope="scope">
                        <el-switch
                                v-model="scope.row[scope.column.property]"
                                :disabled="isCurrentWeek"
                                active-color="#13ce66"
                                inactive-color="#ff4949">
                        </el-switch>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import fetcher from '@/fetchers/account/clueManage/shareManage'
    import moment from 'moment'
    moment.locale('zh_CN')

    export default {
        props:{
            userId:{
                type:String,
                required:true
            },
        },
        data(){
            return {
                start_date:moment().format('YYYY-MM-DD'),
                occupies:function () {
                    var [b, e] =[0,3]

                    var ret = []

                    for(var h=b ;h < e; h++){
                        ret.push({
                            hour: h,
                            0: 0,
                            1: 0,
                            2: 0,
                            3: 0,
                            4: 0,
                            5: 0,
                            6: 0
                        })
                    }
                    return ret
                }(),
                days:function () {
                    let days=[{}];
                    for(var i=0; i<7; i++){
                        days[0][i+'']=moment().add(i,'days').format('YYYY-MM-DD(ddd)')
                    }
                    return days;
                }(),
            }
        },
        computed:{
            isCurrentWeek:function () {

                console.log()
                let date = moment().format('YYYY-MM-DD');
                if(moment(date).isSame(this.start_date)){
                    return false;
                }else{
                    console.log('aaa')
                    return true;
                }
            }
        },
        methods:{
            prev () {
                this.start_date = moment(this.start_date).subtract(7, 'days').format('YYYY-MM-DD');
                let _days=[{}];
                for(var i=0; i<7; i++){
                    _days[0][i+'']=moment(this.start_date).add(i,'days').format('YYYY-MM-DD(ddd)')
                }
                this.days = _days;

                //如果在当前日期之前，那么应该重新请求数据，如果在当前时间之后，那么数据不变

                if(moment(this.start_date).isBefore(moment().format('YYYY-MM-DD'))){
                    //getlist
                    this.getOccupyList(this.start_date);
                }else{
                   return false;
                }
            },
            next () {
                this.start_date = moment(this.start_date).add(7, 'days').format('YYYY-MM-DD');
                let _days=[{}];
                for(var i=0; i<7; i++){
                    _days[0][i+'']=moment(this.start_date).add(i,'days').format('YYYY-MM-DD(ddd)')
                }
                this.days = _days;

                //如果在当前日期之前，那么应该重新请求数据，如果在当前时间之后，那么数据不变
                if(moment(this.start_date).isAfter(moment().format('YYYY-MM-DD'))){
                    return false;
                }else{
                    this.getOccupyList(this.start_date);
                }
            },

            format_hour (row, column) {
                if(row.hour==0){
                    return '9:00 ~ 12:00';
                }else if(row.hour ==1){
                    return '14:00 ~ 18:00';
                }else if(row.hour == 2){
                    return '19:00 ~ 21:00';
                }else{
                    return ''
                }
            },
            getOccupyList(val){
                fetcher.scheduling_list({userId:1,dateStr:val},(response)=>{
                    let detail = response.data.data;
                    //取数据
                    let _days=[];//日期数组
                    let myData=[];//需要数据
                    let date = moment(val).format('YYYY-MM-DD');

                    for(var i=0; i<7; i++){
                        _days.push(moment(date).add(i,'days').format('YYYY-MM-DD'))
                    }
                    for(let i=0;i<7;i++){
                        let arr = detail[_days[i]]
                        myData.push(arr.morning)
                        myData.push(arr.afternoon)
                        myData.push(arr.night)
                    }
                    for(var i = 0; i < 7; i++){
                        for(let j=0;j<3;j++){
                            let idx = (i*3)+j; //zong shu
                            let hour = idx%3;
                            let wday = Math.floor(idx/3);
                            let [row,column] = [hour,wday];

                            this.occupies[row][column] = myData[idx]=='1'?true:false;
                        }
                    }
                })
            },
            submit(){
                let array=this.occupies;

                for(let i=0;i<7;i++){
                    for(let j=0;j<3;j++){
                        array[j][i] = this.occupies[j][i] ? '1':'0';
                    }
                }

                fetcher.edit_scheduling_list({userId:this.userId,schedulingDTOS:array},(response)=>{
                    if(response.data.code==100000){
                        this.$message.success('修改成功')
                    }
                })
            },
            load(){
                let dateStr = moment(this.start_date).format('YYYY-MM-DD');
                this.getOccupyList(dateStr);
            }
        },
        mounted () {

        }
    }
</script>
<style>
    .box{
        position: relative;
    }
    .el-table--enable-row-hover .el-table__body tr:hover>td{
        background-color: #f0f9eb;
    }
    .swith_box_check{
        box-sizing: border-box;
        padding: 0 0 20px 0;
        /*position: absolute;*/
        /*right: 0;*/
        /*top: -60px;*/
    }
</style>
