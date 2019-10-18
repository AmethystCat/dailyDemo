/* eslint-disable no-restricted-globals */
export default () => {
  self.importScripts('https://cdn.bootcss.com/xlsx/0.15.1/xlsx.core.min.js');
  setTimeout(function() {
    postMessage({ message: 'Hello MAIN, I am worker🧑, do you copy?', signal: 'init' });
  }, 10);

  function analysis(excel) {
    console.log('--- WORKER: start parsing 🎥');
    var fileReader = new FileReader();
    fileReader.onload = function(e) {
      console.log('--- WORKER: file reader read the file as binary string 🎼');
      // fileReder读取到的excel数据
      var data = e.target.result;
      var workbook = self.XLSX.read(data, { type: 'binary' });
      var name = workbook.SheetNames[0];
      var sheet = workbook.Sheets[name];
      var sheetToJson = self.XLSX.utils.sheet_to_json(sheet);

      console.log('--- WORKER: parse end 📠', sheetToJson);
      console.log('--- WORKER: send parse result to main thread 🚚', sheetToJson);
      self.postMessage({ data: sheetToJson });
    };
    fileReader.readAsBinaryString(excel);
  }

  self.onmessage = function(e) {
    // debugger;
    if (e.data.signal === 'reply') {
      console.log(e.data.message);
      console.log('--- WORKER: OK!');
      return;
    }
    console.log('--- WORKER: get data from main thread 💵', e.data.file);
    analysis(e.data.file);
  };
};
