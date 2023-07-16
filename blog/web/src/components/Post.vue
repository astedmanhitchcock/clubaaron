<template>
  <div class="post" v-if="post">
      <h2>{{ post.title }}: {{ post.subtitle }}</h2>
      By <AuthorLink :author="post.author" />
      <div>{{ displayableDate(post.publishDate) }}</div>
    <p class="post__description">{{ post.metaDescription }}</p>
    <article>
      {{ post.body }}
    </article>
    <ul>
      <li class="post__tags" v-for="tag in post.tags" :key="tag.name">
        <router-link :to="`/tag/${tag.name}`">#{{ tag.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import AuthorLink from '@/components/AuthorLink'

export default {
  name: 'PostDetail',
  components: {
    AuthorLink,
  },
  data () {
    return {
      post: null,
    }
  },
  apollo: {
    post: {
      query: gql`query ($slug: String!) {
        postBySlug(slug: $slug) {
          title
          subtitle
          publishDate
          metaDescription
          slug
          body
          author {
            user {
              username
              firstName
              lastName
            }
          }
          tags {
            name
          }
        }
      }`,
      variables() {
        return {
          slug: this.$route.params.slug
        }
      },
      update: (data) => {
        return data.postBySlug
      }
    }
  },
  methods: {
    displayableDate (date) {
      return new Intl.DateTimeFormat(
        'en-US',
        { dateStyle: 'full' },
      ).format(new Date(date))
    }
  },
  watch: {
    post() {
      console.log('loaded the post :: ', this.post)
    }
  }
}
</script>