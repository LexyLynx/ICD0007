$(document).ready(function(){
  $("button").click(function(){ 
  var eurMoney = document.getElementById('EUR').value;
  var usdMoney = document.getElementById('USD').value;
  var gbpMoney = document.getElementById('GBP').value;
  const key = "1a34fce0b9695c4fec00ec0f9ae968bb"
  $.ajax({
    url: 'http://data.fixer.io/api/latest?access_key=' + key,
    dataType: 'jsonp',
    success: function(json) {
      var eurRate = json.rates.EUR;
      var usdRate = json.rates.USD;
      var gbpRate = json.rates.GBP;
      var EtoD = usdRate * eurMoney;
      var EtoG = gbpRate * eurMoney;
      var DtoE = usdMoney / usdRate;
      var GtoE = gbpMoney / gbpRate;

      $(".EuDo").html(EtoD);
      $(".DoEu").html(DtoE);
      $(".EuPo").html(EtoG);
      $(".PoEu").html(GtoE);
      console.log('EUR to USD: ' + EtoD);
      console.log('EUR to GBP: ' + EtoG);
      console.log('USD to EUR: ' + DtoE);
      console.log('GBP to EUR: ' + GtoE);
    },
    fail: function(xhr, statusText, body) {
      console.log(body);
    }
  });

  });
});