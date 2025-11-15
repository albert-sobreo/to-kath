<template>
  <section class="py-20 px-4 md:px-8 max-w-5xl mx-auto">
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visibleOnce="{ opacity: 1, y: 0 }"
      class="text-center mb-16"
    >
      <h2 class="text-6xl mb-4 text-gray-800 pen">I love you :></h2>

      <p class="text-xl indie-flower text-zinc-600 sunrise">
        I am always here for you. <br>
        I am always looking forward to our future. <br>
        I will always love you. <br><br>

        Happy Birthday Again !!!

      </p>
    </div>
  </section>
</template>
