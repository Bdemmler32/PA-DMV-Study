// ============================================================
//  PA DMV STUDY — data.js
//  All study content: modules, questions, flashcards, signs
// ============================================================

const PA_DATA = {

  // ── STUDY MODULES ─────────────────────────────────────────
  modules: [
    {
      id: "signs",
      title: "Road Signs & Signals",
      icon: "🚦",
      color: "#003087",
      description: "Learn every sign category: regulatory, warning, guide, and work zone signs.",
      sections: [
        {
          heading: "Why Signs Matter",
          body: `Road signs are standardized nationwide under the Manual on Uniform Traffic Control Devices (MUTCD). Pennsylvania follows these federal standards. Signs communicate laws, warnings, and guidance through consistent shapes, colors, and symbols — even at a glance.`
        },
        {
          heading: "Sign Colors",
          body: `<strong>Red</strong> — Stop, yield, or prohibition (do not enter, wrong way).<br>
<strong>Yellow</strong> — General warning. Slow down, danger ahead.<br>
<strong>Orange</strong> — Work zone / construction warning.<br>
<strong>Green</strong> — Guide information: directions, distances, exits.<br>
<strong>Blue</strong> — Motorist services: hospitals, gas, food, lodging.<br>
<strong>Brown</strong> — Recreation areas, parks, cultural sites.<br>
<strong>White</strong> — Regulatory signs: speed limits, lane controls.<br>
<strong>Black</strong> — Used with white for regulatory messages.<br>
<strong>Fluorescent Yellow-Green</strong> — Pedestrian, bicycle, and school zones.`
        },
        {
          heading: "Sign Shapes",
          body: `<strong>Octagon (8 sides)</strong> — STOP sign only.<br>
<strong>Triangle (inverted)</strong> — YIELD sign only.<br>
<strong>Diamond</strong> — Warning signs.<br>
<strong>Rectangle (vertical)</strong> — Regulatory signs (speed limits, turn restrictions).<br>
<strong>Rectangle (horizontal)</strong> — Guide signs.<br>
<strong>Pentagon (5 sides, pointing up)</strong> — School zone / school crossing.<br>
<strong>Crossbuck (X shape)</strong> — Railroad crossing.<br>
<strong>Circle</strong> — Railroad advance warning.<br>
<strong>Pennant (triangle pointing right)</strong> — No passing zone.`
        },
        {
          heading: "Regulatory Signs",
          body: `Regulatory signs tell you what you MUST or MUST NOT do. Violating them is a traffic law violation.<br><br>
<strong>STOP</strong> — Come to a complete stop. Yield to all traffic and pedestrians before proceeding.<br>
<strong>YIELD</strong> — Slow down, stop if necessary, yield to cross traffic and pedestrians.<br>
<strong>DO NOT ENTER</strong> — You may not enter this road from your direction.<br>
<strong>WRONG WAY</strong> — You are going in the wrong direction on a divided highway.<br>
<strong>Speed Limit</strong> — Maximum speed under ideal conditions.<br>
<strong>ONE WAY</strong> — Traffic flows in one direction only.<br>
<strong>NO U-TURN</strong> — U-turns prohibited at this location.<br>
<strong>NO LEFT/RIGHT TURN</strong> — That turn is prohibited.<br>
<strong>KEEP RIGHT</strong> — Stay to the right of a traffic island or obstruction.`
        },
        {
          heading: "Warning Signs",
          body: `Diamond-shaped yellow signs warn of upcoming hazards. Slow down and be prepared to react.<br><br>
Common warning signs include: curves ahead, hill, slippery when wet, pedestrian crossing, deer crossing, school crossing, divided highway begins/ends, merge, lane ends, and traffic signal ahead.`
        },
        {
          heading: "Traffic Signals",
          body: `<strong>Green light</strong> — Proceed if the intersection is clear. Yield to pedestrians and vehicles still in the intersection.<br>
<strong>Yellow (amber) light</strong> — The signal is about to turn red. Stop safely if you can; do not speed up to beat the light.<br>
<strong>Red light</strong> — Stop completely before the stop line. Do not enter the intersection.<br>
<strong>Flashing red</strong> — Treat as a STOP sign. Stop completely, then proceed when safe.<br>
<strong>Flashing yellow</strong> — Slow down and proceed with caution.<br>
<strong>Green arrow</strong> — Protected turn. Yield to pedestrians in your path.<br>
<strong>Red arrow</strong> — Do not turn in that direction.`
        },
        {
          heading: "Pavement Markings",
          body: `<strong>White lines</strong> — Separate traffic moving in the same direction.<br>
<strong>Yellow lines</strong> — Separate traffic moving in opposite directions.<br>
<strong>Solid white line</strong> — Do not change lanes; stay in your lane.<br>
<strong>Dashed white line</strong> — Lane changing permitted when safe.<br>
<strong>Double solid yellow</strong> — No passing in either direction.<br>
<strong>Single dashed yellow</strong> — Passing permitted when safe.<br>
<strong>Yellow / dashed yellow combination</strong> — Passing allowed on the dashed side only.<br>
<strong>White stop line</strong> — Stop here at intersections.<br>
<strong>Crosswalk lines</strong> — Mark pedestrian crossing areas.`
        }
      ]
    },
    {
      id: "laws",
      title: "Traffic Laws & Right-of-Way",
      icon: "⚖️",
      color: "#003087",
      description: "Intersections, right-of-way rules, passing, merging, and PA-specific laws.",
      sections: [
        {
          heading: "Right-of-Way Basics",
          body: `Right-of-way is never "taken" — it is always <em>given</em>. The law assigns who must yield, not who has the right to proceed regardless of safety.<br><br>
<strong>At uncontrolled intersections:</strong> Yield to the vehicle that arrived first. If two vehicles arrive at the same time, yield to the vehicle on your right.<br>
<strong>At T-intersections:</strong> Vehicles on the terminating road must yield to vehicles on the through road.<br>
<strong>Turning left:</strong> You must yield to oncoming traffic and pedestrians.<br>
<strong>Emergency vehicles:</strong> Pull to the right and stop when a police car, fire truck, or ambulance approaches with lights/sirens.`
        },
        {
          heading: "Intersection Rules",
          body: `<strong>4-way stop:</strong> First to arrive, first to go. Ties go to the vehicle on the right.<br>
<strong>Yield signs:</strong> Slow down. Stop only if necessary. Must yield to cross traffic.<br>
<strong>Roundabouts:</strong> Yield to traffic already inside the roundabout. Enter when there is a gap. Travel counterclockwise.<br>
<strong>Left turn on red:</strong> Only permitted from a one-way street onto another one-way street in Pennsylvania, after a complete stop.<br>
<strong>Right turn on red:</strong> Permitted after a complete stop unless a sign prohibits it. Yield to pedestrians and cross traffic.`
        },
        {
          heading: "Passing Rules",
          body: `Passing (overtaking) is only allowed on the left unless:<br>
• The vehicle ahead is making a left turn and space allows passing on the right.<br>
• You are on a one-way street.<br><br>
<strong>You may NOT pass when:</strong><br>
• A solid yellow line is on your side of the center.<br>
• Within 100 feet of a bridge, tunnel, railroad crossing, or intersection.<br>
• The vehicle ahead is stopped for a pedestrian at a crosswalk.<br>
• Your view is obscured by a hill or curve.<br><br>
When being passed, do not speed up. Slow down slightly and let them pass safely.`
        },
        {
          heading: "Merging & Lane Changes",
          body: `<strong>Changing lanes:</strong> Signal, check mirrors, check blind spot, then move. One lane at a time.<br>
<strong>Merging onto a highway:</strong> Adjust speed to match highway traffic. Yield to vehicles already on the highway.<br>
<strong>Move Over Law (PA):</strong> When passing emergency vehicles, tow trucks, or PennDOT vehicles stopped with lights on, move over one lane. If you cannot move over, slow down significantly below the posted speed limit.<br>
<strong>HOV lanes:</strong> High-Occupancy Vehicle lanes require a minimum number of occupants (posted on signs). Do not cross solid white lines to enter or exit.`
        },
        {
          heading: "Pedestrians & Cyclists",
          body: `<strong>Crosswalks:</strong> You must stop for pedestrians in any crosswalk — marked or unmarked — at an intersection.<br>
<strong>Blind pedestrians:</strong> If a person is using a white cane or guide dog, you must yield, even if they are not in the crosswalk.<br>
<strong>School buses:</strong> When a school bus stops and displays flashing red lights and a stop arm, ALL traffic on ALL lanes of the road must stop — including opposing traffic — unless there is a physical median divider.<br>
<strong>Bicycles:</strong> Cyclists have the same rights and duties as motor vehicle operators. Pass with at least 4 feet of clearance in Pennsylvania. Do not honk aggressively near cyclists.`
        },
        {
          heading: "Railroad Crossings",
          body: `<strong>Never race a train.</strong> Trains cannot stop quickly — a freight train at 55 mph needs a mile or more to stop.<br><br>
At a railroad crossing:<br>
• Look both ways before crossing tracks.<br>
• Never stop on the tracks.<br>
• When gates lower or lights flash — STOP. Do not go around gates.<br>
• After the train passes, make sure the crossing is fully clear before proceeding.<br>
• Some crossings have multiple tracks — wait until all tracks are clear.`
        }
      ]
    },
    {
      id: "speed",
      title: "Speed Limits & Fines",
      icon: "🚗",
      color: "#003087",
      description: "PA speed limits by road type, fines, points, and license suspension rules.",
      sections: [
        {
          heading: "Pennsylvania Speed Limits",
          body: `Speed limits represent the <strong>maximum</strong> speed under ideal conditions. You must drive slower when weather, traffic, or road conditions require it.<br><br>
<strong>Residential streets:</strong> 25 mph (unless posted otherwise)<br>
<strong>Business/urban districts:</strong> 35 mph (unless posted otherwise)<br>
<strong>Rural highways (2-lane):</strong> 55 mph<br>
<strong>Interstates / limited access highways:</strong> 65–70 mph (posted)<br>
<strong>School zones:</strong> 15 mph when children are present<br>
<strong>Work zones:</strong> Posted speed (fines double)<br>
<strong>Emergency scenes:</strong> Slow significantly — 25 mph past stopped emergency vehicles`
        },
        {
          heading: "Speeding Fines & Points",
          body: `Pennsylvania uses a point system. Accumulating too many points leads to suspension.<br><br>
<strong>1–5 mph over:</strong> Fine only, no points<br>
<strong>6–10 mph over:</strong> 2 points<br>
<strong>11–15 mph over:</strong> 3 points<br>
<strong>16–25 mph over:</strong> 4 points<br>
<strong>26–30 mph over:</strong> 5 points<br>
<strong>31+ mph over:</strong> 5 points + possible reckless driving charge<br><br>
<strong>Work zone speeding:</strong> Fines are doubled.<br>
<strong>School zone speeding:</strong> Additional fines apply.`
        },
        {
          heading: "Point Thresholds & Suspension",
          body: `<strong>6 points:</strong> PennDOT sends a warning letter; you must take a special point examination.<br>
<strong>11 points:</strong> License suspended for 5 days per point over 10.<br>
<strong>Reckless driving conviction:</strong> 6 points + possible 6-month suspension.<br>
<strong>Racing on highways:</strong> Automatic suspension.<br><br>
Points are reduced by 3 for every 12 consecutive months of violation-free driving after a suspension, and by 3 after passing the PennDOT special exam.`
        },
        {
          heading: "Aggressive Driving",
          body: `Pennsylvania defines aggressive driving as committing 2 or more of the following in a single incident:<br>
• Speeding<br>
• Tailgating (following too closely)<br>
• Failing to yield right-of-way<br>
• Improper passing<br>
• Running red lights or stop signs<br>
• Unsafe lane changes<br><br>
Aggressive driving is a summary offense. Road rage that results in assault or injury is a criminal charge.`
        },
        {
          heading: "Following Distance",
          body: `The <strong>3-second rule</strong> is the minimum following distance under normal conditions:<br>
1. Watch the vehicle ahead pass a fixed point (sign, tree).<br>
2. Count "one-thousand-one, one-thousand-two, one-thousand-three."<br>
3. If you pass the same point before finishing, you are too close.<br><br>
Increase to <strong>4 seconds</strong> at night or in light rain. Increase to <strong>6+ seconds</strong> in heavy rain, snow, or ice. Large trucks need even more distance to stop.`
        }
      ]
    },
    {
      id: "safe",
      title: "Safe Driving Practices",
      icon: "🛡️",
      color: "#003087",
      description: "Defensive driving, weather, distractions, sharing the road, and vehicle safety.",
      sections: [
        {
          heading: "Defensive Driving",
          body: `Defensive driving means expecting the unexpected and being prepared to react.<br><br>
<strong>Key principles:</strong><br>
• <strong>Scan ahead</strong> — Look 12–15 seconds ahead (about a block in the city, a quarter mile on the highway).<br>
• <strong>Check mirrors</strong> every 5–8 seconds.<br>
• <strong>Maintain space cushion</strong> on all sides of your vehicle.<br>
• <strong>Communicate</strong> — Use signals, horn, and lights to let others know your intentions.<br>
• <strong>Expect the worst</strong> — Assume the other driver might make a mistake.`
        },
        {
          heading: "Distracted Driving",
          body: `Distracted driving is one of the leading causes of crashes in Pennsylvania.<br><br>
<strong>PA Law:</strong> Using a handheld cell phone while driving is illegal. Texting while driving is a primary offense — police can pull you over for it alone.<br><br>
<strong>Types of distraction:</strong><br>
• <strong>Visual</strong> — Eyes off the road (reading a text)<br>
• <strong>Manual</strong> — Hands off the wheel (eating, adjusting radio)<br>
• <strong>Cognitive</strong> — Mind off driving (daydreaming, emotional conversation)<br><br>
At 55 mph, looking at your phone for 5 seconds is like driving the length of a football field blindfolded.`
        },
        {
          heading: "Drowsy Driving",
          body: `Drowsiness impairs judgment and reaction time similarly to alcohol.<br><br>
<strong>Warning signs:</strong> Frequent yawning, heavy eyelids, drifting lanes, missing exits, not remembering the last few miles.<br><br>
<strong>What to do:</strong> Pull off at a safe rest area or parking lot. A 20-minute nap or caffeine can temporarily help, but the only real cure is sleep.<br><br>
<strong>High-risk times:</strong> 2–4 AM, 1–3 PM. Long monotonous drives (interstate, rural highways) increase drowsiness risk.`
        },
        {
          heading: "Driving in Adverse Weather",
          body: `<strong>Rain:</strong> Turn headlights on. Increase following distance. Avoid cruise control — it can cause hydroplaning. Hydroplaning occurs when tires ride on a film of water; steer straight and ease off the gas.<br><br>
<strong>Snow & Ice:</strong> Accelerate and brake slowly. Increase following distance to 6–10 seconds. Clear all snow from your vehicle before driving (PA law — snow flying off your car that causes an accident is your liability).<br><br>
<strong>Fog:</strong> Use low beams (high beams reflect off fog and reduce visibility). Slow down. Use fog lights if equipped.<br><br>
<strong>Sun glare:</strong> Use visor and sunglasses. Slow down. Be extra cautious at dawn and dusk.`
        },
        {
          heading: "Seat Belts & Child Restraints",
          body: `<strong>PA law:</strong> All front-seat occupants must wear a seat belt. All rear-seat passengers under 18 must be buckled.<br><br>
<strong>Child restraint requirements:</strong><br>
• <strong>Under 2 years OR under 20 lbs:</strong> Rear-facing car seat.<br>
• <strong>Ages 2–4 / up to 40 lbs:</strong> Forward-facing car seat with harness.<br>
• <strong>Ages 4–8 / up to 4'9":</strong> Booster seat with seat belt.<br>
• <strong>Ages 8+ or 4'9" and taller:</strong> Seat belt alone is sufficient.<br><br>
Seat belts reduce the risk of death in a crash by 45% for front-seat passengers.`
        },
        {
          heading: "Sharing the Road",
          body: `<strong>Large trucks:</strong> They have large blind spots (No-Zones) on all four sides. If you can't see the truck's mirrors, the driver can't see you. Never cut in front of a truck — they need twice the stopping distance of a car.<br><br>
<strong>Motorcycles:</strong> Give them a full lane. Check twice before changing lanes. Their small profile makes them easy to miss.<br><br>
<strong>Emergency vehicles:</strong> Pull to the right and stop until they pass.<br><br>
<strong>Pedestrians:</strong> Always yield, even if they are jaywalking. A car vs. pedestrian collision is always devastating.`
        },
        {
          heading: "Vehicle Safety Checks",
          body: `Before driving, check:<br>
• <strong>TIRES</strong> — Pressure and tread depth (minimum 2/32" tread in PA)<br>
• <strong>LIGHTS</strong> — Headlights, brake lights, turn signals, hazards<br>
• <strong>FLUID levels</strong> — Oil, coolant, brake fluid, washer fluid<br>
• <strong>MIRRORS</strong> — Properly adjusted: left, right, rearview<br>
• <strong>SEAT & SEATBELT</strong> — Comfortable reach to pedals and wheel<br><br>
Pennsylvania requires vehicles to pass an annual safety inspection at a state-certified inspection station.`
        }
      ]
    },
    {
      id: "dui",
      title: "DUI / Alcohol & Drugs",
      icon: "🍺",
      color: "#8B0000",
      description: "PA DUI laws, BAC limits, penalties, and drug-impaired driving rules.",
      sections: [
        {
          heading: "PA DUI Law Overview",
          body: `Driving Under the Influence (DUI) in Pennsylvania is a serious criminal offense. You can be charged with DUI if alcohol, drugs, or a combination impairs your ability to drive safely — regardless of your BAC.<br><br>
PA uses a tiered BAC system with escalating penalties:<br>
<strong>General Impairment:</strong> BAC 0.08%–0.099%<br>
<strong>High BAC:</strong> 0.10%–0.159%<br>
<strong>Highest BAC:</strong> 0.16% and above`
        },
        {
          heading: "BAC Limits by Driver Type",
          body: `<strong>Regular drivers (21+):</strong> 0.08% BAC<br>
<strong>Commercial drivers (CDL):</strong> 0.04% BAC<br>
<strong>Drivers under 21:</strong> 0.02% BAC (zero tolerance)<br>
<strong>School bus / transit drivers:</strong> 0.02% BAC<br><br>
BAC is affected by: number of drinks, time elapsed, body weight, food consumed, and individual metabolism. There is no guaranteed formula — the only safe BAC for driving is 0.00%.`
        },
        {
          heading: "First Offense Penalties",
          body: `<strong>General Impairment (0.08–0.099%):</strong><br>
6 months probation, $300 fine, highway safety school, possible treatment.<br><br>
<strong>High BAC (0.10–0.159%):</strong><br>
48 hours to 6 months jail, $500–$5,000 fine, 12-month license suspension.<br><br>
<strong>Highest BAC (0.16%+) or drugs:</strong><br>
72 hours to 6 months jail, $1,000–$5,000 fine, 12-month license suspension.<br><br>
All first offenders may be eligible for the Accelerated Rehabilitative Disposition (ARD) program.`
        },
        {
          heading: "Repeat Offense Penalties",
          body: `<strong>Second offense:</strong> 5 days to 6 months jail, $300–$5,000 fine, 12–18 month suspension, ignition interlock device required for 1 year.<br><br>
<strong>Third and subsequent offenses:</strong> 10 days to 2 years jail (mandatory minimums), $500–$10,000 fine, 18-month suspension, ignition interlock for 1 year.<br><br>
A DUI conviction stays on your driving record for 10 years in Pennsylvania.`
        },
        {
          heading: "Implied Consent Law",
          body: `By driving on Pennsylvania roads, you automatically consent to chemical testing (breath, blood, or urine) if lawfully arrested for DUI.<br><br>
<strong>Refusing a chemical test:</strong><br>
• First refusal: 12-month license suspension<br>
• Second refusal: 18-month suspension<br>
• Refusal is used as evidence against you in court<br><br>
You do NOT have the right to consult an attorney before deciding to take a chemical test in Pennsylvania.`
        },
        {
          heading: "Drug-Impaired Driving",
          body: `DUI applies to ALL impairing substances — not just alcohol. This includes:<br>
• Illegal drugs (marijuana, cocaine, heroin, etc.)<br>
• Prescription medications that impair driving<br>
• Over-the-counter medications (antihistamines, sleep aids)<br><br>
<strong>Pennsylvania and marijuana:</strong> Medical marijuana is legal in PA, but driving while impaired by it is illegal. You can be charged with DUI if THC in your system impairs your driving ability — even with a valid medical card.<br><br>
If a prescription medication warns "do not operate heavy machinery," take it seriously.`
        },
        {
          heading: "Underage Drinking & Driving",
          body: `Pennsylvania has a <strong>zero tolerance</strong> policy for drivers under 21.<br><br>
BAC of 0.02% or higher results in:<br>
• 90-day license suspension (first offense)<br>
• 1-year suspension (second offense)<br>
• Fines and possible criminal charges<br><br>
Passengers under 21 who are visibly intoxicated can result in the driver being charged under the Social Host Liability Law if the driver knowingly transported them.`
        }
      ]
    },
    {
      id: "parking",
      title: "Parking & Stopping Rules",
      icon: "🅿️",
      color: "#003087",
      description: "Legal parking, fire hydrants, hills, disabled spaces, and stopping rules.",
      sections: [
        {
          heading: "Where You May NOT Park",
          body: `Pennsylvania law prohibits parking in these locations:<br><br>
• Within <strong>15 feet</strong> of a fire hydrant<br>
• Within <strong>20 feet</strong> of a crosswalk at an intersection<br>
• Within <strong>30 feet</strong> of a traffic signal, stop sign, or yield sign<br>
• Within <strong>50 feet</strong> of a railroad crossing<br>
• On a sidewalk or crosswalk<br>
• In front of a driveway or alley entrance<br>
• On a bridge or in a tunnel<br>
• Double parking (alongside a parked vehicle)<br>
• In a bike lane<br>
• In a fire lane<br>
• Blocking a disabled access ramp`
        },
        {
          heading: "Parking on Hills",
          body: `Always set your parking brake when parking on a hill. Then turn your wheels:<br><br>
<strong>Uphill with a curb:</strong> Turn wheels LEFT (away from curb). If brakes fail, car rolls into curb.<br>
<strong>Uphill with NO curb:</strong> Turn wheels RIGHT (toward the road edge). Car rolls off the road, not into traffic.<br>
<strong>Downhill (with or without curb):</strong> Turn wheels RIGHT (toward curb). Car rolls into curb and stops.<br><br>
Memory tip: <em>"Uphill = away from curb; downhill = into curb."</em>`
        },
        {
          heading: "Disabled Parking",
          body: `Parking in a disabled space without a valid placard or license plate is a serious violation in Pennsylvania.<br><br>
<strong>Fine:</strong> $50–$200 per violation (municipalities may set higher fines).<br>
<strong>To qualify:</strong> A physician must certify the disability. Placards are issued by PennDOT.<br>
<strong>Temporary placards:</strong> Available for temporary disabilities (post-surgery, injury).<br><br>
Disabled parking spaces are identified by the International Symbol of Access (blue wheelchair symbol) on signs and pavement markings.`
        },
        {
          heading: "Stopping & Standing Rules",
          body: `<strong>Stopping</strong> means briefly halting — you may stop anywhere a sign doesn't prohibit it, but only momentarily.<br>
<strong>Standing</strong> means stopping and remaining stationary while still occupied.<br>
<strong>Parking</strong> means leaving your vehicle unattended.<br><br>
No-stopping zones (usually marked with red curbs) prohibit even a momentary stop. These are often near fire stations, school zones, or restricted intersections.`
        }
      ]
    },
    {
      id: "roadtest",
      title: "Road Test Requirements",
      icon: "🎓",
      color: "#003087",
      description: "What PennDOT examiners look for, common fails, and what to bring.",
      sections: [
        {
          heading: "Eligibility for the Road Test",
          body: `Before taking the PA road test, you must:<br><br>
• Hold a valid PA Learner's Permit for at least <strong>6 months</strong> (drivers under 18)<br>
• Complete <strong>65 hours of supervised driving</strong> (10 must be at night) — logged in a parent/guardian affidavit<br>
• Pass the vision test and knowledge test<br>
• Not have any moving violations during the permit period<br><br>
Drivers 18 and older do not have the 6-month holding requirement but must still pass the knowledge test and vision screening before scheduling the road test.`
        },
        {
          heading: "What to Bring",
          body: `On the day of your road test, bring:<br><br>
• Your valid PA Learner's Permit<br>
• Your Parent/Guardian Certification form (if under 18)<br>
• A registered and insured vehicle in good working condition<br>
• Proof of insurance for the vehicle<br>
• The supervising driver (must be 21+ and licensed for 2+ years)<br><br>
The examiner will inspect the vehicle before the test. All lights, signals, wipers, brakes, and horn must be functional.`
        },
        {
          heading: "What the Examiner Tests",
          body: `The PA road test evaluates:<br><br>
• <strong>Vehicle control</strong> — Smooth acceleration, braking, steering<br>
• <strong>Observation</strong> — Checking mirrors and blind spots at every maneuver<br>
• <strong>Traffic signs & signals</strong> — Obeying all signs, signals, and pavement markings<br>
• <strong>Lane discipline</strong> — Staying in proper lane, correct lane for turns<br>
• <strong>Turns</strong> — Proper signaling, speed, and positioning<br>
• <strong>Intersections</strong> — Yielding correctly, stopping at lines<br>
• <strong>Parking</strong> — Parallel park or pull-in/back-out (varies by location)<br>
• <strong>Expressway driving</strong> (some locations)`
        },
        {
          heading: "Common Reasons for Failing",
          body: `The most common road test failures in Pennsylvania:<br><br>
1. <strong>Not coming to a complete stop</strong> — Rolling stops (California stops) fail every time.<br>
2. <strong>Not checking blind spots</strong> — Look over your shoulder before every lane change.<br>
3. <strong>Improper lane changes</strong> — Signal first, then check, then move.<br>
4. <strong>Speeding</strong> — Stay at or below the limit; examiners note it.<br>
5. <strong>Failing to yield</strong> — Especially at uncontrolled intersections.<br>
6. <strong>Improper parking</strong> — Not parallel to curb, wheels too far away.<br>
7. <strong>Nervousness causing over-steering</strong> — Drive naturally; breathe.`
        },
        {
          heading: "Graduated Driver Licensing (GDL)",
          body: `Pennsylvania's GDL system has three stages:<br><br>
<strong>Stage 1 — Learner's Permit (Junior Permit):</strong><br>
• Must be supervised by a licensed driver 21+ at all times<br>
• No driving between 11 PM and 5 AM<br>
• No more than one non-family passenger under 18<br><br>
<strong>Stage 2 — Junior License (16–17 year olds):</strong><br>
• No driving between 11 PM–5 AM for the first 6 months<br>
• Then midnight–5 AM restriction until 18<br>
• Only one non-family passenger under 18 during first 6 months<br><br>
<strong>Stage 3 — Full Unrestricted License (18+):</strong><br>
No restrictions.`
        }
      ]
    }
  ],

  // ── QUESTION BANK ─────────────────────────────────────────
  questions: [
    // SIGNS
    { id: 1, module: "signs", q: "What shape is a STOP sign?", options: ["Diamond","Pentagon","Octagon","Rectangle"], answer: 2, exp: "STOP signs are the only 8-sided (octagon) signs in the U.S. road system." },
    { id: 2, module: "signs", q: "What does a yellow diamond-shaped sign indicate?", options: ["Speed limit","Warning of hazard ahead","Regulatory restriction","Work zone"], answer: 1, exp: "Diamond-shaped yellow signs are warning signs alerting drivers to hazards ahead." },
    { id: 3, module: "signs", q: "What color are regulatory signs (like speed limits)?", options: ["Yellow","Green","White and black","Orange"], answer: 2, exp: "Regulatory signs are white with black lettering." },
    { id: 4, module: "signs", q: "A pennant-shaped sign means:", options: ["School zone ahead","No passing zone","Pedestrian crossing","Work zone"], answer: 1, exp: "The pennant (triangular flag pointing right) marks the beginning of a no-passing zone." },
    { id: 5, module: "signs", q: "What does an orange sign indicate?", options: ["School zone","Work zone / construction","Recreation area","Emergency route"], answer: 1, exp: "Orange signs warn of construction and work zone hazards." },
    { id: 6, module: "signs", q: "A flashing RED traffic light means:", options: ["Proceed slowly","Yield to traffic","Stop completely, then proceed when safe","Stop until light turns green"], answer: 2, exp: "A flashing red is treated the same as a STOP sign." },
    { id: 7, module: "signs", q: "A flashing YELLOW traffic light means:", options: ["Stop and wait","Proceed with caution","Turn signal malfunction","Yield to oncoming traffic"], answer: 1, exp: "A flashing yellow means slow down and proceed with caution." },
    { id: 8, module: "signs", q: "What does a white rectangular sign with black text typically indicate?", options: ["Guide information","Warning","Regulatory rule","Service area"], answer: 2, exp: "White rectangular signs are regulatory — they tell you what you must or must not do." },
    { id: 9, module: "signs", q: "Double solid yellow center lines mean:", options: ["Passing allowed on left side","No passing in either direction","Passing allowed when safe","Yield to oncoming traffic"], answer: 1, exp: "Double solid yellow lines prohibit passing in both directions." },
    { id: 10, module: "signs", q: "Blue highway signs indicate:", options: ["State parks","Motorist services (gas, food, hospitals)","Regulatory rules","Warning of hazards"], answer: 1, exp: "Blue signs indicate motorist services like gas stations, food, and hospitals." },
    { id: 11, module: "signs", q: "A DO NOT ENTER sign means:", options: ["One-way street ahead","You cannot enter the road from your current direction","Road closed for construction","No trucks allowed"], answer: 1, exp: "DO NOT ENTER means traffic is not allowed to enter from that direction." },
    { id: 12, module: "signs", q: "A pentagon (5-sided) sign shape is used for:", options: ["Railroad crossings","No passing zones","School zones","Work zones"], answer: 2, exp: "Pentagon-shaped signs are exclusively used for school zones and school crossings." },

    // LAWS
    { id: 13, module: "laws", q: "At a 4-way stop, two cars arrive at exactly the same time. Who goes first?", options: ["The car going straight","The car to the right","The car to the left","Whoever flashes their lights"], answer: 1, exp: "When two vehicles arrive simultaneously at a 4-way stop, yield to the vehicle on your right." },
    { id: 14, module: "laws", q: "When turning LEFT at an intersection, you must yield to:", options: ["Vehicles behind you","Oncoming traffic and pedestrians","Vehicles to your right","Nobody — left turns have priority"], answer: 1, exp: "Left turns cross oncoming traffic, so you must yield to all oncoming vehicles and pedestrians." },
    { id: 15, module: "laws", q: "Pennsylvania's Move Over Law requires you to:", options: ["Stop completely","Speed up to pass quickly","Move one lane away or slow significantly below the limit","Honk to warn stopped emergency vehicles"], answer: 2, exp: "The Move Over Law requires moving over one lane or slowing significantly when passing stopped emergency vehicles." },
    { id: 16, module: "laws", q: "In Pennsylvania, a right turn on red is:", options: ["Always legal","Legal after a complete stop unless prohibited by a sign","Illegal at all times","Legal only on one-way streets"], answer: 1, exp: "Right on red is permitted after a complete stop and yielding, unless a sign says otherwise." },
    { id: 17, module: "laws", q: "When may you pass a school bus with flashing red lights on an undivided road?", options: ["When the bus driver waves you through","When no children are visible","Never — all traffic must stop","Only if you are traveling in the opposite direction"], answer: 2, exp: "On undivided roads, ALL traffic in BOTH directions must stop for a school bus displaying red flashing lights." },
    { id: 18, module: "laws", q: "What is the minimum clearance you must give a bicycle when passing in Pennsylvania?", options: ["2 feet","4 feet","6 feet","As much as possible"], answer: 1, exp: "Pennsylvania law requires at least 4 feet of clearance when passing a bicycle." },
    { id: 19, module: "laws", q: "You are on a highway and want to pass another vehicle. You may NOT pass:", options: ["On a straight road with a dashed center line","When the road ahead is clearly visible","Within 100 feet of a railroad crossing","When the vehicle is going slowly"], answer: 2, exp: "Passing within 100 feet of railroad crossings, intersections, bridges, and tunnels is illegal." },
    { id: 20, module: "laws", q: "At an unmarked intersection with no signs, you must:", options: ["Stop completely","Proceed at normal speed","Slow down and yield to vehicles already in or approaching the intersection","Sound your horn before entering"], answer: 2, exp: "At uncontrolled intersections, yield to traffic already present and use caution." },
    { id: 21, module: "laws", q: "In a roundabout, traffic inside the roundabout has:", options: ["No special priority","Right-of-way over entering traffic","Right-of-way only if moving faster","Priority only during peak hours"], answer: 1, exp: "You must yield to all traffic already inside a roundabout before entering." },
    { id: 22, module: "laws", q: "A left turn on red is legal in Pennsylvania:", options: ["Never","From any street onto a one-way street","From a one-way street onto another one-way street only","From a one-way street onto any street"], answer: 2, exp: "Left turns on red are only permitted from a one-way street onto another one-way street in Pennsylvania." },

    // SPEED
    { id: 23, module: "speed", q: "What is the default speed limit in a Pennsylvania residential area?", options: ["15 mph","25 mph","35 mph","45 mph"], answer: 1, exp: "The default residential speed limit in Pennsylvania is 25 mph unless otherwise posted." },
    { id: 24, module: "speed", q: "What is the default speed limit in a business or urban district in PA?", options: ["25 mph","35 mph","45 mph","55 mph"], answer: 1, exp: "Business and urban districts default to 35 mph in Pennsylvania." },
    { id: 25, module: "speed", q: "How many points does going 16–25 mph over the speed limit add to your license?", options: ["2 points","3 points","4 points","5 points"], answer: 2, exp: "Driving 16–25 mph over the limit adds 4 points to your driving record." },
    { id: 26, module: "speed", q: "At what point total does PennDOT send a warning letter requiring a special exam?", options: ["3 points","6 points","10 points","11 points"], answer: 1, exp: "At 6 points, PennDOT requires a special point examination." },
    { id: 27, module: "speed", q: "The 3-second following distance rule should be increased to at least 6 seconds in:", options: ["Light rain","City traffic","Heavy rain, snow, or ice","Night driving"], answer: 2, exp: "In hazardous conditions like heavy rain, snow, or ice, you need 6 or more seconds of following distance." },
    { id: 28, module: "speed", q: "Speeding fines are doubled in:", options: ["School zones at any time","Work zones","Interstate highways","Residential areas after dark"], answer: 1, exp: "Speeding fines are automatically doubled in active work zones in Pennsylvania." },
    { id: 29, module: "speed", q: "What is the school zone speed limit in Pennsylvania when children are present?", options: ["10 mph","15 mph","20 mph","25 mph"], answer: 1, exp: "Speed limit in school zones is 15 mph when children are present." },
    { id: 30, module: "speed", q: "Aggressive driving in Pennsylvania includes committing how many traffic violations in one incident?", options: ["1","2 or more","3 or more","Any speeding violation"], answer: 1, exp: "Committing 2 or more moving violations in a single incident constitutes aggressive driving." },

    // SAFE DRIVING
    { id: 31, module: "safe", q: "How far ahead should you scan the road while driving on a highway?", options: ["2–3 seconds","5–8 seconds","12–15 seconds","30 seconds"], answer: 2, exp: "You should scan 12–15 seconds ahead on a highway — about a quarter mile." },
    { id: 32, module: "safe", q: "Texting while driving in Pennsylvania is:", options: ["Legal if at a stop light","A primary offense — police can stop you for it alone","Only illegal for drivers under 18","Legal with hands-free device"], answer: 1, exp: "Texting while driving is a primary offense in PA — no other infraction is needed to pull you over." },
    { id: 33, module: "safe", q: "At 55 mph, looking at your phone for 5 seconds covers approximately:", options: ["50 feet","The length of a football field","Half a mile","A city block"], answer: 1, exp: "At 55 mph, 5 seconds equals roughly 400 feet — the length of a football field — driven 'blind.'" },
    { id: 34, module: "safe", q: "What should you do if your car starts to hydroplane?", options: ["Brake hard","Turn into the skid and accelerate","Ease off the gas and steer straight","Turn sharply to regain grip"], answer: 2, exp: "If hydroplaning, ease off the gas and steer straight until tires regain contact with the road." },
    { id: 35, module: "safe", q: "When parked facing uphill with a curb, your front wheels should be turned:", options: ["Toward the curb (right)","Away from the curb (left)","Straight ahead","Either direction is fine"], answer: 1, exp: "Uphill with a curb: turn wheels LEFT (away from curb) so the car rolls into the curb if brakes fail." },
    { id: 36, module: "safe", q: "In fog, you should use:", options: ["High beam headlights","Low beam headlights","Hazard lights only","No lights — they reduce visibility"], answer: 1, exp: "Use low beams in fog. High beams reflect off the fog and reduce your visibility." },
    { id: 37, module: "safe", q: "Pennsylvania law requires seat belts for:", options: ["Driver only","Driver and front passengers","All occupants under 18","Driver and all passengers"], answer: 2, exp: "PA requires all front-seat occupants to wear seat belts, and all rear passengers under 18." },
    { id: 38, module: "safe", q: "A child who is 6 years old and 4 feet tall should use:", options: ["Rear-facing car seat","Forward-facing harness seat","Booster seat with seat belt","Seat belt alone"], answer: 2, exp: "Children must use a booster seat until they are 8 years old OR 4'9\" tall. At 6 and under 4'9\", they need a booster." },
    { id: 39, module: "safe", q: "How much stopping distance does a large truck need compared to a car?", options: ["About the same","25% more","Twice as much","Three times as much"], answer: 2, exp: "Large trucks need roughly twice the stopping distance of a passenger car." },
    { id: 40, module: "safe", q: "PA law requires all snow be cleared from your vehicle before driving because:", options: ["It obstructs your own visibility","Flying snow can cause accidents you can be liable for","It damages other vehicles' paint","All of the above"], answer: 3, exp: "All of the above — PA law holds you liable if snow flying off your vehicle causes an accident." },

    // DUI
    { id: 41, module: "dui", q: "What is the legal BAC limit for a regular driver (21+) in Pennsylvania?", options: ["0.05%","0.08%","0.10%","0.12%"], answer: 1, exp: "The legal BAC limit for drivers 21 and older is 0.08% in Pennsylvania." },
    { id: 42, module: "dui", q: "What is the BAC limit for a driver under 21 in Pennsylvania?", options: ["0.08%","0.04%","0.02%","0.00%"], answer: 2, exp: "PA has zero tolerance for underage drivers: 0.02% BAC is sufficient for a DUI charge." },
    { id: 43, module: "dui", q: "What is Pennsylvania's 'Implied Consent' law?", options: ["You imply you are sober by driving","You automatically consent to chemical testing if lawfully arrested for DUI","You consent to search of your vehicle","You must consent to a field sobriety test"], answer: 1, exp: "By driving in PA, you implicitly consent to chemical tests (breath/blood/urine) if arrested for DUI." },
    { id: 44, module: "dui", q: "Refusing a chemical test in Pennsylvania results in:", options: ["No penalty — it's your right","License suspension and evidence used against you in court","A $50 fine only","Automatic DUI conviction"], answer: 1, exp: "Refusal results in license suspension AND the refusal can be used as evidence against you." },
    { id: 45, module: "dui", q: "The BAC limit for commercial (CDL) drivers in Pennsylvania is:", options: ["0.08%","0.06%","0.04%","0.02%"], answer: 2, exp: "CDL holders are held to a stricter standard: 0.04% BAC." },
    { id: 46, module: "dui", q: "Is driving impaired by legally prescribed marijuana (medical card) legal in PA?", options: ["Yes, if you have a valid medical card","No — DUI applies to all impairing substances","Only for minor impairment","Yes, below 0.05% THC blood level"], answer: 1, exp: "A medical marijuana card does not protect you from DUI. Impairment by any substance is illegal." },
    { id: 47, module: "dui", q: "A DUI conviction stays on your Pennsylvania driving record for:", options: ["3 years","5 years","10 years","Forever"], answer: 2, exp: "A DUI conviction remains on your PA driving record for 10 years." },
    { id: 48, module: "dui", q: "What is the highest BAC tier in Pennsylvania's DUI law?", options: ["0.10% and above","0.12% and above","0.16% and above","0.20% and above"], answer: 2, exp: "The 'Highest BAC' tier begins at 0.16% and carries the most severe penalties." },

    // PARKING
    { id: 49, module: "parking", q: "How close to a fire hydrant may you legally park in Pennsylvania?", options: ["10 feet","15 feet","20 feet","25 feet"], answer: 1, exp: "You must park at least 15 feet from a fire hydrant in Pennsylvania." },
    { id: 50, module: "parking", q: "How close to a stop sign may you legally park?", options: ["10 feet","20 feet","30 feet","50 feet"], answer: 2, exp: "You must stay at least 30 feet from a traffic signal, stop sign, or yield sign." },
    { id: 51, module: "parking", q: "When parked facing downhill, your wheels should be turned:", options: ["Left (away from curb)","Right (toward curb)","Straight","Either direction"], answer: 1, exp: "Downhill (with or without a curb): turn wheels RIGHT toward the curb or road edge." },
    { id: 52, module: "parking", q: "How close to a railroad crossing may you legally park?", options: ["30 feet","50 feet","100 feet","No restriction"], answer: 1, exp: "You may not park within 50 feet of a railroad crossing." },
    { id: 53, module: "parking", q: "Parking in a disabled space without a valid placard in PA carries a fine of:", options: ["$10–$25","$50–$200","$250–$500","$500–$1,000"], answer: 1, exp: "Fines range from $50 to $200 per violation, though municipalities may set higher amounts." },

    // ROAD TEST
    { id: 54, module: "roadtest", q: "How many hours of supervised driving must a junior permit holder complete in PA?", options: ["30 hours","50 hours","65 hours","80 hours"], answer: 2, exp: "PA requires 65 hours of supervised driving, including at least 10 hours at night." },
    { id: 55, module: "roadtest", q: "How long must a driver under 18 hold a learner's permit before taking the road test?", options: ["3 months","6 months","9 months","1 year"], answer: 1, exp: "Drivers under 18 must hold their permit for at least 6 months before taking the road test." },
    { id: 56, module: "roadtest", q: "What is the most common reason people fail the PA road test?", options: ["Missing a turn","Not coming to a complete stop","Not signaling","Going too slow"], answer: 1, exp: "Not making a complete stop (rolling stop) is one of the top reasons for road test failure." },
    { id: 57, module: "roadtest", q: "During a PA Junior License (Stage 2), driving is restricted between:", options: ["10 PM – 4 AM","11 PM – 5 AM","Midnight – 6 AM","9 PM – 5 AM"], answer: 1, exp: "Junior license holders may not drive between 11 PM and 5 AM during the initial period." },
    { id: 58, module: "roadtest", q: "A full unrestricted PA driver's license is available at what age?", options: ["16","17","18","21"], answer: 2, exp: "A full unrestricted license is available at age 18 in Pennsylvania." },

    // EXTRA MIXED
    { id: 59, module: "laws", q: "When emergency vehicles with lights/sirens approach, you should:", options: ["Speed up to clear the way","Slow down in your lane","Pull to the right and stop","Continue at normal speed"], answer: 2, exp: "Pull as far right as safely possible and stop until the emergency vehicle passes." },
    { id: 60, module: "signs", q: "What shape is a railroad crossing advance warning sign?", options: ["Diamond","Circle","Pentagon","Octagon"], answer: 1, exp: "The railroad advance warning sign is circular — it's the only circular warning sign." },
    { id: 61, module: "safe", q: "How often should you check your mirrors while driving?", options: ["Every minute","Every 15–20 seconds","Every 5–8 seconds","Only when changing lanes"], answer: 2, exp: "You should check mirrors every 5–8 seconds to stay aware of surrounding traffic." },
    { id: 62, module: "dui", q: "Which program allows first-time DUI offenders to avoid a criminal record in PA?", options: ["DUI Diversion","ARD (Accelerated Rehabilitative Disposition)","Plea Bargain Only","First Offender Waiver"], answer: 1, exp: "The ARD program allows first-time DUI offenders to complete requirements and avoid a criminal record." },
    { id: 63, module: "laws", q: "What does right-of-way mean?", options: ["The legal right to proceed without stopping","The obligation of one driver to yield to another","Priority given to emergency vehicles","A lane reserved for turning"], answer: 1, exp: "Right-of-way is about who must yield — it's never 'taken,' only given by the other driver." },
    { id: 64, module: "speed", q: "What should you do if you are being tailgated?", options: ["Brake suddenly to warn them","Speed up to create distance","Change lanes or pull over safely to let them pass","Flash your hazard lights"], answer: 2, exp: "If tailgated, safely change lanes or pull over to let the driver pass. Avoid confrontation." },
    { id: 65, module: "safe", q: "PA's annual vehicle safety inspection must be done at:", options: ["Any auto parts store","A state-certified inspection station","A police station","Any mechanic shop"], answer: 1, exp: "PA vehicles must pass annual inspections at PennDOT-certified inspection stations." },
    { id: 66, module: "parking", q: "How close to a crosswalk at an intersection may you park?", options: ["10 feet","20 feet","30 feet","50 feet"], answer: 1, exp: "You must not park within 20 feet of a crosswalk at an intersection." },
    { id: 67, module: "laws", q: "You must yield to pedestrians in a crosswalk:", options: ["Only if they are in a marked crosswalk","Only at intersections with traffic lights","At any crosswalk — marked or unmarked","Only if there is a pedestrian signal"], answer: 2, exp: "You must yield to pedestrians at all crosswalks, whether marked or unmarked." },
    { id: 68, module: "signs", q: "A YIELD sign is what shape?", options: ["Diamond","Triangle (inverted)","Pentagon","Circle"], answer: 1, exp: "YIELD signs are inverted triangles (pointing down) — the only sign with that shape." },
    { id: 69, module: "speed", q: "How many consecutive violation-free months reduce your points by 3 in PA?", options: ["6 months","12 months","18 months","24 months"], answer: 1, exp: "12 consecutive violation-free months after a suspension removes 3 points from your record." },
    { id: 70, module: "roadtest", q: "During the road test vehicle inspection, if a required light doesn't work, you will:", options: ["Be given time to fix it","Fail immediately and must reschedule","Be allowed to continue with a warning","Be issued a citation"], answer: 1, exp: "If any required equipment fails the pre-test inspection, the test cannot proceed and must be rescheduled." },
  ],

  // ── ROAD SIGNS (with Wikimedia image URLs) ────────────────
  signs: [
    { name: "Stop", category: "Regulatory", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/STOP_sign.jpg/320px-STOP_sign.jpg", meaning: "Come to a complete stop. Yield to all traffic and pedestrians before proceeding." },
    { name: "Yield", category: "Regulatory", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Yield_sign.jpg/320px-Yield_sign.jpg", meaning: "Slow down and yield to all traffic. Stop if necessary." },
    { name: "Speed Limit 55", category: "Regulatory", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Speed_limit_55_sign.jpg/320px-Speed_limit_55_sign.jpg", meaning: "Maximum speed is 55 mph under ideal conditions." },
    { name: "Do Not Enter", category: "Regulatory", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Do_not_enter_sign.jpg/320px-Do_not_enter_sign.jpg", meaning: "You are not permitted to enter the road from this direction." },
    { name: "Wrong Way", category: "Regulatory", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Wrong_way_sign.jpg/320px-Wrong_way_sign.jpg", meaning: "You are traveling in the wrong direction on a divided highway." },
    { name: "One Way (Right)", category: "Regulatory", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/One-way_sign_%28right%29.jpg/320px-One-way_sign_%28right%29.jpg", meaning: "Traffic flows in one direction — to the right." },
    { name: "No U-Turn", category: "Regulatory", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/No_u_turn_sign.jpg/320px-No_u_turn_sign.jpg", meaning: "U-turns are prohibited at this location." },
    { name: "No Left Turn", category: "Regulatory", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/No-left-turn_sign.jpg/320px-No-left-turn_sign.jpg", meaning: "Left turns are prohibited." },
    { name: "Pedestrian Crossing", category: "Warning", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Pedestrian_crossing_sign.jpg/320px-Pedestrian_crossing_sign.jpg", meaning: "Watch for pedestrians crossing the road." },
    { name: "School Zone", category: "Warning", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/School_zone_sign.jpg/320px-School_zone_sign.jpg", meaning: "Slow to 15 mph when children are present." },
    { name: "Slippery When Wet", category: "Warning", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Slippery_when_wet_sign.jpg/320px-Slippery_when_wet_sign.jpg", meaning: "Road surface is slippery when wet. Slow down in rain." },
    { name: "Deer Crossing", category: "Warning", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Deer_crossing_sign.jpg/320px-Deer_crossing_sign.jpg", meaning: "Deer frequently cross this area. Watch for animals on or near road." },
    { name: "Curve Ahead (Right)", category: "Warning", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Curve_ahead_right_sign.jpg/320px-Curve_ahead_right_sign.jpg", meaning: "A curve is approaching. Slow down and steer carefully." },
    { name: "Railroad Crossing", category: "Warning", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Rr_advance_warning_sign.jpg/320px-Rr_advance_warning_sign.jpg", meaning: "Railroad crossing ahead. Look and listen for trains." },
    { name: "No Passing Zone", category: "Regulatory", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/No_passing_zone_sign.jpg/320px-No_passing_zone_sign.jpg", meaning: "Passing is not permitted in this zone." },
    { name: "Work Zone", category: "Work Zone", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Road_work_sign.jpg/320px-Road_work_sign.jpg", meaning: "Construction or maintenance ahead. Slow down. Fines doubled." },
    { name: "Merge", category: "Warning", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Merge_sign.jpg/320px-Merge_sign.jpg", meaning: "Lanes are merging ahead. Adjust speed and position." },
    { name: "Lane Ends", category: "Warning", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Lane_ends_sign.jpg/320px-Lane_ends_sign.jpg", meaning: "Your lane ends ahead. Merge safely into the continuing lane." },
  ],

  // ── FLASHCARDS ─────────────────────────────────────────────
  flashcards: [
    { front: "What does a STOP sign mean?", back: "Come to a complete stop before the stop line. Yield to all traffic and pedestrians before proceeding." },
    { front: "What does a YIELD sign mean?", back: "Slow down and be prepared to stop. Yield to all traffic. Only stop if necessary." },
    { front: "What is the 3-second following rule?", back: "Watch the vehicle ahead pass a fixed point. You should count 3 seconds before reaching that point. Increase to 6+ seconds in bad weather." },
    { front: "What is Pennsylvania's BAC limit for drivers 21+?", back: "0.08%. At or above this limit, you can be charged with DUI." },
    { front: "What is the BAC limit for drivers under 21 in PA?", back: "0.02% — Pennsylvania has zero tolerance for underage drinking and driving." },
    { front: "What does a flashing red light mean?", back: "Treat it like a STOP sign. Come to a complete stop, then proceed when safe." },
    { front: "What does a flashing yellow light mean?", back: "Slow down and proceed with caution." },
    { front: "When parked uphill with a curb, which way do you turn your wheels?", back: "Turn LEFT (away from the curb). If the car rolls, it will hit the curb and stop." },
    { front: "When parked downhill, which way do you turn your wheels?", back: "Turn RIGHT (toward the curb or road edge). The curb will stop the car from rolling into traffic." },
    { front: "What is Pennsylvania's Move Over Law?", back: "Move one lane away from stopped emergency/tow/PennDOT vehicles with lights on. If you can't, slow well below the limit." },
    { front: "What shape is a WARNING sign?", back: "Diamond (4-sided, rotated 45°). Usually yellow." },
    { front: "What shape is a YIELD sign?", back: "An inverted triangle (pointing downward)." },
    { front: "What shape is a school zone sign?", back: "A pentagon (5 sides, pointing upward)." },
    { front: "What does orange mean on road signs?", back: "Construction / work zone. Slow down. Fines are doubled in work zones." },
    { front: "What is aggressive driving in PA?", back: "Committing 2 or more moving violations in a single incident (speeding, tailgating, illegal passing, etc.)." },
    { front: "How many hours must a junior permit holder drive before the road test?", back: "65 hours total, with at least 10 hours at night." },
    { front: "What does 'implied consent' mean in Pennsylvania?", back: "By driving in PA, you automatically agree to chemical testing (breath/blood) if arrested for DUI." },
    { front: "What is the default speed in a PA school zone when children are present?", back: "15 mph." },
    { front: "At a 4-way stop, two cars arrive simultaneously. Who yields?", back: "The car on the LEFT yields to the car on the RIGHT." },
    { front: "What is the minimum tire tread depth required in Pennsylvania?", back: "2/32 of an inch." },
    { front: "Can you pass on the right in Pennsylvania?", back: "Only if the vehicle ahead is making a left turn and space allows, or on a one-way street." },
    { front: "Double solid yellow center lines mean:", back: "No passing in either direction." },
    { front: "What is the fine range for parking in a disabled space without a placard?", back: "$50 to $200 (municipalities may set higher)." },
    { front: "When must ALL traffic stop for a school bus?", back: "When red lights flash and the stop arm is extended, on any undivided road — both directions must stop." },
    { front: "What is the PA Junior License night restriction?", back: "No driving between 11 PM and 5 AM during the first stage of the junior license." },
  ]
};
