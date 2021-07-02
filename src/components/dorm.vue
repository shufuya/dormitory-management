<template>
  <div>
    <h1>宿舍</h1>
  </div>
</template>

<script>
export default {
  created () {
    this.axios.get('/dormroom/getdormroom').then(res => console.log(res))
  }
}

</script>

<style>

</style>
