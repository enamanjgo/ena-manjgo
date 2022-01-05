import './menu.scss';

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#about">About</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">My Work</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>

        <li onClick={() => setMenuOpen(false)}>
          <a
            href="https://drive.google.com/file/d/1rr4d_nhuMLr3Y14vp3EYzGSTZzT-uCS8/view?usp=sharing"
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}
