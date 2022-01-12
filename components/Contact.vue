<template>
  <section class="contact-one" id="contact">
    <!-- <img src="/assets/images/shapes/contact-shape-1.png" alt="" class="contact-one__shape-1"> -->
    <img src="/assets/images/shapes/contact-shape-2.png" alt="" class="contact-one__shape-2">
    <img src="/assets/images/shapes/contact-shape-3.png" alt="" class="contact-one__shape-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="contact-one__content">
            <div class="contact-one__images">
              <img src="/assets/images/resources/CIMG0130.JPG" class="wow fadeInUp" data-wow-duration="1500ms" alt="">
              <!-- <img src="/assets/images/resources/IMG_2523.jpg" class="wow fadeInUp" data-wow-duration="1500ms" alt=""> -->
            </div><!-- /.contact-one__images -->
            <div class="contact-one__infos">
              <div class="contact-one__infos-single">
                <div class="contact-one__infos-icon">
                  <i class="zimed-icon-placeholder"></i>
                </div><!-- /.contact-one__infos-icon -->
                <div class="contact-one__infos-content">
                  <h3>住所</h3>
                  <p>東京都江東区有明 <br> 日本 </p>
                </div><!-- /.contact-one__infos-content -->
              </div><!-- /.contact-one__infos-single -->
              <div class="contact-one__infos-single">
                <div class="contact-one__infos-icon">
                  <i class="zimed-icon-address"></i>
                </div><!-- /.contact-one__infos-icon -->
                <div class="contact-one__infos-content">
                  <h3>Eメール</h3>
                  <p><a href="mailto:soundslikemassage@gmail.com">soundslikemassage@gmail.com</a></p>
                </div><!-- /.contact-one__infos-content -->
              </div><!-- /.contact-one__infos-single -->
              <div class="contact-one__infos-single">
                <div class="contact-one__infos-icon">
                  <i class="zimed-icon-phone-call"></i>
                </div><!-- /.contact-one__infos-icon -->
                <div class="contact-one__infos-content">
                  <h3>Phone</h3>
                  <p><a href="tel:666-888-0000">080-8431-0446</a></p>
                </div><!-- /.contact-one__infos-content -->
              </div><!-- /.contact-one__infos-single -->
            </div><!-- /.contact-one__infos -->
          </div><!-- /.contact-one__content -->
        </div><!-- /.col-lg-6 -->
        <div class="col-lg-6">
          <div class="contact-one__form-wrap">
            <div class="block-title">
              <span class="block-title__bubbles"></span>
              <p>コンタクト</p>
              <h3>メッセージを書く</h3>
            </div><!-- /.block-title -->

  <div class="p-contact contact-one__form">
    <!-- <validation-observer ref="observer" v-slot="{ invalid, validated }" tag="form" class="p-contact__form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" @submit.prevent="onSubmit" :class="sendingClass"> -->
      <validation-observer ref="observer" v-slot="{ invalid, validated }" tag="form" class="p-contact__form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" :class="sendingClass" action="/thanks">
      <input type="hidden" name="form-name" value="contact">
