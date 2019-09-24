function generateCSV() {
  let colNum = document.getElementById("numCols").value;
  let rowNum = document.getElementById("numRows").value;
  let csv = "";
  let randomWords = ["Molly", "John", "Joe", "Pedro", "Daequan", "Latasha", "Maria", "Andrew", "Ricardo", "Fred", "Jane", "Sofia", "Isabella", "Willie", "Vladimir"];
  for(let i = 0; i < rowNum; i++) {
    let newRow = "";
    for(let j = 0; j < colNum; j++) {
      newRow += randomWords[Math.floor(Math.random() * 15)] + ", ";
    }
    csv += newRow + "\n";
  }

  let fileName = 'generated.csv';
  let myFile = new Blob([csv], {type: 'text/plain'});

  window.URL = window.URL || window.webkitURL;
  document.getElementById('download').setAttribute('href', window.URL.createObjectURL(myFile));
  document.getElementById('download').setAttribute('download', fileName);
  document.getElementById('download').click();
}
