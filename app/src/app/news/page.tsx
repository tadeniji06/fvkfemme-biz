import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LatestNews from '@/components/LatestNews';
import { news } from '@/lib/data';

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', paddingTop: 'var(--nav-height)' }}>
        <div className="section-sm">
          <div className="container">
            <h1 style={{ color: 'var(--black)', marginBottom: '16px' }}>Boxing News</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', marginBottom: '40px' }}>
              The latest headlines, interviews, and analysis from the world of female boxing.
            </p>
          </div>
        </div>
        
        {/* We can reuse the LatestNews component but pass all articles */}
        <LatestNews articles={news} />
      </main>
      <Footer />
    </>
  );
}
