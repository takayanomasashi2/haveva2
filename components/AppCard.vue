<template>
  <div id="app">
    <div v-if="cartUIStatus === 'idle'" class="payment">
      <h3>お客様情報</h3>
        <div class="p-contact contact-one__form">
          
          <validation-observer ref="observer" v-slot="{ invalid, validated }" tag="form" class="p-contact__form" name="contact" accept-charset="UTF-8" method="POST" :class="sendingClass" @submit.prevent="onSubmit">
          <!-- <validation-observer ref="observer" v-slot="{ invalid, validated }" tag="form" class="p-contact__form" name="contact" accept-charset="UTF-8" method="POST" :class="sendingClass" action="https://www.shurikenfly.link/api/order/"> -->
            <input type="hidden" name="form-name" value="contact">
            <div class="row">
              <div class="p-contact__item col-md-4">
                <!-- <label for="username" style="visibility:hidden">お名前</label> -->
                <validation-provider v-slot="{ errors }" rules="required|max:100" name="お名前">
                  <input type="text" id="username" name="username" v-model="username" autocomplete="name" placeholder="お名前">
                  <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
                </validation-provider>
              </div>
              <!-- /.p-contact__item -->
              <div class="p-contact__item col-md-8">
                <!-- <label for="useremail" style="visibility:hidden">メールアドレス</label> -->
                <validation-provider v-slot="{ errors }" rules="required|email|max:256" name="メールアドレス">
                  <input type="text" id="useremail" name="useremail" v-model="useremail" autocomplete="email" placeholder="メールアドレス">
                  <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
                </validation-provider>
              </div>
              <!-- /.p-contact__item -->
              <div class="p-contact__item col-md-4">
                <!-- <label for="kenmei" style="visibility:hidden">件名</label> -->
                <validation-provider v-slot="{ errors }" rules="required|number2|max:10" name="郵便番号">
                  <input type="text" id="zipcode" name="zipcode" v-model="zipcode" placeholder="郵便番号">
                  <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
                </validation-provider>
              </div>
              <!-- /.p-contact__item -->
              <div class="p-contact__item col-md-8">
                <!-- <label for="kenmei" style="visibility:hidden">件名</label> -->
                <validation-provider v-slot="{ errors }" rules="required|number|max:20" name="電話番号">
                  <input type="text" id="phone" name="phone" v-model="phone" autocomplete="phone" placeholder="電話番号">
                  <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
                </validation-provider>
              </div>
              
              <!-- /.p-contact__item -->
              <!-- <label for="message" style="visibility:hidden">ご住所</label> -->
              <div class="p-contact__item col-md-12">
                <validation-provider v-slot="{ errors }" rules="required|max:100" name="ご住所">
                  <input id="address" name="address" v-model="address" placeholder="ご住所">
                  <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
                </validation-provider>
              </div>
              <!-- /.p-contact__item -->
            </div>
            <div class="p-contact__item " v-show="false">
              <!-- <label for="message">スパムでない場合は空欄</label> -->
              <input type="text" name="bot-field" v-model="botField" >
            </div>
            <!-- /.p-contact__item -->
            <div class="p-contact__submit">
              <button type="submit" class="thm-btn" :disabled="invalid || !validated">送信</button>
            </div>
            <!-- /.p-contact__item -->
            
              <textarea id="orders" name="orders" v-model="orders" hidden></textarea>
              
            
            
            <!-- /.p-contact__submit -->
          </validation-observer>
          <!-- /.p-contact__form -->

        </div>
        <div class="result"></div>



      <!-- <label for="email">Eメール</label>
      <br />
      <input id="email" type="email" v-model="stripeEmail" placeholder="name@example.com" />
      <br />
      <label for="card">クレジットカード</label>
      <br />
      <small>
        任意のCVC、郵便番号、有効期限のStripeテストクレジットカード番号を使用し、テストできます。:
        <ul>
          <li>
            <span class="cc-number">4242 4242 4242 4242</span>
          </li>
          <li>
            <span class="cc-number">4000 0027 6000 3184</span> (requires authentication, will trigger a pop-up)
          </li>
          <li>
            <span class="cc-number">4000 0000 0000 9995</span> (will decline with a decline code of insufficient funds)
          </li>
        </ul>
      </small>
      <card
        class="stripe-card"
        id="card"
        :class="{ complete }"
        stripe="pk_test_51I95IEJUvHtkJ9eH9uYLsny9V9LKOZxQPH7RENpECWEdWy20i8nI6novQPdaj9UO4VU2w1eBlpva4ttkI10ivEL800R4FK05q4"
        :options="stripeOptions"
        @change="complete = $event.complete"
      />
      <small class="card-error">{{error}}</small>
      <button
        class="pay-with-stripe button"
        @click="pay"
        :disabled="!stripeEmail || loading"
      >コミットする</button> -->
      <!-- :disabled="!complete || !stripeEmail || loading" -->
      <!-- <contact /> -->
    </div>

    <div v-else class="statussubmit">
      <div v-if="cartUIStatus === 'failure'">
        <h3>Oh No!</h3>
        <p>Something went wrong!</p>
        <button @click="clearCart">Please try again</button>
      </div>

      <div v-else-if="cartUIStatus === 'loading'" class="loadcontain">
        <h4>Please hold, we're filling up your cart with goodies</h4>
        <p>Placeholder loader</p>
      </div>

      <div v-else-if="cartUIStatus === 'success'" class="loadcontain">
        <h4>Success!</h4>
      </div>
    </div>
  </div>
