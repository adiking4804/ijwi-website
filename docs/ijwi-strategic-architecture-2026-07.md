# Ijwi AI — Strategic Architecture (July 2026)

**One-line thesis:** Africa's daily life runs on voice, trust, and relationships; the AI economy runs on structured data. Ijwi turns everyday African-language voice — starting with family conversations — into the missing data layer for language survival, business records, and economic access.

**The through-line (every section hangs off this chain):**

```
Family Voice Threads (emotional wedge)
        │  produces
Consented conversational Kinyarwanda/Kiswahili (data moat)
        │  enables
First Kinyarwanda TTS + conversational ASR (technical firsts)
        │  powers
Voice agents & API revenue (monetization)
        │  funds & extends into
Informal-economy voice infrastructure (WhatsApp ledgers, mobile money by voice)
        │  matures into
Credit-ready profiles & economic inclusion (endgame)
        │
Trust, consent & ownership = the license to operate the entire chain
```

Facts marked **[verified]** come from `competitor-research-2026-06.md` (35 claims, 3-vote adversarial verification). Everything else is strategy, not evidence.

---

## 1. Family Voice Threads — the emotional wedge

**The problem no competitor touches:** every African voice AI company (Intron, Botlhale, Spitch, Lelapa, AethexAI) is B2B/enterprise. Zero use family, heritage, or diaspora framing — **[verified]** textually on their product pages. Meanwhile millions of diaspora parents live the founder's story: *"My son was born in Belgium. He doesn't speak Kinyarwanda."*

**The product:** a private, WhatsApp-familiar voice thread connecting generations across continents.

- Grandmother in Kigali sends a voice note — a proverb, a bedtime story, the names of foods — exactly the way she already talks to family.
- Ijwi turns her words into prompts, pronunciation guides, and family challenges.
- The grandchild in Brussels answers; pronunciation feedback and XP make it a game; the family keeps the thread.

**Why it's the right wedge:**

