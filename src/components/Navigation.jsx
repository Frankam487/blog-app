import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigate">
      <ul>
        <li>
          <NavLink to="/">Acceuil</NavLink>
        </li>
        <li>
          <NavLink to="/about">A_Propos</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
