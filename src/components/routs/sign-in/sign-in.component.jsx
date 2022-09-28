import { signInWithGooglePopup } from "../../../utils/firebace/firebace.utils";
import { createUserDocumentFromAuth } from "../../../utils/firebace/firebace.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    // console.log(response);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in wit Google POPUP</button>
    </div>
  );
};

export default SignIn;
