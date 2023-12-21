<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>

  export default {
    name: 'App',

    data: () => ({
    //
  }),
  }
</script>


<style type="text/css">

  @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  #app {

    font-family: 'M PLUS Rounded 1c', sans-serif; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    touch-action: manipulation;
    overflow-y: hidden !important;
    padding: 0px !important;
    height: 100%;
    background-color: none;
    scrollbar-width: none;
    width: 100%;
  }

</style>
