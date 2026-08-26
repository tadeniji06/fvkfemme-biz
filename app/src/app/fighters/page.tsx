import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FighterCard from '@/components/FighterCard';
import { fighters } from '@/lib/data';

export default function FightersPage() {
  return (
    <>
      <Navbar />
      <main className="bg-off-white" style={{ minHeight: '100vh', paddingTop: 'var(--nav-height)' }}>
        <div className="section-sm">
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '40px', gap: '24px', flexWrap: 'wrap' }}>
              <div>
                <h1 style={{ color: 'var(--black)', marginBottom: '16px' }}>Fighter Directory</h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px' }}>
                  Browse all active fighters on FemmeBiz. Discover new talent, check records, and find your next opponent.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <input type="text" placeholder="Search fighters..." className="input" style={{ width: '240px' }} />
                <select className="input select" style={{ width: '160px' }}>
                  <option>All Weights</option>
                  <option>Lightweight</option>
                  <option>Welterweight</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '32px' }}>
              {fighters.map(fighter => (
                <FighterCard key={fighter.id} fighter={fighter} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
