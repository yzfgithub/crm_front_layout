import config from '@/config'

export default {
    oss_url(url) {
        return config.oss_host + '/' + url
    },

}
