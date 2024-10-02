<template>
  <div>
    <h2>Component A</h2>
    <button @click="sendMessage">发送消息到 Component B</button>
  </div>
</template>

<script>
export default {
  name: 'ComponentA',
  methods: {
    sendMessage() {
      const message = '你好，Component B！';
      this.$bus.$emit('messageFromA', message);
    }
  }
}
</script>