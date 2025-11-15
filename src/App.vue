<script setup lang="ts">
import Hero from "@/components/Hero.vue";
import PhotoGrid from '@/components/PhotoGrid.vue'
import { photoMonths } from '@/data/photoMonths'

</script>

<template>
  <main class="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
    <Hero />

    <PhotoGrid
      v-for="(photoDetails, index) in photoMonths"
      :key="index"
      :photo-details="photoDetails"
    />
  </main>
</template>
