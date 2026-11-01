// Web Audio API Synthesizer for QUOTEX TRADING BOT
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playBeep(freq, type, duration, gainValue = 0.15) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainValue, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn('Audio play error:', e);
    }
  }

  // Button Click / Tap
  click() {
    this.playBeep(800, 'sine', 0.05, 0.08);
  }

  // Scan Radar Chirp
  scan() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(300, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, this.ctx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.3);
    } catch (e) {}
  }

  // UP / CALL Signal Sound (Bright Ascending Chime)
  signalUp() {
    if (!this.enabled) return;
    try {
      this.init();
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        setTimeout(() => {
          this.playBeep(freq, 'triangle', 0.25, 0.2);
        }, idx * 100);
      });
    } catch (e) {}
  }

  // DOWN / PUT Signal Sound (Deep Descending Alert)
  signalDown() {
    if (!this.enabled) return;
    try {
      this.init();
      const notes = [659.25, 523.25, 392.00, 261.63]; // E5, C5, G4, C4
      notes.forEach((freq, idx) => {
        setTimeout(() => {
          this.playBeep(freq, 'sawtooth', 0.28, 0.18);
        }, idx * 110);
      });
    } catch (e) {}
  }

  // WAIT / CAUTION Signal Sound (Dual Pulsing Warning)
  signalWait() {
    if (!this.enabled) return;
    try {
      this.init();
      this.playBeep(440, 'square', 0.15, 0.12);
      setTimeout(() => {
        this.playBeep(440, 'square', 0.2, 0.15);
      }, 180);
    } catch (e) {}
  }

  // Login Success
  success() {
    if (!this.enabled) return;
    try {
      this.init();
      this.playBeep(587.33, 'sine', 0.15, 0.15);
      setTimeout(() => this.playBeep(880, 'sine', 0.3, 0.2), 120);
    } catch (e) {}
  }

  // Voice Announcement using Web Speech API
  speakSignal(signal, lang = 'bn') {
    if (!this.enabled || !window.speechSynthesis) return;
    try {
      window.speechSynthesis.cancel(); // Stop any pending speech
      let text = '';
      if (signal === 'UP') {
        text = lang === 'bn' ? 'কল সিগন্যাল! উপরে ট্রেড নিন।' : 'CALL Signal! Take UP trade now.';
      } else if (signal === 'DOWN') {
        text = lang === 'bn' ? 'পুট সিগন্যাল! নিচে ট্রেড নিন।' : 'PUT Signal! Take DOWN trade now.';
      } else {
        text = lang === 'bn' ? 'অপেক্ষা করুন! মার্কেট অস্থির, নো ট্রেড।' : 'Wait! Market is volatile, no trade.';
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang === 'bn' ? 'bn-BD' : 'en-US';
      utterance.rate = 1.05;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('Speech synthesis error:', e);
    }
  }

  // Error Alert
  error() {
    if (!this.enabled) return;
    try {
      this.init();
      this.playBeep(220, 'sawtooth', 0.25, 0.2);
      setTimeout(() => this.playBeep(180, 'sawtooth', 0.3, 0.25), 150);
    } catch (e) {}
  }
}

window.soundEngine = new SoundEngine();
