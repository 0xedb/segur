import { auth } from "../utils/firebase";

const AuthPage = props =>
  //   return auth.currentUser ? props.children : <h1>No one here</h1>;
  props.children;

export default AuthPage;
