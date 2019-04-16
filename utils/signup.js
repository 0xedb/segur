import { auth, firestore } from "./firebase";
import $ from "jquery";

const signUp = event => {
  event.preventDefault();
  console.log("...creating!");
  event.preventDefault();
  const form = $("#lg_form");
  const name = $("#name").val();
  const email = $("#email").val();
  const password = $("#password").val();

  doSignUp({ email, password, name });
  form.trigger("reset");
};

const doSignUp = cred => {
  /**
   * 
   *      do validation here  like 
   *      check if user type is valid with array
   *      etc
   * 
   * 
   */


  auth
    .createUserWithEmailAndPassword(cred.email, cred.password)
    .then(res => {
      firestore
        .collection("users")
        .doc(res.user.uid)
        .set({
          name: cred.name,
          type: document.querySelector("#user").textContent
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
