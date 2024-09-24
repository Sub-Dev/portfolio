
import PortfolioHeader from './components/PortfolioHeader.js';
import PortfolioAppBar from './components/PortfolioAppBar';

export default function Home() {
  return (
    <>
      <PortfolioAppBar />
      <PortfolioHeader />

      <section id="projetos" style={{ height: '100vh', padding: '5rem 0' }}>
        <h2 style={{ textAlign: 'center' }}>Projetos</h2>
        {/* Editar */}
      </section>

      <section id="historico-academico" style={{ height: '100vh', padding: '5rem 0' }}>
        <h2 style={{ textAlign: 'center' }}>Histórico Acadêmico</h2>
        {/* Editar */}
      </section>

      <section id="tecnologias" style={{ height: '100vh', padding: '5rem 0' }}>
        <h2 style={{ textAlign: 'center' }}>Tecnologias</h2>
        {/* Editar */}
      </section>

      <section id="contato" style={{ height: '100vh', padding: '5rem 0' }}>
        <h2 style={{ textAlign: 'center' }}>Contato</h2>
        {/* Editar */}
      </section>
    </>
  );
}
