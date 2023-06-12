import "./styles.css";
const submitButton = document.getElementById("submit-data");
const emptyButton = document.getElementById("empty-table");

const tableBodyData = document.getElementById("tablebody-data");

const usernameData = document.getElementById("input-username");
const emailData = document.getElementById("input-email");
const addressData = document.getElementById("input-address");
const adminData = document.getElementById("input-admin");
const imageData = document.getElementById("input-image");

submitButton.addEventListener("click", function () {
  const existingRow = Array.from(tableBodyData.children).find(function (row) {
    const usernameCell = row.querySelector("td:first-child");
    return usernameCell.innerText === usernameData.value;
  });

  if (existingRow) {
    const newDataCells = existingRow.querySelectorAll("td:not(:first-child)");
    newDataCells[0].innerText = emailData.value;
    newDataCells[1].innerText = addressData.value;
    newDataCells[2].innerText = adminData.checked ? "X" : "-";
    if (imageData.files.length > 0) {
      let existingImage = existingRow.querySelector("img");
      if (existingImage) {
        existingImage.src = URL.createObjectURL(imageData.files[0]);
      } else {
        let newImage = document.createElement("img");
        newImage.src = URL.createObjectURL(imageData.files[0]);
        newImage.height = 64;
        newImage.width = 64;
        existingRow.appendChild(newImage);
      }
    }
  } else {
    let newTableData = document.createElement("tr");

    let newData0 = document.createElement("td");
    newData0.innerText = usernameData.value;
    newTableData.appendChild(newData0);

    let newData1 = document.createElement("td");
    newData1.innerText = emailData.value;
    newTableData.appendChild(newData1);

    let newData2 = document.createElement("td");
    newData2.innerText = addressData.value;
    newTableData.appendChild(newData2);

    let newData3 = document.createElement("td");
    newData3.innerText = adminData.checked ? "X" : "-";
    newTableData.appendChild(newData3);

    if (imageData.files.length > 0) {
      let newData4 = document.createElement("img");
      newData4.src = URL.createObjectURL(imageData.files[0]);
      newData4.height = 64;
      newData4.width = 64;

      newTableData.appendChild(newData4);
    }

    tableBodyData.appendChild(newTableData);
  }
  console.log("Button pressed");
});

emptyButton.addEventListener("click", function () {
  while (tableBodyData.children.length > 1) {
    tableBodyData.removeChild(tableBodyData.lastChild);
  }
});
