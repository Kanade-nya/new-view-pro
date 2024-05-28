<script setup>

import Cube from "@/components/elements/Cube.vue";
import Card from "@/components/cards/Card.vue";
import Contributor from "@/components/cards/Contributor.vue";
</script>

<template>
<div class="cubes">
  <Cube>1</Cube>
  <Cube>2</Cube>
  <Cube>3</Cube>
</div>
  <Card></Card>
  <Contributor/>
</template>

<style scoped>
.cubes{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>