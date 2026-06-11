// ============================================================
//  PA DMV Study v03 — flashcards.js
//  Full deck from PA Driver's Manual (PUB 95)
//  Images on signal/sign cards; 4-second rule corrected
// ============================================================

const Flashcards = (() => {
  let cards = [], idx = 0, flipped = false;
  let known = new Set(), review = new Set();
  let cId, pId;
  let filterTag = 'all';

  const shuffle = a => [...a].sort(() => Math.random() - .5);

  // img field = path relative to assets/ (optional on any card)
  const ALL_CARDS = [
    // ── SIGNALS ──────────────────────────────────────────────
    {tag:'signals', img:'signs/signals/sig_red_light.png',
     front:'What must you do at a STEADY RED light?',
     back:'Stop completely before the stop line or crosswalk. Do not enter the intersection. Wait for green. Right on red is permitted after a full stop unless NO TURN ON RED is posted.'},
    {tag:'signals', img:'signs/signals/sig_yellow_light.png',
     front:'STEADY YELLOW light — what does it mean?',
     back:'A red light is coming soon. Slow down and prepare to stop. If already in the intersection or unable to stop safely, continue through carefully. Never speed up to beat it.'},
    {tag:'signals', img:'signs/signals/sig_green_light.png',
     front:'STEADY GREEN light — what may you do?',
     back:'Proceed if the intersection is clear. Turn right or left unless a sign prohibits it. Always yield to pedestrians and any vehicles already in the intersection.'},
    {tag:'signals', img:'signs/signals/sig_red_arrow.png',
     front:'STEADY RED ARROW — what must you do?',
     back:'Stop. Do not turn in the arrow\'s direction. Wait for a green arrow or flashing yellow arrow before proceeding.'},
    {tag:'signals', img:'signs/signals/sig_green_arrow.png',
     front:'STEADY GREEN ARROW — what does it mean?',
     back:'Protected turn. Oncoming traffic is stopped by a red light. You may turn in the arrow\'s direction. Still yield to pedestrians in your path.'},
    {tag:'signals', img:'signs/signals/sig_yellow_arrow.png',
     front:'STEADY YELLOW ARROW — what does it mean?',
     back:'The green or flashing yellow arrow phase is ending and will soon turn red. Slow down and prepare to stop completely.'},
    {tag:'signals', img:'signs/signals/sig_flashing_red.png',
     front:'FLASHING RED light — what do you do?',
     back:'Treat it exactly like a STOP sign. Come to a complete stop, then proceed when the way is clear and safe.'},
    {tag:'signals', img:'signs/signals/sig_flashing_yellow.png',
     front:'FLASHING YELLOW light — what do you do?',
     back:'Caution. Slow down and proceed carefully. You do not need to stop.'},
    {tag:'signals', img:'signs/signals/sig_flashing_yellow_arrow.png',
     front:'FLASHING YELLOW ARROW — what does it mean?',
     back:'You may turn in the arrow\'s direction but the turn is NOT protected. You must yield to oncoming traffic and pedestrians — they have a green light.'},
    {tag:'signals', img:'signs/signals/sig_lane_green_arrow_down.png',
     front:'Lane control signal — GREEN ARROW pointing down?',
     back:'You may use this lane.'},
    {tag:'signals', img:'signs/signals/sig_lane_yellow_x.png',
     front:'Lane control signal — YELLOW X?',
     back:'Your lane direction is about to reverse. Move to an adjacent lane immediately.'},
    {tag:'signals', img:'signs/signals/sig_lane_red_x.png',
     front:'Lane control signal — RED X?',
     back:'You may NOT use this lane. Change lanes now.'},
    {tag:'signals', img:'signs/signals/sig_walk.png',
     front:'Pedestrian signal — WALK or walking person symbol?',
     back:'Pedestrians may start crossing. Stay alert for turning vehicles even while WALK is displayed.'},
    {tag:'signals', img:'signs/signals/sig_dont_walk_flashing.png',
     front:'Pedestrian signal — FLASHING DON\'T WALK?',
     back:'If already crossing, finish quickly. If at the curb, do not start. Signal is about to turn steady Don\'t Walk.'},
    {tag:'signals', img:'signs/signals/sig_school_zone_speed.png',
     front:'School zone — speed when yellow lights are flashing?',
     back:'15 mph. Exceeding the school zone limit = 3 points + fine. (PUB 95 Ch. 2)'},
    {tag:'signals', img:'signs/signals/sig_railroad_crossing_gate.png',
     front:'Railroad crossing with flashing red lights and gate — what do you do?',
     back:'Stop. Never drive around gates. Wait until all signals stop and the gate fully rises before proceeding. Check for a second train on additional tracks.'},

    // ── SIGNS — REGULATORY ───────────────────────────────────
    {tag:'signs', img:'signs/regulatory/reg_stop.png',
     front:'What does this sign mean?',
     back:'STOP — Come to a complete stop before the stop line or crosswalk. Yield to all traffic and pedestrians. Slowing without fully stopping is illegal. MUTCD: R1-1'},
    {tag:'signs', img:'signs/regulatory/reg_yield.png',
     front:'What does this sign mean?',
     back:'YIELD — Slow down and give right-of-way to traffic and pedestrians. Stop only if necessary to find a safe gap before entering. MUTCD: R1-2'},
    {tag:'signs', img:'signs/regulatory/reg_do_not_enter.png',
     front:'What does this sign mean?',
     back:'DO NOT ENTER — You cannot enter this road from your direction. Often marks the beginning of one-way streets and highway exit ramps. MUTCD: R5-1'},
    {tag:'signs', img:'signs/regulatory/reg_wrong_way.png',
     front:'What does this sign mean?',
     back:'WRONG WAY — You are traveling in the wrong direction. Pull over safely and turn around. Often paired with Do Not Enter. MUTCD: R5-1a'},
    {tag:'signs', img:'signs/regulatory/reg_no_u_turn.png',
     front:'What does this sign mean?',
     back:'NO U-TURN — U-turns are prohibited at this location. MUTCD: R3-4'},
    {tag:'signs', img:'signs/regulatory/reg_no_turn_on_red.png',
     front:'What does this sign mean?',
     back:'NO TURN ON RED — You may not turn in the indicated direction during a red light. Wait for green. MUTCD: R10-11a'},
    {tag:'signs', img:'signs/regulatory/reg_speed_limit_65.png',
     front:'What does this sign mean?',
     back:'SPEED LIMIT — Maximum speed under ideal conditions. You must drive slower when weather, traffic, or road conditions require it. MUTCD: R2-1'},
    {tag:'signs', img:'signs/regulatory/reg_railroad_crossbuck.png',
     front:'What does this sign mean?',
     back:'RAILROAD CROSSBUCK — Treat as a Yield sign. Slow down and look for trains. Be prepared to stop. MUTCD: R15-1'},
    {tag:'signs', img:'signs/regulatory/reg_reserved_parking_disabled.png',
     front:'What does this sign mean?',
     back:'RESERVED PARKING — Disabled. Only vehicles with a valid disabled placard or plate may park here. Fine: $50–$200. MUTCD: R7-8'},
    // Warning signs
    {tag:'signs', img:'signs/warning/warn_no_passing_zone.png',
     front:'What does this sign mean? What shape is it?',
     back:'NO PASSING ZONE. Pennant shape (right-pointing triangle) — the only pennant sign. Posted on the LEFT side of the road. Passing is prohibited. MUTCD: W14-3'},
    {tag:'signs', img:'signs/warning/warn_school_zone.png',
     front:'What does this sign mean? What shape is it?',
     back:'SCHOOL ZONE / SCHOOL CROSSING. Pentagon (5 sides, pointing up) — the only pentagon sign on roadways. Slow down; watch for children. MUTCD: S1-1'},
    {tag:'signs', img:'signs/warning/warn_railroad_crossing_ahead.png',
     front:'What does this sign mean? What shape is it?',
     back:'RAILROAD CROSSING ADVANCE WARNING. Circle — the only circular warning sign. Begin looking and listening for a train. MUTCD: W10-1'},
    {tag:'signs', img:'signs/warning/warn_slippery_when_wet.png',
     front:'What does this sign mean?',
     back:'SLIPPERY WHEN WET — Road surface is especially dangerous in wet conditions. Reduce speed; avoid quick braking or acceleration. MUTCD: W8-5'},
    {tag:'signs', img:'signs/warning/warn_deer_crossing.png',
     front:'What does this sign mean?',
     back:'DEER CROSSING — Deer frequently cross in this area. Be especially alert at dawn and dusk. MUTCD: W11-3'},
    {tag:'signs', img:'signs/warning/warn_pedestrian_crossing.png',
     front:'What does this sign mean?',
     back:'PEDESTRIAN CROSSING — Pedestrians may be crossing ahead. Prepared to slow or stop. Yield to all pedestrians in or entering the crosswalk. MUTCD: W11-2'},
    {tag:'signs', img:'signs/warning/warn_divided_highway_begins.png',
     front:'What does this sign mean?',
     back:'DIVIDED HIGHWAY BEGINS — The highway ahead has a median separating traffic. Keep to the right of the divider. MUTCD: W6-1'},
    {tag:'signs', img:'signs/warning/warn_divided_highway_ends.png',
     front:'What does this sign mean?',
     back:'DIVIDED HIGHWAY ENDS — You are returning to a two-way road. Keep right and watch for oncoming traffic. MUTCD: W6-2'},
    {tag:'signs', img:'signs/warning/warn_low_clearance.png',
     front:'What does this sign mean?',
     back:'LOW CLEARANCE — The structure ahead has a height restriction. If your vehicle is taller than the posted clearance, do not enter. MUTCD: W12-2'},
    {tag:'signs', img:'signs/warning/warn_hill_downgrade.png',
     front:'What does this sign mean?',
     back:'HILL / DOWNGRADE — A steep grade is ahead. Slow down and shift to a lower gear to control speed and save brakes. MUTCD: W7-1'},
    {tag:'signs', img:'signs/warning/warn_left_curve.png',
     front:'What does this sign mean?',
     back:'LEFT CURVE AHEAD — The road curves to the left. Slow down before the curve, not inside it — physics cannot be overridden. MUTCD: W1-1L'},
    {tag:'signs', img:'signs/warning/warn_intersection_circular.png',
     front:'What does this sign mean?',
     back:'CIRCULAR INTERSECTION (ROUNDABOUT) AHEAD — Yield to circulating traffic. Travel counterclockwise. MUTCD: W2-6'},
    // Pavement markings
    {tag:'signs', img:'diagrams/pave_double_solid_yellow.png',
     front:'What do double solid yellow lines mean?',
     back:'No passing in either direction — even without a No Passing sign. MUTCD: 3B.01'},
    {tag:'signs', img:'diagrams/pave_solid_broken_combo.png',
     front:'What does a solid + broken yellow line combination mean?',
     back:'Passing is allowed ONLY from the broken-line side. If the solid line is on your side, you may NOT pass. MUTCD: 3B.01'},
    {tag:'signs', img:'diagrams/pave_single_broken_yellow.png',
     front:'What does a single broken yellow centerline mean?',
     back:'Passing is permitted from either side when it is safe to do so. You must use the opposing lane to pass. MUTCD: 3B.01'},

    // ── LAWS ─────────────────────────────────────────────────
    {tag:'laws', img:null,
     front:'At a 4-way stop — two cars arrive at the same time. Who goes?',
     back:'Yield to the vehicle on your RIGHT. The car on the left must yield. (PUB 95 Ch. 3)'},
    {tag:'laws', img:null,
     front:'Turning LEFT — who must you yield to?',
     back:'All oncoming traffic and all pedestrians in your turning path. Left turns are never protected unless you have a steady green arrow.'},
    {tag:'laws', img:'signs/regulatory/reg_no_turn_on_red.png',
     front:'Right turn on red — when is it permitted in PA?',
     back:'After a complete stop and yielding to all cross traffic and pedestrians — unless a NO TURN ON RED sign is posted.'},
    {tag:'laws', img:null,
     front:'Left turn on red — when is it legal in PA?',
     back:'Only from a ONE-WAY street onto another ONE-WAY street, after a complete stop and yielding.'},
    {tag:'laws', img:null,
     front:'When entering a roundabout, you must yield to:',
     back:'ALL traffic already circulating inside the roundabout. Enter only when a safe gap exists. Travel counterclockwise. Signal right when approaching your exit.'},
    {tag:'laws', img:'scenes/scene_school_bus_stopping.png',
     front:'School bus — when must ALL traffic stop?',
     back:'When red lights flash and the stop arm extends on any undivided road. Stop at least 10 feet away. Exception: divided highway with concrete/metal barrier (not a painted median).'},
    {tag:'laws', img:null,
     front:'Failure to stop for a school bus — penalty?',
     back:'60-day license suspension + 5 points on your record.'},
    {tag:'laws', img:null,
     front:'Minimum clearance when passing a bicycle in PA?',
     back:'4 feet. PA law requires at least 4 feet of space when passing a cyclist.'},
    {tag:'laws', img:null,
     front:'Blind pedestrian with white cane — when do you yield?',
     back:'ALWAYS — even if they are not in a crosswalk and even if you have a green light.'},
    {tag:'laws', img:null,
     front:'PA Move Over Law — what must you do?',
     back:'Move one lane away from stopped emergency, tow, or PennDOT vehicles with lights flashing. If you cannot move over, slow to at least 20 mph below the posted limit. Fines: up to $500 first offense.'},
    {tag:'laws', img:null,
     front:'You may NOT pass within how many feet of a railroad crossing?',
     back:'100 feet. Also prohibited within 100 feet of intersections, bridges, and tunnels.'},
    {tag:'laws', img:null,
     front:'Aggressive driving in PA — definition?',
     back:'Committing 2 or more moving violations in one incident: speeding, tailgating, illegal passing, running red lights/stop signs, unsafe lane changes, or failing to yield.'},
    {tag:'laws', img:null,
     front:'Minimum following distance behind a moving emergency vehicle?',
     back:'500 feet while it is responding with lights and siren active.'},

    // ── SPEED & SPACE ─────────────────────────────────────────
    {tag:'speed', img:null,
     front:'Default PA speed limit — residential area?',
     back:'25 mph unless otherwise posted. (PUB 95 Ch. 3)'},
    {tag:'speed', img:null,
     front:'Default PA speed limit — business or urban district?',
     back:'35 mph unless otherwise posted.'},
    {tag:'speed', img:null,
     front:'Default PA speed limit — rural two-lane highway?',
     back:'55 mph unless otherwise posted.'},
    {tag:'speed', img:null,
     front:'PA 4-second following distance rule — how do you measure it?',
     back:'Watch the vehicle ahead pass a fixed point. Count four full seconds: one-thousand-one through one-thousand-four. If you reach that point before finishing, you are too close. (PUB 95: "4-Second Rule")'},
    {tag:'speed', img:null,
     front:'Following distance in rain or slippery roads?',
     back:'5–6 seconds. In heavy rain, snow, or ice: 6+ seconds. PUB 95 baseline is 4 seconds under ideal dry conditions.'},
    {tag:'speed', img:'diagrams/diag_space_cushion_zones.png',
     front:'Space cushion — how many zones surround your vehicle?',
     back:'Six zones: Zone 1 (front — 4-second gap), Zone 2 (front-right), Zone 3 (rear-right), Zone 4 (front-left), Zone 5 (rear-left), Zone 6 (rear). Maintain space in all zones.'},
    {tag:'speed', img:null,
     front:'Speeding 16–25 mph over limit — how many points?',
     back:'4 points added to your record.'},
    {tag:'speed', img:null,
     front:'Work zone speeding — what happens to fines?',
     back:'Fines are automatically doubled in active work zones.'},
    {tag:'speed', img:null,
     front:'How many points trigger a PennDOT warning letter and special exam?',
     back:'6 points.'},
    {tag:'speed', img:null,
     front:'How many points trigger a license suspension?',
     back:'11 points (suspended 5 days per point over 10).'},

    // ── SAFE DRIVING ─────────────────────────────────────────
    {tag:'safe', img:null,
     front:'How far ahead should you scan while driving? (PUB 95)',
     back:'12–15 seconds ahead — about 1 block in city driving; approximately ¼ mile at highway speeds.'},
    {tag:'safe', img:null,
     front:'PA texting while driving law?',
     back:'Primary offense — police can stop you for texting alone, no other infraction required.'},
    {tag:'safe', img:'diagrams/diag_hill_parking.png',
     front:'Hill parking — which way do wheels turn in each scenario?',
     back:'Downhill WITH curb → RIGHT (toward curb). Uphill WITH curb → LEFT (away from curb). No curb (either direction) → RIGHT (toward road edge). Always set parking brake.'},
    {tag:'safe', img:null,
     front:'What to do if your car hydroplanes?',
     back:'Ease off the gas and steer straight. Do NOT brake hard or turn sharply — either causes a spin. Wait for tires to regain contact with the road.'},
    {tag:'safe', img:null,
     front:'Fog — which headlights do you use?',
     back:'LOW beams. High beams reflect off fog and reduce visibility further.'},
    {tag:'safe', img:null,
     front:'PA headlight/wiper law?',
     back:'Headlights must be on whenever wipers are in use due to weather AND when visibility is less than 1,000 feet.'},
    {tag:'safe', img:null,
     front:'PA child booster seat age requirement?',
     back:'Required until at least 8 years old OR 4\'9\" tall.'},
    {tag:'safe', img:null,
     front:'Minimum tire tread depth in Pennsylvania?',
     back:'2/32 of an inch. Must be replaced to pass the annual safety inspection.'},
    {tag:'safe', img:'scenes/scene_truck_no_zones.png',
     front:'Truck No-Zones — four blind spot areas?',
     back:'Front (20 ft), Rear (30 ft — no rearview mirror), Right side (full lane + part of next), Left side (partial lane). Rule: if you can\'t see the truck\'s mirrors, the driver can\'t see you.'},
    {tag:'safe', img:'diagrams/diag_blindspots.png',
     front:'Vehicle blind spots — where are they?',
     back:'The areas alongside and slightly behind your vehicle not visible in mirrors. Always look over your shoulder before changing lanes, merging, or backing. Never rely on mirrors alone.'},
    {tag:'safe', img:'diagrams/diag_handsignal_left.png',
     front:'Hand signal — LEFT turn?',
     back:'Left arm extended HORIZONTALLY out the window. Used when turn signals are inoperative.'},
    {tag:'safe', img:'diagrams/diag_handsignal_right.png',
     front:'Hand signal — RIGHT turn?',
     back:'Left arm bent UPWARD at the elbow, pointing up out the window. Used when turn signals are inoperative.'},
    {tag:'safe', img:'diagrams/diag_handsignal_slow_stop.png',
     front:'Hand signal — SLOW or STOP?',
     back:'Left arm bent DOWNWARD at the elbow, pointing down out the window. Used when brake lights or turn signals are inoperative.'},
    {tag:'safe', img:null,
     front:'SMOG pre-drive check — what does it stand for?',
     back:'S — Signals (lights, turn signals, hazards, brake lights) · M — Mirrors (all three properly adjusted) · O — Oil & fluids · G — Gas'},
    {tag:'safe', img:null,
     front:'PA annual vehicle inspection — where must it be done?',
     back:'At a PennDOT state-certified inspection station only.'},

    // ── DUI ───────────────────────────────────────────────────
    {tag:'dui', img:null,
     front:'PA BAC limit for standard drivers (age 21+)?',
     back:'0.08%. At or above this level you can be charged with DUI General Impairment. (PUB 95 Ch. 5)'},
    {tag:'dui', img:null,
     front:'PA BAC limit for drivers under 21?',
     back:'0.02% — zero tolerance. Even one drink can result in DUI charges for underage drivers.'},
    {tag:'dui', img:null,
     front:'PA BAC limit for CDL (commercial) drivers?',
     back:'0.04% — half the standard limit.'},
    {tag:'dui', img:null,
     front:'PA DUI — three BAC tiers?',
     back:'General Impairment: 0.08–0.099% · High BAC: 0.10–0.159% · Highest BAC: 0.16%+ (or any controlled substance). Higher tier = more severe penalties.'},
    {tag:'dui', img:null,
     front:'PA Implied Consent — what does it mean?',
     back:'By driving in PA you automatically consent to chemical testing (breath, blood, or urine) if lawfully arrested for DUI.'},
    {tag:'dui', img:null,
     front:'Refusing a chemical test after DUI arrest — consequence?',
     back:'1st refusal: 12-month license suspension. 2nd refusal: 18-month suspension. Refusal can be used as evidence against you in court.'},
    {tag:'dui', img:null,
     front:'PA ARD program?',
     back:'Accelerated Rehabilitative Disposition — first-time DUI offenders may complete requirements (education, fines, community service) to avoid a permanent criminal record.'},
    {tag:'dui', img:null,
     front:'DUI conviction — how long on your PA driving record?',
     back:'10 years.'},
    {tag:'dui', img:null,
     front:'Underage DUI (under 21) — first offense penalty?',
     back:'90-day license suspension + fine + highway safety school.'},
    {tag:'dui', img:null,
     front:'Can a valid PA medical marijuana card protect you from DUI?',
     back:'No. Driving while impaired by any substance — including legal medical marijuana — is a DUI offense. The card provides no protection.'},

    // ── PARKING ───────────────────────────────────────────────
    {tag:'parking', img:null,
     front:'PA no-parking distance from a fire hydrant?',
     back:'15 feet.'},
    {tag:'parking', img:null,
     front:'PA no-parking distance from a crosswalk at an intersection?',
     back:'20 feet.'},
    {tag:'parking', img:null,
     front:'PA no-parking distance from a stop sign or flashing signal?',
     back:'30 feet.'},
    {tag:'parking', img:null,
     front:'PA no-parking distance from a railroad crossing?',
     back:'50 feet (from the nearest rail).'},
    {tag:'parking', img:null,
     front:'PA no-parking distance from a fire station driveway?',
     back:'20 feet.'},
    {tag:'parking', img:'scenes/scene_parallel_parking_steps.png',
     front:'Parallel parking — what is the maximum distance from the curb?',
     back:'No more than 12 inches from the curb. The 5 steps: (1) Pull alongside vehicle ahead, 2 ft away. (2) Turn right, back slowly. (3) Straighten as front door passes rear bumper ahead. (4) Turn left, back to vehicle behind. (5) Turn right, pull to center.'},
    {tag:'parking', img:null,
     front:'Is double parking legal in PA?',
     back:'No. Double parking is illegal at all times — even with hazard lights on.'},
    {tag:'parking', img:null,
     front:'Fine for parking in a disabled space without a valid placard?',
     back:'$50–$200 per violation. Vehicle may be towed. Municipalities may impose higher fines.'},

    // ── LICENSING & GDL ──────────────────────────────────────
    {tag:'licensing', img:null,
     front:'PA knowledge test — how many questions and passing score?',
     back:'18 questions. Must answer at least 15 correctly (83%) to pass.'},
    {tag:'licensing', img:null,
     front:'PA GDL Stage 1 (Junior Permit) — night restriction?',
     back:'No driving between 11 PM and 5 AM, even with a supervisor present.'},
    {tag:'licensing', img:null,
     front:'PA GDL Stage 2 (Junior License) — first 6 months restrictions?',
     back:'No driving 11 PM – 5 AM. Maximum 1 non-family passenger under 18. (Exception: work/school/volunteer with notarized affidavit.)'},
    {tag:'licensing', img:null,
     front:'Supervised driving hours required before road test (under 18)?',
     back:'65 total hours — at least 10 must be at night.'},
    {tag:'licensing', img:null,
     front:'Minimum permit holding time before road test (under 18)?',
     back:'6 months.'},
    {tag:'licensing', img:null,
     front:'New PA resident — how long to obtain a PA license?',
     back:'Within 60 days of establishing residency.'},
    {tag:'licensing', img:null,
     front:'PA full unrestricted license — available at what age?',
     back:'Age 18, completing Stage 3 of the GDL program.'},
    {tag:'licensing', img:null,
     front:'GDL violation penalty?',
     back:'90-day suspension of the permit or Junior License, and the 6-month restriction clock resets to zero.'},
    {tag:'licensing', img:null,
     front:'PA vision standard for a driver\'s license?',
     back:'20/40 or better in at least one eye (with or without correction). At least 120° peripheral vision.'},
    // MUTCD codes
    {tag:'signs', img:null,
     front:'MUTCD codes — what series are regulatory signs?',
     back:'R series. Examples: R1-1 (Stop), R1-2 (Yield), R2-1 (Speed Limit), R3-4 (No U-Turn), R5-1 (Do Not Enter), R5-1a (Wrong Way), R7-8 (Disabled Parking), R8-3 (No Parking).'},
    {tag:'signs', img:null,
     front:'MUTCD codes — what series are warning signs?',
     back:'W series (and S series for school). Examples: W1-1L/R (Curves), W2-1 (Cross Road), W8-5 (Slippery), W10-1 (RR Crossing circle), W11-2 (Pedestrian), W14-3 (No Passing pennant), S1-1 (School pentagon).'},
    {tag:'signs', img:null,
     front:'MUTCD codes — what series are guide/highway signs?',
     back:'M series. Examples: M1-1 (Interstate shield), M1-3 (US Route), M1-6 (PA Keystone), M4-1 (Distance), M6-1 (Exit).'},
    {tag:'signs', img:null,
     front:'MUTCD codes — what series are service signs?',
     back:'I series (blue motorist services): I-1 variants for Hospital, Gas, Food, Lodging, Telephone, Diesel. D9-6/D9-7 for tourist-oriented directional signs (blue/brown).'},
  ];

  const TAGS = [
    {key:'all',      label:'All',       icon:'fa-layer-group'},
    {key:'signals',  label:'Signals',   icon:'fa-traffic-light'},
    {key:'signs',    label:'Signs',     icon:'fa-sign-hanging'},
    {key:'laws',     label:'Laws',      icon:'fa-scale-balanced'},
    {key:'speed',    label:'Speed',     icon:'fa-gauge-high'},
    {key:'safe',     label:'Safety',    icon:'fa-shield-halved'},
    {key:'dui',      label:'DUI',       icon:'fa-wine-bottle'},
    {key:'parking',  label:'Parking',   icon:'fa-square-parking'},
    {key:'licensing',label:'Licensing', icon:'fa-id-card'},
  ];

  function getCards() {
    return filterTag === 'all' ? ALL_CARDS : ALL_CARDS.filter(c => c.tag === filterTag);
  }

  function render(containerId, profileId) {
    cId = containerId; pId = profileId;
    filterTag = 'all';
    startDeck();
  }

  function startDeck() {
    cards = shuffle(getCards());
    idx = 0; flipped = false; known = new Set(); review = new Set();
    renderCard();
  }

  function renderCard() {
    const el = document.getElementById(cId);
    if (idx >= cards.length) { summary(); return; }
    const card = cards[idx];
    const pct = (idx / cards.length) * 100;
    const tagMeta = TAGS.find(t => t.key === card.tag) || TAGS[0];

    el.innerHTML = `
      <div class="fc-header">
        <h2><i class="fa-solid fa-layer-group" style="color:var(--blue);margin-right:8px;"></i>Flashcards</h2>
        <span class="fc-counter">${idx + 1} / ${cards.length}</span>
      </div>
      <div class="fc-filter-row">
        ${TAGS.map(t => `
          <button class="fc-tag-btn ${filterTag === t.key ? 'active' : ''}" data-tag="${t.key}">
            <i class="fa-solid ${t.icon}"></i> ${t.label}
          </button>`).join('')}
      </div>
      <div class="fc-progress-track"><div class="fc-progress-fill" style="width:${pct}%"></div></div>
      <div class="fc-stats">
        <span class="fc-stat known"><i class="fa-solid fa-circle-check"></i> ${known.size}</span>
        <span class="fc-stat review"><i class="fa-solid fa-rotate"></i> ${review.size}</span>
        <span class="fc-stat left"><i class="fa-solid fa-layer-group"></i> ${cards.length - idx} left</span>
      </div>
      <div class="fc-card-scene ${flipped ? 'flipped' : ''}" id="fc-card" role="button" tabindex="0">
        <div class="fc-card-inner">
          <div class="fc-face fc-front">
            <div class="fc-face-label"><i class="fa-solid ${tagMeta.icon}"></i> ${tagMeta.label}</div>
            ${card.img ? `<img src="assets/${card.img}" alt=""
              style="max-height:90px;max-width:130px;object-fit:contain;border-radius:8px;background:rgba(255,255,255,.12);padding:6px;margin-bottom:10px;"
              onerror="this.style.display='none'">` : ''}
            <div class="fc-face-text">${card.front}</div>
            <div class="fc-hint"><i class="fa-solid fa-hand-pointer"></i> Click to reveal</div>
          </div>
          <div class="fc-face fc-back">
            <div class="fc-face-label">Answer</div>
            ${card.img ? `<img src="assets/${card.img}" alt=""
              style="max-height:70px;max-width:110px;object-fit:contain;border-radius:8px;border:1.5px solid var(--gray-200);background:white;padding:5px;margin-bottom:8px;"
              onerror="this.style.display='none'">` : ''}
            <div class="fc-face-text">${card.back}</div>
          </div>
        </div>
      </div>
      <div id="fc-actions" style="display:${flipped?'flex':'none'};gap:12px;justify-content:center;margin-bottom:12px;">
        <button class="btn btn-danger" id="fc-review"><i class="fa-solid fa-rotate"></i> Review Again</button>
        <button class="btn btn-success" id="fc-known"><i class="fa-solid fa-check"></i> Got It!</button>
      </div>
      <div id="fc-flip-area" style="display:${flipped?'none':'block'};text-align:center;">
        <button class="btn btn-primary fc-flip-btn"><i class="fa-solid fa-rotate"></i> Flip Card</button>
      </div>
    `;

    el.querySelectorAll('.fc-tag-btn').forEach(btn => {
      btn.addEventListener('click', () => { filterTag = btn.dataset.tag; startDeck(); });
    });

    const cardEl = document.getElementById('fc-card');
    const flipFn = () => {
      flipped = true;
      cardEl.classList.add('flipped');
      document.getElementById('fc-actions').style.display = 'flex';
      document.getElementById('fc-flip-area').style.display = 'none';
    };
    cardEl.addEventListener('click', flipFn);
    cardEl.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') flipFn(); });
    el.querySelector('.fc-flip-btn')?.addEventListener('click', flipFn);
    document.getElementById('fc-review')?.addEventListener('click', () => { review.add(idx); next(); });
    document.getElementById('fc-known')?.addEventListener('click', () => { known.add(idx); next(); });
  }

  function next() { idx++; flipped = false; renderCard(); }

  function summary() {
    const el = document.getElementById(cId);
    const total = cards.length;
    const pct = Math.round((known.size / total) * 100);
    if (pId) {
      const p = ProfileManager.getProfile(pId);
      ProfileManager.updateProgress(pId, { flashcardsStudied: (p?.progress.flashcardsStudied || 0) + total });
    }
    el.innerHTML = `
      <div class="fc-summary">
        <div class="fc-summary-emoji">${pct >= 80 ? '🎉' : pct >= 50 ? '💪' : '📚'}</div>
        <h2>Round Complete!</h2>
        <div class="fc-score-ring">
          <svg viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="50" fill="none" stroke="var(--gray-200)" stroke-width="10"/>
            <circle cx="60" cy="60" r="50" fill="none" stroke="var(--blue)" stroke-width="10"
              stroke-dasharray="${2*Math.PI*50}"
              stroke-dashoffset="${2*Math.PI*50*(1-pct/100)}"
              stroke-linecap="round" transform="rotate(-90 60 60)" style="transition:stroke-dashoffset .6s"/>
            <text x="60" y="65" text-anchor="middle" font-size="22" font-weight="800" fill="var(--blue-dark)">${pct}%</text>
          </svg>
        </div>
        <p>${known.size} of ${total} cards mastered</p>
        ${review.size > 0
          ? `<p style="color:var(--orange);font-weight:700;">${review.size} card${review.size>1?'s':''} flagged for review.</p>`
          : '<p style="color:var(--green);font-weight:700;">Perfect — you knew every card!</p>'
        }
        <div class="fc-summary-actions">
          ${review.size > 0 ? `<button class="btn btn-primary" id="fc-retry"><i class="fa-solid fa-rotate"></i> Review Missed (${review.size})</button>` : ''}
          <button class="btn btn-secondary" id="fc-restart"><i class="fa-solid fa-shuffle"></i> New Shuffle</button>
        </div>
      </div>
    `;
    document.getElementById('fc-retry')?.addEventListener('click', () => {
      cards = shuffle([...review].map(i => cards[i]));
      idx = 0; flipped = false; known = new Set(); review = new Set();
      renderCard();
    });
    document.getElementById('fc-restart')?.addEventListener('click', () => startDeck());
  }

  return { render };
})();
