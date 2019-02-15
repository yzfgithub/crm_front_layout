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
       <div>


       </div>
   </div>
</template>
<script>
    import echarts from 'echarts'
    export default {
        data() {
            return {
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
                }
            }
        },
        methods: {

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
</style>
