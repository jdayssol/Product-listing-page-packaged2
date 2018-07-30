<template>
  <div id="app">
    <div class="container">
      <nav class="navbar">
        <div class="navbar-brand">
          <router-link to="/">
            <a class="navbar-item" href="./index.html">
              <img src="./assets/img/logo.jpg" alt="TV shows store">
              TV shows store
            </a>
          </router-link>
        </div>
        <div class="navbar-menu">
          <div class="navbar-start">
            <router-link :to="{name: 'shows'}" class="navbar-item" active-class="is-active">
              Search
            </router-link>
            <router-link :to="{name: 'cart'}" class="navbar-item" active-class="is-active">
              Cart
            </router-link>
          </div>
        </div>
      </nav>
    </div>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <router-view></router-view>
          </div>
        </div>
      </section>
    </div>
</template>

<style src="../node_modules/font-awesome/css/font-awesome.min.css"></style>
<style src="@/css/bulma.min.css"></style>
<style src="@/css/app.css"></style>
