<template lang="html">
    <div class="members">
        <table class="table">
            <tr>
                <td>学生设备版本:</td>
                <td>{{message.student_app_version}}</td>
            </tr>
            <tr>
                <td>学生设备机型：</td>
                <td>{{ message.student_device_name}}</td>
            </tr>
            <tr>
                <td>学生设备系统：</td>
                <td>{{message.student_device_system}}</td>
            </tr>
            <tr>
                <td>学生设备类型：</td>
                <td>{{fmt_student_device_type(message.student_device_type)}}</td>
            </tr>
            <tr>
                <td>老师设备版本:</td>
                <td>{{message.coach_app_version}}</td>
            </tr>
            <tr>
                <td>老师设备机型：</td>
                <td>{{ message.coach_device_name}}</td>
            </tr>
            <tr>
                <td>老师设备系统：</td>
                <td>{{message.coach_device_system}}</td>
            </tr>
            <tr>
                <td>老师设备类型：</td>
                <td>{{fmt_coach_device_type(message.coach_device_type)}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    import formater from './formater'

    export default {
        props:{
            message:{
                type: Object,
                required:true
            }
        },
        methods:{
            fmt_student_device_type(value){
                return formater.fmt_student_device_type(value)
            },
            fmt_coach_device_type(value){
                return formater.fmt_coach_device_type(value)
            }
        }
    }
</script>

<style lang="css">
    .status{
        cursor: pointer
    }
</style>
