<template>
  <div class="flex min-h-screen w-full justify-center items-center bg-gradient-to-br from-pink-50 to-purple-100 pen">
    <div class="flex flex-col gap-6 items-center w-[90%] max-w-sm border border-white/40">

      <h1 class="text-3xl pen text-gray-700">Enter Password</h1>

      <input
        class="w-full text-xl px-4 py-3 rounded-xl border border-gray-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-300 outline-none transition-all"
        v-model="store.password"
        type="password"
        placeholder="Your secret key…"
        @keyup.enter="login()"
      />

      <button
        @click="login()"
        class="w-full text-xl py-3 rounded-xl bg-pink-500 text-white hover:bg-pink-600 transition-all shadow-lg hover:shadow-pink-300/50"
      >
        Enter
      </button>

    </div>
  </div>
</template>

<script setup lang="ts">
import { usePassword } from '@/store/usePassword.ts'

const store = usePassword()

const login = () => {
  store.authenticate()
}
</script>
