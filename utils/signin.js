import { auth } from "./firebase";
import $ from "jquery";

const signIn = event => {
  event.preventDefault();
  console.log("...logging in!");
  event.preventDefault();
  const form = $("#lg_form");
  const email = $("#email").val();
  const password = $("#password").val();

  doSignIn({ email, password });
  form.trigger("reset");
};

const doSignIn = cred => {
  console.log(cred.email);
  auth
    .signInWithEmailAndPassword(cred.email, cred.password)
    .then(res => {
      console.log(res);
      window.location.href="/access";
    })
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

export { signIn };
