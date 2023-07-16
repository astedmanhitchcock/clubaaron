<template>
  <h2>recent posts</h2>
  <PostList v-if="posts" :posts="posts" />
</template>

<script>
import gql from 'graphql-tag'
import PostList from '@/components/PostList'

export default {
    name: 'HomePage',
    apollo: {
        posts: {
            query: gql`query {
                allPosts {
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
            update: data => data.allPosts
        }
    },
    components: {
      PostList
    },
    data () {
        return {
            posts: ''
        }
    },
    watch: {
        posts() {
            console.log('hello? ', this.posts)
        }

    }
}
</script>
