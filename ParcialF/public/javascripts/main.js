function addPro(codigo, marca, nombre, peso, precio) {
  let newRow = document.createElement("tr");
  let date = new Date();

  newRow.innerHTML = `<td><b>${codigo}</b></td>
      <td>${marca}</td>
      <td>${nombre}</td>
      <td>${peso}</td>
      <td>${precio}</td>`;

  tbody.appendChild(newRow);
}
window.onload = () => {
  let submit_btn = document.querySelector("#submit_btn");
  let codigo_field = document.querySelector("#codigo_field");
  let marca_field = document.querySelector("#marca_field");
  let nombre_field = document.querySelector("#nombre_field");
  let peso_field = document.querySelector("#peso_field");
  let precio_field = document.querySelector("#precio_field");
  let tbody = document.querySelector("#table_body");

  submit_btn.addEventListener("click", function() {
    let codigo = codigo_field.value;
    let marca = marca_field.value;
    let nombre = nombre_field.value;
    let peso = peso_field.value;
    let precio = precio_field.value;
    addPro(codigo, marca, nombre, peso, precio);
  });

  codigo_field.addEventListener("keyup", function() {
    let codigo = codigo_field.value;
  });
};
