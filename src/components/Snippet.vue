<template lang="html">
    <pre v-if="code"><code :class="language" v-text="code"></code></pre>
    <pre v-else><code :class="language"><slot></slot></code></pre>
</template>

<script>
  import Prism from 'prismjs';
  import 'prismjs/themes/prism-okaidia.css';

  export default {
    props: {
      lang: String,
      code: String,
    },
    computed: {
      language() {
        return this.lang ? `language-${this.lang}` : 'language-none';
      },
    },
    mounted() {
      Prism.highlightAll();
    },
    updated() {
      Prism.highlightAll();
    },
  };
</script>
