<template>
  <div>
    <div>
      <div class="field">
        <div class="control">
          <div class="search-bar">
            <i class="icon fa fa-search"/>
            <input class="input" type="text"
                   placeholder="Search (dummy filter functionality by title. Ex : Game of thrones, Breaking bad, ...)"
                   v-model="searchTerm"
                   v-focus
                   @input="search()">
          </div>
        </div>
      </div>
        <Card v-for="show in shows"
          :key="show.id"
          :show-id="show.id"
          :title="show.title"
          :description="show.description"
          :status="show.status"
          :is-cart="show.isCart"
          :imgposter="show.images.poster"
          :imgbox="show.images.box"
          :creation-date="show.creation"
          :nb-seasons="show.seasons"
          :genres="show.genres"
          :network="show.network"
          @toggle-cart="toggleCart(show)"
          ></Card>
    </div>
  </div>
</template>

<script src="./shows.js"></script>
