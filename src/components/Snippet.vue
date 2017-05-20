<template>
    <pre :class="lang ? 'language-' + lang : ''">
        <code>
            <slot></slot>
        </code>
    </pre>
</template>

<script>
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css'

  export default {
    props: {
      lang: String
    },
    data() {
      return {}
    },
    mounted() {
      Prism.highlightAll();
    }
  }
</script>