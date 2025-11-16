<template>
  <section class="py-20 px-4 md:px-8 max-w-5xl mx-auto">
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visibleOnce="{ opacity: 1, y: 0 }"
      class="text-center mb-16"
    >

      <h2 class="text-6xl mb-4 text-gray-800 pen">The song I sang for you</h2>
      <p class="text-xl text-gray-600">A melody that reminds me of you.</p>
    </div>

    <div
      v-motion
      :initial="{ opacity: 0, scale: 0.9 }"
      :visibleOnce="{ opacity: 1, scale: 1 }"
      class="relative"
    >
      <iframe
        style="border-radius:12px"
        src="https://www.youtube.com/embed/AzYhit2J1so"
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  </section>
</template>
