<template lang='pug'>
table.table.mt-5(v-if="posts")
    thead.table-success
        tr
            th(v-for="(title,index) in tableTitle" :key="index") {{title}}
    tbody
        tr(v-for="(post,index) in posts" :key="post?.id")
            th {{post?.userId}}
            th {{post?.id}}
            th {{post?.title}}
            th {{post?.body}}
</template>

<script>
export default {
    data() {
    return {
      tableTitle: ['User ID', 'ID', 'Title', 'Body'],
  }
  },
  props: {
    posts: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style>
</style>