<template>
  <div>
    <h1>Details</h1>
    <div><h1 class="title">{{show.title}}</h1>
      <Card :title="show.title" :description="show.description"
            :status="show.status" :is-cart="show.isCart" :image="show.images.poster" :overimage="show.images.show"
            :creation-date="show.creation" :nb-seasons="show.seasons" :genres="show.genres"
            @toggle-cart="toggleCart(show)" :show-id="show.id"></Card>
    </div>
  </div>
</template>

<script src="./showdetail.js"></script>

<style scoped>

</style>
