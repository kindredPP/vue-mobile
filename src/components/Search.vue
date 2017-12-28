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
                    :title="item.title"
                    :value="item.value"
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
                result:[]
            }
        },
        methods:{

        },
        watch:{
            value:function (n) {
                let self = this
                self.result = []
                if(parseInt(n)<=2){
                    self.$axios.get("http://localhost:9090/data"+n).then(
                        (res)=>{
                            console.log(res.data);
                            self.result.push(res.data)

                        }
                    )
                }

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
