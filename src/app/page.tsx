import PortfolioHeader from './components/PortfolioHeader';
import PortfolioAppBar from './components/PortfolioAppBar';
import Experience from './components/Experience';
import AcademicHistory from './components/AcademicHistory';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Projects from './components/Projects';

export default function Home() {
  return (
    <>
      <PortfolioAppBar />
      <PortfolioHeader />

      <section id="projetos" style={{ padding: '5rem 0', marginBottom: '4rem' }}>
        <Projects />
      </section>

      <section id="historico-academico" style={{ padding: '5rem 0', marginBottom: '4rem' }}>
        <AcademicHistory />
      </section>

      <section id="experiencia" style={{ padding: '5rem 0', marginBottom: '4rem' }}>
        <Experience />
      </section>

      <section id="tecnologias" style={{ padding: '5rem 0', marginBottom: '4rem' }}>
        <Technologies />
      </section>

      <section id="contato" style={{ padding: '5rem 0', marginBottom: '4rem' }}>
        <Contact />
      </section>
    </>
  );
}
