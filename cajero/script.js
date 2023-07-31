var cuentas = [
    { nombre: "Mali", saldo: 200 },
    { nombre: "Gera", saldo: 290 },
    { nombre: "Maui", saldo: 67 }
  ];
  
  var selectedAccountIndex = -1;
  
  function seleccionarCuenta() {
    var selectElement = document.getElementById("selectCuenta");
    var selectedIndex = selectElement.selectedIndex;
    var passwordInput = document.getElementById("password");
    var opcionesDiv = document.getElementById("opciones");
    var resultadoDiv = document.getElementById("resultado");
  
    if (selectedIndex === -1) {
      alert("Selecciona una cuenta válida.");
      return;
    }
  
    var selectedAccount = cuentas[selectedIndex];
    var password = passwordInput.value;
  
    if (password === "1234") {
      selectedAccountIndex = selectedIndex;
      opcionesDiv.style.display = "block";
      resultadoDiv.innerHTML = "";
    } else {
      alert("Contraseña incorrecta. Intenta de nuevo.");
    }
  
    passwordInput.value = "";
  }
  
  function consultarSaldo() {
    var selectedAccount = cuentas[selectedAccountIndex];
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "Saldo actual: $" + selectedAccount.saldo;
  }
  
  function ingresarMonto() {
    var selectedAccount = cuentas[selectedAccountIndex];
    var monto = prompt("Ingresa el monto a ingresar:");
  
    if (monto === null || monto === "") {
      return;
    }
  
    monto = parseFloat(monto);
  
    if (isNaN(monto) || monto <= 0) {
      alert("Ingresa un monto válido.");
      return;
    }
  
    var nuevoSaldo = selectedAccount.saldo + monto;
  
    if (nuevoSaldo > 990) {
      alert("El saldo no puede exceder $990.");
      return;
    }
  
    selectedAccount.saldo = nuevoSaldo;
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "Monto ingresado: $" + monto + "<br> Nuevo saldo: $" + nuevoSaldo;
  }
  
  function retirarMonto() {
    var selectedAccount = cuentas[selectedAccountIndex];
    var monto = prompt("Ingresa el monto a retirar:");
  
    if (monto === null || monto === "") {
      return;
    }
  
    monto = parseFloat(monto);
  
    if (isNaN(monto) || monto <= 0) {
      alert("Ingresa un monto válido.");
      return;
    }
  
    var nuevoSaldo = selectedAccount.saldo - monto;
  
    if (nuevoSaldo < 10) {
      alert("El saldo no puede ser menor a $10.");
      return;
    }
  
    selectedAccount.saldo = nuevoSaldo;
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "Monto retirado: $" + monto + "<br> Nuevo saldo: $" + nuevoSaldo;
  }