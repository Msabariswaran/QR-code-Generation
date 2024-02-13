const qr = require("qrcode");

let data = {
  name: "sabari",
  email: "sabar@gmail",
  id: 123,
};

let stJson = JSON.stringify(data);
qr.toDataURL(stJson, function (err, code) {
  if (err) {
    console.log("error");
  } else {
    console.log(code);
  }
});
