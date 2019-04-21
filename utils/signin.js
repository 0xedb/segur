import { auth } from "./firebase";
import $ from "jquery";
import axios from "axios";

const signIn = event => {
  event.preventDefault();
  event.preventDefault();
  const form = $("#lg_form");
  const email = $("#email").val();
  const password = $("#password").val();

  doSignIn({ email, password });
  form.trigger("reset");
};

const doSignIn = cred => {
  auth
    .signInWithEmailAndPassword(cred.email, cred.password)
    .then(res => {
      const user = res.user.uid;
      axios
        .get("/access", { params: { user } })
        .then()
        .catch(err => console.log(err));
      // window.location.href="/access";
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
  // console.log(auth.currentUser);
};

export { signIn };
