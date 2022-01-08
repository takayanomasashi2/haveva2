<template>
  <div>

    <Banner />
    <!-- <Service />
    <FeaturesOne />
    <FeaturesTwo />
    <Video />
    <Counter />
    <Pricing />
    <Screenshots />
    <Testimonial />
    <Brands />
    <Faq /> -->

    <section class="blog-one blog-one__home" id="blog">
      <img src="/assets/images/shapes/blog-shape-1-1.png" alt="" class="blog-one__shape-1">
      <div class="container">
        <div class="block-title text-center">
          <span class="block-title__bubbles"></span>
          <p>最新情報</p>
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
    
    <!-- <Contact /> -->
    <!-- <CallToAction /> -->
  </div>
</template>

<script>
  import Banner from "~/components/Banner.vue";
  import Service from "~/components/Service.vue";
  import FeaturesOne from "~/components/FeaturesOne.vue";
  import FeaturesTwo from "~/components/FeaturesTwo.vue";
  import Video from "~/components/Video.vue";
  import Counter from "~/components/Counter.vue";
  import Pricing from "~/components/Pricing.vue";
  import Screenshots from "~/components/Screenshots.vue";
  import Testimonial from "~/components/Testimonial.vue";
  import Brands from "~/components/Brands.vue";
  import Faq from "~/components/Faq.vue";
  import BlogHome from "~/components/BlogHome.vue";
  import Contact from "~/components/Contact.vue";
  import CallToAction from "~/components/CallToAction.vue";
  import axios from 'axios'
  import LayoutMenuList from "~/components/LayoutMenuList.vue";
  import LayoutInformationList from "~/components/LayoutInformationList.vue";

export default {
  components: {
    Banner,
    Service,
    FeaturesOne,
    FeaturesTwo,
    Video,
    Counter,
    Pricing,
    Screenshots,
    Testimonial,
    Brands,
    Faq,
    BlogHome,
    Contact,
    CallToAction,
    LayoutMenuList,
    LayoutInformationList,
  },
  async asyncData({ $config }) {
    try {
    const blog = await axios.get(
      `${$config.apiUrl}/blog?limit=3&filters=flag[equals]true`,
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
}
</script>

<style>

</style>
