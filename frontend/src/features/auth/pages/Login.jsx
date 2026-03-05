import '../shared/authForms.scss'
const Login = () => {
    const handleSubmit = (e) =>{
        e.preventDefault(e)
    }
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
            />
          </div>
          <div className="input-group">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
            />
          </div>
          <button className="primary-button" type="submit">Login</button>

                {/* register Link */}
      <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.875rem', color: '#a1a1aa' }}>
        Don't have an account?{' '}
        <a href="/register" style={{ color: '#e1034d', textDecoration: 'none', fontWeight: 600 }}>
          register
        </a>
      </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
