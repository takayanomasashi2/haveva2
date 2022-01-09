<template>
  <div data-wow-duration="1500ms" class="col-lg-4 wow fadeInLeft" data-v-1682312c>
    <div class="blog-one__image">
          <img v-if="image" :src="imageUrl" :alt="name" :class="imageClass" />
          <img
            v-else
            src="~/static/assets/images/HAVEVA.png"
            :alt="name"
            :class="imageClass"
          />
    </div>
    <div class="blog-one__content">
      <ul class="blog-one__meta list-unstyled">
        <li>
          <i class="far fa-clock"></i>{{ price }}
        </li>
        <!-- <li><a href="#"><i class="far fa-comments"></i> 2 Comments</a></li> -->
      </ul>
      <h3><a :href="'./' + id">{{ name }}</a>
      </h3>
      <a :href="'./' + id" class="blog-one__link"><i class="zimed-icon-right-arrow"></i></a>
      <!-- /.blog-one__link -->
    </div><!-- /.blog-one__content -->
  </div>
</template>

<script>
    export default {
        name: "BlogHome",
        props: {
          imageClass: {
            type: String,
            default: 'md:w-2/5',
          },
          dataClass: {
            type: String,
            default: 'w-7/12 px-6 py-4 mb:px-0 mb:px-0',
          },
          flagBody: {
            type: Boolean,
            default: true,
          },
          image: {
            type: Object,
            required: true,
          },
          imageUrl: {
            type: String,
            required: true,
          },
          name: {
            type: String,
            required: true,
          },
          body: {
            type: String,
            required: true,
          },
          price: {
            type: String,
            required: true,
          },
          id: {
            type: String,
            required: true,
          },
        },
    }
</script>

<style scoped>

</style>