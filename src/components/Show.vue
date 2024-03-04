<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="show">
        <!-- 搜索区 -->
        <div class="firstSearch">
            <input type="search" placeholder="通过作者名查找日记" v-model="findAuthorContent">
            <button class="all" @click="getAll">All</button>
            <button class="gosearch" @click="getAuthor">FIND</button>
        </div>
        <div class="secondSearch">
            <input type="search" placeholder="通过日记id查找日记" v-model="findIdContent">
            <button class="all" @click="getAll">All</button>
            <button class="gosearch" @click="getId">FIND</button>
        </div>
        <div class="over">
            <input type="search" placeholder="通过id删除日记" v-model="searchIdContent">
            <button class="gosearch" @click="throughId">DELETE</button>
        </div>
        <!-- 展览日记区 -->
        <!-- <button class="back">></button>
        
        <div class="showboard">
                <button class="delete">---</button>
                <div class="test"><RouterLink to="/see"></RouterLink></div>
        </div>
        <div class="showboard">
                <button class="delete">---</button>
                <div class="test"><RouterLink to="/see"></RouterLink></div>
        </div>
        <div class="showboard">
                <button class="delete">---</button>
                <div class="test"><RouterLink to="/see"></RouterLink></div>
        </div>
        <div class="showboard">
                <button class="delete">---</button>
                <div class="test"><RouterLink to="/see"></RouterLink></div>
        </div>
        <div class="showboard">
                <button class="delete">---</button>
                <div class="test"><RouterLink to="/see"></RouterLink></div>
        </div>
        <div class="showboard">
                <button class="delete">---</button>
                <div class="test"><RouterLink to="/see"></RouterLink></div>
        </div>
        
    
       <button class="forward">></button> -->
        <!-- 新建日记区 -->
       <div class="build">
       <button><RouterLink to="/write">+</RouterLink></button>
       </div>
    </div>
    </template>
    
    <script setup lang="ts" name="Show">
import axios from 'axios';
import {ref} from 'vue'
import { RouterLink } from 'vue-router';

const findAuthorContent=ref('')
const findIdContent=ref('')
const searchIdContent=ref('')

async function getAll(){
    //向服务器请求数据
    const result=await axios({
        url:'/api/selectDiary',
    })
    //获取结果生成列表
    console.log(result.data.data);   
}
async function getAuthor(){
    //向服务器请求数据
    const result=await axios({
        url:'/api/selectDiaryByAuthor',
        params:{
            author:findAuthorContent.value
        }
    })
    //获取结果生成列表
    console.log(result.data);
    console.log(findAuthorContent.value);
    console.log(1);
}
async function getId(){
    //向服务器请求数据
    const result=await axios({
        url:'/api/selectDiaryById',
        params:{
            id:findIdContent.value
        }
    })
    //获取结果生成列表
    console.log(result.data);
    console.log(findIdContent.value);
    console.log(2);
    
}
async function throughId(){
    //向服务器删除数据
    const result=await axios({
        url:'/api/deleteDiary',
        method:'DELETE',
        params:{
            id:searchIdContent.value
        }
    })
    //获取结果生成列表
    console.log(result.data);
    console.log(searchIdContent.value);
    console.log(3);
}
    </script>
    
    <style lang="scss" scoped>
            .show{
                width: 100vw;
                height: 100vh;
                background-color:rgb(236, 234, 231);
                display: flex;
                justify-content: space-around;
                align-items: center;
                position: relative;
            }
            .firstSearch{
                position: absolute;
                top: 10vh;
                left: 32.4vw;
                display: flex;
            }
            .firstSearch input{
                width: 520px;
                height: 50px;
                border: 5px solid saddlebrown;
            }
            .firstSearch .gosearch{
                width: 80px;
                height: 50px;
                font-size: 30px;
                color: brown;
                background-color: rgb(234, 205, 18);
                cursor: pointer;
            }
            .firstSearch .all{
                width: 80px;
                height: 50px;
                font-size: 30px;
                color: brown;
                background-color: rgb(234, 205, 18);
                cursor: pointer;
            }

            .secondSearch{
                position: absolute;
                top: 20vh;
                left: 32.4vw;
                display: flex;
            }
            .secondSearch input{
                width: 520px;
                height: 50px;
                border: 5px solid saddlebrown;
            }
            .secondSearch .gosearch{
                width: 80px;
                height: 50px;
                font-size: 30px;
                color: brown;
                background-color: rgb(234, 205, 18);
                cursor: pointer;
            }
            .secondSearch .all{
                width: 80px;
                height: 50px;
                font-size: 30px;
                color: brown;
                background-color: rgb(234, 205, 18);
                cursor: pointer;
            }
            
            .over{
                position: absolute;
                top: 30vh;
                left: 32.4vw;
                display: flex;
            }
            .over input{
                width: 520px;
                height: 50px;
                border: 5px solid saddlebrown;
            }
            .over .gosearch{
                width: 150px;
                height: 50px;
                font-size: 30px;
                color: brown;
                background-color: rgb(234, 205, 18);
                cursor: pointer;
            }
            .over .all{
                width: 80px;
                height: 50px;
                font-size: 30px;
                color: brown;
                background-color: rgb(234, 205, 18);
                cursor: pointer;
            }
            .list{
                position: absolute;
                width: 600px;
                height: 45px;
                top:16vh;
                left:32.4vw ;
            }
            .list p{
                width: 600px;
                height: 45px;
                background-color: palegoldenrod;
                font-size: 20px;
                margin: 10px 0;
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }
            .showboard{
                width: 200px;
                height: 200px;
                background-color: burlywood;
                border: 5px solid peru;
                box-shadow: 10px 10px brown;
            }
            .showboard .test{
                width: 184px;
                height: 154px;
                background-color: maroon;
                border:8px solid snow;
                border-radius: 20px;
                cursor: pointer;
            }
            .test a{
                text-decoration: none;
                display: block;
                color: snow;
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
                font-weight: bolder;
                font-size: 20px;
            }
            .back,.forward{
                width: 50px;
                height: 50px;
                background-color: rgb(234, 205, 18);
                font-size: 30px;
                font-weight: bolder;
                cursor: pointer;
            }
            .delete{
                font-size: 15px;
                font-weight:bolder;
                border: 5px solid goldenrod;
                cursor: pointer;
            }
            .build{
                width: 50px;
                height: 50px;
                font-size: 30px;
                position: absolute;
                right: 10vw;
                bottom: 10vh;
                border: 10px solid saddlebrown;
                border-radius: 10px;
            }
            .build button{
                width: 50px;
                height: 50px;
                font-size: 40px;
                font-weight: bolder;
                font-style: oblique;
                cursor: pointer;
            }
            .build a{
                text-decoration: none;
                color: black;
            }
    </style>