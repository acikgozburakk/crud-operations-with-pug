<template lang='pug'>
.container
  postList(:posts="posts")
</template>

<script>
import postList from '../components/Home/postList.vue'
import { mapGetters } from "vuex";
export default {
  components:{
    postList,
  },
  created() {
    this.$store.dispatch("getpost");
  },
  computed: {
    ...mapGetters({
      posts: "postlist",
    }),
  },
};
</script>

<style>
</style>
