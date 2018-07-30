<template>
  <div id="app">
    <div class="container">
      <div id="nav">
        <div class="navbar-brand">
          <router-link to="/">
            TV shows store
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
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script src="./cart.service.js"></script>
<style src="../node_modules/font-awesome/css/font-awesome.min.css"></style>
<style src="@/css/bulma.min.css"></style>
<style src="@/css/app.css"></style>
