<template>
  <!-- <layout-wrapper>
    <layout-visual title="Blog" :height="40" visual="visual-menu" />
    <div class="w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0">
      <div class="mb-20">
        <LayoutMenuList
          v-for="(item, index) in items"
          :key="index"
          :image="item.image"
          :image-url="item.image.url"
          :name="item.name"
          :body="item.body"
          :price="item.price"
        />
      </div>
      <base-button name="トップへ戻る" link="/" />
    </div>
  </layout-wrapper> -->
  <section class="blog-one blog-one__home" id="blog">
      <!-- <img src="/assets/images/shapes/blog-shape-1-1.png" alt="" class="blog-one__shape-1"> -->
      <div class="container">
        <div class="block-title text-center">
          <span class="block-title__bubbles"></span>
          <p>ブログ</p>
          <h3>ニュース & 記事</h3>
        </div>
        <div class="row" data-v-1682312c>
          <BlogHome
            v-for="(item, index) in blogItems"
            :id="item.id"
            :key="index"
            :image="item.image"
            :image-url="item.image.url"
            :name="item.name"
            :body="item.body"
            :price="item.price"
            item-class="md:w-56 mb-20 shadow-lg bg-gray-200"
            block-class="max-w"
            image-class="w-full"
            data-class="px-6 py-4"
            :flag-body="false"
          />
        </div>
      </div>
    </section>
</template>

<script>
import axios from 'axios'
import LayoutMenuList from "~/components/LayoutMenuList.vue";
import BlogHome from "~/components/BlogHome.vue";

export default {
  components: {
    LayoutMenuList,
    BlogHome,
  },
  // async asyncData({ $config }) {
  //   const { data } = await axios.get(`${$config.apiUrl}/blog`, {
  //     headers: { 'X-MICROCMS-API-KEY': $config.apiKey },
  //   })
  //   return {
  //     items: data.contents,
  //   }
  // },
  async asyncData({ $config }) {
    try {
    const blog = await axios.get(
      `${$config.apiUrl}/blog?limit=4&filters=flag[equals]true`,
      {
        headers: { 'X-MICROCMS-API-KEY': $config.apiKey },
      }
    )
    //const info = await axios.get(`${$config.apiUrl}/information?limit=3`, {
    //  headers: { 'X-MICROCMS-API-KEY': $config.apiKey },
    //})
    return {
      blogItems: blog.data.contents,
      //infoItems: info.data.contents,
    };
    } catch (err) {
      error({
        statusCode: err.response.status,
        message: err.response.data.message,
      });
    }
  },
  head() {
    return {
      title: 'メニュー',
    }
  },
}
</script>