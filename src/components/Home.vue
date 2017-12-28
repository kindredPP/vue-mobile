<template>
    <div>
        <mt-header title="首页">
            <router-link to="/search" slot="right">
                <mt-button icon="search">搜索</mt-button>
            </router-link>
        </mt-header>
    </div>


</template>

<script>
    export default {
        name: 'Home',
        data () {
            return {

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
