<script setup lang="ts">
</script>

<template>
    <div>
        <header>
            <div class="main_header">
                <div class="logo">
                    <a href="/">
                        <img src="/logo.png" class="logo_picture" alt=""/>
                        <p class="tagline">Территория<br/>заботы</p>
                    </a>
                </div>
                <p class="numbers">655-322<br/>+7(912)870-90-87</p>
            </div>
        </header>
        <div class="search">
            <button class="catalog"><img src="/catalog.png"  alt=""/>Каталог товаров</button>
            <form role="search">
                <input type="text" placeholder="Поиск по товарам..." class="search_line">
                <button type="submit" class="search-button">Поиск</button>
            </form>
            <div class="profile">
                <a href="/authorization">
                    <div class="menu_profile">
                        <img src="/profile.png" class="icon" alt="">
                        <span>Войти</span>
                    </div>
                </a>
                <a href="">
                    <div class="menu_profile">
                        <img src="/cart.png" class="icon" alt="">
                        <span>Корзина</span>
                    </div>
                    <div class="notification">0</div>
                </a>
                <a href="">
                    <div class="menu_profile">
                        <img src="/favorites.png" class="icon" alt="">
                        <span>Избранное</span>
                    </div>
                    <div class="notification">0</div>
                </a>
            </div>
        </div>
        <div class="blocks">
            <div class="light-purple-block"></div>
            <div class="purple-block"></div>
            <div class="violet-block">
                <div class="menu">
                    <button>Акции</button>
                    <button>Доставка</button>
                    <button>Магазины</button>
                    <button>Груминг</button>
                    <button>Веткабинет</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css">

:root {
    --base-violet: #583186;
    --base-purple: #86316D;
}

header {
    background-color: #ffffff;
    height: 180px;
    padding-top: 55px;
    padding-left: 50px;
    padding-right: 50px;
    width: 1200px;
    margin: 0 auto;
}

form {
    height: 100%;
    width: 40%;
    float: left;
    position: relative;
    display: flex;
}

button {
    background-color: var(--base-violet);
    border: none;
    color: white;
    padding-left: 20px;
    padding-right: 20px;
    height: 100%;
}

.logo a {
    color: #583186;
}

.search-button {
    z-index: 10;
    float: right;
    font-family: "Manrope Medium", sans-serif;
    font-size: 1.0em;
}

.menu_profile span {
    color: var(--base-violet);
    font-family: "Manrope SemiBold", sans-serif;
}

.menu_profile span:hover {
    color: #45246c;
}

.icon {
    fill: #C4B3D9;
    height: 100%;
    margin-right: 7px;
}

.profile a {
    margin-left: 15px;
}

.catalog img {
    height: 1.1em;
    margin-right: 15px;
    margin-bottom: 4px;
}

.profile {
    height: 100%;
    display: flex;
    float: right;
}

.menu_profile {
    height: 40px;
    margin-left: 10px;
    float: right;
    text-align: center;
    font-size: 1.1em;
}

.menu_profile img:hover {
    cursor: pointer;
    filter: brightness(0) saturate(100%) invert(99%) sepia(58%) saturate(2454%) hue-rotate(200deg) brightness(90%) contrast(85%);;
}

.menu {
    margin-left: calc((100% - 1200px) / 2 + 50px);
    height: 35%;
    font-family: "Manrope SemiBold", sans-serif;
    font-size: 1.1em;
    z-index: 3;
}

button:hover {
    background-color: #45246c;
    color: #FFF000;
}

.blocks {
    width: 100%;
    height: 130px;
    background-color: white;
    position: relative;
    margin: 0 0 0 0;
}

.light-purple-block {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #C4B3D9;
    clip-path: polygon(0 50%, 100% 50%, 40% 100%);
    z-index: 0;
    top: 0;
}

.violet-block {
    background-color: var(--base-violet);
    clip-path: polygon(0 0, 100% 0, 100% 30%, 0 65%);
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 2;
    top: 0;
}

.purple-block {
    background-color: var(--base-purple);
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 40%);
    height: 100%;
    width: 100%;
    z-index: 1;
    position: absolute;
    top: 0;
}

.search_line {
    border: none;
    background-color: #D9D9D9;
    height: 100%;
    padding-left: 20px;
    width: 100%;
    font-family: "Manrope Medium", sans-serif;
    color: #686868;
    outline-width: 0;
}

.search_line:focus {
    background-color: #eee;
}

.notification {
    background-color: #FFF000;
    height: 17px;
    width: 24px;
    border-radius: 50%;
    position: absolute;
    color: var(--base-purple);
    font-family: "Manrope SemiBold", sans-serif;
    font-size: 0.8em;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 10px;
    float: left;
}

.catalog {
    background-color: var(--base-purple);
    height: 100%;
    border: none;
    color: white;
    font-family: "Manrope SemiBold", sans-serif;
    font-size: 1.1em;
    float: left;
}

.catalog:hover {
    background-color: #621f4e;
}

.main_header {
    color: var(--base-violet);
    height: 28%;
    margin-bottom: 3%;
}

.search {
    background-color: #ffffff;
    height: 60px;
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 10px calc((100% - 1200px) / 2 + 50px);
    margin-bottom: 40px;
}

.logo_picture {
    width: 13%;
    margin-right: 22px;
    float: left;
    margin-top: 10px;
}

.tagline {
    font-family: "Manrope ExtraBold", serif;
    font-size: 1.85em;
    float: left;
}

.numbers {
    float: right;
    font-family: "Manrope SemiBold", serif;
    font-size: 1.85em;
    text-align: right;
}
</style>