<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="login">
        <!-- <div class="background" >

        </div> -->
        <div class="container">
            <div class="board">
                账号<input type="text" v-model="id">
                <br>
                密码<input type="password" v-model="password">
                <br>
                <button class="loregister" @click="saveit">登录&注册</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" name="Login">
    import {ref} from 'vue'
    const id=ref('')
    const password=ref('')
    

    function saveit(){
       //检测账号id的唯一性

       //将账号id与密码保存到api地址
    }
</script>

<style lang="scss" scoped>
        .login{
            width: 100vw;
            height: 100vh;
            background-color: palevioletred;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .background{
            width: 100vw;
            height: 100px;
            background-color: palevioletred;
            position: absolute;
            left: 0;
            top: 0;
        }
        .background i{
            margin-right: 10px;
            font-size: 35px;
        }
        .board{
            z-index: 0;
            width: 200px;
            height: 200px;
            padding: 20px;
            border: 10px white solid;
            border-radius: 10px;

        }
        input{
            border: 10px solid darkorange;
            border-radius: 10px;
            font-size: 15px;
        }
        .loregister{
            margin-top: 30px;
            font-size: larger;
            font-weight: bolder;
            border: 1px solid brown;
            border-radius: 10px;
            cursor: pointer;
        }
</style>