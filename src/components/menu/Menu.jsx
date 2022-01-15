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
            href="https://drive.google.com/file/d/1waRbfNMAuOh_DgWP1ewDNQDXJQ1KD3jA/view?usp=sharing"
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}
