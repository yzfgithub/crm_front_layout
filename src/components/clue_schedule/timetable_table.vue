<template>


    <div class="box">
        <div class="swith_box_check" v-if="activeName =='second'">
            <el-tooltip content='解锁列表开关' placement="top">
                <el-switch
                        v-model="lock"
                        inactive-text="列表解锁"
                        active-color="#13ce66"
                        inactive-color="#606266"
                        active-value="1"
                        inactive-value="0">
                </el-switch>
            </el-tooltip>
        </div>
        <div class="swith_box_check" v-if="activeName == 'first'">
            <el-button-group>
                <el-button icon='el-icon-arrow-left' @click="prev"/>
                <el-button icon='el-icon-arrow-right'  @click="next"/>
            </el-button-group>
        </div>
        <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane name="first" label="时间占用表">
                <el-table :data="days" :show-header="false" ref="days_table">
                    <el-table-column prop="hour" :align="'center'"></el-table-column>
                    <el-table-column prop="0" :align="'center'"></el-table-column>
                    <el-table-column prop="1" :align="'center'"></el-table-column>
                    <el-table-column prop="2" :align="'center'"></el-table-column>
                    <el-table-column prop="3" :align="'center'"></el-table-column>
                    <el-table-column prop="4" :align="'center'"></el-table-column>
                    <el-table-column prop="5" :align="'center'"></el-table-column>
                    <el-table-column prop="6" :align="'center'"></el-table-column>
                </el-table>
                <el-table disabled :data="occupies" border @cell-click="select" :show-header="false" height="400" :cell-style="cell_style">
                    <el-table-column prop="hour" :formatter="format_hour" :align="'center'"></el-table-column>
                    <el-table-column label="周一" prop="0" :formatter="format_cell_2" :align="'center'"></el-table-column>
                    <el-table-column label="周二" prop="1" :formatter="format_cell_2" :align="'center'"></el-table-column>
                    <el-table-column label="周三" prop="2" :formatter="format_cell_2" :align="'center'"></el-table-column>
                    <el-table-column label="周四" prop="3" :formatter="format_cell_2" :align="'center'"></el-table-column>
                    <el-table-column label="周五" prop="4" :formatter="format_cell_2" :align="'center'"></el-table-column>
                    <el-table-column label="周六" prop="5" :formatter="format_cell_2" :align="'center'"></el-table-column>
                    <el-table-column label="周日" prop="6" :formatter="format_cell_2" :align="'center'"></el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane name="second" label="时间表">
                <el-table disabled :data="chours" border @cell-click="select" height="400">
                    <el-table-column prop="hour" :formatter="format_hour" :align="'center'"></el-table-column>
                    <el-table-column label="周一" prop="0" :formatter="format_cell" :align="'center'"></el-table-column>
                    <el-table-column label="周二" prop="1" :formatter="format_cell" :align="'center'"></el-table-column>
                    <el-table-column label="周三" prop="2" :formatter="format_cell" :align="'center'"></el-table-column>
                    <el-table-column label="周四" prop="3" :formatter="format_cell" :align="'center'"></el-table-column>
                    <el-table-column label="周五" prop="4" :formatter="format_cell" :align="'center'"></el-table-column>
                    <el-table-column label="周六" prop="5" :formatter="format_cell" :align="'center'"></el-table-column>
                    <el-table-column label="周日" prop="6" :formatter="format_cell" :align="'center'"></el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script type="text/ecmascript-6">
    import utility from '@/components/utility';
    import fetcher from '@/components/check_teachers/fetcher'
    import moment from 'moment'
    import chour_fetcher from '@/components/chours/fetcher'

    export default {
        props:{
            check_teacher_form:{
                required:true,
                type:Object
            },
        },
        data(){
            return {
                activeName:'first',
                lock:'',
                chour_id:'',
                teacher_id:'',
                start_date:moment().format('YYYY-MM-DD'),
                chours: function () {
                    var [b, e] =[18,44]

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
                occupies:function () {
                    var [b, e] =[18,44]

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
        watch:{
            'check_teacher_form.check_teacher_id':function (val,oldVal) {
                if(val!=''){
                    this.lock='';
                    this.teacher_id = val;
                    this.load(val);
                    this.getOccupyList(val);
                }
            }
        },
        methods:{
            prev () {
                this.start_date = moment(this.start_date).subtract(7, 'days')
                let _days=[{}];
                for(var i=0; i<7; i++){
                    _days[0][i+'']=moment(this.start_date).add(i,'days').format('YYYY-MM-DD(ddd)')
                }
                this.days = _days;
                this.getOccupyList(this.teacher_id);
            },
            next () {
                this.start_date = moment(this.start_date).add(7, 'days')
                let _days=[{}];
                for(var i=0; i<7; i++){
                    _days[0][i+'']=moment(this.start_date).add(i,'days').format('YYYY-MM-DD(ddd)')
                }
                this.days = _days;
                this.getOccupyList(this.teacher_id);
            },
            format_date(row,column,value,index){
                return value;
            },
            cell_style (data){
                let row = data.row;
                let column = data['columnIndex'];
                if(column >= 1){
                    if(row[data.columnIndex-1]=='1'){
                        return 'background-color:lightgreen'
                    }else if(row[data.columnIndex-1] !='1' && row[data.columnIndex-1] !=''){
                        return 'background-color:red'
                    }
                }
            },
            handleClick(){
            },
            select(row, column, cell,event) {
                if(this.lock=='1'){
                    let timeblock = row.hour+parseInt(column.property)*48;
                    if(row[column.property]){
                        fetcher.change_status(this.chour_id,timeblock,0,(response)=>{
                            row[column.property]=0;
                            this.getOccupyList(this.teacher_id);
                            this.$message('操作成功');
                        })
                    }else{
                        fetcher.change_status(this.chour_id,timeblock,1,(response)=>{
                            row[column.property]=1;
                            this.getOccupyList(this.teacher_id);
                            this.$message('操作成功');
                        })
                    }
                }else{
                    return false;
                }
            },
            format_hour (row, column) {
                return utility.format_hour(row.hour) + ' - ' + utility.format_hour(row.hour+1)
            },
            format_cell (row, column, cellValue,index) {
                if(cellValue){
                    return '√'
                }
            },
            format_cell_2(row,column,cellValue,index){
                if(cellValue && cellValue != '1'){
                    return cellValue
                }else if(cellValue){
                    return '当前时间可预约'
                }
            },
            load(val){
                fetcher.get_chours_table(val, (response) => {
                    this.chour_id = response.data.data.id
                    for(var i = 0; i < 7; i++){
                        for(var j = 0; j < 48; j++){
                            var idx = (i * 48) + j;
                            var hour = idx%48
                            if(hour>=18 && hour<44){
                                var wday = Math.floor(idx/48);
                                var [row, column] = [hour-18,wday];
                                this.chours[row][column] = response.data.data['timeblock_' + idx]
                            }
                        }
                    }
                })
            },
            getOccupyList(val){
                let start = moment(this.start_date).format('YYYY-MM-DD');
                let end = moment(this.start_date).add(6,'days').format('YYYY-MM-DD')
                fetcher.get_occupy_table(val,{start_date:start,end_date:end},(response)=>{
                    for(var i = 0; i < 7; i++){
                        for(var j = 0; j < 48; j++){
                            var idx = (i * 48) + j;
                            var hour = idx%48
                            if(hour>=18 && hour<44){
                                var wday = Math.floor(idx/48);
                                var [row, column] = [hour-18,wday];
                                //get 周几  周一是第天
                                let num = moment().weekday()
                                this.occupies[row][column] = response.data.data[(idx+num*48)%336]?response.data.data[(idx+num*48)%336].length>4?response.data.data[(idx+num*48)%336][5]:'1':'';
                            }
                        }
                    }
                })
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
        position: absolute;
        right: 0;
        top: -60px;
    }
</style>
