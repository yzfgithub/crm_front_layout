import config from '@/config'
import moment from 'moment';

export default {
    oss_url(url) {
        return config.oss_host + '/' + url
    },
    show_class_hour(start_timeblock_index, end_timeblock_index) {
        var timeblocks = end_timeblock_index - start_timeblock_index + 1

        var [from_wday, from_hour] = this.timeblock_to_wday_hour(start_timeblock_index)
        var from_hour = this.format_hour(from_hour)
        var to_hour = moment(from_hour, 'HH:mm').add(25 * timeblocks, 'm').format('HH:mm')
        return from_hour + ' - ' + to_hour
    },
    timeblock_to_wday_hour (index) {
        var wday = Math.floor(index / 48);
        var hour = index % 48;

        return [wday, hour]
    },
    format_hour (hour) {
        return this.zero_pad(Math.floor(hour/2))+':'+this.zero_pad(hour%2 * 30)
    },
    zero_pad (value) {
        return value < 10 ? '0' + value : value
    },
    delayTime(val){

        let hour =parseInt(moment().diff(moment(val))/(1000*60*60));
        if(hour/24>0){
            return Math.floor(hour/24)+'天 '+hour%24+'小时'
        }else{
            return hour%24+'小时'
        }
    },
}
