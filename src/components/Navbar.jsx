import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark  ">
        <a className="navbar-brand" href="#">
          VIDAFORTE
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className={'nav-link'} to="/home">
                INICIO
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={'nav-link'} to="/">
                PRODUCTOS
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
