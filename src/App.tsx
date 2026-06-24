import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import PageTransition from './components/ui/PageTransition';
import SmoothScrollProvider from './components/ui/SmoothScrollProvider';
import AnnouncementBar from './components/layout/AnnouncementBar';
import Nav from './components/layout/Nav';
import CartDrawer from './components/layout/CartDrawer';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Manifesto from './pages/Manifesto';
import Contact from './pages/Contact';
import FoundersWords from './pages/FoundersWords';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <SmoothScrollProvider>
        <PageTransition>
          <div className="min-h-screen flex flex-col">
            <AnnouncementBar />
            <Nav />
            <CartDrawer />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/products/:slug" element={<ProductDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/manifesto" element={<Manifesto />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/founders-words" element={<FoundersWords />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </PageTransition>
        </SmoothScrollProvider>
      </CartProvider>
    </BrowserRouter>
  );
}
