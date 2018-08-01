<template>
  <div>
    <div><h1 class="title">{{show.title}}</h1>
      <Card :title="show.title" :description="show.description"
            :status="show.status" :is-cart="show.isCart" :imgposter="show.images.poster" :imgbox="show.images.box"
            :creation-date="show.creation" :nb-seasons="show.seasons" :genres="show.genres" :showCarrousel="true" :carrouselimg="show.images"
            @toggle-cart="toggleCart(show)" :show-id="show.id" :network="show.network" ></Card>
    </div>
  </div>
</template>

<script src="./showdetail.js"></script>

<style scoped>

</style>
