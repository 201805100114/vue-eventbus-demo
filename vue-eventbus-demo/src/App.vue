<template>
  <div id="app">
    <h1>Vue EventBus Example</h1>
    <ComponentA />
    <ComponentB />
  </div>
</template>

<script>
import ComponentA from './components/ComponentA.vue';
import ComponentB from './components/ComponentB.vue';

export default {
  name: 'App',
  components: {
    ComponentA,
    ComponentB
  }
}
</script>