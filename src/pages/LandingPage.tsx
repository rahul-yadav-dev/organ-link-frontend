import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-end">
      <button
        className="border m-4 p-4 rounded-lg"
        onClick={() => navigate("/login")}
      >
        Login
      </button>
      <button
        className="border m-4 p-4 rounded-lg"
        onClick={() => navigate("/signup")}
      >
        Signup
      </button>
    </div>
  );
};

export default LandingPage;
