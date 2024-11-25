import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigate">
      <ul>
        <li>
          <NavLink className={(nav) => (nav.isActive ? 'nav' : '')} to="/">
            Acceuil
          </NavLink>
        </li>
        <li>
          <NavLink className={(e) => (e.isActive ? 'nav' : '')} to="/about">
            A_Propos
          </NavLink>
        </li>
        <li>
          <NavLink className={(nav) => nav.isActive? 'nav': ''} to="/blog">Blog</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
