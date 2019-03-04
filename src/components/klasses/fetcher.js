import axios from 'axios'
import network_util from '@/utils/network_util'
export default {
    change_type(id,type,cb,fb){
        axios.put(`/api/klasses/${id}/update_av_type`,{av_type:type})
            .then( (response) => {
                network_util.success(response, cb)
            })
            .catch((err) => {
                network_util.fail(err, fb)
            })
    },
    list(params, cb, fb){
        axios.get('/api/klasses', {params: params})
            .then( (response) => {
                network_util.success(response, cb)
            })
            .catch((err) => {
                network_util.fail(err, fb)
            })
    },
    list_index_listen(params, cb, fb){
        axios.get('/api/klasses/index_listen', {params: params})
            .then( (response) => {
                network_util.success(response, cb)
            })
            .catch((err) => {
                network_util.fail(err, fb)
            })
    },
    list_index_formal(params, cb, fb){
        axios.get('/api/klasses/index_formal', {params: params})
            .then( (response) => {
                network_util.success(response, cb)
            })
            .catch((err) => {
                network_util.fail(err, fb)
            })
    },
    list_klasses_exception(params,cb,fb){
        axios.get('api/klasses/abnormal_klass_list',{params:params})
            .then( (response) => {
                network_util.success(response, cb)
            })
            .catch((err) => {
                network_util.fail(err, fb)
            })
    },
    search(params, cb, fb){
        axios.get('/api/klasses/search', {params: params})
            .then( (response) => {
                network_util.success(response, cb)
            })
            .catch((err) => {
                network_util.fail(err, fb)
            })
    },
    list_klasses(params,cb,fb){
        axios.get('/api/klasses/index_list', {params: params})
            .then( (response) => {
                network_util.success(response, cb)
            })
            .catch((err) => {
                network_util.fail(err, fb)
            })
    },
    cancel_list(params,cb,fb){
        axios.get('/api/klasses/cancel_klass_list',{params:params})
            .then( (response) => {
                network_util.success(response, cb)
            })
            .catch((err) => {
                network_util.fail(err, fb)
            })
    },
    get(date,timeblock,page,unit,group,grade,cb,fb){
        axios.get('/api/klasses/by_day', {params: {date: date, timeblock: timeblock, page: page,unit:unit,group:group,grade:grade}})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    class_get(id,cb,fb){
        axios.get('/api/klasses/'+id)
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    update(id,klass,cb,fb){
        axios.put('/api/klasses/'+ id, { "klass": klass})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    class_getWeek(date,cb,fb){
        axios.get('/api/klasses/by_week', {params: {date: date}})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    show(id,cb,fb){
        axios.get('/api/klasses/'+ id)
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    del(id,cancel_reason, cb, fb){
        axios.delete('/api/klasses/'+ id +'?cancel_reason=' + cancel_reason,)
            .then( (response) => {
                network_util.success(response, cb)
            })
            .catch((err) => {
                network_util.fail(err, fb)
            })
    },
    list_by_coach_id(id, params, cb, fb){
        axios.get('/api/coaches/'+ id + '/klasses', {params: params})
            .then((response) => {
                network_util.success(response, cb)
            })
            .catch((err) => {
                network_util.fail(err, fb)
            })
    },
    list_by_student_id(id,params,cb,fb){
        axios.get('/api/students/'+ id +'/klasses',{params:params})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    reschedule(id,cb,fb){
        axios.put('/api/klasses/'+ id + '/reschedule')
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    network_stats(id,params,cb,fb){
        axios.get('/api/klasses/'+id+'/network_stats',{params:params})
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    change_coach(id,cb,fb){
        axios.post('/api/klasses/'+ id + '/change_coach')
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    change_push_stream_config(id,params,cb,fb){

        axios.put('/api/klasses/'+ id + '/change_push_stream_config',params
        )
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    get_klass_message(id,cb,fb){
        axios.get('/api/klasses/' + id +'/klass_room')
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    promote_top5_candidate_coach(id, cb, fb){
        axios.get('/api/klasses/'+ id+'/promote_top5_candidate_coach')
            .then((response) => {
                network_util.success(response, cb);
            })
            .catch((err) => {
                network_util.fail(err,fb);
            })
    },
    jc_list (params, cb, fb) {
        axios.get('/api/books', {params: params})
            .then( (response) => {
                network_util.success(response, cb)
            })
            .catch((err) => {
                network_util.fail(err, fb)
            })
    },
    qk_list(id,params,cb,fb){
        axios.get('/api/books/' + id + '/scores', {params: params})
            .then( (response) => {
                network_util.success(response, cb)
            })
            .catch((err) => {
                network_util.fail(err, fb)
            })
    },
    qm_post(id,params,cb,fb){
        axios.post('/api/klasses/'+id+'/uploading_music',{params:params})
            .then((response)=>{
                network_util.success(response, cb)
            })
            .catch((err)=>{
                network_util.fail(err, fb)
            })
    },
    klass_exception_post(id,params,cb,fb){
        axios.post('/api/klasses/'+id+'/audit',params)
            .then((response)=>{
                network_util.success(response, cb)
            })
            .catch((err)=>{
                network_util.fail(err, fb)
            })
    },
}
