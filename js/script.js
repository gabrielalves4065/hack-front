function validateForm() {
  let email = document.getElementById("exampleInputEmail1").value;
  let senha = document.getElementById("exampleInputPassword1").value;
  let text;
  if (email == "" || email != "botUnimed@gmail.com") {
    text = "Email Invalido!"
    return false;
  }else{
    if(senha = "" || senha != "123"){
      text = "Senha Invalida!"
      return false;
    }
  }

  document.getElementById("validate").innerHTML = text;

}