<template>
  <div :class="`page-${$route.params.lang}`">
    {{ $t('TITLE') }}
    {{ test }}
  </div>
</template>

<script lang="ts">
export default {
  computed: {
    test (): number {
      return 1
    }
  },

  head (): Record<string, string> {
    return { title: this.$t('TITLE') }
  }
}
</script>
