<template>
  <div>
    这是一个3.0的地方
    <h2 class="aa">Nihao
      <p>就解决11</p>
    </h2>
  </div>
</template>

<script>
export default {
  name: "App",
  setup() {
    const test = () => {
      console.log('哈哈')
    }
    return {
      test
    }
  }
}
</script>

<style scoped lang="less">
  .aa {
    color: red;

    p {
      color: #57ff96;
    }
  }
</style>
