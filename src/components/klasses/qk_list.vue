<template lang="html">
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>教材列表</span>

        </div>

        <div>
            <div class="book_list" v-if = '!selected_qm'>
                <el-form :inline="true" :model="books_search" class="demo-form-inline">
                    <el-form-item label="教材名称">
                        <el-input v-model="books_search.name" placeholder="请输入教材名称"></el-input>
                    </el-form-item>
                    <el-button type="success" plain @click = 'search_books_search'>搜索</el-button>
                </el-form>
            </div>
            <el-table :data="books"  stripe border ref="table">
                <el-table-column align="center"  :label="!selected_qm?'教材名称':'曲目名称'" prop="name"></el-table-column>
                <el-table-column align="center"  :label="!selected_qm?'封面图':'教材截图'" prop="cover">
                    <template slot-scope="scope">
                        <div class="" v-if="scope.row.image">
                            <img  :src="oss_url(url)" style="{background:#fff;width:130px;}" v-for="(url,key) in scope.row.image.split(';')" :key="key"/>
                        </div>
                        <div class="" v-else>
                            <img  :src="scope.row.cover" style="width:60px"/>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column align="center"  label="操作">
                    <template slot-scope="scope">
                        <div class="" v-if = '!selected_qm'>
                            <el-button type="text" @click = 'select_item(scope.row)'>选择曲目</el-button>
                        </div>
                        <div class="" v-else>
                            <div class="" v-if = 'scope.row'>
                                <a href="javascript:;" v-if = '!scope.row.add'  @click = 'select_item(scope)'>删除</a>
                                <a href="javascript:;"  v-else  @click = 'select_item(scope)'>添加</a>
                            </div>
                        </div>
                        <span v-if = 'add_show'></span>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination v-if = 'selected_qm' layout="prev, pager, next" :total="meta.total" @current-change="load_list"  :current-page.sync="meta.current_page" background>
            </el-pagination>
            <el-pagination v-else layout="prev, pager, next" :total="meta.total" @current-change="load" :current-page.sync="meta.current_page" background>
            </el-pagination>
        </div>
        <div class="footer_action"  v-if = 'selected_qm'>
            <el-button type="primary" @click = 'add_action_qk'>提交</el-button>
            <el-button @click = 'cancel_action'>取消</el-button>
        </div>
    </el-card>
</template>

<script>
    import metas from './meta'
    import fetcher from './fetcher'
    import tool from '@/utils/tool'
    export default {
        data(){
            return {
                status:metas.status,
                item_id:'',
                add_item:{id:'',add:true},
                select_id:[],
                add_show:true,
                books_search:{}
            }
        },
        props:{
            books:{
                type:Array,
                required:true
            },
            qk_top:{
                type:String,
                required:true
            },
            meta:{
                type:Object,
                required:true
            },
            selected_qm:{
                type:Boolean,
                required:true
            },
            klass_id:{
                type:String,
                required:true
            }
        },
        methods:{
            search_books_search(){
                this.$emit('jc_list',this.books_search);
                // fetcher.qk_list(this.books_search)
            },
            oss_url(url){
                return tool.oss_url(url)
            },
            //点击取消按钮
            cancel_action(){
                // this.selected_qm = !this.selected_qm
                this.$emit('cancel_action_qk')
            },
            select_item(msg){

                //选择曲目
                if (!this.selected_qm) {
                    this.item_id = msg.id
                    this.$emit('change_self_list',msg.id)

                }else {
                    this.add_show = !this.add_show
                    //添加
                    // this.books[msg.$index].add = false
                    // this.add_item.id = msg.id
                    // this.add_item.add = false
                    // this.select_id.push(this.add_item)
                    this.$emit('change_select_item',msg.$index);


                }

            },
            add_action_qk(){
                let select_arr = this.books.filter((value)=>{
                    return !value.add
                })
                // let ids = []
                let scores = [];
                select_arr.map((val,index)=>{
                    scores.push(val.id)
                })
                // let obj = {}
                // obj.id = ids;

                let send_mst = {}
                send_mst.type = '2'
                // scores.push(obj)
                send_mst.scores = scores
                this.qm_post(send_mst)
                $('html, body').animate({scrollTop: parseFloat(this.qk_top)}, 300)

            },
            qm_post(obj){
                fetcher.qm_post(this.klass_id,obj,(response)=>{
                    // console.log(response);
                    // this.$message.success('添加成功');
                    this.$emit('loading')
                })
            },
            load(){
                this.$emit('load');
            },
            load_list(){
                this.$emit('load_qm_list',this.item_id,'');
            },
            destroy (index, id) {
                this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                }).then(() => {
                    fetcher.del(id, (response) => {
                        this.books.splice(index, 1)
                        this.$message('删除成功!');
                    })
                });
            },
            generate_image (index, id) {
                this.$confirm('此操作将重新生成曲目文件记录, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                }).then(() => {
                    fetcher.generate_image(id, (response) => {
                        this.$message('操作成功!');
                    })
                });
            },
            change(value){
                if(value == 0){
                    return '审核通过'
                } else if(value == 1){
                    return '待审核'
                }
            },
            change_status(id,status){
                this.$confirm(status == 1 ? '是否更改审核状态' : '是否审核通过', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    if(status == 0){
                        status = 1;
                    } else if(status ==1) {
                        status = 0;
                    }
                    fetcher.update_status(id,status,(response) => {
                        this.load()
                        this.$message({
                            type: 'info',
                            message: '更改成功'
                        });
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消更改'
                    });
                })
            },
        }
    }
</script>

<style lang="css">
    .status{
        cursor:pointer
    }
    .footer_action{
        box-sizing: border-box;
        padding: 20px 0 0 0;
    }
    .jc_list .el-pagination{
        display: flex;
        justify-content: flex-end;
    }
</style>
