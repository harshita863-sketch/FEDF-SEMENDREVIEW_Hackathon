
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

function Login() {
    const navigate = useNavigate();

    function handleLogin(event) {
        event.preventDefault();

        const user = event.target.username.value;
        const pass = event.target.password.value;

        // Admin login
        if (user === "admin" && pass === "1234") {
            navigate("/dashboard");
            return;
        }

        // Registered user login
        const storedUser = localStorage.getItem("username");
        const storedPass = localStorage.getItem("password");

        if (user === storedUser && pass === storedPass) {
            navigate("/dashboard");
        } else {
            alert("Invalid username or password!");
        }
    }

    return (
        <div className="login-page">
            <div className="login-box">

                <img
                    src="https://cdn5.vectorstock.com/i/1000x1000/79/79/beautiful-woman-shopping-composed-in-a-circle-vector-6157979.jpg"
                    alt="Logo"
                />

                <h2>WELCOME USER</h2>

                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter Username"
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        required
                    />

                    <button type="submit">Login</button>
                </form>

                <div className="register-link">
                    If not have an account{" "}
                    <Link to="/signup">Register here</Link>
                </div>

            </div>
        </div>
    );
}

export default Login;
