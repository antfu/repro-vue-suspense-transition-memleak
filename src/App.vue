<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import Foo from './foo.vue'
import Bar from './bar.vue'

const a = ref(false)
const count = ref(0)

const toggle = () => {
  a.value = !a.value
  count.value += 1
}
const toggles = async () => {
  for (let i = 50; i > 0; i--) {
    toggle()
    await nextTick()
    await new Promise(resolve => setTimeout(resolve, 100))
  }
}

onMounted(() => {
  // ensure both components get initialized once
  toggle()
})
</script>

<template>
  <main>
    <div>
      <h1>Count {{ count }}</h1>
      <button @click="toggle()">
        Toggle
      </button>
      <button @click="toggles()">
        Toggle 50x
      </button>
      <div>Open the memory tab in DevTools, take a memory snapshot. Click `toggle` for a few times, take another snapshot and see the diff. You may search for the instance amount of `EffectScope` for easier comparsion.</div>
    </div>
    <Transition mode="out-in">
      <Suspense>
        <Component :is="a ? Foo : Bar" />
        <template #fallback>
          Loading...
        </template>
      </Suspense>
    </Transition>
  </main>
</template>
