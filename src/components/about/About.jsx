import './about.scss';
import '../../assets2/WebsiteContent/HandDrawnAssets/introbackground.png';

export default function About() {
  return (
    <div
      className="about"
      id="about"
      style={{
        backgroundImage: 'url(' + 'assets/aboutbackground4.png' + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="left"
        style={{
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '100px',
        }}
      >
        <div className="imgContainer">
          <img
            src="https://i.imgur.com/OFURt6f.jpg"
            title="source: imgur.com"
          />
        </div>
      </div>
      <div className="right">
        <div class="gradient"></div>
        <div class="gooey"></div>
        <div className="wrapper">
          <h2>👋 Nice to meet you!</h2>
          <p>
            {' '}
            I’m Ena. It rhymes with Jenna! I’m a Systems Design Engineering
            student at the University of Waterloo with a passion for design in
            all its forms.
            <br /> 🎨🚉👾
            <br /> <br />
            Most recently, I've worked at Bombardier Aerospace as an Engineering
            Knowledge Management Consultant. While there, I designed processes
            to transform company-wide employee information databases, making
            them more efficient and accessible. ✈
            <br /> <br />
            I'm currently seeking Summer 2022 internships in Product Management,
            Mechanical Design, or UX Design.
            <br /> <br />
            When I'm not working, you can find me making digital art, brushing
            up on my language skills, or telling really awful jokes.
            <br /> <br />
            See my work below!
          </p>
        </div>
      </div>

      <a href="#portfolio">
        <img src="assets/WebsiteContent/HandDrawnAssets/arrowdown.png" alt="" />
      </a>
    </div>
  );
}
