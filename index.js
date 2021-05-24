$(function () {
  $("#dateStart, #dateEnd").datepicker({
    // showOn: "both",
    // changeYear: true,
    // yearRange: "2021:2121",
    dateFormat: "dd/mm/yy",
    monthNames: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    // buttonImageOnly: true,
    // buttonImage: "img/calendar3.svg",
  });
});

$("form").submit(function () {
  $(this)[0].reset();
});

itemsTable();

function carregaCursos(){

}

function cadastrarCurso() {
  let curso = dadosCurso();

  localStorage.setItem("curso", JSON.stringify(curso));
  let cursoString = localStorage.getItem("curso", curso);
  let cursoObj = JSON.parse(cursoString);
  console.log(cursoObj);
  console.log(localStorage);
  

  return cursoObj;
}

function dadosCurso() {
  let nomeCurso = document.getElementById("nameCourse").value;
  let dataInicio = document.getElementById("dateStart").value;
  let duracao = document.getElementById("duration").value;
  let dataTermino = document.getElementById("dateEnd").value;
  let descricao = document.getElementById("description").value;

  let dados = {
    nomeCurso: nomeCurso,
    dataInicio: dataInicio,
    duracao: duracao,
    dataTermino: dataTermino,
    descricao: descricao,
  };

  return dados;
  // let curso = dados;
}

function itemsTable(value) {
  try {
    const tableBody = document.querySelector(".bodyTable");
    const tableRow = document.createElement("tr");
    const tableHeader = document.createElement("th");
    const tableData = document.createElement("td");
    const tableData1 = document.createElement("td");
    const tableData2 = document.createElement("td");

    tableHeader.innerHTML = value.nomeCurso;
    tableData.innerHTML = value.duracao;
    tableData1.innerHTML = value.dataInicio;
    tableData2.innerHTML = value.dataTermino;

    tableBody.appendChild(tableRow);
    tableRow.appendChild(tableHeader);
    tableRow.appendChild(tableData);
    tableRow.appendChild(tableData1);
    tableRow.appendChild(tableData2);
  } catch (error) {
    console.log(error);
  }
}
