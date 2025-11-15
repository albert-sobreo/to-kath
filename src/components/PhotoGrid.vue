<template>
  <section class="py-20 px-4 md:px-8 max-w-7xl mx-auto">
    <div class="text-center mb-16 pen">
      <h2 class="text-6xl mb-4 text-gray-800" v-motion-pop-visible-once :duration="500" :delay="200">{{ props.photoDetails.title }}</h2>
      <p class="text-xl indie-flower text-gray-600" v-motion-pop-visible-once :duration="500" :delay="300">{{ props.photoDetails.header }}</p>
    </div>

    <div class="grid grid-cols-4 auto-rows-[85px] md:auto-rows-[220px] gap-2">
      <div
        v-for="(photo, index) in props.photoDetails.photos"
        :key="index"
        class="bg-white p-2 md:p-4 overflow-hidden shadow-lg cursor-pointer"
        :class="[photo.span, photo.description ? 'pb-8 md:pb-10' : '']"
        v-motion-fade-visible-once :duration="500" :delay="Number(String(index) + '00')"
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
        <p class="md:text-xl leading-none pen">{{ photo.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type photo = {
  image: string
  span: string
  description?: string | null | undefined
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
