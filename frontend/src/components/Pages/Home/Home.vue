<script setup lang="ts">

</script>

<template>
<div class="main">
  <div class="sales">
    <p>Новости и акции</p>
    <!--<div class="sales_item"></div>
    <div class="sales_item"></div>-->
  </div>
</div>
</template>

<style scoped>
:root{
  --base-violet: #583186;
  --base-purple: #86316D;
}
.main{
  width: 1200px;
  margin: 0 auto;
  font-size: 1.85em;
  font-family: "Manrope SemiBold", sans-serif;
}

.sales{
  color: var(--base-violet);
  background-color: #c4c4c4;
  height: 310px;
}

.sales_item{
  background-color: #4b5563;
  height: 70%;
  width: 30%;
  float: left;
  margin-right: 5%;
}
</style>