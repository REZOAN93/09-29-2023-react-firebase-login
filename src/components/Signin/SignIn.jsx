import { useContext, useState } from "react";
import { AuthContect } from "../../Context/UserProvider";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate=useNavigate()
    const {createUserWithEmail}=useContext(AuthContect)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const handleLogIn=event=>{
        event.preventDefault()
        const form=event.target
        console.log(email,password)
        form.reset()
        createUserWithEmail(email,password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            console.log(user)
            navigate("/details")
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }

    const handlegetEmail=(event)=>{setEmail(event.target.value)}
    const handlegetPassword=(event)=>setPassword(event.target.value)

  return (
    <div>
      <div className=" min-h-screen">
        <div className="">
          <div className="card w-6/12 mx-auto my-20 shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleLogIn}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    onChange={handlegetEmail}
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    onBlur={handlegetPassword}
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Login" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
