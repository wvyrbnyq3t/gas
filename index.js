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
