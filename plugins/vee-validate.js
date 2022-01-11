import Vue from 'vue'
import {
  extend,
  ValidationProvider,
  ValidationObserver,
  Validator,
  localize
} from 'vee-validate'
import ja from 'vee-validate/dist/locale/ja.json'
import { required, email, max } from 'vee-validate/dist/rules'
// import { PhoneNumberUtil } from 'google-libphonenumber'

//日本語
localize('ja', ja)

//必須
extend('required', required)
//メールアドレス
extend('email', email)
//文字数上限
extend('max', max)
//カタカナのみ
extend('katakana', {
  message: (field) => { return field + "は全角カタカナのみ使用できます" },
  validate: (value) => { return /^[ァ-ン]+$/.test(value) }
})

extend('number', {
  message: (field) => { return field + "は半角数字と半角+-のみが使用できます" },
  validate: (value) => { return /^[0-9+-]+$/.test(value) }
})

extend('number2', {
  message: (field) => { return field + "は半角数字と半角-のみが使用できます" },
  validate: (value) => { return /^[0-9-]+$/.test(value) }
})

// extend('phone', {
//   message: 'The {_field_} field format is invalid',
//   validate(value) {
//     const util = PhoneNumberUtil.getInstance()
//     try {
//       const phoneNumber = util.parseAndKeepRawInput(value, 'JP')
//       return util.isValidNumber(phoneNumber)
//     } catch (err) {
//       return false
//     }
//   }
// })

Vue.component('validation-provider', ValidationProvider)
Vue.component('validation-observer', ValidationObserver)
