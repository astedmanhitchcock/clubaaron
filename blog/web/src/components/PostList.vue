<template>
    <div>
      <ol class="post-list">
        <li :class="`py-3${idx > 0 ? ' border-t': ''}`" v-for="post, idx in publishedPosts" :key="post.title">
            <span class="post__title">
              <router-link
                :to="`/post/${post.slug}`"
              >
                <h2>
                  {{ post.title }}{{ post.subtitle &&  `:  ${post.subtitle}` }}
                </h2>
              </router-link>
            </span>
            <span v-if="showAuthor" class="block">
              by <AuthorLink :author="post.author" />
            </span>
            <div class="font-mono">
              {{ displayableDate(post.publishDate) }}
            </div>
          <p>
            {{ post.metaDescription }}
          </p>
          <ul class="mt-3">
            <li v-for="tag in post.tags" :key="tag.name">
              <PostTag :tag="tag" />
            </li>
          </ul>
        </li>
      </ol>
    </div>
</template>

<script>
import AuthorLink from '@/components/AuthorLink'
import PostTag from '@/components/PostTag.vue'

export default {
  name: 'PostList',
  components: {
    AuthorLink,
    PostTag
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
    showAuthor: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  computed: {
    publishedPosts () {
      return this.posts.filter(post => post.published)
    }
  },
  methods: {
    displayableDate (date) {
      if (date) {
        return new Intl.DateTimeFormat(
          'en-US',
          { dateStyle: 'full' },
        ).format(new Date(date)).toLowerCase()
      } else {
        return "no date"
      }
    }
  },
}
</script>
