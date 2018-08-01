<template>
  <div class="card card-result">

    <div class="card-header">
      <router-link class="card-header-title" :to="{name: 'showDetail', params: { showId: showId }}">{{title}}</router-link>
      <a class="card-header-icon" @click="toggleCart()">{{titleCart}}
                <span class="icon" :class="{'is-cart': isCart}">
                    <i class="fa fa-shopping-cart"></i>
                </span>
      </a>
    </div>
    <div class="card-content">
      <figure class="image is-show">
        <div>
          <span v-if="showCarrousel"> <Carousel :carrouselimg="carrouselimg"></Carousel></span>
      </div>
      </figure>
      <p>&nbsp;</p>
      <div class="media">
        <router-link class="" :to="{name: 'showDetail', params: { showId: showId }}">
          <div class="media-left" @mouseover="setShowNetwork(true)" @mouseleave="setShowNetwork(false)">
            <figure class="image is-poster">
              <img :src="imgposter" alt="Image">
            </figure>
          </div>
        </router-link>
        <div class="media-content">

          <p class="">Created in {{creationDate}} - {{nbSeasons}} seasons</p>
          <p class="tags"><span class="tag" v-for="genre in genres" :key="genre.id">{{genre}}</span></p>
          <p class="tags"><span class="tag is-primary">{{status}}</span></p>
          <div class="content">
            <span v-if="activeNetwork">Network: {{network}}</span>
          </div>
          <div class="content" @click="toggleDescription()">
            <span v-if="longDescription">{{description}}</span>
            <span v-else>{{description | truncate(56)}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./card.js"></script>
