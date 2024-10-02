<template>
  <div>
    <h2>Component B</h2>
    <p>收到的消息：{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'ComponentB',
  data() {
    return {
      message: ''
    };
  },
  mounted() {
    // 监听事件总线的消息
    this.$bus.$on('messageFromA', (msg) => {
      this.message = msg;
    });
  },
  beforeDestroy() {
    // 组件销毁时移除事件监听器，防止内存泄漏
    this.$bus.$off('messageFromA');
  }
}
</script>