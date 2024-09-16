<script setup lang="ts">
import {RouterView} from 'vue-router'
import BaseHeader from "@/components/Layouts/BaseHeader.vue";
import BaseFooter from "@/components/Layouts/BaseFooter.vue";

</script>

<template>
  <div class="wrapper">
    <div class="fixed">
      <base-header/>
      <div class="content">
        <RouterView/>
      </div>
      <base-footer></base-footer>
    </div>
  </div>
</template>

<style lang="sass">
.content
  background-color: #ffffff
  width: 1200px
  height: auto
  margin: 0 auto
  padding-left: 50px
  padding-right: 50px
  padding-top: 50px
</style>
