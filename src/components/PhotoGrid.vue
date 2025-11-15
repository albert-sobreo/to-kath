<template>
  <section class="py-20 px-4 md:px-8 max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-5xl mb-4 text-gray-800">{{ props.photoDetails.title }}</h2>
      <p class="text-xl indie-flower text-gray-600">{{ props.photoDetails.header }}</p>
    </div>

    <div class="grid grid-cols-4 auto-rows-[70px] md:auto-rows-[220px] gap-4">
      <div
        v-for="(photo, index) in props.photoDetails.photos"
        :key="index"
        class="bg-white p-2 md:p-4 pb-12 md:pb-16 overflow-hidden shadow-lg cursor-pointer"
        :class="photo.span"
      >
        <img
          v-if="!photo.image.includes('.mov')"
          :src="props.photoDetails.photoLoc+photo.image"
          alt="photo"
          class="w-full h-full object-cover"
        />

        <video
          playsinline autoplay muted loop
          v-else
          :src="props.photoDetails.photoLoc+photo.image"
          class="w-full h-full object-cover"
        />
        <span class="md:text-xl pen">{{ photo.description }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

type photo = {
  image: string
  span: string
  description: string | null
}

type photoGrid = {
  title: string
  header: string
  photos: photo[]
  photoLoc: string
}

type propType = {
  photoDetails: photoGrid
}

const props = defineProps<propType>()
</script>
