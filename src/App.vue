<script setup lang="ts">
import NotFound from './views/NotFound.vue'
import { useUtil } from './composables/util';

const { notFound } = useUtil();

</script>



<template>
  <div v-if="notFound">
    <v-app>
      <v-main>
        <v-container fluid>
          <not-found></not-found>
        </v-container>
      </v-main>
    </v-app>
  </div>
  <div v-else>
    <v-app>
      <v-navigation-drawer app>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <!-- <p> name : {{ router.currentRoute.name }}</p> -->
      </v-navigation-drawer>
      <v-app-bar app>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-app-bar-title>Title</v-app-bar-title>
        <p>A</p>
        <p>A</p>
        <p>A</p>
      </v-app-bar>

      <!-- not found일 때 이것만 출력해주고 싶은데 -->
      <v-main>
        <v-container fluid>
          notFound: {{ notFound }}
          <router-view></router-view>
        </v-container>
      </v-main>

      <v-bottom-navigation app></v-bottom-navigation>
    </v-app>
  </div>
  
</template>