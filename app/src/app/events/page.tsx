import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { events } from '@/lib/data';
import { Calendar, MapPin } from 'lucide-react';

export default function EventsPage() {
  const upcoming = events.filter(e => e.status === 'upcoming');
  const past = events.filter(e => e.status === 'completed');

  return (
    <>
      <Navbar />
      <main className="bg-off-white" style={{ minHeight: '100vh', paddingTop: 'var(--nav-height)' }}>
        <div className="section-sm">
          <div className="container">
            <h1 style={{ color: 'var(--black)', marginBottom: '16px' }}>Fight Calendar</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', marginBottom: '40px' }}>
              Upcoming major events in the female boxing world.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Upcoming Events</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px', marginBottom: '64px' }}>
              {upcoming.map(event => (
                <div key={event.id} className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column' }}>
                  <div className="badge badge-yellow" style={{ alignSelf: 'flex-start', marginBottom: '16px' }}>Upcoming</div>
                  <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', fontWeight: 800, marginBottom: '12px' }}>{event.title}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Calendar size={16} /> {new Date(event.date).toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' })}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={16} /> {event.venue}, {event.location}</div>
                  </div>
                  <div style={{ padding: '16px', background: 'var(--gray-100)', borderRadius: 'var(--radius-md)', marginTop: 'auto' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '4px' }}>Main Event</div>
                    <div style={{ fontWeight: 700 }}>{event.mainEvent}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Past Results</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' }}>
              {past.map(event => (
                <div key={event.id} className="card" style={{ padding: '24px', opacity: 0.8 }}>
                  <h3 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-heading)', fontWeight: 800, marginBottom: '12px' }}>{event.title}</h3>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '16px' }}>
                    {new Date(event.date).toLocaleDateString()} • {event.location}
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{event.mainEvent}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
