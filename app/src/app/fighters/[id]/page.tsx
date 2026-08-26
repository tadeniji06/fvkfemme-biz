import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Shield, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { fighters } from '@/lib/data';

// Add this line to satisfy Next.js static export for dynamic routes
export async function generateStaticParams() {
  return fighters.map((fighter) => ({
    id: fighter.id,
  }));
}

export default async function FighterProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const fighter = fighters.find(f => f.id === resolvedParams.id);

  if (!fighter) {
    notFound();
  }

  const koPercent = fighter.wins > 0 ? Math.round((fighter.kos / fighter.wins) * 100) : 0;
  const xpPercent = (fighter.xp % 1000) / 10;
  
  const RankIcon =
    fighter.rankChange > 0 ? TrendingUp :
    fighter.rankChange < 0 ? TrendingDown :
    Minus;

  return (
    <>
      <Navbar />
      <main className="bg-white" style={{ minHeight: '100vh', paddingTop: 'var(--nav-height)' }}>
        {/* Header Hero */}
        <div style={{ background: 'var(--black)', color: 'var(--white)', padding: '60px 0 0 0', position: 'relative', overflow: 'hidden' }}>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <Link href="/fighters" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', marginBottom: '32px', fontSize: '0.9rem', fontWeight: 600 }}>
              <ArrowLeft size={16} /> Back to Directory
            </Link>

            <div style={{ display: 'flex', gap: '48px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
              {/* Photo */}
              <div style={{ position: 'relative', width: '280px', height: '320px', borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0', overflow: 'hidden', border: '1px solid var(--black-border)', borderBottom: 'none' }}>
                <Image src={fighter.image} alt={fighter.name} fill style={{ objectFit: 'cover' }} priority />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--black) 0%, transparent 40%)' }} />
              </div>

              {/* Info */}
              <div style={{ paddingBottom: '32px', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '1.5rem' }}>{fighter.flag}</span>
                  <span className="badge badge-outline">{fighter.weightClass}</span>
                  <span className="badge badge-elite">{fighter.tier} Tier</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--black-surface)', padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 800 }}>
                    Rank #{fighter.rank}
                    <RankIcon size={14} color={fighter.rankChange > 0 ? '#16A34A' : fighter.rankChange < 0 ? '#DC2626' : 'var(--text-muted)'} />
                  </div>
                </div>

                <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1, marginBottom: '8px' }}>
                  {fighter.name}
                </h1>
                
                {fighter.nickname && (
                  <p style={{ fontSize: '1.5rem', color: 'var(--yellow)', fontStyle: 'italic', fontWeight: 700, marginBottom: '24px' }}>
                    &ldquo;{fighter.nickname}&rdquo;
                  </p>
                )}

                <div style={{ display: 'flex', gap: '32px' }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.05em' }}>Gym</div>
                    <div style={{ fontWeight: 600 }}>{fighter.gym}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.05em' }}>Nationality</div>
                    <div style={{ fontWeight: 600 }}>{fighter.nationality}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.05em' }}>Points</div>
                    <div style={{ fontWeight: 600, color: 'var(--yellow)' }}>{fighter.points.toLocaleString()}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-sm">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '48px' }}>
              
              {/* Left Column */}
              <div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', borderBottom: '1px solid var(--border)', paddingBottom: '16px' }}>Biography</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '48px' }}>
                  {fighter.bio}
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', borderBottom: '1px solid var(--border)', paddingBottom: '16px' }}>Fight History</h2>
                <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                      <tr style={{ background: 'var(--off-white)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>
                        <th style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>Date</th>
                        <th style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>Opponent</th>
                        <th style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>Result</th>
                        <th style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>Method</th>
                        <th style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>Event</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fighter.fightHistory.map(fight => (
                        <tr key={fight.id} style={{ borderBottom: '1px solid var(--border)' }}>
                          <td style={{ padding: '16px 20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{fight.date}</td>
                          <td style={{ padding: '16px 20px', fontWeight: 600 }}>{fight.opponent} <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 400 }}>({fight.opponentRecord})</span></td>
                          <td style={{ padding: '16px 20px' }}>
                            <span style={{ 
                              display: 'inline-flex', width: '24px', height: '24px', alignItems: 'center', justifyContent: 'center', 
                              background: fight.result === 'W' ? '#DCFCE7' : fight.result === 'L' ? '#FEE2E2' : 'var(--gray-200)',
                              color: fight.result === 'W' ? '#16A34A' : fight.result === 'L' ? '#DC2626' : 'var(--text-secondary)',
                              borderRadius: '4px', fontWeight: 800, fontSize: '0.85rem'
                            }}>{fight.result}</span>
                          </td>
                          <td style={{ padding: '16px 20px', fontSize: '0.9rem', fontWeight: 600 }}>{fight.method} <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>{fight.rounds}</span></td>
                          <td style={{ padding: '16px 20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{fight.event}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Right Column - Stats & Gamification */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                
                {/* Record Card */}
                <div className="card" style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}><Shield size={18} /> Professional Record</h3>
                  
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 900, color: '#16A34A', lineHeight: 1 }}>{fighter.wins}</div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>WINS</div>
                    </div>
                    <div style={{ width: '1px', height: '40px', background: 'var(--border)' }} />
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 900, color: '#DC2626', lineHeight: 1 }}>{fighter.losses}</div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>LOSSES</div>
                    </div>
                    <div style={{ width: '1px', height: '40px', background: 'var(--border)' }} />
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 900, color: 'var(--text-secondary)', lineHeight: 1 }}>{fighter.draws}</div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>DRAWS</div>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', padding: '16px', background: 'var(--off-white)', borderRadius: 'var(--radius-md)' }}>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>KO Ratio</div>
                      <div style={{ fontWeight: 800 }}>{koPercent}% ({fighter.kos})</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Stance</div>
                      <div style={{ fontWeight: 800 }}>{fighter.stance}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Reach</div>
                      <div style={{ fontWeight: 800 }}>{fighter.reach}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Age</div>
                      <div style={{ fontWeight: 800 }}>{fighter.age}</div>
                    </div>
                  </div>
                </div>

                {/* Level / XP */}
                <div className="card" style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '20px' }}>Fighter Level</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '12px' }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 900, color: 'var(--black)', lineHeight: 1 }}>Level {fighter.level}</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)' }}>{fighter.xp.toLocaleString()} XP</div>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: 'var(--gray-200)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                    <div style={{ width: `${xpPercent}%`, height: '100%', background: 'var(--yellow)', borderRadius: 'var(--radius-full)' }} />
                  </div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '8px', textAlign: 'right' }}>{100 - xpPercent}% to next level</p>
                </div>

                {/* Achievements */}
                <div className="card" style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '20px' }}>Achievements</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {fighter.achievements.map(ach => (
                      <div key={ach.id} style={{ display: 'flex', gap: '12px' }}>
                        <div style={{ width: '40px', height: '40px', background: 'var(--yellow-light)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7A6200', flexShrink: 0 }}>
                          <Shield size={20} />
                        </div>
                        <div>
                          <div style={{ fontWeight: 800, fontSize: '0.95rem' }}>{ach.title}</div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{ach.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
