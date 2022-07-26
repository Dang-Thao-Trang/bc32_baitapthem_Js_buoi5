//Theo đề bài:
//Ta có công thức tính thuế TNCN = TN chịu thuế * thuế suất
// Thu nhập chịu thuế = tổng thu nhập năm - 4tr - người phụ thuộc*1.6tr
// Tóm tắt thuế suất: 0-60tr=5%; 60-120tr=10%; 120-210=15%;
//210-384tr=20%; 384-624=25%; 624-960=30%; trên 960=35%;
function onTax() {
  var nameTax = document.getElementById("nameTax").value;
  var incomeYear = +document.getElementById("incomeYear").value;
  var dependent = +document.getElementById("dependent").value;
  var mathTax = 0;
  mathTax = incomeYear - 4000000 - dependent * 1600000;
  function percentTax(percentLike) {
    if (incomeYear < 10000000 || mathTax * 0.05 < 10) {
      alert("Thu nhập không hợp lệ");
    } else if (incomeYear <= 60000000) {
      //0-60tr=5%
      percentLike = mathTax * 0.05;
    } else if (incomeYear < 120000000) {
      //60-120tr=10%
      percentLike = mathTax * 0.1;
    } else if (incomeYear < 210000000) {
      //120-210=15%
      percentLike = mathTax * 0.15;
    } else if (incomeYear < 384000000) {
      //210-384tr=20%
      percentLike = mathTax * 0.2;
    } else if (incomeYear < 624000000) {
      //384-624=25%
      percentLike = mathTax * 0.25;
    } else if (incomeYear < 960000000) {
      //624-960=30%
      percentLike = mathTax * 0.3;
    } else {
      //trên 960=35%
      percentLike = mathTax * 0.35;
    }
    return percentLike;
  }
  let divResults = document.getElementById("tax");
  divResults.style.display = "block";
  divResults.innerHTML =
    "Thuế thu nhập cá nhân của " +
    nameTax +
    ": " +
    percentTax().toLocaleString() +
    " vnd";
}
