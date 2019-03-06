import metaObj from '@/utils/meta'

export default {
    fmt_pay_type(value) {
        return metaObj.pay_type[value]
    },
    fmt_pay_status(value) {
        return metaObj.pay_status[value]
    },
    fmt_status(value) {
        return metaObj.order_status[value]
    },
};
