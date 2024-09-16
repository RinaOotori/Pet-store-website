<script setup lang="ts">
defineProps<{
    title: string
    body: string
}>();
</script>


<template>
<div class="card">
    <div class="card-header">
        <slot name="header">
            <h1 v-if="title" class="card-title">{{title}}</h1>
        </slot>
    </div>
    <div class="card-body" v-if="body">{{body}}</div>
</div>
</template>

<style scoped>

.card{
  background-color: #1a202c;
  height: 100px;
}

</style>