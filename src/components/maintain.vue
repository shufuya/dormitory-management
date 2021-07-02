<template>
  <div>
    <h1>维修</h1>
  </div>
</template>

<script>
export default {
  created () {
    this.axios.get('/service/getservice').then(res => console.log(res))
  }
}
</script>

<style>

</style>
