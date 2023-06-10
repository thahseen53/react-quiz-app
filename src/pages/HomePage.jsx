import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.email);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registerUser({ name: userName, email: userEmail }));
    user ? navigate("/quiz") : navigate("/");
  };
  return (
    <div className="flex flex-col lg:w-1/3 m-auto lg:mt-10 gap-4">
      <h1 className="text-center font-bold">Enter your details</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your name"
          className="h-10 w-full px-2 border border-slate-300 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="email"
          placeholder="enter your email "
          className="h-10 w-full px-2 border border-slate-300 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          onChange={(e) => setUserEmail(e.target.value)}
          value={userEmail}
        />
        <button className="bg-indigo-500 px-3 py-1 font-bold text-white w-max m-auto rounded-lg">
          Register
        </button>
      </form>
    </div>
  );
};

export default HomePage;
