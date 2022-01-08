<template>
  <section class="blog-details">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <div class="blog-details__content">
            <div class="blog-details__image">
              <img v-bind:src="imgSrc" alt="">
            </div><!-- /.blog-details__image -->
            <ul class="blog-one__meta list-unstyled">
              <li><a href="#"><i class="far fa-clock"></i>{{ item.price }}</a></li>
              <!-- <li><a href="#"><i class="far fa-comments"></i> {{ item.price }} Likes</a></li> -->
            </ul><!-- /.blog-one__meta list-unstyled -->
            <h3>{{ item.name }}</h3>
            <!-- <p>{{ item.body }}</p> -->
             <div v-html="$md.render(item.body)"></div>
          </div><!-- /.blog-details__content -->
          <!-- <div class="blog-details__bottom">
            <div class="blog-details__social site-footer__social"> -->
              <!-- <a class="fab fa-facebook-f" href="#"></a> -->
              <!-- <a class="fab fa-twitter" href="https://twitter.com/masashi_d2c"></a>
              <a class="fab fa-instagram" href="https://www.instagram.com/fjmasashi/"></a> -->
              <!-- <a class="fab fa-pinterest-p" href="#"></a> -->
            <!-- </div> /.blog-details__social -->
          <!-- </div>/.blog-details__bottom -->

          <!-- <div class="author-one">
            <div class="author-one__image">
              <img src="/assets/images/blog/author-1-1.jpg" alt="">
            </div> /.author-one__image -->
            <!-- <div class="author-one__content">
              <h3>よく一緒に読まれている記事</h3>
              <p>It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining unchanged. It was popularised in the sheets containing.</p>
            </div> /.author-one__content -->
          <!-- </div>/.author-one -->
        </div><!-- /.col-lg-8 -->
        <!--<div class="col-lg-4">
        </div>--><!-- /.col-lg-4 -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </section>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData({ $config, params, error }) {
    try {
      const { data } = await axios.get(
        `${$config.apiUrl}/blog/${params.id}`,
        {
          headers: { 'X-MICROCMS-API-KEY': $config.apiKey },
        }
      )
      return {
        item: data, imgSrc: data.image.url
      }
    } catch (err) {
      error({
        errorCode: 404,
      })
    }
  },
  head() {
    return {
      title: this.item.name,
    }
  },
}
</script>