<template>
    <div>
        <button class="btn" @click="btnClick">点我到Cart页</button>
    </div>
</template>
<script>
    export default {
        name:"HomePage",
        methods:{
            btnClick(){
                this.$router.push('/cart')
            }
        }
    }
</script>
<style>
    .btn {
        margin:10px;
    }
</style>