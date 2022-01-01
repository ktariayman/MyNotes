import React from "react";

function Header() {
  const logo = (
    <img
      src="https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/271199498_1884425325098956_1191901805055044625_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=cYl1cM6U8GMAX_A_r-G&_nc_ht=scontent.ftun14-1.fna&oh=00_AT_qg7UNK72DVuhvAA5I8E3N_BBZdjalCvy9Z9ns9kmRPg&oe=61D44A77"
      alt="logo"
      className='header__img'
    />
  );
  return (
    <div className="header">
      {logo} <h1>MyNotes</h1>
    </div>
  );
}

export default Header;
