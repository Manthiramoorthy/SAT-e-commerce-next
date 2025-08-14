import "bootstrap/dist/css/bootstrap.min.css";
function Login() {
    return (
        <div className="card m-5 p-5">
            <input type="text" className="form-control mb-3" placeholder="Username" />
            <input type="password" className="form-control mb-3" placeholder="Password" />
            <button className="btn btn-primary">Login</button>
            <button className="btn btn-secondary mt-4">Register</button>
            
        </div>
    );
}

export default Login;
