<template>
  <div>
    <h2>Posts in #{{ $route.params.tag }}</h2>
    <PostList :posts="posts" v-if="posts" />
  </div>
</template>

<script>
import gql from 'graphql-tag'
import PostList from '@/components/PostList'

export default {
  name: 'PostsByTag',
  components: {
    PostList,
  },
  apollo: {
    posts: {
      query: gql`query($tag: String!) {
        postsByTag(tag:$tag) {
          title
          subtitle
          author {
            user {
              username
            }
          }
          tags {
            name
          }
          published
          body
          publishDate
          slug
        }
      }`,
      variables() {
        return {
          tag: this.$route.params.tag
        }
      },
      update: (data) => data.postsByTag
    }
  },  
  data () {
    return {
      posts: null,
    }
  },
  watch: {
    posts() {
      console.log('loaded posts by tag : ', this.posts)
    }
  }
}
</script>