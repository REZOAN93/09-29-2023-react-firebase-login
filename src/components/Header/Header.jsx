import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContect } from "../../Context/UserProvider";
import { GiNurseFemale } from "react-icons/gi";

const Header = () => {
  const {user}=useContext(AuthContect)
  const userNav = (
    <>
      <li><NavLink to={'/googleLogin'}>Google</NavLink></li>
      <li><NavLink to={'/signout'}>SignOut</NavLink></li>
      <li><NavLink to={'/signin'}>Sign In</NavLink></li>
      <li><NavLink to={'/'}>Contact</NavLink></li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-red-400">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl"></a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {
                  user?.photoURL?<img src={user?.photoURL} />:<GiNurseFemale className=" w-10 h-full"></GiNurseFemale>
                }
                
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              {userNav}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
