<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-side-icon @click="toggleSideMenu"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>マイアドレス帳</span>
        <h5>sample</h5>
        <h6>sample2</h6>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <SideNav />
    <Hello />

    <v-content>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import SideNav from  './components/SideNav';
import Hello from './components/HelloWorld';
export default {
  name: 'App',
  components: {
    SideNav,
    Hello,
  },
  data () {
    return {
      //
    }
  },
  methods: {
    ...mapActions(['toggleSideMenu'])
  }
}
</script>
