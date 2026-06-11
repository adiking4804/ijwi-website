# Competitor Research — African-Language Voice AI (June 2026)

Deep-research run (web search fan-out + source fetch + adversarial verification of claims).
35 claims passed 3-vote adversarial verification; key refuted/confirmed findings below drove
the copy changes committed alongside this doc.

## Fact-check of our previous website claims

| Our old claim | Verdict | Evidence |
|---|---|---|
| "Google doesn't even support Kinyarwanda" | **FALSE** | Google Cloud STT V2 supports rw-RW (long/short models); Gboard voice typing since Oct 2022 (built on Digital Umuganda's Common Voice corpus). BUT no Google **TTS** voice for Kinyarwanda → defensible claim is "Google can transcribe it, can't speak it." |
| "0 voice AI products for African languages" | **FALSE** | Intron Sahara v2 (Mar 2026): 23 African languages incl. Kinyarwanda & Swahili ASR, Hausa TTS. Botlhale AI: live ASR/TTS APIs, 12 languages incl. Kinyarwanda (ASR-only) & Swahili (ASR+TTS); customers incl. MTN. Spitch: live priced APIs (Yorùbá, Igbo, Hausa, Amharic, Swahili). Lelapa Vulavula: STT+translation. AethexAI: $3M pre-seed Jun 2026. |
| "<10 African languages supported by any voice AI" | **FALSE** for ASR | Google Cloud STT alone lists ~24 African languages; Intron 23. Still roughly true for TTS per-vendor (max 6 at ElevenLabs). |
| Polly 1 / ElevenLabs 2 / Microsoft 3 / Google 5 African languages | **OUTDATED** | TTS, Jun 2026: Polly **0** indigenous (en-ZA only, of 41 locales); ElevenLabs v3 **6** sub-Saharan (Afrikaans, Chichewa, Hausa, Lingala, Somali, Swahili — no Kinyarwanda) of 74; Azure **5** (Afrikaans, Amharic, Somali, Swahili×2 locales, Zulu) with neural voices; Google TTS ~5. |
| "2,384+ hours of read speech exist" | **CONFIRMED & CURRENT** | Common Voice cv-corpus-25.0 (2026-03-09): Kinyarwanda totalHrs = 2,384.18 (2,001.61 validated, 1,181 contributors). Keep this number. |
| "Zero hours of conversational data" | **NEEDS NARROWING** | Mozilla Spontaneous Speech shipped Q1 2025, but SPS corpus 3.0 (2026-03-09) has **no rw or sw locale** (508h total across 72 locales). African Next Voices: 9,000h spontaneous speech in 17–18 languages — **neither Kinyarwanda nor Kiswahili**. Defensible: "Zero hours of conversational Kinyarwanda or Kiswahili." |
| "Full-featured voice agents in African languages: 0" | **FALSE** | Botlhale ships call-center voicebots in SA languages; AethexAI processes 17k calls/day (African-accented EN/FR/AR). Defensible: "0 voice agents that can speak Kinyarwanda" (no Kinyarwanda TTS product exists anywhere). |

## Competitor map (verified)

**African voice AI startups (all B2B/enterprise — none consumer, none diaspora, none family):**
- **Intron** (Nigeria) — Sahara v2, 57 languages (23 African), 50,000h proprietary paid-contributor data from 40k speakers in 30 countries; healthcare/legal/fintech; planning $3M raise 2026; claims +64% vs Gemini/GPT-4/Whisper on African names.
- **Botlhale AI** (SA) — "AFRICAN SPEECH INTELLIGENCE. ONE API."; ASR+TTS, 12 languages incl. **Kinyarwanda ASR (no TTS)** and Swahili ASR+TTS; SaaS per-agent/per-minute; call centers; MTN, H&M.
- **Spitch** (Nigeria) — "The voice layer for your applications" (⚠ near-collision with our tagline); live usage-priced APIs (TTS $0.0014/s, STT $0.00042/s); Yorùbá/Igbo/Hausa/Amharic/Swahili; no Kinyarwanda.
- **Lelapa AI** (SA) — Vulavula: transcribe + translate only, **no TTS**; pricing $9.99/$49/Enterprise; positioning = resource-efficiency, NOT sovereignty/heritage (verified zero mentions of diaspora/heritage/family/sovereignty on product page). **Authors of the Esethu Framework** (ACL 2025, with Way With Words + DSFSI); only Esethu dataset so far = 10h isiXhosa (ViXSD).
- **Awarri** (Nigeria) — LangEasy crowdsourcing = scripted read speech only.
- **AethexAI** (2025, $3M pre-seed Jun 2026, 4DX Ventures) — enterprise support calls, African-accented English/French/Arabic dialects only; Kora small models (300M–1.7B).

**Data collection initiatives:**
- **Mozilla Common Voice** — Kinyarwanda 2,384h read speech (one of largest CV corpora); Spontaneous Speech mode live since Q1 2025 (CC0, volunteer) but no rw/sw; new home = Mozilla Data Collective.
- **African Next Voices** (Gates $2.2M + Meta) — 9,000h spontaneous speech, 17–18 languages (KE/NG/ZA), paid contributors, open license **but explicitly prohibits TTS/voice-cloning use**; references Esethu + NOODL licensing.
- **WAXAL** (Google-backed, Feb 2026) — 11,000h+, 21 African languages (27 planned), owned by African institutions (incl. **Digital Umuganda**), permissive license incl. commercial; only ~1,250h transcribed, ~20h studio TTS.
- **Digital Umuganda** — now a WAXAL partner with Google-backed scale; its open CV data already powers Google's Kinyarwanda ASR (cautionary tale for open licensing → our Esethu angle).

## Confirmed white space (own these in copy)
1. **Conversational Kinyarwanda + Kiswahili** — zero hours in every spontaneous/conversational corpus checked.
2. **Family/heritage/diaspora framing** — zero competitors use it (verified textually on competitor pages).
3. **Gamified consumer collection** — every rival is volunteer (CV), paid-professional (ANV, Intron), or civic (Digital Umuganda).
4. **Kinyarwanda TTS** — no product voice from any vendor, big or small; only ~14h of public Kinyarwanda TTS corpus exists; total public African TTS data = 334h across 11 languages (vs 6,080h ASR).
5. **Esethu applied to rw/sw** — framework exists (credit Lelapa et al.), but never applied to our languages.

## Messaging threats
- "Data sovereignty" is no longer ours alone — Google/WAXAL claims it with African institutional ownership; differentiate on **personal/family-level ownership** vs institutional.
- Language-count gap claims erode every quarter; anchor copy on **conversational data, Kinyarwanda TTS, and family heritage** instead of raw counts.
- Esethu was created by Lelapa AI (competitor) — always say "built on", never imply authorship.
- Spitch's tagline "The voice layer for your applications" sits close to "The voice layer for Africa."

## Sources (primary)
- cloud.google.com/speech-to-text/docs (STT V2 language table) · blog.google African voice typing
- docs.aws.amazon.com/polly supported-languages · learn.microsoft.com Azure speech language-support
- help.elevenlabs.io language list (Eleven v3) · botlhale.ai/speech-apis + docs-apis.botlhale.xyz
- lelapa.ai / docs.lelapa.ai · docs.spitch.app · techcabal.com (Intron Sahara v2, Mar 2026; landscape Jul 2025)
- commonvoice.mozilla.org datasets (cv-corpus-25.0, sps-corpus-3.0) · mozillafoundation.org Spontaneous Speech
- restofworld.org WAXAL (Feb 2026) · iafrica/theconversation African Next Voices · arXiv:2502.15916 (Esethu) · arXiv:2505.18436 (African speech survey: 61 languages, 8,600h, 334h TTS)
