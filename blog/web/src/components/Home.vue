<template>
    <h2>home</h2>
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

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 1.5rem;
}

* + * {
  margin-top: 1.5rem;
}

#app {
  margin: 0;
  padding: 0;
}
</style>