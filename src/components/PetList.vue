<template>

  <div>
    宠物列表
    <ul id="example-1">
    <li>
      {{ items }}
    </li>
  </ul>
  </div>
  
</template>

<script>
export default {
  name: 'PetList',
  data () {
    return {
      items: []
    }
  },
  mounted () {
    this.$http.get('pet', data => {
      this.$set('items', data)
    })
  }
}
</script>

<style scoped>

</style>
