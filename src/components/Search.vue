<template>
    <div>
        <mt-header title="搜索">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <mt-search v-model="value" class="search-bar">
            <mt-cell
                    v-for="item in result"
                    :title="item.value"
                    class="cell"
            >
            </mt-cell>
        </mt-search>

    </div>

</template>

<script>

    export default {
        name: 'Search',
        data () {
            return {
                value:"",
                result:[{
                    value:"123"
                }]
            }
        },
        created(){
            let self = this
            self.$axios.get("http://localhost:9090/data").then(
                (res)=>{
                    console.log(res);
                    self.result = res.data.content
                }
            )
        },
        methods:{

        },
        watch:{
            value:function (n) {
                let self = this
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .search-bar .mint-search-list{
        margin-top: 50px;
    }
</style>
