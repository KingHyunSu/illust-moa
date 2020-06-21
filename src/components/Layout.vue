<template>
  <v-app>
    <v-container fluid>
      <router-view/>
    </v-container>
    <v-bottom-navigation
      :value="activeBtn"
      grow
      fixed
      color="teal"
    >
      <v-btn>
        <span>home</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>
      <v-btn>
        <span>검색</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn>
        <span>커뮤니티</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn>
        <span>더보기</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
      activeBtn: null
    }
  }
}
</script>
