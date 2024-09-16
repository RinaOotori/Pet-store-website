<script setup lang="ts">

</script>

<template>
    <header>
        <div class="log-reg">
            <router-link :to="{name: 'Login'}">Авторизация</router-link>
            <router-link :to="{name: 'Registration'}">Регистрация</router-link>
        </div>
    </header>
</template>

<style scoped lang="sass">
header
    background-color: #032342
    position: fixed
    top: 0
    height: 150px
    width: 100%
.log-reg
    text-align: right
    a
        margin-right: 10px

</style>