</template>
 
<script>
import { Card, handleCardPayment } from "vue-stripe-elements-plus";

import { mapState } from "vuex";

import axios from 'axios'

// import  Contact from "~/components/Contact.vue";

export default {
  props: ['orders'],
  components: { Card },
  computed: {
    ...mapState(["cartUIStatus"]),
    ...mapState(["cart"]),
    sendingClass(){
        return {
          'is-sending'  : this.isSending,
          'is-error'    : this.isError,
          'is-complete' : this.isSubmit
        };
      }
  },
  mounted() {
    // create a PaymentIntent on Stripe with order information
    // this.$store.dispatch("createPaymentIntent");
  },
  data() {
    return {
      complete: false,
      stripeOptions: {
        // you can configure that cc element. I liked the default, but you can
        // see https://stripe.com/docs/stripe.js#element-options for details
      },
      stripeEmail: "",
      error: "",
      loading: false,

      username        : '',
      useremail       : '',
      botField        : '',
      isSubmit        : false,
      isSending       : false,
      isError         : false,
      completeMessage : '',
      phone:   '',
      zipcode: '',
      address: '',
    
    };
  },
  methods: {
    pay() {
      // confirms the payment and will automatically display a
      // pop-up modal if the purchase requires authentication
      this.loading = true;
      handleCardPayment(this.$store.getters.clientSecret, {
        receipt_email: this.stripeEmail
      }).then(result => {
        this.loading = false;
        if (result.error) {
          // show the error to the customer, let them try to pay again
          this.error = result.error.message;
          setTimeout(() => (this.error = ""), 3000);
        } else if (
          result.paymentIntent &&
          result.paymentIntent.status === "succeeded"
        ) {
          // payment succeeded! show a success message
          // there's always a chance your customer closes the browser after the payment process and before this code runs so
          // we will use the webhook in handle-payment-succeeded for any business-critical post-payment actions
          this.$store.commit("updateCartUI", "success");
          window.scroll({top: 0, behavior: 'smooth'});
          setTimeout(this.clearCart, 5000);
        } else {
          this.error = "Some unknown error occured";
          setTimeout(() => (this.error = ""), 3000);
        }
      });
    },
    clearCart() {
      this.complete = false;
      this.$store.commit("clearCart");
    },

    onSubmit() {
        if(this.botField == ''){
          this.botField = 'OK'
          //console.log("OKOK")
        }
      const data = {
        "username": this.username,
        "useremail": this.useremail,
        "zipcode": this.zipcode,
        "phone": this.phone,
        "address": this.address,
        "botfield": this.botField,
        "orders": this.orders
        };
      // const params = new URLSearchParams();
      //   params.append('username', this.username);
      //   params.append('useremail', this.useremail);
      //   params.append('zipcode', this.zipcode);
      //   params.append('phone', this.phone);
      //   params.append('address', this.address);
      //   if(this.botField){
      //     params.append('bot-field', this.botField);
      //   }
      //   params.append('order', this.order);
        // axios.defaults.headers.common['content-type'] = 'application/json';
      axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
      axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
      axios.post('https://www.shurikenfly.link/api/orders/', data)
      .then(response => {
        //200 status header etc...
        console.log(response)
        window.location.href = 'https://www.shurikenfly.com/thanks/'
      })
      .catch(error => {
         console.log(error.response)
        //  window.location.href = 'http://localhost:3000/sorry'
      });
      // axios.post('https://www.shurikenfly.link/api/order/',{
      // data: {"username": "username2","useremail": "test2@gmail.com","zipcode": "13500632","phone": "08040482","address2": "札幌2","botfield": "bot2","order": "nothing2"},
      //   })
     

        // if(this.isSending){
        //   return;
        // }
        // this.isSending = true;
        // this.completeMessage = '送信処理中…';
        
        // //axios.defaults.headers.common['content-type'] = 'application/json';
        // axios
        // .post('https://www.shurikenfly.link/api/order/', {params, headers:{'Content-Type': 'application/json; charset=utf-8'} })
        // .then(() => {
        //   this.completeMessage = 'お問い合わせを送信しました！';
        //   this.resetForm();
        //   this.isSubmit  = true;
        // })
        // .catch(err => {
        //   this.completeMessage = 'お問い合わせの送信が失敗しました';
        //   this.isError   = true;
        // })
        // .finally(() => {
        //   this.isSending = false;
        // });
      },

      resetForm() {
        this.username        = '';
        this.useremail       = '';
        this.zipcode        = '';
        this.phone        = '';
        this.address         = '';
        this.isError         = false;
        this.$refs.observer.reset();
      }
  },
  watch: {
    zipcode(zipcode) {
      this.$yubinbango(zipcode).then(
        (addr) => (this.address = addr.locality + addr.street)
      );
    },
  },
};
</script> 
 
<style lang="scss" scoped>
input,
button {
  width: 100%;
}

button {
  margin-top: 20px;
}

.payment {
  margin-top: 20px;
}

.stripe-card {
  margin-top: 10px;
  width: 100%;
  border: 1px solid #ccc;
  padding: 5px 10px;
}

.stripe-card.complete {
  border-color: green;
}
</style> 