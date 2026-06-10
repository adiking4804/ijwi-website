import { useState, useEffect, useRef } from "react";

const C = {
  bg: "#08090A",
  bgSub: "#0F1012",
  card: "#161819",
  border: "#222426",
  orange: "#E07D38",
  orangeGlow: "rgba(224,125,56,0.12)",
  teal: "#2AA198",
  tealGlow: "rgba(42,161,152,0.1)",
  white: "#F0EDE6",
  dim: "#7D7870",
  dimmer: "#4A4740",
  gold: "#D4A017",
  red: "#E04545",
  green: "#34C759",
};

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function FadeIn({ children, delay = 0, style = {} }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`, ...style,
    }}>{children}</div>
  );
}

function AnimCount({ target, suffix = "", prefix = "" }) {
  const [val, setVal] = useState(0);
  const [ref, visible] = useInView();
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = target / 120;
    const id = setInterval(() => {
      start += step;
      if (start >= target) { setVal(target); clearInterval(id); }
      else setVal(Math.floor(start));
    }, 16);
    return () => clearInterval(id);
  }, [visible, target]);
  return <span ref={ref}>{prefix}{val.toLocaleString()}{suffix}</span>;
}

function WaveBar({ delay }) {
  return <div style={{ width: 3, borderRadius: 2, backgroundColor: C.orange, animation: `wave 1.2s ease-in-out ${delay}s infinite` }} />;
}

function SectionLabel({ color, children }) {
  return (
    <div style={{ fontSize: 12, fontWeight: 700, color, textTransform: "uppercase", letterSpacing: "0.18em", marginBottom: 16 }}>
      {children}
    </div>
  );
}

function TerminalLine({ prompt, command, output, delay = 0 }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-10px)",
      transition: `all 0.5s ease ${delay}s`,
    }}>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, marginBottom: 2 }}>
        <span style={{ color: C.teal }}>{prompt}</span>
        <span style={{ color: C.white }}> {command}</span>
      </div>
      {output && <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: C.dim, marginBottom: 8, paddingLeft: 16 }}>{output}</div>}
    </div>
  );
}

const DEAD_COMPANIES = [
  { name: "Salesforce", drop: "-45%", sector: "CRM" },
  { name: "Adobe", drop: "-40%", sector: "Creative" },
  { name: "IBM", drop: "-30%", sector: "Legacy IT" },
  { name: "Thomson Reuters", drop: "-20%", sector: "Legal" },
  { name: "LegalZoom", drop: "-20%", sector: "Legal" },
  { name: "HubSpot", drop: "-35%", sector: "Marketing" },
];

const LANGS = [
  { flag: "🇷🇼", name: "Kinyarwanda", speakers: "13M", pct: 68, status: "Active" },
  { flag: "🇰🇪", name: "Kiswahili", speakers: "100M+", pct: 31, status: "Active" },
  { flag: "🇳🇬", name: "Yorùbá", speakers: "50M", pct: 12, status: "Soon" },
  { flag: "🇪🇹", name: "አማርኛ", speakers: "57M", pct: 5, status: "Soon" },
];

export default function IjwiLanding() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleWaitlist = async (e) => {
    e.preventDefault();
    if (!email.includes("@") || submitting) return;
    setSubmitting(true);
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "3aaeb1fe-0e2d-4bcd-85d3-773360d856c1",
          email: email,
          subject: "New Ijwi AI Waitlist Signup",
          from_name: "Ijwi AI Waitlist",
          to: "awadi@ijwi-ai.com",
        }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ backgroundColor: C.bg, color: C.white, fontFamily: "'Outfit', sans-serif", overflowX: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Syne:wght@700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <style>{`
        @keyframes wave { 0%, 100% { height: 6px; opacity: 0.3; } 50% { height: 28px; opacity: 1; } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 24px ${C.orangeGlow}; } 50% { box-shadow: 0 0 48px ${C.orangeGlow}, 0 0 96px rgba(224,125,56,0.05); } }
        @keyframes gradientShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes tickerScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::selection { background: ${C.orange}; color: ${C.bg}; }
        a { color: ${C.orange}; text-decoration: none; }
        a:hover { text-decoration: underline; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${C.bg}; }
        ::-webkit-scrollbar-thumb { background: ${C.border}; border-radius: 3px; }
      `}</style>

      {/* ═══ NAV ═══ */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "14px 32px", display: "flex", justifyContent: "space-between", alignItems: "center",
        backgroundColor: "rgba(8,9,10,0.88)", backdropFilter: "blur(24px)",
        borderBottom: `1px solid ${C.border}`,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 3, height: 22 }}>
            {[0, 0.15, 0.3, 0.15, 0].map((d, i) => <WaveBar key={i} delay={d} />)}
          </div>
          <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em" }}>
            ijwi<span style={{ color: C.orange }}>.</span>ai
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {["Thesis", "Infrastructure", "Languages", "Collect"].map(s => (
            <span key={s} onClick={() => document.getElementById(s.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
              style={{ fontSize: 13, fontWeight: 500, color: C.dim, cursor: "pointer" }}>{s}</span>
          ))}
          <a href="https://github.com/adiking4804/ijwi-ai" target="_blank" style={{ fontSize: 13, fontWeight: 500, color: C.dim }}>GitHub</a>
          <span onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })} style={{
            fontSize: 13, fontWeight: 700, color: C.bg, backgroundColor: C.orange,
            padding: "7px 18px", borderRadius: 7, cursor: "pointer",
          }}>Join Waitlist</span>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center",
        alignItems: "center", textAlign: "center", padding: "120px 24px 60px",
        position: "relative",
        background: `radial-gradient(ellipse at 50% -10%, ${C.orangeGlow} 0%, transparent 55%),
                     radial-gradient(ellipse at 80% 90%, ${C.tealGlow} 0%, transparent 35%), ${C.bg}`,
      }}>
        <FadeIn delay={0.1}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 14px",
            borderRadius: 99, border: `1px solid ${C.border}`, backgroundColor: C.card, marginBottom: 28,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: 4, backgroundColor: C.red, animation: "pulse 1.5s infinite" }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: C.dim, fontFamily: "'JetBrains Mono', monospace" }}>
              $1T+ wiped from SaaS · Voice agents can't speak African languages
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 style={{
            fontFamily: "'Syne', sans-serif", fontSize: "clamp(38px, 6.5vw, 76px)", fontWeight: 800,
            lineHeight: 1.05, letterSpacing: "-0.035em", maxWidth: 880, marginBottom: 24,
          }}>
            The agent revolution<br />has no voice in<br />
            <span style={{
              background: `linear-gradient(135deg, ${C.orange}, ${C.gold}, ${C.orange})`,
              backgroundSize: "200% 200%", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              animation: "gradientShift 4s ease infinite",
            }}>Africa</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.35}>
          <p style={{
            fontSize: "clamp(15px, 2vw, 19px)", color: C.dim, maxWidth: 580,
            lineHeight: 1.7, marginBottom: 36, fontWeight: 400,
          }}>
            AI agents are replacing $1 trillion in SaaS. But they only work if they can
            understand you. For 1 billion+ African language speakers, they can't.
            We're building the voice infrastructure to change that.
          </p>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
            <span onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })} style={{
              padding: "13px 30px", borderRadius: 9, backgroundColor: C.orange, color: C.bg,
              fontSize: 15, fontWeight: 700, cursor: "pointer", animation: "glow 3s ease infinite",
            }}>Join the Waitlist</span>
            <a href="https://github.com/adiking4804/ijwi-ai" target="_blank" style={{
              padding: "13px 30px", borderRadius: 9, border: `1px solid ${C.border}`,
              backgroundColor: "transparent", color: C.white, fontSize: 15, fontWeight: 600,
              textDecoration: "none", display: "flex", alignItems: "center", gap: 8,
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill={C.white}><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
        </FadeIn>

        <div style={{ position: "absolute", bottom: 28, animation: "float 2.5s ease infinite" }}>
          <div style={{ width: 22, height: 36, borderRadius: 11, border: `2px solid ${C.dimmer}`, display: "flex", justifyContent: "center", paddingTop: 7 }}>
            <div style={{ width: 3, height: 7, borderRadius: 2, backgroundColor: C.dim }} />
          </div>
        </div>
      </section>

      {/* ═══ TICKER: SaaS APOCALYPSE ═══ */}
      <div style={{
        borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`,
        backgroundColor: C.bgSub, overflow: "hidden", padding: "12px 0",
      }}>
        <div style={{ display: "flex", animation: "tickerScroll 25s linear infinite", width: "max-content" }}>
          {[...DEAD_COMPANIES, ...DEAD_COMPANIES].map((c, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginRight: 40, whiteSpace: "nowrap" }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: C.white, fontFamily: "'JetBrains Mono', monospace" }}>{c.name}</span>
              <span style={{ fontSize: 12, fontWeight: 800, color: C.red, fontFamily: "'JetBrains Mono', monospace" }}>{c.drop}</span>
              <span style={{ fontSize: 10, color: C.dimmer }}>{c.sector}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ THESIS ═══ */}
      <section id="thesis" style={{ padding: "100px 24px", maxWidth: 820, margin: "0 auto" }}>
        <FadeIn>
          <SectionLabel color={C.red}>The Shift</SectionLabel>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(26px, 4.2vw, 42px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.025em", marginBottom: 24 }}>
            SaaS is dying.<br />AI agents are replacing it.<br />
            <span style={{ color: C.orange }}>But they can't speak to Africa.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p style={{ fontSize: 17, color: C.dim, lineHeight: 1.75, marginBottom: 32, maxWidth: 640 }}>
            Anthropic published a markdown file and erased $300 billion in market cap.
            IBM lost 30% in a day. The SaaS model — selling software seats to humans — is collapsing
            because AI agents don't need seats. They need APIs.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p style={{ fontSize: 17, color: C.dim, lineHeight: 1.75, marginBottom: 40, maxWidth: 640 }}>
            The future is you talking to your agent. It handles your banking, healthcare,
            taxes, everything. No apps. No dashboards. Just conversation.
            But that future has a prerequisite: <span style={{ color: C.white, fontWeight: 700 }}>the AI has to understand your language.</span>
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div style={{
            padding: 28, borderRadius: 16, border: `1px solid ${C.orange}22`,
            background: `linear-gradient(135deg, ${C.card} 0%, rgba(224,125,56,0.05) 100%)`,
          }}>
            <div style={{ fontSize: 15, color: C.orange, fontWeight: 700, marginBottom: 12 }}>The gap no one is talking about</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { q: "Can an agent manage your M-Pesa in Kinyarwanda?", a: "No." },
                { q: "Can a farmer in rural Kenya ask a health question in Swahili and get a voice response?", a: "No." },
                { q: "Can any voice AI handle the 2,000+ languages spoken across Africa?", a: "Almost none." },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
                  <span style={{ fontSize: 14, color: C.dim, flex: 1 }}>{item.q}</span>
                  <span style={{ fontSize: 14, fontWeight: 800, color: C.red, fontFamily: "'JetBrains Mono', monospace", minWidth: 80 }}>{item.a}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Platform comparison */}
        <FadeIn delay={0.3}>
          <div style={{ marginTop: 40 }}>
            <div style={{ fontSize: 13, color: C.dimmer, marginBottom: 16, fontWeight: 600 }}>African language support by platform</div>
            {[
              { name: "Amazon Polly", af: 1, total: 30 },
              { name: "ElevenLabs", af: 2, total: 32 },
              { name: "Microsoft", af: 3, total: 60 },
              { name: "Google TTS", af: 5, total: 50 },
              { name: "Ijwi AI (target)", af: 25, total: 25, isUs: true },
            ].map((p, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <div style={{ width: 100, fontSize: 12, fontWeight: 600, color: p.isUs ? C.orange : C.dimmer, textAlign: "right", fontFamily: "'JetBrains Mono', monospace" }}>{p.name}</div>
                <div style={{ flex: 1, height: 20, borderRadius: 4, backgroundColor: C.card, overflow: "hidden", position: "relative" }}>
                  <div style={{
                    height: "100%", borderRadius: 4, width: `${(p.af / p.total) * 100}%`,
                    backgroundColor: p.isUs ? C.orange : C.dimmer, transition: "width 1.5s ease",
                    minWidth: p.af > 0 ? 24 : 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: p.isUs ? C.bg : C.dim }}>{p.af}</span>
                  </div>
                </div>
                <div style={{ width: 28, fontSize: 11, fontWeight: 700, color: p.isUs ? C.orange : C.dimmer, fontFamily: "'JetBrains Mono', monospace" }}>/{p.total}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ═══ INFRASTRUCTURE ═══ */}
      <section id="infrastructure" style={{
        padding: "80px 24px", backgroundColor: C.bgSub,
        borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`,
      }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <FadeIn>
            <SectionLabel color={C.teal}>What We're Building</SectionLabel>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800, marginBottom: 12, letterSpacing: "-0.02em" }}>
              Not an app. Infrastructure.
            </h2>
            <p style={{ fontSize: 16, color: C.dim, maxWidth: 560, lineHeight: 1.7, marginBottom: 48 }}>
              We're building the voice layer that every AI agent needs to operate in African languages.
              Open-source ASR, TTS, and translation APIs — the missing middleware for a continent of 1.4 billion people.
            </p>
          </FadeIn>

          {/* Terminal mockup */}
          <FadeIn delay={0.15}>
            <div style={{
              backgroundColor: "#0C0D0E", borderRadius: 14, border: `1px solid ${C.border}`,
              overflow: "hidden", marginBottom: 40,
            }}>
              <div style={{ padding: "10px 16px", borderBottom: `1px solid ${C.border}`, display: "flex", gap: 6, alignItems: "center" }}>
                <div style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: "#FF5F56" }} />
                <div style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: "#FFBD2E" }} />
                <div style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: "#27CA40" }} />
                <span style={{ fontSize: 11, color: C.dimmer, marginLeft: 8, fontFamily: "'JetBrains Mono', monospace" }}>ijwi-api</span>
              </div>
              <div style={{ padding: "20px 20px 24px" }}>
                <TerminalLine prompt="$" command={"curl -X POST https://api.ijwi.ai/v1/asr \\"} delay={0} />
                <TerminalLine prompt=" " command={'  -F "audio=@farmer_question.wav" \\'} delay={0.1} />
                <TerminalLine prompt=" " command='  -F "language=rw"' delay={0.2} />
                <div style={{ height: 12 }} />
                <TerminalLine prompt="→" command="" output={'{ "text": "Ndashaka kumenya igiciro cy\u2019ibirayi", "confidence": 0.94 }'} delay={0.4} />
                <div style={{ height: 16 }} />
                <TerminalLine prompt="$" command={"curl -X POST https://api.ijwi.ai/v1/tts \\"} delay={0.6} />
                <TerminalLine prompt=" " command={'  -d \'{"text": "Igiciro ni amafaranga 500 kuri kilo", "language": "rw"}\''} delay={0.7} />
                <div style={{ height: 12 }} />
                <TerminalLine prompt="→" command="" output="✓ audio/wav — 2.3s — Kinyarwanda (Standard)" delay={0.9} />
              </div>
            </div>
          </FadeIn>

          {/* Flow diagram */}
          <FadeIn delay={0.2}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0, flexWrap: "wrap", marginBottom: 48 }}>
              {[
                { icon: "🗣️", label: "Speaker", sub: "Kinyarwanda" },
                { icon: "→", isArrow: true },
                { icon: "🎙️", label: "Ijwi ASR", sub: "/v1/asr", highlight: true },
                { icon: "→", isArrow: true },
                { icon: "🤖", label: "AI Agent", sub: "Claude / GPT / etc" },
                { icon: "→", isArrow: true },
                { icon: "🔊", label: "Ijwi TTS", sub: "/v1/tts", highlight: true },
                { icon: "→", isArrow: true },
                { icon: "👂", label: "Speaker", sub: "Hears answer" },
              ].map((item, i) => item.isArrow ? (
                <div key={i} style={{ fontSize: 18, color: C.dimmer, padding: "0 6px" }}>→</div>
              ) : (
                <div key={i} style={{
                  textAlign: "center", padding: "14px 12px", minWidth: 80,
                  backgroundColor: item.highlight ? `${C.orange}11` : "transparent",
                  border: item.highlight ? `1px solid ${C.orange}33` : "1px solid transparent",
                  borderRadius: 10,
                }}>
                  <div style={{ fontSize: 22, marginBottom: 4 }}>{item.icon}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: item.highlight ? C.orange : C.white }}>{item.label}</div>
                  <div style={{ fontSize: 10, color: C.dimmer, fontFamily: item.sub?.startsWith("/") ? "'JetBrains Mono', monospace" : "inherit" }}>{item.sub}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Three pillars */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
            {[
              { icon: "🎙️", title: "Speech-to-Text", desc: "Whisper fine-tuned for African languages. <15% WER on Kinyarwanda. Every agent needs ears.", color: C.orange },
              { icon: "🔊", title: "Text-to-Speech", desc: "VITS/MMS models producing natural African language speech. Every agent needs a voice.", color: C.teal },
              { icon: "🔄", title: "Translation API", desc: "Real-time translation between African languages and English/French. The bridge between worlds.", color: C.gold },
            ].map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{
                  padding: 24, backgroundColor: C.card, borderRadius: 14,
                  border: `1px solid ${C.border}`, height: "100%",
                }}>
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{p.icon}</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: p.color, marginBottom: 8 }}>{p.title}</div>
                  <div style={{ fontSize: 13, color: C.dim, lineHeight: 1.6 }}>{p.desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ THE QUOTE ═══ */}
      <section style={{ padding: "80px 24px", textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ fontSize: "clamp(20px, 3.2vw, 30px)", fontWeight: 300, fontStyle: "italic", lineHeight: 1.6, color: C.dim, marginBottom: 20 }}>
            "The notion that business applications will continue to exist is silly.
            They all will collapse in this agent era because they're essentially
            just databases with a bunch of business logic."
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.white }}>Satya Nadella</div>
          <div style={{ fontSize: 12, color: C.dimmer }}>CEO, Microsoft · December 2024</div>
          <div style={{ marginTop: 24, padding: "12px 20px", display: "inline-block", borderRadius: 10, backgroundColor: C.card, border: `1px solid ${C.border}` }}>
            <span style={{ fontSize: 13, color: C.orange, fontWeight: 600 }}>14 months later: $1 trillion in SaaS market cap erased</span>
          </div>
        </FadeIn>
      </section>

      {/* ═══ MARKET ═══ */}
      <section style={{ padding: "80px 24px", backgroundColor: C.bgSub, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <FadeIn>
            <SectionLabel color={C.gold}>The Market</SectionLabel>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(24px, 3.5vw, 34px)", fontWeight: 800, marginBottom: 40, letterSpacing: "-0.02em" }}>
              The numbers that matter
            </h2>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14 }}>
            {[
              { value: <AnimCount target={67} prefix="$" suffix="B" />, label: "African mobile money by 2030", color: C.gold },
              { value: "89%", label: "USSD-only (no voice option)", color: C.red },
              { value: <AnimCount target={1400} suffix="M" />, label: "People across Africa", color: C.white },
              { value: <AnimCount target={2000} suffix="+" />, label: "African languages", color: C.orange },
              { value: "<10", label: "Supported by any voice AI", color: C.red },
              { value: "0", label: "Full-featured voice agents in African languages", color: C.red },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div style={{
                  padding: 22, backgroundColor: C.card, borderRadius: 12,
                  border: `1px solid ${C.border}`, textAlign: "center",
                }}>
                  <div style={{ fontSize: 28, fontWeight: 800, fontFamily: "'Syne', sans-serif", color: s.color, marginBottom: 6 }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: C.dim, lineHeight: 1.4 }}>{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LANGUAGES ═══ */}
      <section id="languages" style={{ padding: "80px 24px", maxWidth: 820, margin: "0 auto" }}>
        <FadeIn>
          <SectionLabel color={C.teal}>Languages</SectionLabel>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(24px, 3.5vw, 34px)", fontWeight: 800, marginBottom: 40 }}>
            Starting with two. Scaling to all.
          </h2>
        </FadeIn>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {LANGS.map((l, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div style={{
                display: "flex", alignItems: "center", gap: 14, padding: "16px 18px",
                backgroundColor: C.card, borderRadius: 12, border: `1px solid ${C.border}`,
                opacity: l.status === "Soon" ? 0.45 : 1,
              }}>
                <span style={{ fontSize: 28 }}>{l.flag}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                    <span style={{ fontSize: 15, fontWeight: 700 }}>
                      {l.name} <span style={{ fontSize: 12, fontWeight: 400, color: C.dim }}>· {l.speakers}</span>
                    </span>
                    <span style={{
                      fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 4,
                      fontFamily: "'JetBrains Mono', monospace",
                      color: l.status === "Active" ? C.green : l.status === "Collecting" ? C.gold : C.dimmer,
                      backgroundColor: l.status === "Active" ? `${C.green}15` : l.status === "Collecting" ? `${C.gold}15` : `${C.dimmer}15`,
                    }}>{l.status}</span>
                  </div>
                  <div style={{ height: 5, borderRadius: 3, backgroundColor: C.bg }}>
                    <div style={{ height: "100%", borderRadius: 3, backgroundColor: C.orange, width: `${l.pct}%`, transition: "width 1.5s ease" }} />
                  </div>
                </div>
                <div style={{ fontSize: 14, fontWeight: 800, color: C.orange, minWidth: 36, textAlign: "right", fontFamily: "'JetBrains Mono', monospace" }}>{l.pct}%</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══ IJWI COLLECT ═══ */}
      <section id="collect" style={{
        padding: "80px 24px", backgroundColor: C.bgSub,
        borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`,
      }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <FadeIn>
            <SectionLabel color={C.orange}>Introducing</SectionLabel>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800, marginBottom: 12 }}>
              Ijwi Collect
            </h2>
            <p style={{ fontSize: 16, color: C.dim, maxWidth: 520, lineHeight: 1.7, marginBottom: 40 }}>
              A gamified app that turns voice contributions into a movement. Record speech in your
              language, compete on leaderboards, earn badges — and help build the voice infrastructure
              Africa needs for the agent era.
            </p>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 12 }}>
            {[
              { icon: "🎙️", title: "Record", desc: "Read prompts or speak freely. 15 seconds per clip. Your voice trains the models." },
              { icon: "🔥", title: "Streaks & XP", desc: "Daily goals, streak tracking, and XP that levels you up as you contribute more." },
              { icon: "🏆", title: "Leaderboards", desc: "Global, country, and city rankings. Kigali vs Nairobi vs Lagos vs Brussels." },
              { icon: "⭐", title: "13 Badges", desc: "From First Voice to Community Legend. Unlock achievements as you build Africa's voice data." },
              { icon: "🎯", title: "Challenges", desc: "Time-limited community competitions. Healthcare Heroes. Swahili Sunday. Kigali Sprint." },
              { icon: "👨‍👩‍👧", title: "Family Threads", desc: "Async voice messages across generations. Grandma records in Kigali, family listens in Brussels." },
            ].map((f, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div style={{
                  padding: 22, backgroundColor: C.card, borderRadius: 12,
                  border: `1px solid ${C.border}`, textAlign: "center", height: "100%",
                }}>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{f.icon}</div>
                  <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 6 }}>{f.title}</div>
                  <div style={{ fontSize: 12, color: C.dim, lineHeight: 1.5 }}>{f.desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div style={{
              marginTop: 32, padding: 28, borderRadius: 14, textAlign: "center",
              border: `1px dashed ${C.orange}33`, backgroundColor: `${C.orange}06`,
            }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: C.orange, marginBottom: 4 }}>📱 React Native · iOS & Android · Coming Q2 2026</div>
              <div style={{ fontSize: 13, color: C.dim }}>Built with Expo + Supabase · Open source</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ FLYWHEEL ═══ */}
      <section style={{ padding: "80px 24px", maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <FadeIn>
          <SectionLabel color={C.orange}>The Flywheel</SectionLabel>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(24px, 3.5vw, 34px)", fontWeight: 800, marginBottom: 40 }}>
            Data → Models → Agents → Impact → More Data
          </h2>
        </FadeIn>

        <div style={{ display: "flex", flexDirection: "column", gap: 0, alignItems: "center" }}>
          {[
            { step: "01", title: "Contributors record speech", desc: "Gamified app collects hours of African language audio", color: C.orange },
            { step: "02", title: "We train ASR & TTS models", desc: "Whisper + VITS fine-tuned on real African speech data", color: C.teal },
            { step: "03", title: "Models power voice APIs", desc: "Any agent can now hear and speak African languages", color: C.gold },
            { step: "04", title: "Agents serve 1B+ people", desc: "Voice banking, healthcare, education — in your language", color: C.green },
            { step: "05", title: "Usage drives more collection", desc: "More speakers see the impact → more contributions", color: C.orange },
          ].map((s, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 6 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 20, border: `2px solid ${s.color}44`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 800, color: s.color, fontFamily: "'JetBrains Mono', monospace",
                  flexShrink: 0,
                }}>{s.step}</div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: C.white }}>{s.title}</div>
                  <div style={{ fontSize: 12, color: C.dim }}>{s.desc}</div>
                </div>
              </div>
              {i < 4 && <div style={{ width: 2, height: 20, backgroundColor: C.border, marginLeft: 19 }} />}
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══ ESETHU GOVERNANCE ═══ */}
      <section style={{
        padding: "80px 24px", backgroundColor: C.bgSub,
        borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`,
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <FadeIn>
            <SectionLabel color={C.gold}>Data Governance</SectionLabel>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(24px, 3.5vw, 34px)", fontWeight: 800, marginBottom: 12 }}>
              African data, African rules
            </h2>
            <p style={{ fontSize: 15, color: C.dim, lineHeight: 1.7, marginBottom: 32, maxWidth: 500 }}>
              All speech data follows the Esethu Framework — ensuring African communities own and benefit from their linguistic data.
            </p>
          </FadeIn>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { icon: "✅", text: "Free for African researchers and organizations", color: C.teal },
              { icon: "💰", text: "Commercially licensed for non-African companies", color: C.gold },
              { icon: "🔄", text: "Revenue reinvested into more African language data", color: C.orange },
              { icon: "🔒", text: "Speaker data anonymized — IDs only, no names stored", color: C.white },
              { icon: "📜", text: "Informed consent required before any recording", color: C.white },
            ].map((r, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div style={{
                  display: "flex", alignItems: "center", gap: 12, padding: "12px 16px",
                  backgroundColor: C.card, borderRadius: 9, border: `1px solid ${C.border}`,
                }}>
                  <span style={{ fontSize: 18 }}>{r.icon}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: r.color }}>{r.text}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ECOSYSTEM ═══ */}
      <section style={{ padding: "60px 24px", maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <FadeIn>
          <div style={{ fontSize: 13, color: C.dimmer, fontWeight: 600, marginBottom: 20 }}>Building alongside</div>
          <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap", marginBottom: 24 }}>
            {["Masakhane", "Digital Umuganda", "Mbaza NLP", "Mozilla Common Voice"].map((p, i) => (
              <span key={i} style={{ fontSize: 13, fontWeight: 600, color: C.dim }}>{p}</span>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            {["Whisper", "Meta MMS", "VITS", "FastAPI", "React Native", "Supabase", "Python"].map((t, i) => (
              <span key={i} style={{
                fontSize: 11, fontWeight: 600, color: C.dimmer, padding: "5px 12px",
                borderRadius: 5, border: `1px solid ${C.border}`, fontFamily: "'JetBrains Mono', monospace",
              }}>{t}</span>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ═══ WAITLIST ═══ */}
      <section id="waitlist" style={{
        padding: "100px 24px", textAlign: "center",
        background: `radial-gradient(ellipse at 50% 100%, ${C.orangeGlow} 0%, transparent 50%), ${C.bgSub}`,
        borderTop: `1px solid ${C.border}`,
      }}>
        <FadeIn>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 4.5vw, 44px)", fontWeight: 800, marginBottom: 12 }}>
            Lend your voice
          </h2>
          <p style={{ fontSize: 15, color: C.dim, maxWidth: 460, margin: "0 auto 28px", lineHeight: 1.6 }}>
            The agent revolution shouldn't leave a continent behind.
            Join the waitlist — whether you speak Kinyarwanda, Swahili, Yorùbá, or any African language.
          </p>
        </FadeIn>

        {!submitted ? (
          <form onSubmit={handleWaitlist}
            style={{ display: "flex", gap: 10, maxWidth: 420, margin: "0 auto", flexWrap: "wrap", justifyContent: "center" }}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com" required
              style={{
                flex: 1, minWidth: 220, padding: "13px 16px", borderRadius: 9,
                border: `1px solid ${C.border}`, backgroundColor: C.card, color: C.white,
                fontSize: 14, fontFamily: "'Outfit', sans-serif", outline: "none",
              }} />
            <button type="submit" disabled={submitting} style={{
              padding: "13px 24px", borderRadius: 9, border: "none",
              backgroundColor: submitting ? C.dimmer : C.orange, color: C.bg, fontSize: 14,
              fontWeight: 700, cursor: submitting ? "wait" : "pointer", fontFamily: "'Outfit', sans-serif",
              transition: "background-color 0.2s",
            }}>{submitting ? "Joining..." : "Join Waitlist →"}</button>
          </form>
        ) : (
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 24px",
            backgroundColor: `${C.teal}15`, borderRadius: 10, border: `1px solid ${C.teal}33`,
          }}>
            <span style={{ fontSize: 20 }}>🎉</span>
            <span style={{ fontSize: 15, fontWeight: 700, color: C.teal }}>You're on the list.</span>
          </div>
        )}
        <div style={{ marginTop: 16, fontSize: 12, color: C.dimmer }}>No spam. Just a launch notification.</div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{
        padding: "40px 24px", display: "flex", justifyContent: "space-between", alignItems: "center",
        maxWidth: 820, margin: "0 auto", flexWrap: "wrap", gap: 12,
      }}>
        <div>
          <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 16, fontWeight: 800 }}>
            ijwi<span style={{ color: C.orange }}>.</span>ai
          </div>
          <div style={{ fontSize: 11, color: C.dimmer }}>Voice infrastructure for Africa · Open source · MIT</div>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          {[
            { label: "GitHub", url: "https://github.com/adiking4804/ijwi-ai" },
            { label: "Masakhane", url: "https://masakhane.io" },
            { label: "Contact", url: "mailto:awadi@ijwi-ai.com" },
          ].map((l, i) => (
            <a key={i} href={l.url} target="_blank" style={{ fontSize: 12, fontWeight: 500, color: C.dim }}>{l.label}</a>
          ))}
        </div>
      </footer>
      <div style={{ textAlign: "center", padding: "12px 24px 28px", fontSize: 11, color: C.dimmer }}>
        © 2026 Ijwi AI · Built in Belgium 🇧🇪 for Africa 🌍
      </div>
    </div>
  );
}
