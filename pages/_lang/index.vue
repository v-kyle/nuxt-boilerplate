<template>
  <div :class="`page-${$route.params.lang}`">
    {{ this.$t('TITLE') }}
  </div>
</template>

<script>
export default {
  head () {
    return { title: this.$t('TITLE') }
  }
}
</script>
