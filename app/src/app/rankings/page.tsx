import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RankingsTable from '@/components/RankingsTable';
import { fighters, weightClasses } from '@/lib/data';

export default function RankingsPage() {
  // Sort fighters by rank
  const sortedFighters = [...fighters].sort((a, b) => a.rank - b.rank);

  return (
    <>
      <Navbar />
      <main className="bg-off-white" style={{ minHeight: '100vh', paddingTop: 'var(--nav-height)' }}>
        <div className="section-sm">
          <div className="container">
            <div style={{ marginBottom: '40px' }}>
              <h1 style={{ color: 'var(--black)', marginBottom: '16px' }}>Global Rankings</h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px' }}>
                The official FemmeBiz pound-for-pound and divisional rankings. Rankings are updated weekly based on fight results and platform activity.
              </p>
            </div>

            {/* Weight Class Tabs (UI only for now) */}
            <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '16px', marginBottom: '24px' }}>
              <button className="btn btn-primary btn-sm">Pound for Pound</button>
              {weightClasses.slice(0, 8).map(wc => (
                <button key={wc} className="btn btn-outline btn-sm" style={{ whiteSpace: 'nowrap' }}>{wc}</button>
              ))}
            </div>

            <RankingsTable fighters={sortedFighters} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
