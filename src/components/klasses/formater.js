import meta from './meta'

export default {
    fmt_perfromance(value) {
        return meta.perfromance[value]
    },
    fmt_subject(value){
        return meta.subject[value]
    },
    fmt_type(value) {
        return meta.type[value]
    },
    fmt_status(value) {
        return meta.status[value]
    },
    fmt_sex(value){
        return meta.sex[value]
    },
    fmt_day(value){
        return meta.weekDay[value];
    },
    fmt_server(value){
        return meta.server[value]
    },
    fmt_student_device_type(value){
        return meta.student_device_type[value]
    },
    fmt_coach_device_type(value){
        return meta.coach_device_type[value]
    },
    fmt_late_abnormal_state(value){
        return meta.late_abnormal_state[value]
    },
    fmt_scores_status(value){
        return meta.scores_status[value]
    },
    fmt_fk_status(value){
        return meta.fk_status[value]
    },
    fmt_cut_klass_abnormal_state(value){
        return meta.cut_klass_abnormal_state[value]
    },
    fmt_coach_adaptation_status(value){
        return meta.coach_adaptation_status[value]
    },
    fmt_student_adaptation_status(value){
        return meta.student_adaptation_status[value]
    },
    fmt_upload_quality(value){
        return meta.upload_quality[value]
    },
    fmt_download_quality(value){
        return meta.download_quality[value]
    },
    fmt_push_stream_config(value){
        return meta.student_plug_flow_status[value]
    },
    fmt_equipment(value){
        return meta.equipment[value]
    },
    fmt_resume(value){
        return meta.resume_status[value]
    },
    fmt_create_type(value){
        return meta.course_klass_style[value]
    },
    fmt_early_abnormal_state(value){
        return meta.early_abnormal_state[value]
    },
    fmt_klass_exception(value){
        return meta.early_audit_status[value]
    }
};
