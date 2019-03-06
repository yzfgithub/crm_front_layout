<template>
   <div>
       <el-row :gutter="20">
           <el-col :span="12" class="chart">
               <div id="clue"></div>
           </el-col>
           <el-col :span="12" class="chart">
               <div id="sale"></div>
           </el-col>
       </el-row>
       <div class="kanban-table">
        <!--form-->
           <el-table
                   ref="multipleTable"
                   :data="formData"
                   border
                   tooltip-effect="dark"
                   style="width: 100%;"
                   :header-cell-style="tableHeaderColor">
               <el-table-column
                       prop="str_1"
                       label="销售中心"
               >
               </el-table-column>
               <el-table-column
                       prop="str_2"
                       label="团队"
               >
               </el-table-column>
               <el-table-column
                       prop="str_3"
                       label="小组"
               >
               </el-table-column>
               <el-table-column
                       prop="str_4"
                       label="CC"
               >
               </el-table-column>
               <el-table-column
                       prop="str_5"
                       label="库存"
               >
               </el-table-column>
               <el-table-column
                       prop="str_6"
                       label="领取数量"
               >
               </el-table-column>
               <el-table-column
                       prop="str_7"
                       label="拨打数量"
               >
               </el-table-column>
               <el-table-column
                       prop="str_8"
                       label="通话时长"
               >
               </el-table-column>
               <el-table-column
                       prop="str_9"
                       label="废弃数量"
               >
               </el-table-column>
               <el-table-column
                       prop="str_10"
                       label="回收数量"
               >
               </el-table-column>
               <el-table-column
                       prop="str_11"
                       label="预约数量"
               >
               </el-table-column>
               <el-table-column
                       prop="str_12"
                       label="体验数量"
               >
               </el-table-column>
               <el-table-column
                       prop="str_13"
                       label="付费数量"
               >
               </el-table-column>
               <el-table-column
                       prop="str_14"
                       label="付费金额(元)"
               >
               </el-table-column>
           </el-table>
           <el-pagination class="page" @current-change="handleCurrentChange" :current-page="currentPage4" :page-size="20" layout="total, prev, pager, next, jumper" :total="400">
           </el-pagination>
       </div>
   </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        props:{
            formData:{
                type:Array,
                require:true
            }
        },
        data() {
            return {
                currentPage4:1,

                clueOption:{
                    title:{
                        text:'线索统计\n',
                        textAlign:'left',
                        x:'center',
                        top:10,
                        textStyle:{
                            color:'#353536',
                            fontSize:14,
                            fontWeight:'normal',

                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        },
                        textStyle:{
                            align:'left',
                        },
                        formatter:function (params) {
                            var result = '<div style="text-align: center;">'+params[0].name+'</div>';
                            params.forEach(function (item) {
                                if(item.seriesName=='拨打率'){
                                    result += item.marker + " " + item.seriesName + " : " + parseInt(item.value*100) +"%</br>";
                                }else{
                                    result += item.marker + " " + item.seriesName + " : " + item.value +"</br>";
                                }

                            });
                            return result;
                        }
                    },
                    toolbox: {
                        show:false,
                    },
                    color:['#00A4E3','#1ECD95','#9C3ABE','#E51F90','#FF7360'],
                    legend: {
                        data:['领取','拨打','废弃','回收','拨打率'],
                        bottom:10,
                        selectedMode:false,
                        textStyle:{
                          color:'#9B9B9D'
                        },
                        icon: "circle",
                        itemWidth: 10,  // 设置宽度

                        itemHeight: 10, // 设置高度

                        itemGap: 40 // 设置间距
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['1月','2月','3月'],
                            axisPointer: {
                                type: 'shadow'
                            },
                            axisTick:{
                                show:false,
                            },
                            axisLine:{
                                lineStyle:{
                                    color:'#9B9B9D'
                                }
                            },
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '',
                            min: 0,
                            // max: 350,
                            // interval:50,
                            axisLabel: {
                                formatter: '{value}',
                                color:'#9B9B9D',
                            },
                            axisLine:{
                                show:false
                            },
                            axisTick:{
                                show:false,
                            },
                            splitLine:{
                                lineStyle:{
                                    color:'#D9DCDE',
                                    width:0.5
                                }
                            }
                        },
                        {
                            type: 'value',
                            name: '',
                            min: 0,
                            max: 1,
                            interval:0.1,
                            axisLabel: {
                                formatter: '{value}',
                                color:'#9B9B9D',
                            },
                            axisLine:{
                                show:false
                            },
                            axisTick:{
                                show:false,
                            },
                            splitLine:{
                                show:false,
                                lineStyle:{
                                    color:'#D9DCDE',
                                    width:0.5
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            name:'领取',
                            type:'bar',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top'
                                }
                            },
                            data:[2.0, 4.9, 7.0]
                        },
                        {
                            name:'拨打',
                            type:'bar',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top'
                                }
                            },
                            data:[26.4, 28.7, 70.7]
                        },
                        {
                            name:'废弃',
                            type:'bar',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top'
                                }
                            },
                            data:[175.6, 182.2, 48.7]
                        },
                        {
                            name:'回收',
                            type:'bar',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top'
                                }
                            },
                            data:[18.8, 6.0, 2.3]
                        },
                        {
                            name:'拨打率',
                            type:'line',
                            yAxisIndex: 1,
                            symbol:'circle',
                            hoverAnimation:false,
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top',
                                    formatter:function (params) {
                                        return parseInt(params.value*100)+'%';
                                    }
                                },

                            },
                            data:[0.55, 0.78, .12]
                        }
                    ]
                },
                saleOption:{
                    title:{
                        text:'营销统计\n',
                        textAlign:'left',
                        x:'center',
                        top:10,
                        textStyle:{
                            color:'#353536',
                            fontSize:14,
                            fontWeight:'normal',

                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        },
                        formatter:function (params) {
                            var result = '<div style="text-align: center;">'+params[0].name+'</div>';
                            params.forEach(function (item) {
                                if(item.seriesName=='体验率' || item.seriesName=='付费率'){
                                    result += item.marker + " " + item.seriesName + " : " + parseInt(item.value*100) +"%</br>";
                                }else{
                                    result += item.marker + " " + item.seriesName + " : " + item.value +"</br>";
                                }

                            });
                            return result;
                        }
                    },
                    toolbox: {
                        show:false,
                    },
                    color:['#FAC000','#FF9500','#F8542E','#FF7360','#9812FF'],
                    legend: {
                        data:['预约','体验','付费','体验率','付费率'],
                        bottom:10,
                        selectedMode:false,
                        textStyle:{
                            color:'#9B9B9D'
                        },
                        icon: "circle",
                        itemWidth: 10,  // 设置宽度

                        itemHeight: 10, // 设置高度

                        itemGap: 40 // 设置间距
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['1月','2月','3月'],
                            axisPointer: {
                                type: 'shadow'
                            },
                            axisTick:{
                                show:false,
                            },
                            axisLine:{
                                lineStyle:{
                                    color:'#9B9B9D'
                                }
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '',
                            min: 0,
                            // max: 250,
                            axisLabel: {
                                formatter: '{value}',
                                color:'#9B9B9D',
                            },
                            axisLine:{
                                show:false
                            },
                            axisTick:{
                                show:false,
                            },
                            splitLine:{
                                lineStyle:{
                                    color:'#D9DCDE',
                                    width:0.5
                                }
                            }
                        },
                        {
                            type: 'value',
                            name: '',
                            min: 0,
                            max: 1,
                            interval:0.1,
                            axisLabel: {
                                formatter: '{value}',
                                color:'#9B9B9D',
                            },
                            axisLine:{
                                show:false
                            },
                            axisTick:{
                                show:false,
                            },
                            splitLine:{
                                show:false,
                                lineStyle:{
                                    color:'#D9DCDE',
                                    width:0.5
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            name:'预约',
                            type:'bar',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top'
                                }
                            },
                            data:[20, 49, 70]
                        },
                        {
                            name:'体验',
                            type:'bar',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top'
                                }
                            },
                            data:[214, 127, 70.7]
                        },
                        {
                            name:'付费',
                            type:'bar',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top'
                                }
                            },
                            data:[175.6, 182.2, 48.7]
                        },
                        {
                            name:'体验率',
                            type:'line',
                            yAxisIndex: 1,
                            symbol:'circle',
                            hoverAnimation:false,
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top',
                                    formatter:function (params) {
                                        return parseInt(params.value*100)+'%';
                                    }
                                },

                            },
                            data:[0.8, 0.6, 0.2]
                        },
                        {
                            name:'付费率',
                            type:'line',
                            yAxisIndex: 1,
                            symbol:'circle',
                            hoverAnimation:false,
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top',
                                    formatter:function (params) {
                                        return parseInt(params.value*100)+'%';
                                    }
                                },

                            },
                            data:[0.55, 0.78, .12]
                        }
                    ]
                },
            }
        },
        methods: {
            tableHeaderColor(){
                return 'background-color:#EFF3F5;height:40px;'
            },

            //fenye
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
        },
        mounted(){
            let clueChart = echarts.init(document.getElementById('clue'))
            let saleChart = echarts.init(document.getElementById('sale'))
            clueChart.setOption(this.clueOption)
            saleChart.setOption(this.saleOption)
        }
    }
</script>
<style>
    .chart{
        width: 100%;
    }
    #clue,#sale{
        width: 100%;
        height: 300px;
    }
    .kanban-table{
        margin:0 20px;
        padding: 20px 0;
    }
    .page{
        margin: 20px 0;
        text-align: right;
    }
</style>
