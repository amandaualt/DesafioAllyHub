function recuperaDados() {
  return localStorage.getItem("cursos");
}

function transformaJson() {
  return JSON.parse(recuperaDados());
}

function carregaCursos() {
  if (recuperaDados() != null) {
    itemsTable(transformaJson());
  }
}

let limparForms = document.querySelector('button');
let inputs = document.querySelectorAll('.campoForms');

limparForms.addEventListener('click', () => {
  inputs.forEach(input => input.value='')
  
})

function cadastrarCurso() {
  if (validationInput(inputs) == true){  
    let curso = dadosCurso();

  if (recuperaDados() == null) {
    localStorage.setItem("cursos", "[]");
  }

  let acrescentaCurso = transformaJson();
  acrescentaCurso.push(curso);
  
  localStorage.setItem("cursos", JSON.stringify(acrescentaCurso));
    $('modal').modal('hide');
  }else{
    console.log(error);
  }

}

function validationInput(inputs){
  var resutado = true;
  for(var i = 0; i < inputs.length; i++){
      if (inputs[i].hasAttribute('required') ){
        if (inputs[i].value == ""){
          inputs[i].style.borderColor = "Red";
          inputs[i].placeholder = "Campo obrigatório !"
          resutado = false;
        }
      }
    }
  return resutado;
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
}

function itemsTable(values) {
  console.log(values);
  values.forEach((curso) => {
    try {
      const tableBody = document.querySelector(".bodyTable");
      const tableRow = document.createElement("tr");
      const tableHeader = document.createElement("th");
      const tableData = document.createElement("td");
      const tableData1 = document.createElement("td");
      const tableData2 = document.createElement("td");

      tableHeader.innerHTML = curso.nomeCurso;
      tableData.innerHTML = curso.duracao;
      tableData1.innerHTML = curso.dataInicio;
      tableData2.innerHTML = curso.dataTermino;

      tableBody.appendChild(tableRow);
      tableRow.appendChild(tableHeader);
      tableRow.appendChild(tableData);
      tableRow.appendChild(tableData1);
      tableRow.appendChild(tableData2);
    } catch (error) {
      console.log(error);
    }
  });
}
