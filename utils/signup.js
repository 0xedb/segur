import { auth } from "./firebase";
import $ from "jquery";

const signUp = event => {
  event.preventDefault();
  console.log("...creating!");
  event.preventDefault();
  const form = $("#lg_form");
  const name = $("#name").val();
  const email = $("#email").val();
  const password = $("#password").val();

  doSignUp({ email, password });
  form.trigger("reset");
};

const doSignUp = cred => {
  console.log(cred.email);
  auth
    .createUserWithEmailAndPassword(cred.email, cred.password)
    .then(res => console.log(res))
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == "auth/weak-password") {
        alert("The password is too weak.");
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
};

export { signUp };
