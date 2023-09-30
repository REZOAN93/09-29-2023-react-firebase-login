import { useContext } from "react";
import { AuthContect } from "../../Context/UserProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Home = () => {
  const { googleAuth, user, SignOut } = useContext(AuthContect);
  const provider = new GoogleAuthProvider();
  const handlegooleLOgin = () => {
    googleAuth(provider);
  };
  const handleSignOut = () => {
    SignOut();
  };
  return (
    <div className=" w-8/12 mx-auto border text-center p-10 flex flex-col justify-center">
      {!user?.displayName ? (
        <button className="btn " onClick={() => handlegooleLOgin()}>
          google Log In
        </button>
      ) : (
        <button className="btn" onClick={handleSignOut}>
          SignOut
        </button>
      )}
      <h1>{user?.displayName}</h1>
      <h1>{user?.email}</h1>
      {user?.photoURL ? (
        <img className=" w-96 h-96 rounded-full" src={user?.photoURL} alt="" />
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
