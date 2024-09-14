function app() {
  //Get DOM variables and listener
  const formNode = document.getElementById("myForm");
  const inputNode = document.getElementById("myInput");
  const messageContainer = document.getElementById("myError");
  // const errorMessages = ["Oops! Please add your email", "Oops! Please check your email"];
  let message = '';
  // Init functions sequence
  Init();
  // Functions
  function Init() {
    console.log("App on");
    message = '';
    getValue();
    submitForm();
  }
  function getValue() {
    console.log("New keyup");
    formNode.addEventListener("change", (e) => {
      console.log(e.target.value);
    });
  }
  function isEmail(value) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i;
    if(value.match(emailRegex)){
        return true;
    } else {
        return false;
    }
  }
  function injectMessage(msg) {
    messageContainer.textContent = msg;
  }
  function addClassError() {
    inputNode.classList.add("input--email-error")
  }
  function submitForm() {
    message = '';
    formNode.addEventListener("submit", (e) => {
      if(inputNode.value !== undefined && inputNode.value !== null && inputNode.value !== ''){
        if(!isEmail(inputNode.value)){
            e.preventDefault();
            message = "Oops! Please check your email";
            injectMessage(message);
            addClassError();
        } else {
            console.log("Request sended with success.");
        }
      }  else {
        e.preventDefault();
        message = "Oops! Please add your email";
        injectMessage(message);
        addClassError();
      }
    });
  }
}
window.addEventListener("load", app);
