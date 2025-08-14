import "bootstrap/dist/css/bootstrap.min.css";
function Register() {
    return (
        <div className="card m-5 p-5">
            <input type="text" className="form-control mb-3" placeholder="Username" />
            <input type="email" className="form-control mb-3" placeholder="Email" />
            <input type="password" className="form-control mb-3" placeholder="Password" />
            <button className="btn btn-primary">Register</button>
            <button className="btn btn-secondary mt-4">Login</button>
        </div>
    );
}

export default Register;