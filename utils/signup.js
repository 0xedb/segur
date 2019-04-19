import { auth } from "./firebase";
import $ from "jquery";

const signUp = event => {
  event.preventDefault();

  const form = $("#lg_form");
  const name = $("#name").val();
  const email = $("#email").val();
  const password = $("#password").val();
  const user_type = document.getElementById("user").textContent;
  console.log(user_type);

  doSignUp({ email, password, name, user_type });
  form.trigger("reset");
};

const doSignUp = cred => {
  const valid_users = ["admin", "employer", "student"];
  if (!valid_users.includes(cred.user_type)) {
    console.log("not allowed!!");
    return;
  }

  auth
    .createUserWithEmailAndPassword(cred.email, cred.password)
    .then(res => {
      //update user info here!
      const user = auth.currentUser;
      user.updateProfile({
        displayName: `${cred.user_type}__${cred.name}`
      });
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

export { signUp };
