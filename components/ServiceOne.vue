<template>
  <section class="service_one">
    <div class="container">
      <div class="block-title text-center">
        <p>特別な方へ送る</p>
        <h3>骨壷セレクション</h3>
        <div class="leaf">
          <img src="/assets/images/resources/leaf.png" alt="">
        </div>
      </div>
      <div class="row">
        <div class="col-xl-3 col-lg-3 col-md-6">
          <div class="service_1_single wow fadeInUp">
            <div class="content">
              <h3>葬儀用<br>骨壷</h3>
              <p>海イメージ・生物分解性・ペット用</p>
            </div>
            <div class="service_1_img">
              <img src="/assets/images/service/1.jpg" alt="Service Image">
              <div class="hover_box">
                <nuxt-link to="/service-detail"><span class="icon-left-arrow"></span></nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-6">
          <div class="service_1_single wow fadeInUp" data-wow-delay="300ms">
            <div class="content">
              <h3>頑丈な<br>骨壷</h3>
              <p>鉄・大理石・陶器・ガラス製</p>
            </div>
            <div class="service_1_img">
              <img src="/assets/images/service/2.jpg" alt="Service Image">
              <div class="hover_box">
                <nuxt-link to="/service-detail"><span class="icon-left-arrow"></span></nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-6">
          <div class="service_1_single wow fadeInUp" data-wow-delay="600ms">
            <div class="content">
              <h3>デザイン<br>骨壷</h3>
              <p>エアブラシ・アーティスト作・自作</p>
            </div>
            <div class="service_1_img">
              <img src="/assets/images/service/4.jpg" alt="Service Image">
              <div class="hover_box">
                <nuxt-link to="/service-detail"><span class="icon-left-arrow"></span></nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-6">
          <div class="service_1_single wow fadeInUp" data-wow-delay="900ms">
            <div class="content">
              <h3>自然派<br>骨壷</h3>
              <p>木製・オーガニック・樹幹型</p>
            </div>
            <div class="service_1_img">
              <img src="/assets/images/service/3.jpg" alt="Service Image">
              <div class="hover_box">
                <nuxt-link to="/service-detail"><span class="icon-left-arrow"></span></nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "ServiceOne"
    }
</script>

<style scoped>

</style>
