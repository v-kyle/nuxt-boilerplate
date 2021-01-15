import VueI18n from 'vue-i18n'

type i18nT = typeof VueI18n.prototype.t;

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue
}

declare module 'vue/types/vue' {
  interface Vue {
    $t: i18nT;
  }
}
