import Vue from "vue";

const yubinbango= function (zipCode) {
  return new Promise(
    (resolve) => new YubinBango.Core(zipCode, (address) => resolve(address))
  );
};

Vue.prototype.$yubinbango= yubinbango;