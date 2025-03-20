<template>
    <div class="page-404">
        <div class="img-box">
            <h1>404</h1>
        </div>

        <div class="text-box">
            <h3>404 错误 !</h3>
            <p>请检查 url 或者返回主页</p>
            <el-button type="primary" color='#512da8' @click="reHome">返回主页</el-button>
        </div>
    </div>
</template>

<script setup lang='ts'>
import {useRouter} from 'vue-router'

const router = useRouter()

const reHome = () => {
    router.push('/')
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
.page-404 {
    height: 100vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
    font-family: 'Arvo', serif;
}

.img-box {
    background-image: url('../../assets/images/error/404.gif');
    height: 400px;
    background-position: center;
    width: 800px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
}

.img-box h1 {
    font-size: 80px;
    font-weight: 400;
}

.text-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.text-box h3 {
    font-size: 30px;
    font-weight: 200;
    padding: 10px 0;
}

.text-box p {
    font-size: 16px;
}

.el-button {
    width: 100%;
    margin: 20px 0;
    border-radius: 15px;
}
</style>