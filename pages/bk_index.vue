<template>
  <div>
    <Nav />
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
    <Footer />
  </div>
</template>

<script>
import Slider from "../components/Slider";
import Nav from "../components/Nav";
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
import Footer from "../components/Footer";
export default {
  components: {
    Footer,
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
    Nav,
    NavTwo,
    NavThree,
    NavFour,
    NavFive
  },
};
</script>
