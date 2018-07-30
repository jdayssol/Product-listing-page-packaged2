<template>
  <div>
    <h1>Shows</h1>
    <div><h1 class="title">{{title}}</h1>

      <div class="field">
        <label class="label">Search</label>
        <div class="control">
          <input class="input" type="text"
                 placeholder="Dummy filter functionality by title. Ex : Game of thrones, Breaking bad, ..."
                 v-model="searchTerm" @keypress.enter="search()" v-focus>
        </div>
      </div>
      <Card :title="show.title" :description="show.description"
      :status="show.status" :is-cart="show.isCart" :image="show.images.poster"
      :creation-date="show.creation" :nb-seasons="show.seasons" :genres="show.genres"
      @toggle-cart="toggleCart(show)" v-for="show in shows" :key="show.id" :show-id="show.id"></Card>
    </div>
  </div>
</template>

<script src="./shows.js"></script>

<style scoped>

</style>
