<template>
    <div>
        <mt-header title="首页">
            <router-link to="/search" slot="right">
                <mt-button icon="search">搜索</mt-button>
            </router-link>
        </mt-header>
        <mt-button size="large" class="button" @click.native="goUpload">上传图片</mt-button>
    </div>


</template>

<script>
    export default {
        name: 'Home',
        data () {
            return {

            }
        },
        methods:{
            goUpload(){
                this.$router.push('upload')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .button{
        margin-top: 15px;
        width: 80%;
        margin-left: 10%;
    }
</style>
