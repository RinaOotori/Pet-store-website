<script setup lang="ts">

</script>

<template>
  <footer>
    <div class="purple-block-footer"></div>
    <div class="violet-block-footer">
      <div class="links-footer">
        <p>Каталог</p>
        <a href="">Товары для кошек</a>
        <a href="">Товары для собак</a>
        <a href="">Товары для акварумистики</a>
        <a href="">Товары для грызунов</a>
        <a href="">Товары для птиц</a>
        <a href="">Ветаптека</a>
      </div>
      <div class="links-footer">
        <p>Покупателям</p>
        <a href="">Бонусная программа</a>
        <a href="">Доставка и оплата</a>
        <a href="">Акции</a>
        <a href="">Как купить</a>
        <a href="">Возврат товара</a>
      </div>
      <div class="links-footer">
        <p>Компания</p>
        <a href="">О нас</a>
      </div>
    </div>
  </footer>
</template>

<style lang="css">
:root {
  --base-violet: #583186;
  --base-purple: #86316D;
  --base-pink: #C4B3D9;
}

footer {
  background-color: white;
  height: 500px;
  position: relative;
}

.links-footer p{
  color: white;
  margin-bottom: 10px;
  font-family: "Manrope SemiBold", sans-serif;
  font-size: 1.1em;
}

.links-footer a{
  color: var(--base-pink);
  text-decoration: none;
  font-family: "Manrope Medium", sans-serif;
  font-size: 1.1em;
  margin-bottom: 2px;
}

.links-footer a:hover{
  color: #ae95c9;
}

.links-footer{
  width: 300px;
  display: flex;
  flex-direction: column;
  float: left;
}

.purple-block-footer {
  background-color: var(--base-purple);
  clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 100%);
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 0;
}

.violet-block-footer {
  background-color: var(--base-violet);
  clip-path: polygon(0 25%, 100% 10%, 100% 100%, 0 100%);
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 1;
  padding-left: calc((100% - 1200px) / 2 + 50px);
  color: white;
  padding-top: 200px;
}
</style>