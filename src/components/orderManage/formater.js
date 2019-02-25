import meta from '@/utils/meta'

export default {
    fmt_pay_type(value) {
        return meta.pay_type[value]
    },
    fmt_status(value) {
        return meta.order_pay_status[value]
    }
};
