<template>
    <div class="body">
      <div class="main">
        <div class="card">
            <div class="header">
                <h3>お問い合わせ<br>ありがとうございます!</h3>
            </div>
            <p>メッセージを受領いたしました。</p>
            <p>
            <a id="back-link" href="/">← 戻る</a>
            </p>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import LayoutMenuList from "~/components/LayoutMenuList.vue";

export default {
  components: {
    LayoutMenuList,
  },
  async asyncData({ $config }) {
    const { data } = await axios.get(`${$config.apiUrl}/menu`, {
      headers: { 'X-MICROCMS-API-KEY': $config.apiKey },
    })
    return {
      items: data.contents,
    }
  },
  head() {
    return {
      title: 'メニュー',
    }
  },
}
</script>