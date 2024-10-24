$(document).ready(function () {

  // INPUT MASK PHONE NUMBER
  $('.phone-mask input').inputmask({
    "mask": "+7 (999) 999-99-99",
    showMaskOnHover: false,
    showMaskOnFocus: false,

    onBeforePaste: function (pastedValue, opts) {
      return pastedValue.replace(/^8/, '');
    }
  });
  actualYear();
});


function actualYear() {
  const actualDate = new Date();
  const year = actualDate.getFullYear();
  const footerDate = document.querySelector('.footer__rights span');
  footerDate.innerText = year;
}
