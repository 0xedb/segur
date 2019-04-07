import axios from "axios";
import $ from "jquery";
import generatePbkdf2 from "./secure";
import Router from "next/router";

const verifyLogin = event => {
  event.preventDefault();
  const form = $("#lg_form");
  const email = $("#email");
  const password = $("#password");
  const crypt = $("meta[name=crypt]").attr("content");
  const salt = crypt + email.val();

  // sendCredentials(generatePbkdf2(password.val(), salt), email.val());
  form.trigger("reset");
  // window.location.href = "/access";
  axios
    .get("/api/access", { params: { user: "human" } })
    .then((window.location.href = "/access"))
    .catch(err => console.log(err));
};

const sendCredentials = (key, user) => {
  axios
    .post("/api/validate", {
      hash: key,
      user: btoa(user)
    })
    .then(response => console.log(`sent`))
    .catch(error => console.log(error));
};

export { verifyLogin };
