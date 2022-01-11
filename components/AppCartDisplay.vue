<template>
<!-- <div class="container"> -->
  <div>
    <section v-if="cartCount > 0">
      <table>
        <tr>
          <th>商品</th>
          <th>価格</th>
          <th>個数</th>
          <th>合計</th>
          <th></th>
        </tr>
        <tr v-for="item in cart" :key="item.id">
          <td>
            <img :src="`/products/${item.img}`" :alt="item.name" class="product-img" />
            <h3 class="product-name">{{methodName(item.name,item.quantity)}}</h3>
            <h5 v-if="item.size" class="product-size">Size: {{ item.size }}</h5>
          </td>
          <td>
            <h4 class="price">{{ item.price | dollar }}</h4>
          </td>
          <td>
            <button @click="removeOneFromCart(item)" class="quantity-adjust">
              -
            </button>
            <strong> {{ item.quantity }}</strong>
            <button @click="addToCart(item)" class="quantity-adjust">+</button>
          </td>
          <td>{{ (item.quantity * item.price) | dollar }}</td>
          <td>
            <button @click="removeAllFromCart(item)" class="delete-product">
              x
            </button>
          </td>
        </tr>
      </table>

      <section class="payment">
        <app-card :userName=this.foo />
        <div class="total">
          <div class="caption">
            <p>
              <strong>小計:</strong>
            </p>
            <p>配送費:</p>
            <p class="golden">合計:</p>
          </div>
          <div class="num">
            <p>
              <strong>{{ cartTotal | dollar }}</strong>
            </p>
            <p>お客様負担</p>
            <p class="golden">{{ cartTotal | dollar }}</p>
          </div>
        </div>
      </section>
    </section>

    <section v-else class="center">
      <p>まだカートに商品が入っていません。</p>
      <button class="pay-with-stripe thm-btn">
        <!-- <nuxt-link exact to="/">ホームに戻る</nuxt-link> -->
        <a href="/">ホームに戻る</a>
      </button>
    </section>
  </div>
  <!-- </div> -->
</template>

<script>
import AppCard from "~/components/AppCard.vue";
import { mapState, mapGetters } from "vuex";

export default {
  // props: {
  //     sampleProps: {
  //         type: Object,
  //         default: () => {},
  //     }
  // },
  components: {
    AppCard
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["cartCount", "cartTotal"])
  },
  methods: {
    addToCart(item) {
      this.$store.commit("addOneToCart", item);
    },
    removeOneFromCart(item) {
      this.$store.commit("removeOneFromCart", item);
    },
    removeAllFromCart(item) {
      this.$store.commit("removeAllFromCart", item);
    },
    methodName: function(foo, bar) {
      this.foo += "," +foo+"x"+bar ;
    }
  }
};
</script>

<style lang="scss" scoped>
.product-img {
  float: left;
  margin-right: 15px;
  width: 100px;
}

.total {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 100px;
}

table {
  width: 100%;
  margin-top: 20px;
}

tr {
  text-align: center;
}

th {
  padding: 10px 0;
}

td,
th {
  border-bottom: 1px solid #ccc;
}

.golden {
  background: #e6effd;
  font-weight: bold;
  padding: 10px;
}

.product-name,
.product-size {
  text-align: left;
}

.product-name {
  padding-top: 36px;
}

.product-size {
  font-weight: 100;
}

.num {
  text-align: right;
}

button a {
  color: white;
  transition: 0.3s all ease;
}

.delete-product,
.quantity-adjust:first-of-type,
.quantity-adjust:last-of-type {
  padding: 5px 7px;
  border: none;
}

.quantity-adjust:first-of-type {
  margin-right: 5px;
}

.quantity-adjust:last-of-type {
  margin-left: 5px;
}

.delete-product:hover {
  background-color: rgb(255, 85, 85);
  border-radius: 100%;
  border: none;
}

.delete-product:focus,
.delete-product:active {
  outline: none;
}

@media screen and (min-width: 700px) {
  .payment {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 100px;
  }

  .total {
    width: 90%;
  }
}

@media screen and (max-width: 699px) {
  .payment {
    width: 94%;
    margin-left: 2%;
  }
}
</style>