<script setup>
import { computed, reactive } from "vue";

let properties = reactive({
  perspective: 100,
  rotateX: 0,
  rotateY: 0,
  rotateZ: 0,
});

const box = computed(() => {
  return {
    transform: `
          perspective(${properties.perspective}px)
          rotateX(${properties.rotateX}deg)
          rotateY(${properties.rotateY}deg)
          rotateZ(${properties.rotateZ}deg)
        `,
  };
});

// Note: transform:perspective(100px) rotateX(70deg) rotateY(50deg) rotateZ(60deg)
// https://css-tricks.com/how-css-perspective-works/

const reset = () => {
  properties.perspective = 100;
  properties.rotateX = 0;
  properties.rotateY = 0;
  properties.rotateZ = 0;
};

</script>

<template>
  <h2>CSS3 Perspective Playground</h2>
  <main>
    <section class="settings">
      <div class="settings-container">
        <label>perspective: {{ properties.perspective }}px;</label>
        <input
          type="range"
          min="0"
          max="999"
          v-model="properties.perspective"
        />

        <label>rotateX: {{ properties.rotateX }}deg; </label>
        <input type="range" min="-180" max="180" v-model="properties.rotateX" />

        <label>rotateY: {{ properties.rotateY }}deg; </label>
        <input type="range" min="-180" max="180" v-model="properties.rotateY" />

        <label>rotateZ: {{ properties.rotateZ }}deg; </label>
        <input type="range" min="-180" max="180" v-model="properties.rotateZ" />

        <button type="button" @click.prevent="reset">Reset</button>
      </div>
    </section>
    <section class="output">
      <div class="box-container">
        <div class="box" :style="box"></div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
