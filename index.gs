// スプレッドシートを取得
const ss = SpreadsheetApp.getActiveSpreadsheet();
const sheet = ss.getSheetByName("sheet1");

// ヘッダーを取得
function getHeaders(){
  return sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
}

// JSON形式に変換
function convertToJSON(headers, data) {
  return data.map(function(row) {
    const obj = {};
    headers.forEach(function(header, index) {
      obj[header] = row[index];
    });
    return obj;
  });
}

// ヘッダー行以降を取得
function getData(){
  if(sheet.getLastRow() > 1){
    const data = sheet.getRange(2, 1, sheet.getLastRow()-1, sheet.getLastColumn()).getValues();
    return convertToJSON(getHeaders(), data)
  }
  else{
    return NaN
  }
}

console.log(getData())

// HTML側に送る
function doPost(){
  const data = getData();
  const response = ContentService.createTextOutput();
  response.setMimeType(MimeType.JSON);
  response.setContent(JSON.stringify(data))
  return response
}
