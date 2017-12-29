<template>
    <div>
        <mt-header title="上传图片">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="area">
            <label class="input">
                <input type="file" @change="uploadImg($event)" accept="image/jpeg,image/png,image/gif" placeholder="" v-show="!finished">
            </label>
            <img src="1" width="100%" height="200" v-show="finished" class="img">
            <div class="line1"></div>
            <div class="line2"></div>
        </div>
        <div class="progress" v-show="isSelect">
            <mt-progress :value="proVal">
                <div slot="end">{{proVal}}%</div>
            </mt-progress>
        </div>

    </div>


</template>

<script>
    import { Toast } from 'mint-ui';
    export default {
        name: 'Upload',
        data () {
            return {
                isSelect:false,
                finished:false,
                proVal:0
            }
        },
        methods:{
            uploadImg($event){
                var that = this
                that.isSelect = true
                console.log($event.target.files);
                var reader = new FileReader();
                reader.readAsDataURL($event.target.files[0])
                reader.onload = ()=>{


                    var inte = setInterval(function () {
                        if(that.proVal < 100){
                            that.proVal++
                        }else{
                            clearInterval(inte)
                            document.getElementsByClassName("img")[0].src = reader.result
                            that.finished = true
                            Toast("上传完成")
                        }
                    },10)

                }



            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .area{
        position: relative;
        width: 60%;
        margin-left: 20%;
        margin-top: 50px;
        height: 200px;
        background: #eeeeee;
    }
    .area .line1{
        position: absolute;
        top:98px;
        width: 60%;
        margin-left: 20%;
        height: 2px;
        background: #cccccc;

    }
    .area .line2{
        position: absolute;
        top: 50px;
        left: 50%;
        width: 1%;
        height: 100px;
        background: #cccccc;
    }
    .area .input{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    .area .input input{
        position: absolute;
        width: 100%;
        height: 100%;
        left: -999%;
    }
    .progress{
        width: 80%;
        margin-left: 10%;
    }
</style>
