<script setup lang="ts">

const milestones = [
  {
    id: 1,
    title: "We Met",
    description: "We met at Boo :)",
    date: "September 2024",
    icon: "♥️"
  },
  {
    id: 2,
    title: "Our First Date",
    description: "Parehas tayong kabado",
    date: "October 2024",
    icon: "🪴"
  },
  {
    id: 3,
    title: "Our First Trip",
    description: "Unexpected Baguio Trip",
    date: "December 2024",
    icon: '📌'
  },
  {
    id: 4,
    title: "You said 'I Love You'",
    description: "Naunahan mo ako",
    date: "December 2024",
    icon: '💌'
  },
  {
    id: 5,
    title: "Our First Kiss",
    description: "It was the right moment",
    date: "January 2025",
    icon: '🎡'
  },
  {
    id: 6,
    title: "Our First Fight",
    description: "I'm really sorry",
    date: "February 2025",
    icon: '😣'
  },
  {
    id: 7,
    title: "Your First Time meeting my friends",
    description: "You met Jo and Mike",
    date: "March 2025",
    icon: '✨'
  }
];
</script>

<template>
  <section class="py-20 px-4 md:px-8 max-w-5xl mx-auto">
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visibleOnce="{ opacity: 1, y: 0 }"
      class="text-center mb-16"
    >
      <h2 class="text-6xl mb-4 text-gray-800 pen">Our Journey</h2>
      <p class="text-xl indie-flower text-gray-600 sunrise">Our First Times</p>
    </div>

    <div class="relative">
      <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-300 via-purple-300 to-blue-300" />

      <div
        v-for="(milestone, index) in milestones"
        :key="milestone.id"
        v-motion
        :initial="{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }"
        :visibleOnce="{ opacity: 1, x: 0 }"
        :delay="index * 200"
        class="relative flex items-center mb-16 pen"
        :class="[index % 2 === 0 ? 'flex-row' : 'flex-row-reverse']"
      >
        <div class="w-1/2" :class="[index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left']">
          <div class="bg-white rounded-2xl p-6 shadow-lg">
            <div class="flex items-center gap-2 mb-2" :class="[index % 2 === 0 ? 'justify-end' : 'justify-start']">
              <span class="text-pink-500">{{ milestone.date }}</span>
            </div>
            <h3 class="text-2xl mb-2 text-gray-800">{{ milestone.title }}</h3>
            <p class="text-gray-600">{{ milestone.description }}</p>
          </div>
        </div>

        <div class="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-pink-300 flex items-center justify-center shadow-lg">
          <span>{{milestone.icon}}</span>
        </div>

        <div class="w-1/2" />
      </div>
    </div>
  </section>
</template>
