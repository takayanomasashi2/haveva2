<template>
  <!-- <div class="container"> -->
    <section class="blog-details">
    <div>
      <app-cart-steps />
      <hr />
      <div class="container">
        <h1 class="center">買い物カゴ</h1>

        <section v-if="cartUIStatus === 'idle'">
          <app-cart-display />
        </section>

        <section v-else-if="cartUIStatus === 'loading'" class="loader">
          <app-loader />
        </section>

        <section v-else-if="cartUIStatus === 'success'" class="success">
          <h2>サクセス!</h2>
          <p>お買い上げ誠にありがとうございます。営業日数５日以内にお届けいたします。</p>
          <p>お忘れ物はありませんか?</p>
          <button class="pay-with-stripe">
            <a href="/">ホームに戻る</a>
          </button>
        </section>

        <section v-else-if="cartUIStatus === 'failure'">
          <p>システムエラー発生。再試行のため、リダイレクトいたします。</p>
        </section>

        <app-sales-boxes />
        </div>
    </div>
    </section>
  <!-- </div> -->
</template>

<script>
import AppLoader from "~/components/AppLoader.vue";
import AppCartSteps from "~/components/AppCartSteps.vue";
import AppSalesBoxes from "~/components/AppSalesBoxes.vue";
import AppCartDisplay from "~/components/AppCartDisplay.vue";
import { mapState } from "vuex";

export default {
  components: {
    AppCartDisplay,
    AppSalesBoxes,
    AppCartSteps,
    AppLoader
  },
  computed: {
    ...mapState(["cartUIStatus"])
  }
};
</script>

<style lang="scss" scoped>
.loader {
  display: flex;
  justify-content: center;
}

.success {
  text-align: center;
}
</style>