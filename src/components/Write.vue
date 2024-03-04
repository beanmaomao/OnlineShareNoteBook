<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="write">
        <div class="img">
        <img src="/椰子树2.jpg" alt="">
    </div>
    <div class="writeContent">
        <i>日记名字</i><input type="text" v-model="title" name="name"><br>
        <i>日记作者</i><input type="text" v-model="author" name="author"><br>
        <i id="content">日记内容</i><button @click="measure">确认新建</button><br>
        <textarea id="" cols="57" rows="28" v-model="content" name="content"></textarea>
    </div>
    <div class="img">
        <img src="/椰子树2.jpg" alt="">
    </div>
    </div>
    <div class="goShow">
        <button @click="abandon">
        <RouterLink to="/show">返回展览区</RouterLink>
        </button>
    </div>
</template>

<script setup lang="ts" name="Write">
import{ref} from 'vue'
import axios from 'axios'
import { RouterLink} from 'vue-router';

let author=ref('')
let content=ref('')
let title=ref('')

async function measure(){
       //将数据提交到服务器
       const result=await axios({
        url:'/api/createDiary',
        method:'POST',
        data:{
            author:author.value,
            content:content.value,
            title:title.value
        }
    })
    console.log(result.data.data);
    alert('成功新建日记！！！')
    content.value=''
    title.value=''
    author.value=''
}
function abandon(){
    //清空数据对象

}
</script>

<style lang="scss" scoped>
        .write{
            width: 100vw;
            height: 100vh;
            background-color:cadetblue;
            display: flex;
            justify-content: space-around;
            align-items: center;
            position: relative;
        }
        img{
            width: 400px;
            height: 600px;
        }
        .writeContent{
            border: 10px brown dotted;
            background-color: white;
            width: 600px;
            height: 800px;
        }
        input{
            margin-left: 30px;
            margin-bottom: 20px;
            border: 5px black solid;
            border-radius: 20px;
        }
        i{
            font-weight: bolder;
        }
        #content{
            margin-left: 250px;
            margin-right: 10px;
        }
        button{
            background-color: orange;
            margin-bottom: 5px;
            cursor: pointer;
        }
        textarea{
            font-size: 20px;
            background-image: url('/椰子树1.jpg');
            border: 5px black solid;
            border-radius: 20px;
        }
        .goShow{
            border: 10px cyan solid;
            background-color: chocolate;
            position: absolute;
            bottom: 20vh;
            right: 20vw;
            box-shadow: 20px 20px darkorange;
        }
        .goShow button{
            width: 100px;
            height: 50px;
            color: aliceblue;
            font-weight: bolder;
            font-size: 16px;
        }
        .goShow a{
            display: block;
            text-decoration: none;
            color: maroon;
        }
</style> 