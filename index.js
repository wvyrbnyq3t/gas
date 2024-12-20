const url = "ウェブアプリのURLを挿入";

// fetch()を利用して、APIからデータを取得
fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((json) => {
    // 取得に成功した時
  })
  .catch((err) => {
    // 取得に失敗した時
    console.error('Error:', err);
  })

// Get & Post
const submit = document.getElementById("js-submitBtn");
const formValues = document.getElementById("ticketForm").querySelectorAll("input");

// 処理後にGASから受け取る
function getReturnData(e) {
  fetch(e)
    .then(function (fetch_data) {
      return fetch_data.json();
    })
    .then(function (json) {
      console.log(json)
    })
    .catch(function (error) {
      console.log(error);
    });
}

function doPost() {
  const data = {}

  // Get the data from the request
  const name = String(document.getElementById("formName").value);
  const acquired = String(document.getElementById("formAcquiredNum").value);

  // exec?以降が送るパラメータ
  const apiURL =  `https://script.google.com/macros/s/(ここはプロジェクトによって異なります)/exec?name=${name}&acquiredNum=${acquired}`;

  getReturnData(apiURL);
}

function checkForm() {
  const name = document.getElementById("formName").value;
  const acquired = document.getElementById("formAcquiredNum").value;

  if (name === "" || acquired === "") {
    return false;
  }
  return true;
}

submit.addEventListener("click", () => {
  if (checkForm()) {
    submit.setAttribute("aria-disabled", true);
    doPost();
  }
});

formValues.forEach((input) => {
  input.addEventListener("change", () => {
    if (checkForm()) {
      submit.setAttribute("aria-disabled", false);
    } else {
      submit.setAttribute("aria-disabled", true);
    }
  });
});
