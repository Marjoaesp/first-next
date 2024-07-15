import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Actas from "./Actas";
import Turnos from "./Turnos";
export default function Home() {
  return (
    <main className="#F2F3F4">
      <Header />
      <NavBar />
      <div style={{ overflowY: 'scroll', height: '100vh', backgroundColor: '#F2F3F4' }}>
          <Actas/>
          <Turnos/>
      </div>
      
      <Footer />
    </main>
  );
}
