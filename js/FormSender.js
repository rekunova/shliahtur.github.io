var form = document.forms.user;
var personName = form.elements["name"];
var personPhone = form.elements["phone"];
var bar =  document.getElementById("loading");
var button = document.getElementById("form-button");

form.submit.addEventListener("click", sendRequest);

function sendRequest(event){
     
    event.preventDefault();

var xhr = new XMLHttpRequest();
function reqReadyStateChange() {
    if (xhr.readyState == 4 && xhr.status == 200)
        document.getElementById("output").innerHTML=xhr.responseText;
}
var body = "Name=" + personName.value + "&Phone="+ personPhone.value + "&ChatID=-ххххххххххххххх";
xhr.open("POST", "https://cors-anywhere.herokuapp.com/http://telegramsender.somee.com/api/values");
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onreadystatechange = reqReadyStateChange;
xhr.onloadstart = function () {
  button.style="display:none;";
  bar.style="display:block; position: absolute; margin-top: 23px; margin-left: 27%;"
  };
  xhr.onloadend = function () {
  bar.style="display:none"
  button.style="display:inline; font: 600 14px Montserrat; color: white; border: none; background-color: #54e854; margin-left: 25%; margin-top: 12px;";
  button.value="Отправлено!"
  };
xhr.send(body);

}

