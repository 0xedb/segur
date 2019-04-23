import { auth } from "./firebase";
import $ from "jquery";
import axios from "axios";
// const cookies = require('js-cookie');

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
      const email = res.user.email;
      const user_type = res.user.displayName.split("__")[0];

      // axios
      //   .get("/access", { params: { user, user_type, email } })
      //   .then()
      //   .catch(err => console.log(err));


      // document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      // cookies.set('name', email, {secure: true});
      // cookies.set('type', user_type, {secure: true});
      
      window.location.href=`/access?email=${email}&type=${user_type}`;
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
