// sự kiện onchange
function typeChange() {
  //input
  let x = document.getElementById("typeCustomer").value;
  let y = document.getElementById("numberChannels");
  //process
  if (x === "enterprise") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  return y;
}
//output
typeChange();

//sự kiện onclick
function onCable() {
  //input
  let typeCustomer = document.getElementById("typeCustomer").value;
  let numberChannels = document.getElementById("numberChannels").value;
  let idCustomer = document.getElementById("idCustomer").value;
  let preniumChannels = +document.getElementById("preniumChannels").value;

  //process
  // CT tính tiền cáp:
  // + Nhà dân: 4.5$ + 7.5*preniumChannels + 20.5$
  // + Doanh nghiệp: 4.5 + 50*preniumChannels + [75$: cho 10 đầu đầu tiên + 5$ * (numberChannels-10)]
  let addChannel = function () {
    let addNumberChannels = 0;
    if (numberChannels <= 10) {
      addNumberChannels += 75;
    } else {
      addNumberChannels += 75 + (numberChannels - 10) * 5;
    }
    return addNumberChannels;
  };

  let moneyCable = 0;
  if (!idCustomer) {
    alert("Vui lòng nhập mã khách hàng");
  } else if (typeCustomer === "family") {
    moneyCable += 4.5 + 20.5 + 7.5 * preniumChannels;
  } else if (typeCustomer === "enterprise") {
    moneyCable += 15 + 50 * preniumChannels + addChannel();
  } else {
    alert("Vui lòng chọn loại khách hàng");
  }
  //input
  document.getElementById("cable").innerHTML =
    "Hóa đơn tiền cáp của khách hàng có mã số " +
    idCustomer +
    " là: $" +
    // moneyCable.toLocaleString();
    new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 4 }).format(
      moneyCable
    );
}
