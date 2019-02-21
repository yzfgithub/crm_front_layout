<template>
    <!--<ul class="timeline">-->
        <!--<li class="timeline-item">-->
            <!--<slot></slot>-->
        <!--</li>-->

        <li class="timeline-item">
            <div class="timeline-item-tail"></div>
            <div class="timeline-item-head" ref="dot">
                <slot name="dot"></slot>
            </div>
            <div class="timeline-item-content">
                <slot></slot>
            </div>
        </li>
    <!--</ul>-->
</template>
<script type="text/ecmascript-6">

</script>
<style lang="css" scoped>
    /*.timeline{*/
        /*list-style: none;*/
        /*margin: 0;*/
        /*padding: 0;*/
    /*}*/

    .timeline-item{
        margin: 0!important;
        padding: 0 0 12px;
        list-style: none;
        position: relative;
    }
    .timeline-item-tail{
        height: 100%;
        border-left: 1px solid #e8eaec;
        position: absolute;
        left: 6px;
        top: 0;
    }
    .timeline-item-head{
        width: 10px;
        height: 10px;
        background-color: #fff;
        border-radius: 50%;
        border: 1px solid transparent;
        position: absolute;
    }
    .timeline-item-content{
        padding: 1px 1px 10px 24px;
        font-size: 12px;
        position: relative;
        top: -2px;
    }
    .timeline-item:last-child .timeline-item-tail {
        display: none;
    }
</style>
