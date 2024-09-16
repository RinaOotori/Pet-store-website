<script setup lang="ts">
import { menu } from "@/constants/menu";
import SidebarItem from "@/components/UiComponents/SideBar/SidebarItem.vue";

</script>

<template>
    <div class="sidebar">
        <ul>
            <sidebar-item
                v-for="(menuItem, name) in menu.guest"
                :key="name"
                :item="menuItem"
            />
        </ul>


    </div>
</template>

<style lang="sass">

</style>