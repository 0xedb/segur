import {auth} from '../utils/firebase';

const AuthPage = (props) => (
    <div>
        {console.log(auth.currentUser)}
        {props.children}
    </div>
)

export default AuthPage;