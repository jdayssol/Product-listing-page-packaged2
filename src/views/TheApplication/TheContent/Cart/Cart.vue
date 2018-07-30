<template>
  <div><h1 class="title">{{title}}</h1>
    <Card :title="show.title" :description="show.description"
          :status="show.status" :is-cart="show.isCart" :image="show.images.poster"
          :creation-date="show.creation" :nb-seasons="show.seasons" :genres="show.genres"
          @toggle-cart="toggleCart(show)" v-for="show in cartShows" :key="show.id" :show-id="show.id"></Card>
  </div>
</template>

<script src="./cart.service.js"></script>
<script src="./cart.js"></script>

<style scoped>

</style>
