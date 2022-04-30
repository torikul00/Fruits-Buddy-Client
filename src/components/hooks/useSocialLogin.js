import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import auth from "../firebase.init"


const useSocialLogin = () => {
    const provider = new GoogleAuthProvider()
    const navigate = useNavigate()

    const signInWithGoogle = () => {

        signInWithPopup(auth, provider)
            .then(() => {
                toast.success('SignUp successful')
                navigate('/')
               
            })
            .catch(() => toast.error('Something went wrong'))
    }
    return {
        signInWithGoogle
    }
}
export default useSocialLogin;
