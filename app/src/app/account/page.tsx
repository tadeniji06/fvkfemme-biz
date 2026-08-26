import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { User, Shield, Trophy, Settings, LogOut } from 'lucide-react';
import Link from 'next/link';
import styles from './Account.module.css';

export default function AccountPage() {
  return (
    <>
      <Navbar />
      <main className="bg-off-white" style={{ minHeight: '100vh', paddingTop: 'var(--nav-height)' }}>
        <div className="section-sm">
          <div className="container">
            <div className={styles.layout}>
              
              {/* Sidebar */}
              <div className="card" style={{ padding: '24px', alignSelf: 'start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '32px', textAlign: 'center' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--gray-200)', marginBottom: '16px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <User size={32} color="var(--gray-400)" />
                  </div>
                  <h2 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>Demo User</h2>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>user@example.com</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'flex-start' }}><User size={16} /> Profile Info</button>
                  <button className="btn btn-ghost" style={{ width: '100%', justifyContent: 'flex-start' }}><Shield size={16} /> My Record</button>
                  <button className="btn btn-ghost" style={{ width: '100%', justifyContent: 'flex-start' }}><Trophy size={16} /> Achievements</button>
                  <div className="divider" style={{ margin: '8px 0' }} />
                  <button className="btn btn-ghost" style={{ width: '100%', justifyContent: 'flex-start' }}><Settings size={16} /> Settings</button>
                  <Link href="/auth/signin" className="btn btn-ghost" style={{ width: '100%', justifyContent: 'flex-start', color: '#DC2626' }}><LogOut size={16} /> Sign Out</Link>
                </div>
              </div>

              {/* Main Content */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <h1 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)' }}>Profile Information</h1>
                
                <div className="card" style={{ padding: '32px' }}>
                  <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div className={styles.formGrid}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Full Name</label>
                        <input type="text" className="input" defaultValue="Demo User" />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Nickname</label>
                        <input type="text" className="input" placeholder="e.g. The Storm" />
                      </div>
                    </div>
                    
                    <div className={styles.formGrid}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Weight Class</label>
                        <select className="input select">
                          <option>Select Weight Class...</option>
                          <option>Lightweight</option>
                          <option>Welterweight</option>
                        </select>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Nationality</label>
                        <input type="text" className="input" />
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Bio</label>
                      <textarea className="input" rows={4} placeholder="Tell us about yourself..." />
                    </div>

                    <div style={{ alignSelf: 'flex-start', marginTop: '16px' }}>
                      <button type="button" className="btn btn-primary">Save Changes</button>
                    </div>
                  </form>
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
