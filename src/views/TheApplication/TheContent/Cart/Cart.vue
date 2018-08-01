<template>
  <div><h1 class="title">{{titleCart}}</h1>
    <Card v-for="show in cartShows" :key="show.id" :show-id="show.id" :title="show.title" :description="show.description"
          :status="show.status" :is-cart="show.isCart" :imgposter="show.images.poster" :imgbox="show.images.box"
          :creation-date="show.creation" :nb-seasons="show.seasons" :genres="show.genres" :network="show.network"
          @toggle-cart="toggleCart(show)"></Card>
  </div>
</template>

<script src="./cart.service.js"></script>
<script src="./cart.js"></script>