1. **Emotion beats utility for acquisition.** Language loss is felt as grief. No "learn a language" value prop competes with "your mother's voice teaching your daughter."
2. **It generates exactly the data nobody has** (§2): spontaneous, emotional, multi-generational, code-switching conversation — not read sentences.
3. **Both sides are motivated.** The elder wants to be heard; the parent wants transmission; the child gets a game. Contribution isn't a favor (Common Voice's volunteer model) or a gig (Intron's paid contributors) — it's love with a byproduct.
4. **The diaspora pays.** Belgian/European diaspora households have EUR purchasing power and acute motivation — a consumer subscription is viable where in-market consumer pricing wouldn't be.

**Wedge discipline:** family threads are the *first* product, not the company. The company is voice infrastructure; the wedge earns the data, the trust, and the story.

## 2. The African-language conversational data moat

**The verified asymmetry:**

- 2,384 hours of *read* Kinyarwanda speech exist publicly (Common Voice cv-corpus-25.0) — already scraped, already powering Google's Kinyarwanda ASR **[verified]**.
- **Zero hours of conversational Kinyarwanda or Kiswahili in any public corpus on Earth** — checked against Mozilla Spontaneous Speech 3.0 and African Next Voices **[verified]**.
- **No Kinyarwanda TTS product exists from any vendor, big or small**; ~14h of public Kinyarwanda TTS-grade corpus; total public African TTS data is 334h across 11 languages vs 6,080h for ASR **[verified]**.

**Why conversational data is the prize:** read speech trains transcription. Conversation — turn-taking, emotion, disfluencies, code-switching, child speech, elder speech — is what voice *agents* and natural TTS need. Everyone fishing in the same open corpora gets the same commodity models.

**Why ours compounds and can't be copied:**

1. **It cannot be scraped** — it's private family audio, gathered with consent, under our license.
2. **It compounds daily** — every active thread is a data annuity; corpus growth scales with love, not contractor budgets.
3. **It's self-labeling** — threads produce natural pairs (prompt → repetition → correction), pronunciation scores, and family-provided translations; the gamification layer *is* the annotation layer.
4. **It's demographically unique** — elder voices and child voices are nearly absent from every existing corpus; family threads capture both, plus the diaspora accent spectrum.

**Moat maintenance rules** (from the verified messaging-threats list):
- Never anchor claims on language counts — those erode quarterly. Anchor on **conversational hours, Kinyarwanda TTS, and family framing**.
- "Data sovereignty" alone is no longer differentiating (Google-backed WAXAL claims it institutionally **[verified]**) — our claim is **personal and family-level ownership**, which no institution-scale program can offer.
- North-star metric: **consented conversational hours** (by language, by speaker generation), not user counts.

## 3. Informal-economy expansion — the voice layer for daily life

**Framing:** Africa's informal economy is not an edge case; it is the operating system of daily commerce. Market sellers, shopkeepers, farmers, drivers, momo agents, salons, tailors, food vendors are the primary users — not "low-end" versions of formal SMEs.

**The bridge from family to economy:** the same capabilities the family wedge builds — conversational ASR in Kinyarwanda/Kiswahili, trust, consent infrastructure, voice-first UX — are exactly what voice-first business tools need. The family product de-risks the technology; the informal economy scales it.

**Product wedges, in order:**

1. **Ijwi Business Notes** — voice-first micro-ERP. She says *"I sold 12 crates. Jean paid half. 3 bags left"*; Ijwi writes sales, receivable, inventory. **No accounting language, ever** — users speak life, the system maps to ledger categories silently.
2. **Voice Ledger for Farmers** — eggs, feed, mortality, sales, reminders (natural fit with existing poultry-dashboard domain knowledge).
3. **WhatsApp AI Shop Assistant** — customer replies, order tracking, payment reminders, daily report.
4. **Credit-ready Business Profile** — only after value is proven, only with explicit consent (§5).

**Market anchor:** Africa's mobile money market reaches **$67B by 2030**, and almost none of it can be operated by voice in the languages its users speak.

**Non-negotiables** (standing rules): no poverty imagery; design voice/WhatsApp flows first and dashboards never-first; no credit-scoring claims without consent flows and a compliance review; practical utility language over AI hype.

## 4. Voice notes / WhatsApp / mobile money — concrete workflows

Meet commerce in the channels it already lives in. No new app habits for the business user.

**W1 — Daily voice bookkeeping (WhatsApp):**
```
18:40  Seller → Ijwi number (voice, Kinyarwanda, 0:22):
       "Nagurishije amakarito 12… Jean yishyuye kimwe cya kabiri…"
18:40  Ijwi → Seller (voice + text, Kinyarwanda):
       "Byanditswe: Ibyagurishijwe 12 × ikarito. Jean: ideni rya 6.000 RWF.
        Stock: imifuka 3. Wifuza kwibutswa Jean ejo?"        [Yego] [Oya]
```
Every exchange: business record for her, consented conversational audio for the corpus (opt-in, separate from the record-keeping consent).

**W2 — Debt & reminder loop:** "Who owes you money?" asked once a day; Ijwi maintains the receivables list and drafts polite reminder voice notes the seller can forward — the seller always presses send, Ijwi never messages her customers directly.

**W3 — Weekly report as a shareable object:** Friday voice summary + a simple image card (sales, spend, profit estimate, top debtor, low stock). Success signal: she forwards it to someone — that's organic distribution.

**W4 — Mobile money reconciliation (partner phase):** momo confirmation SMS/notifications matched against spoken sales ("Jean paid half" ↔ MoMo receipt) → the beginning of verified income history. Requires telco/momo partnership; do not build speculatively.

**W5 — Family thread (in-app, today):** grandmother's voice note → lesson → child's reply → feedback chip → thread system-note showing the family what their exchange contributed. The app (not WhatsApp) owns this loop because it needs recording UX, gamification, and consent surfaces WhatsApp can't provide.

**Channel rules:** WhatsApp Business API for business workflows (session-window and template constraints respected; voice notes are the primary medium, text always mirrored for accessibility). IVR/basic-phone fallback is a later accessibility layer, not MVP.

## 5. Consent, privacy, trust, and data ownership

Trust is not a feature; it is the license for the entire chain. Informal businesses fear taxes, scams, surveillance, and debt collectors; families are sharing children's voices. One breach of either kills the moat.

**Personal layer (the differentiator vs. WAXAL-style institutional ownership):**
- **Explicit consent before anything is shared** — recording for your family and contributing to the corpus are *separate* consents; corpus consent is per-thread, revocable, and never bundled.
- **Delete means delete** — revocation cascades: clip removed from storage, corpus, and training sets at next scheduled retrain; a consent ledger (append-only) records grant/revoke events per clip.
- **Family threads are private by default** — E2E-encrypted transport, encrypted at rest; family audio is never public, never sold raw; only consented, de-identified clips enter the corpus.
- **Children:** guardian consent, no public exposure of child voices, no child voice cloning, ever.
- **GDPR is a feature, not a burden** — Belgian/EU diaspora users are data subjects; building GDPR-native (data minimization, purpose limitation, export, erasure) becomes a trust asset in African markets too.

**Community layer (Esethu-aligned):**
- Built on the **Esethu Framework** (peer-reviewed African data governance, ACL 2025) — always "built on," never implied authorship; Esethu is Lelapa AI et al.'s work **[verified]**.
- Free access for African researchers and universities; commercial licensing for everyone else; revenue reinvested in contributor communities.
- **Featured Voices revenue share:** when a contributor's voice powers a TTS voice or lesson pack, the contributor participates in revenue. Contract, not promise.

**Business-user layer:**
- Records belong to the seller. No lender, cooperative, or authority sees anything without her explicit, per-recipient consent (§3.4).
- No surveillance analytics on business data; aggregates only ever with opt-in.

## 6. Product roadmap

Current state (July 2026): learning/contribution app pre-launch — 107+ voice prompts, Kinyarwanda + Kiswahili, 10 lesson categories, offline mode, 13 badges, 56 automated tests. Website live with waitlist (Supabase), EN/FR/NL.

**Phase 1 — Launch the wedge (Q3 2026)**
- Ship app v1: lessons + contribution + **Family Voice Threads MVP** (create thread, voice notes → prompts, pronunciation feedback, XP, thread system-notes showing contribution impact).
- Consent stack v1: separate lesson/corpus consents, deletion flow, consent ledger.
- Beachhead: Rwandan diaspora in Belgium (founder's own network; FR/NL site already speaks to them).
- Exit criteria: 100 weekly-active families, first 50 hours of consented conversational Kinyarwanda.

**Phase 2 — Data engine (Q4 2026)**
- Processing pipeline hardened (§10): VAD → ASR-assisted transcription → human-in-the-loop review by paid native reviewers → quality scoring → corpus.
- Fine-tune Kinyarwanda ASR on Common Voice 2,384h + our conversational data; measure WER on conversational held-out set (the benchmark nobody else can even run).
- Esethu-aligned data license published; first research-access partnership with an African university.
- Exit criteria: 250 conversational hours; conversational WER meaningfully better than Google/Whisper baselines on our test set.

**Phase 3 — The first Kinyarwanda TTS (H1 2027)**
- Studio-quality "Featured Voices" recording program (grandmother voices first — emotionally and technically the flagship).
- Train and ship **the world's first Kinyarwanda TTS voice** **[verified white space]** — in-app first (lessons speak), then API waitlist.
- PR moment + defensibility milestone in one.

**Phase 4 — Business Notes + API early access (H2 2027)**
- Ijwi Business Notes pilot on WhatsApp (§7 Pilot B) in Kigali.
- API early access: conversational Kinyarwanda/Kiswahili ASR + Kinyarwanda TTS, usage-priced (Spitch-style pricing reference: TTS ~$0.0014/s, STT ~$0.00042/s **[verified]**).
- Second diaspora corridor (Kiswahili: UK/US ↔ East Africa).

**Phase 5 — Economic infrastructure (2028)**
- Credit-ready profiles with 1–2 partner institutions (SACCO/MFI), consent-gated, compliance-reviewed.
- Mobile money voice workflows with a telco/momo partner.
- Language expansion beyond rw/sw chosen by diaspora demand signals, not by count-chasing.

## 7. Pilot roadmap

**Pilot A — Family Threads (Q3 2026, 30 days, Belgium ↔ Rwanda)**
- 25 diaspora families, 3 generations where possible; recruited from waitlist + founder network.
- Measure: threads/family/week, minutes of consented conversational audio, D30 family retention, qualitative "grief-to-joy" interviews.
- Success signals: ≥60% of families active in week 4; ≥3 hours consented audio; ≥5 families recruit another family unprompted.

**Pilot B — Informal-economy voice ledger (Q1 2027, 7 days, Kigali, WhatsApp)**
- 10 participants: 3 market sellers, 2 small shop owners, 2 farmers/poultry operators, 1 hairdresser/tailor, 1 mobile-money agent, 1 food vendor.
- Daily prompts (voice, Kinyarwanda): What did you sell today? What did you spend money on? Who owes you money? What stock is low? What problem did you have today?
- Outputs delivered back: daily business summary, simple profit estimate, stock alert, debt reminder, weekly report card.
- Success signal (the only one that matters): **they ask for tomorrow's reminder, or share the report with someone else.**
- Wizard-of-Oz allowed behind the scenes (human-in-the-loop parsing) — pilot tests demand, not models.

**Pilot C — TTS listening test (H1 2027, alongside Phase 3)**
- Families rate the first Kinyarwanda TTS voice for naturalness (MOS) and emotional acceptability ("would you let this voice read to your child?") — a bar no generic TTS benchmark captures.

Each pilot feeds the next: A proves the wedge and the corpus, B proves economic demand, C proves the technical first.

## 8. Investor narrative

**The story (in the order investors hear it):**

1. **Founder-market fit that can't be faked:** "My son was born in Belgium. He doesn't speak Kinyarwanda. So I built the thing that fixes it." Diaspora founder, lived problem, existing distribution into the beachhead community.
2. **Problem:** 2,000+ African languages; Google can transcribe Kinyarwanda but still can't speak it **[verified]**; the informal economy — the actual operating system of African commerce — has no voice-native software.
3. **Insight:** the data everyone needs (conversation) can't be bought or scraped — but it can be *given*, inside families, with consent, if the product gives love back.
4. **Product:** Family Voice Threads (live wedge) → voice infrastructure (API) → informal-economy workflows.
5. **Moat:** zero public conversational rw/sw hours anywhere **[verified]**; our corpus is consented, compounding, self-labeling, and demographically unique (elders + children). First Kinyarwanda TTS is an ownable, dated milestone.
6. **Market:** consumer diaspora subscriptions now; voice API next; the $67B-by-2030 mobile money economy as the endgame surface.
7. **Competition:** all six funded players are B2B/enterprise; none touch consumer, diaspora, or family **[verified]**. AethexAI raised $3M pre-seed (Jun 2026) for African-accented *English/French/Arabic* call centers — capital is validating the space while leaving our lane empty **[verified]**.
8. **Why now:** models became cheap to fine-tune; WAXAL/ANV prove institutions will fund African speech data but their licenses exclude TTS/cloning or their languages exclude rw/sw **[verified]** — the consumer-consented lane is open and time-limited.
9. **Traction to cite:** shipped app (offline-capable, tested), live multilingual site, waitlist, [Pilot A results when available]. Update this line every quarter.
10. **Use of funds:** Phase 1–3 (wedge launch → data engine → TTS first) ≈ 18 months.

**Narrative discipline:**
- Never claim "no one supports African languages" — it's false and checkable **[verified]**. Claim the *conversational* and *TTS* and *family* gaps, which are verified.
- Credit Esethu to Lelapa ("built on").
- Expect the Spitch tagline question ("the voice layer for your applications") — answer: they sell plumbing to developers; we own a consumer relationship and a corpus they can't buy **[verified: near-collision noted]**.

## 9. Website messaging

**Live architecture (as deployed July 2026)** — Hero (founder quote → mission → dual CTA) → Language marquee → Problem (2,000+ / <3% / 0) → Solution (Learn + Contribute) → **Family Voice Threads** (CSS phone mockup, thread-to-data system note) → Flywheel → Traction → **Data Moat** (2,384 vs Zero) → **Vision** (informal economy, $67B) → **Trust & Ownership** (personal pills + Esethu cards) → CTA/waitlist. EN/FR/NL at native register (FR *vous*, NL Flemish *je*; "prêter sa voix", "de taal doorgeven").

**Messaging rules (bind all future copy):**
- Verified-claims-only: every number traces to `competitor-research-2026-06.md`; refresh that doc before any claim edit; claims erode quarterly.
- Emotional lead, infrastructure close: family story sells the scroll; the moat + vision sections sell the round.
- One CTA: waitlist. Everything funnels there until launch.
- The phone mockup *is* the product demo — keep it the centerpiece; when threads ship, replace mockup content with a real (consented) thread.

**Per-audience message map:**
- Diaspora parent: "Your family's voice notes become your child's language."
- Native-speaker elder: "Your voice teaches your grandchildren — and builds something for your language."
- Investor: "The only consented conversational corpus in these languages, growing daily, attached to a product families love."
- Future partner (SACCO/telco): "Your customers already talk; we turn it into records you can trust — only when they say so."

**Next site increments:** launch-day switch (waitlist → download), a `/privacy` trust center page (plain-language consent explainer in EN/FR/NL/Kinyarwanda), `/api` developer teaser when Phase 4 nears.

## 10. Technical architecture

*(Current known stack: static site on Vercel + Supabase for waitlist; mobile app is offline-capable with an automated test suite. Items marked "target" are proposals, not current state.)*

**Clients**
- **Mobile app** (family product): offline-first; on-device recording with local queue + background sync; recording states with clear consent affordances; lesson engine consumes thread-derived prompts.
- **WhatsApp gateway** (business product, target): WhatsApp Business Cloud API; voice-note in → transcript + structured event out; template messages for reminders; strict user-initiated-send rule for anything customer-facing.
- **Website**: static, Vercel, Supabase REST for waitlist (as today).

**Backend (target)**
- **Supabase/Postgres** as the spine: auth, families/threads metadata, ledger events (business notes), gamification state.
- **Consent ledger**: append-only table (clip_id, subject, guardian_flag, purpose, granted_at, revoked_at); every downstream artifact carries clip provenance so revocation can cascade.
- **Audio store**: encrypted object storage; raw family audio segregated from consented corpus buckets; EU residency for EU users (GDPR), with Rwanda-region replication evaluated for in-country processing.

**Data pipeline (target, Phase 2)**
```
ingest → VAD/segmentation → language ID (rw/sw/code-switch)
      → ASR draft transcript (fine-tuned Whisper-class model)
      → PII scrub (names/numbers flagged) → paid native-reviewer pass
      → forced alignment → quality score → corpus (Esethu-licensed tiers)
```
- Self-labeling shortcut: thread structure (prompt → child repetition → feedback score) yields aligned pairs without annotation cost.
- Every model eval on a held-out **conversational** test set — the benchmark that differentiates us.

**ML roadmap**
- ASR: fine-tune open checkpoints on CV-rw (2,384h read) + our conversational corpus; target conversational WER nobody else can measure.
- TTS (Phase 3): Featured Voices studio data (consent + revenue-share contracts) → modern low-resource TTS recipe; per-voice consent gating baked into the serving layer (a voice can be revoked like a clip).
- On-device pronunciation scoring stays lightweight (current app already does offline scoring — preserve this).

**API layer (Phase 4, target):** usage-priced ASR/TTS endpoints; per-key licensing tier enforcement (research-free vs commercial) — the Esethu terms enforced in code, not just in PDFs.

**Security/compliance:** E2E transport everywhere, at-rest encryption, audit logs on all corpus access, GDPR DPIA before Pilot A, child-voice policy (no cloning, guardian consent) enforced at schema level (guardian_flag gates training eligibility).

---

## Risks & mitigations (the honest page)

| Risk | Mitigation |
|---|---|
| Cold start: families don't sustain threads | Pilot A before scale; lesson content works standalone; elder-side onboarding via diaspora relative (they set it up on grandma's phone) |
| Audio quality (far-field, noisy markets) | Pipeline quality-scores rather than rejects; noisy conversational audio is *still* the scarcest asset; studio program covers TTS needs |
| WhatsApp policy/pricing shifts | Business product is channel-portable (voice in/summary out); app remains the sovereign channel |
| "Data sovereignty" messaging gets crowded (WAXAL) | Differentiate on personal/family ownership + revenue share; never argue institution vs institution **[verified threat]** |
| Credit product regulatory exposure | No lending claims until consent flows + compliance review done; partner-led, not principal **[standing rule]** |
| Language-count arms race | Don't play it; anchor on conversational hours, TTS firsts, family framing **[verified threat]** |
| Big Tech ships Kinyarwanda TTS first | Speed to Phase 3; even then, conversational corpus + consumer relationship + consent infrastructure remain ours |

## North-star metrics

1. **Consented conversational hours** (by language × speaker generation) — the moat, measured.
2. **Weekly active families** (and % with 3 generations active) — the wedge, measured.
3. **Business pilot retention** ("asked for tomorrow's reminder") — the expansion, measured.
4. Revenue mix over time: subscriptions → API → infrastructure partnerships.
