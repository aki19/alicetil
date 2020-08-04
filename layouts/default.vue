<template>
  <v-app>
    <AppHeader/>
    <v-main>
      <v-container fluid>
        <Nuxt/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import AppHeader from "../components/AppHeader";
  import AppFooter from "../components/AppFooter";

  export default {
    comments: {
      AppHeader,
      AppFooter
    }
  }
</script>

<style>
  html {
    font-family: 'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
  }
</style>
