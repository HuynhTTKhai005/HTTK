const text =
  "À..thì.. Hi Trâm!! Vội quá😊 Ngày đó có lẽ sự trùng hợp hay định mệnh đã đưa mình gặp nhau. Mỗi khi nhìn thấy nụ cười của chị, mọi lo âu của em dường như tan biến. Dù mai này chị có đi đâu hay ở lại, cảm xúc này sẽ luôn tồn tại trong lòng em. Chỉ tiếc rằng em đã gặp chị quá sớm, nhưng chính vì vậy mà em đã tìm thấy được một cô gái thật tinh tế và thông minh. Khi em trưởng thành hơn, nếu mấy khứa ở chổ chị có mắt như mù không phát hiện ra nàng thiên thần này, thì em sẽ là người tìm đến, chăm sóc, lo lắng cho chị. 💗 Khi chị đã tin tưởng và có chút tình cảm với em thì hãy nhấn cái hướng dẫn trên đó ↗ nhé ";
const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
