<template>
  <div class="card card-result">
    <div class="card-header">
      <router-link class="card-header-title" :to="{name: 'showDetail', params: { showId: showId }}">{{titleCart}}</router-link>
      <a class="card-header-icon" @click="toggleCart()">
                <span class="icon" :class="{'is-cart': isCart}">
                    <i class="fa fa-shopping-cart"></i>
                </span>
      </a>
    </div>
    <div class="card-content">
      <figure class="image is-show">
        <img :src="imgbox" alt="Image">
      </figure>
      <p>&nbsp;</p>
      <div class="media">
        <div class="media-left" @mouseover="toggleDescription()" @mouseleave="toggleDescription()">
          <figure class="image is-poster">
            <img :src="imgposter" alt="Image">
          </figure>
        </div>
        <div class="media-content">

          <p class="">Created in {{creationDate}} - {{nbSeasons}} seasons</p>
          <p class="tags"><span class="tag" v-for="genre in genres" :key="genre.id">{{genre}}</span></p>
          <p class="tags"><span class="tag is-primary">{{status}}</span></p>
          <div class="content" @click="toggleDescription()">
            <span v-if="longDescription">{{description}}
              </span>
            <span v-else>{{description | truncate(56)}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./card.js"></script>

<style scoped>

</style>
