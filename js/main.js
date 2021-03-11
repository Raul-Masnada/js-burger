var calculateBtn = document.getElementById('calculate');

calculateBtn.addEventListener('click', function(){

var burgerName = document.getElementById('burgername').value;

if (burgerName.length < 1) {
  alert('Insert hamburger name');
}
else {
    var totalPrice = 10;
    var checkboxs = document.getElementsByClassName('ingredient');
        for (var i = 0; i < checkboxs.length; i++) {
        var checkboxElem = checkboxs[i];
        if (checkboxElem.checked) {
          totalPrice += parseInt(checkboxElem.dataset.price);
        }
      }
  }
  var couponInsert = document.getElementById('coupon').value;
  var arrCoupon = ['metw', 'nunzio', 'raul'];

  for (var i = 0; i < arrCoupon.length; i++) {

    if (couponInsert == arrCoupon[i]) {
      totalPrice = (totalPrice / 100 * 80).toFixed(2);
    }
  }
  console.log(totalPrice);
  document.getElementById('price').innerHTML = totalPrice;

});

var listClick = document.getElementsByTagName('li');
  for (var i = 0; i < listClick.length; i++) {

    listClick[i].addEventListener('click', function(){

        var clickedLi = this;
        var clickedLiChildrens = clickedLi.children;
        var clickedCheckbox = clickedLiChildrens[2];
    });

  }
