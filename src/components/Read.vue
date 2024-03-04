<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="Read">
        <div class="read">
            <textarea name="" id="" cols="83" rows="27" v-model="newContent"></textarea>
            <button @click="replace" class="replace"><RouterLink to="/show">new it</RouterLink></button>
            <button @click="delete" class="delete"><RouterLink to="/show">delete it</RouterLink></button>
        </div>
    </div>
</template>

<script setup lang="ts" name="See">
import{ref} from 'vue'
import axios from 'axios'
import { RouterLink} from 'vue-router';

const newContent=ref('')
async function replace(){
    //将数据提交到服务器
    const result=await axios({
        url:'/api/updateDiary',
        method:'Put',
    }).catch(err=>{
        console.log('all good');
    })
    console.log(result);
}

</script>

<style lang="scss" scoped>
        .Read{
            width: 100vw;
            height: 100vh;
            background-color: tomato;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .read{
            width: 49.9vw;
            height: 68.7vh;
            border: 15px solid snow;
            background-color: lightcoral;   
            position: relative;
        }
        .read a{
            display: block;
            color: antiquewhite;
            text-decoration: none;
        }
        .read textarea{
            width: 49.9vw;
            height: 68.7vh;
            font-size: 20px;
        }
        .replace{
            position: absolute;
            width: 80px;
            height: 30px;
            bottom: 5px;
            right: 5px;
            cursor: pointer;
            font-weight: bolder;
            font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: 20px;
            background-color: firebrick;
            color: azure;
        }
        .delete{
            position: absolute;
            width: 80px;
            height: 30px;
            bottom: 5px;
            right: 100px;
            cursor: pointer;
            font-weight: bolder;
            font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: 20px;
            background-color: firebrick;
            color: azure;
        }
</style>