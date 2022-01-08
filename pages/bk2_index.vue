<template>
  <div>
    <!-- <Nav /> -->
    <Slider />
    <!-- <AboutOne /> -->
    <ServiceOne />
    <!-- <BrandOne /> -->
    <!-- <FeaturedOne /> -->
    <!-- <VideoOne /> -->
    <!-- <TestimonialOne /> -->
    <TestimonialTwo />
    <!-- <TestimonialThree /> -->
    <!-- <TestimonialFour /> -->
    <!-- <RecentProject /> -->
    <!-- <Benefits /> -->
    <!-- <ProductOne /> -->
    <!-- <BlogOne /> -->
    <!-- <CallToActionOne /> -->
    <!-- <Footer /> -->
    <!-- <app-textlockup />
    <app-sales-boxes />
    <app-textlockup>
      <template v-slot:img>
        <img src="/bag.jpg" alt="bag" />
      </template>
      <template v-slot:new>50%</template>
      <template v-slot:sale>Storewide Sale</template>
      <template v-slot:collection>Summer</template>
      <template v-slot:details>All accessories</template>
    </app-textlockup>
    <app-featured-products /> -->
  </div>
</template>

<script>
import AppTextlockup from "~/components/AppTextlockup.vue";
import AppSalesBoxes from "~/components/AppSalesBoxes.vue";
import AppFeaturedProducts from "~/components/AppFeaturedProducts.vue";
import Slider from "~/components/Slider";
// import Nav from "../components/Nav";
import NavTwo from "../components/NavTwo";
import NavThree from "../components/NavThree";
import NavFour from "../components/NavFour";
import NavFive from "../components/NavFive";
import AboutOne from "../components/AboutOne";
import ServiceOne from "../components/ServiceOne";
import BrandOne from "../components/BrandOne";
import FeaturedOne from "../components/FeaturedOne";
import VideoOne from "../components/VideoOne";
import TestimonialOne from "../components/TestimonialOne";
import TestimonialTwo from "../components/TestimonialTwo";
import TestimonialThree from "../components/TestimonialThree";
import TestimonialFour from "../components/TestimonialFour";
import RecentProject from "../components/RecentProject";
import Benefits from "../components/Benefits";
import ProductOne from "../components/ProductOne";
import BlogOne from "../components/BlogOne";
import CallToActionOne from "../components/CallToActionOne";
// import Footer from "../components/Footer";

export default {
  components: {
    // Footer,
    CallToActionOne,
    BlogOne,
    ProductOne,
    Benefits,
    RecentProject,
    TestimonialOne,
    TestimonialTwo,
    TestimonialThree,
    TestimonialFour,
    VideoOne,
    FeaturedOne,
    BrandOne,
    ServiceOne,
    AboutOne,
    Slider,
    // Nav,
    NavTwo,
    NavThree,
    NavFour,
    NavFive,
    AppTextlockup,
    AppSalesBoxes,
    AppFeaturedProducts
  }
};
</script>

<style>
.test {
  margin: 3vh;
}

main {
  width: 75vw;
}
</style>
