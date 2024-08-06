
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';

import classes from './MainNav.module.css';

function MainNavigation() {
  return (
    <Paper elevation={20}>

    <header className={classes.header}>
      <div className={classes.logo}>Women in Mormon Studies</div>
      <nav>
        <ul>
          <li>
            <Link id ="Home page"to='/'>Home</Link>
          </li>
          <li>
            <Link id = "Signin page"to='/signin'>Sign in</Link>
          </li>
          <li>
            <Link id ="Register page"to='/register'>Register</Link>
          </li>
          <li>
            <Link id ="Find expert page"to='/search'>Find an Expert</Link>
          </li>
        </ul>
      </nav>
    </header>
    </Paper>
  );
}

export default MainNavigation;