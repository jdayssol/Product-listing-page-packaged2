<template>
    <v-carousel>
        <v-carousel-item
                v-for="(image,i) in images"
                :key="i"
                :src="image.src"
                interval:10000
        ></v-carousel-item>
    </v-carousel>
</template>

<script src="./carousel.js"></script>
