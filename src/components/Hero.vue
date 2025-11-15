<script setup lang="ts">
import { Heart } from "lucide-vue-next";
import { ref, onMounted } from "vue";
import { useTyping } from "@/composables/useTyping";
import { ChevronDown } from 'lucide-vue-next'

// typing animation composable
const { output, underscoreVisible, observeElement } = useTyping(
  "Hello Katherine",
  100,
  600
);

// ref to container for intersection observer
const container = ref<HTMLElement | null>(null);

onMounted(() => {
  if (container.value) observeElement(container.value);
});
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
    <!-- Background blobs remain the same -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute -top-1/2 -left-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
      />
      <div
        class="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
      />
    </div>

    <div class="relative text-center">
      <!-- Heart -->
      <div
        class="inline-block mb-6"
      >
        <Heart class="w-20 h-20 text-pink-400 fill-pink-400" />
      </div>

      <!-- My name is / Typing -->
      <div class="flex flex-col items-center mb-6" ref="container">
        <div class="outfit flex gap-0 text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter">
          <span class="text-zinc-900 text-6xl">{{ output }}</span>
          <span
            class="text-pink-300  text-6xl"
            :class="{ 'text-white/0': !underscoreVisible }"
          >
            _
          </span>
        </div>
      </div>

      <!-- Subtitle text -->
      <p
        class="indie-flower text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto"
      >
        Happy Birthday to you !!!
      </p>


      <div class="flex flex-col items-center gap-1 text-zinc-400 mt-24">
        <span>Scroll Down</span>
        <ChevronDown/>
      </div>
    </div>

  </section>
</template>
