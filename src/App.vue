<script setup lang="ts">
import Hero from "@/components/Hero.vue";
import OurJourney from '@/components/OurJourney.vue'
import PhotoGrid from '@/components/PhotoGrid.vue'
import { photoMonths } from '@/data/photoMonths'
import Footer from '@/components/Footer.vue'
import Denouement from '@/components/Denouement.vue'
import OurSong from '@/components/OurSong.vue'

</script>

<template>
  <main class="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
    <Hero />

    <OurSong/>

    <OurJourney/>

    <PhotoGrid
      v-for="(photoDetails, index) in photoMonths"
      :key="index"
      :photo-details="photoDetails"
    />

    <Denouement/>

    <Footer/>
  </main>
</template>
