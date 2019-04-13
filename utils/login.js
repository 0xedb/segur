import axios from "axios";
import $ from "jquery";
import generatePbkdf2 from "./secure"; 

const verifyLogin = event => {
  event.preventDefault();
  const form = $("#lg_form");
  const email = $("#email");
  const password = $("#password");
  const crypt = $("meta[name=crypt]").attr("content");
  const salt = crypt + email.val();

  sendCredentials(generatePbkdf2(password.val(), salt), email.val());
  form.trigger("reset");
};

const sendCredentials = (key, user) => {
  axios
    .post("/api/validate", {
      hash: key,
      user: btoa(user)
    })
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
};

const handleNavigation = decision => {
  if (decision) window.location.href = "/access";
  else alert("Wrong");
};

export { verifyLogin };
