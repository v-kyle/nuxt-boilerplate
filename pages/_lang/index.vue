<template>
  <div :class="`page-${$route.params.lang}`">
    {{ $t('TITLE') }}
    {{ test }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    test (): number {
      return 1
    }
  },

  head (): Record<string, string> {
    return { title: String(this.$t('TITLE')) }
  }
})
</script>