<div class="row">
      <div class="p-contact__item col-md-6">
        <!-- <label for="username" style="visibility:hidden">お名前</label> -->
        <validation-provider v-slot="{ errors }" rules="required|max:100" name="お名前">
          <input type="text" id="username" name="username" v-model="username" autocomplete="name" placeholder="お名前">
          <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
        </validation-provider>
      </div>
      <!-- /.p-contact__item -->

      <div class="p-contact__item col-md-6">
        <!-- <label for="useremail" style="visibility:hidden">メールアドレス</label> -->
        <validation-provider v-slot="{ errors }" rules="required|email|max:256" name="メールアドレス">
          <input type="text" id="useremail" name="useremail" v-model="useremail" autocomplete="email" placeholder="メールアドレス">
          <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
        </validation-provider>
      </div>
      <!-- /.p-contact__item -->

      <div class="p-contact__item col-md-6">
        <!-- <label for="zipcode" style="visibility:hidden">件名</label> -->
        <validation-provider v-slot="{ errors }" rules="required|max:100" name="件名">
          <input type="text" id="zipcode" name="zipcode" v-model="zipcode" placeholder="件名">
          <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
        </validation-provider>
      </div>
      <!-- /.p-contact__item -->

      <div class="p-contact__item col-md-6">
        <!-- <label for="phone" style="visibility:hidden">トピック</label> -->
        <!-- <validation-provider v-slot="{ errors }" rules="" name="トピック"> -->
          <!-- <input type="text" id="phone" name="phone" v-model="phone" placeholder="トピック"> -->
          <select id="phone" name="phone" v-model="phone" class="selectpicker">
                    <option value="トピック" selected>トピック</option>
                    <option value="無料トライアル">無料トライアル</option>
                    <option value="ビジネス上の質問">ビジネス上の質問</option>
          </select>
          <!-- <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p> -->
        <!-- </validation-provider> -->
      </div>
      <!-- /.p-contact__item -->

      <div class="p-contact__item col-md-12">
        <!-- <label for="address" style="visibility:hidden">メッセージ</label> -->
        <validation-provider v-slot="{ errors }" rules="required|max:1000" name="メッセージ">
          <textarea id="address" name="address" v-model="address" placeholder="メッセージ"></textarea>
          <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
        </validation-provider>
      </div>
      <!-- /.p-contact__item -->
      <div class="p-contact__item col-md-12">
        <!-- <label for="address" style="visibility:hidden">メッセージ</label> -->
        <validation-provider v-slot="{ errors }" rules="required|max:1000" name="オーダー">
          <textarea id="order" name="order" v-model="order" placeholder="オーダー"></textarea>
          <p v-show="errors.length" class="p-contact__error">{{ errors[0] }}</p>
        </validation-provider>
      </div>
      <!-- /.p-contact__item -->
      </div>

      <div class="p-contact__item" v-show="false">
        <!-- <label for="address">スパムでない場合は空欄</label> -->
        <input type="text" name="bot-field" v-model="botField"/>
      </div>
      <!-- /.p-contact__item -->

      <div class="p-contact__submit">
        <button type="submit" class="thm-btn" :disabled="invalid || !validated">送信</button>
      </div>
      <!-- /.p-contact__submit -->
    </validation-observer>
    <!-- /.p-contact__form -->
  </div>
            <div class="result"></div><!-- /.result -->
          </div><!-- /.contact-one__form-wrap -->
        </div><!-- /.col-lg-6 -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </section>
</template>

<script>
    export default {
      name: "Contact",
      data() {
      return {
        username        : '',
        useremail       : '',
        zipcode        : '',
        phone       : 'トピック',
        address         : '',
        order         : '',
        botField        : '',
        isSubmit        : false,
        isSending       : false,
        isError         : false,
        completeaddress : '',
      }
    },
    computed: {
      sendingClass(){
        return {
          'is-sending'  : this.isSending,
          'is-error'    : this.isError,
          'is-complete' : this.isSubmit
        };
      }
    },
    methods: {
      onSubmit() {
        if(this.isSending){
          return;
        }
        this.isSending = true;
        this.completeaddress = '送信処理中…';
        const params = new URLSearchParams();
        params.append('form-name', 'contact');
        params.append('username', this.username);
        params.append('zipcode', this.zipcode);
        params.append('useremail', this.useremail);
        params.append('phone', this.phone);
        params.append('address', this.address);
        params.append('order', this.address);
        if(this.botField){
          params.append('bot-field', this.botField);
        }
        // console.log(params)
        this.$axios
        .$post('/', params)
        .then(() => {
          this.completeaddress = 'お問い合わせを送信しました！';
          this.resetForm();
          this.isSubmit  = true;
        })
        .catch(err => {
          this.completeaddress = 'お問い合わせの送信が失敗しました';
          this.isError   = true;
        })
        .finally(() => {
          this.isSending = false;
        });
      },
      resetForm() {
        this.username        = '';
        this.zipcode        = '';
        this.useremail       = '';
        this.phone       = 1;
        this.address         = '';
        this.order         = '';
        this.isError         = false;
        this.$refs.observer.reset();
      }
    }
    }
    
</script>

<style scoped>
</style>