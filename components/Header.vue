<template>
  <div>
    <div class="preloader">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  
    <header class="main-nav__header-one ">
      <!-- <nav class="header-navigation stricky"> -->
      <nav class="header-navigation ">
        <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="main-nav__logo-box">
            <a href="/" class="main-nav__logo">
              <img src="/assets/images/高谷の昌志.png" width="105" alt="Awesome Image" />
            </a>
            <a href="#" class="side-menu__toggler"><i class="fa fa-bars"></i>
              <!-- /.smpl-icon-menu --></a>
          </div><!-- /.logo-box -->
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="main-nav__main-navigation">
            <ul class="one-page-scroll-menu main-nav__navigation-box">
              <li class="current scrollToLink">
                <a href="/">ホーム</a>
              </li>
              <!-- <li class="scrollToLink">
                <a href="#features">サービス内容</a>
              </li>
              <li class="scrollToLink">
                <a href="#pricing">プラン</a>
              </li> -->
              <!-- <li class="scrollToLink">
                <a href="#app-shots">ポートフォリオ</a>
              </li> -->
              <!-- <li class="scrollToLink">
                <a href="#testimonials">お客様の声</a>
              </li> -->
              <li class="dropdown scrollToLink">
                <a href="/blog">ブログ</a>
                <!-- <ul> -->
                  <!-- <li><nuxt-link to="/blog">ブログページ</nuxt-link></li> -->
                  <!-- <li><nuxt-link to="/blog-details">ブログ詳細</nuxt-link></li> -->
                <!-- </ul>/.sub-menu -->
              </li>
              <li>
                <nuxt-link to="/all">無料商品</nuxt-link>
              </li>
              <!--<li class="scrollToLink">
                <a href="#contact">コンタクト</a>
              </li>-->
            </ul>
          </div><!-- /.navbar-collapse -->

<!-- <div class="main-nav__main-navigation">
            <ul class="main-nav__navigation-box"> -->
              
              <!-- <li>
                <nuxt-link to="/all">無料商品</nuxt-link>
              </li> -->
              <!-- <li>
                <nuxt-link to="/men">男性用</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/women">女性用</nuxt-link>
              </li> -->
            <!-- </ul>
          </div> -->

          <div class="main-nav__right">
            <div class="icon_cart_box">
            <div class="carttotal" v-if="cartCount > 0">{{ cartCount }}</div>
              <nuxt-link to="/cart">
                <span class="icon-shopping-cart"></span>
              </nuxt-link>
            </div>
          </div>
          <!-- <div class="main-nav__right">
            <a href="#contact" data-target="#contact" class="thm-btn header__btn scroll-to-target">お問い合わせ</a> -->
            <!-- /.thm-btn header__btn -->
          <!-- </div>/.main-nav__right -->
        </div>
        <!-- /.container -->
      </nav>
    </header>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      sticky: false,
      mobileToggle: false,
    };
  },
  computed: {
    ...mapGetters(["cartCount"]),
    searchPopup() {
      return this.$store.state.searchPopupStatus;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 70) {
        this.sticky = true;
      } else if (window.scrollY < 70) {
        this.sticky = false;
      }
    },
    ...mapMutations({
      searchPopupStatusChange: "changeSearchPopupStatus",
    }),
  },
};
</script>

<style scoped>

</style>
