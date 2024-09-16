<script setup lang="ts">
import type {Item} from "@/constants/menu";
import {ref} from "vue";

defineProps<{
    item: Item
}>();

const collapsed = ref(false);
const collapseItem = () => {
    collapsed.value = !collapsed.value;
};

</script>

<template>
    <li>
        <template v-if="item.link">
            <router-link :to="item.link">
                <i :class="item.icon"></i>
                {{ item.title }}
            </router-link>
        </template>
        <template v-else>
            <div @click.prevent="collapseItem">
                <i :class="item.icon"></i>
                {{ item.title }}
                <i class="bi bi-caret-down-fill caret" :class="{ rotated: !collapsed }"/>
            </div>

        </template>
    </li>
    <template v-if="collapsed">
        <li v-for="(child, index) in item.children" :key="index" class="child-item">
            <router-link v-if="child.link" :to="child.link">
                <i :class="child.icon"></i>
                {{ child.title }}
            </router-link>
        </li>
    </template>
</template>

<style scoped lang="sass">
li
    list-style: none
    margin-bottom: 10px

    a, div
        text-decoration: none
        color: #222

        &:hover
            color: #666

        i
            margin-right: 10px

.caret
    position: absolute
    right: 10px

    &.rotated
        transform: rotate(180deg)

.child-item
    margin-left: 20px

.router-link-active
    font-weight: bold
</style>