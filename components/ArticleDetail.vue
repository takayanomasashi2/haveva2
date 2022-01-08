<template>
  <v-card flat>
    <v-img height="400" :src="article.image.url"></v-img>

    <v-card-title>{{ article.title }}</v-card-title>

    <v-card-text>
      <div v-html="sanitizedBody"></div>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from "axios";
import sanitizeHtml from "sanitize-html";

export default {
  name: "ArticleDetail",

  data: () => ({
    article: {}
  }),

  computed: {
    sanitizedBody() {
      // imgタグのみ使えるようにする
      return sanitizeHtml(this.article.body, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"])
      });
    }
  },

  async mounted() {
    // idを指定して特定の記事を取得する
    const response = await axios.get(
      "https://shurikenfly.microcms.io/api/v1/menu/" +
        this.$route.params.id,
      {
        headers: { "X-MICROCMS-API-KEY": process.env.API_KEY }
      }
    );
    this.article = response.data;
  }
};
</script>