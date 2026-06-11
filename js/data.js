// ============================================================
//  PA DMV Study v02 — data.js
//  Source: Pennsylvania Driver's Manual (PUB 95)
// ============================================================

const PA_DATA = {

// ─────────────────────────────────────────────────────────────
//  STUDY MODULES  (8 chapters)
// ─────────────────────────────────────────────────────────────
modules: [
  {
    id: "licensing",
    title: "Licensing & Permits",
    icon: "fa-id-card",
    desc: "GDL stages, permit requirements, vision standards, and what to bring to PennDOT.",
    sections: [
      {
        heading: "Who Needs a PA Driver's License",
        body: "Any person who operates a motor vehicle on Pennsylvania roads must hold a valid PA license. <strong>New residents</strong> who hold a valid out-of-state license must obtain a PA license within <strong>60 days</strong> of establishing residency. Drivers from France, Germany, Korea, and Taiwan may transfer their license without a road or knowledge test (vision test still required). International driving permits are strongly recommended but not required for short visits."
      },
      {
        heading: "Graduated Driver Licensing — Three Stages",
        body: "<strong>Stage 1 — Junior Learner's Permit (age 16+)</strong><br>• Must pass vision screening and knowledge test (18 Qs, 15 correct)<br>• Valid for 1 year<br>• Must be supervised at ALL times by a licensed driver <strong>age 21+</strong>, or a parent/guardian/spouse <strong>age 18+</strong> sitting in the front seat<br>• <strong>No driving 11 PM – 5 AM</strong><br>• No more passengers than available seat belts<br><br><strong>Stage 2 — Junior Driver's License</strong> (after 6 months + 65 supervised hours, at least 10 at night)<br>• First 6 months: no driving 11 PM – 5 AM; max 1 non-family passenger under 18<br>• After 6 months: no driving midnight – 5 AM until age 18<br>• Exception for work, school, or volunteer fire/EMS — must carry a notarized affidavit<br><br><strong>Stage 3 — Full Unrestricted License (age 18+)</strong><br>No restrictions."
      },
      {
        heading: "Knowledge Test & Vision Requirements",
        body: "<strong>Knowledge Test:</strong> 18 questions drawn from the PA Driver's Manual. You need at least <strong>15 correct (83%)</strong> to pass. Approximately one-third of questions cover signs.<br><br><strong>Vision Screening:</strong><br>• Must see at least 20/40 in one eye (with or without correction)<br>• Must have at least 120° peripheral vision<br>• If you fail, PennDOT issues Form DL-102 — have a licensed eye doctor test you<br>• Corrective lens restriction may be added to your license"
      },
      {
        heading: "Documents Required at PennDOT",
        body: "You must present documents proving four things:<br><br><strong>1. Identity</strong> — Valid U.S. passport, birth certificate, or equivalent primary ID<br><strong>2. Social Security Number</strong> — Social Security card, W-2, or paystub<br><strong>3. PA Residency (two documents)</strong> — Utility bill, bank statement, lease, government mail<br><strong>4. Signature</strong> — A parent or guardian must sign for applicants under 18<br><br>Your SSN is required by law to prevent fraud — it will NOT appear on your license or permit."
      },
      {
        heading: "Points System & License Renewal",
        body: "PA licenses are renewed every <strong>4 years</strong>.<br><br><strong>Points milestones:</strong><br>• <strong>6 points</strong> → Warning letter + mandatory special point exam<br>• <strong>11 points</strong> → License suspended (5 days per point over 10)<br>• Points are reduced by 3 after passing the special point exam<br>• Points are reduced by 3 after 12 consecutive violation-free months following a suspension<br><br>A DUI conviction stays on your record for <strong>10 years</strong>. Certain violations (DUI, racing, fleeing police) also result in immediate suspension regardless of point total."
      }
    ]
  },

  {
    id: "signals",
    title: "Traffic Signals & Lights",
    icon: "fa-traffic-light",
    desc: "Red, yellow, green, arrows, flashing signals, lane control, and pedestrian signals.",
    sections: [
      {
        heading: "Steady Traffic Lights",
        body: "<strong>Steady Red</strong> — Stop completely before the stop line or crosswalk. Do not enter the intersection. Right turn on red is permitted after a full stop (unless a NO TURN ON RED sign is posted). Left on red only from a one-way street onto another one-way street after a full stop and yielding.<br><br><strong>Steady Yellow</strong> — A red light is coming. Slow down and prepare to stop. If you are already in the intersection or cannot stop safely, continue through carefully. Never speed up to beat a yellow light.<br><br><strong>Steady Green</strong> — Proceed if the intersection is clear. Yield to pedestrians and vehicles already in the intersection when turning.",
        imgs: ["signs/signals/sig_red_light.png","signs/signals/sig_yellow_light.png","signs/signals/sig_green_light.png"]
      },
      {
        heading: "Arrow Signals",
        body: "<strong>Steady Red Arrow</strong> — Stop. Do not turn in the arrow's direction until a green arrow or flashing yellow arrow appears.<br><br><strong>Steady Yellow Arrow</strong> — The protected turn phase is ending. Slow down and prepare to stop completely.<br><br><strong>Steady Green Arrow</strong> — Protected turn — oncoming traffic is held by a red light. You must still yield to pedestrians in your path.<br><br><strong>Flashing Yellow Arrow</strong> — You may turn in the arrow's direction, but the turn is NOT protected. Yield to oncoming traffic and pedestrians before turning.",
        imgs: ["signs/signals/sig_red_arrow.png","signs/signals/sig_yellow_arrow.png","signs/signals/sig_green_arrow.png","signs/signals/sig_flashing_yellow_arrow.png"]
      },
      {
        heading: "Flashing Signals & Non-Functioning Signals",
        body: "<strong>Flashing Red</strong> — Treat exactly like a STOP sign. Come to a complete stop, then proceed when safe.<br><br><strong>Flashing Yellow</strong> — Caution. Slow down, look, and proceed carefully. No need to stop.<br><br><strong>Non-functioning signal</strong> — If a signal is completely dark (power failure), treat the intersection as a four-way stop. All vehicles must stop and yield in order of arrival.",
        imgs: ["signs/signals/sig_flashing_red.png","signs/signals/sig_flashing_yellow.png"]
      },
      {
        heading: "Lane Use Control Signals",
        body: "Posted above individual lanes on reversible roads, toll plazas, and bridges:<br><br>• <strong>Green arrow (pointing down)</strong> — You may use this lane<br>• <strong>Yellow X</strong> — Your lane direction is about to reverse. Move to an adjacent lane immediately<br>• <strong>Red X</strong> — You may NOT use this lane<br>• <strong>White left-turn arrow (one-way)</strong> — Left turns only from this lane<br>• <strong>White left-turn arrow (two-way)</strong> — Shared left-turn lane; opposing drivers also use it",
        imgs: ["signs/signals/sig_lane_green_arrow_down.png","signs/signals/sig_lane_yellow_x.png","signs/signals/sig_lane_red_x.png"]
      },
      {
        heading: "Pedestrian Signals & School Zones",
        body: "<strong>WALK / Walking Person symbol</strong> — Pedestrians may start crossing. Stay alert for turning vehicles.<br><br><strong>Flashing DON'T WALK / Upraised Hand</strong> — If you have started crossing, finish quickly. If at the curb, do not start crossing.<br><br><strong>Steady DON'T WALK / Upraised Hand</strong> — Do not cross. Wait for the next WALK signal.<br><br><strong>School Zone Speed Signal</strong> — When the yellow lights on a school zone speed sign are flashing, the speed limit is <strong>15 mph</strong>. Violations earn 3 points plus a fine.",
        imgs: ["signs/signals/sig_walk.png","signs/signals/sig_dont_walk_flashing.png","signs/signals/sig_dont_walk_steady.png","signs/signals/sig_school_zone_speed.png"]
      },
      {
        heading: "Railroad Crossing Signals",
        body: "You must stop when any of the following occur at a railroad crossing:<br>• Flashing red lights activate<br>• A gate is lowering or is down<br>• You can see or hear a train approaching<br>• A flagger signals you to stop<br><br><strong>Never drive around gates.</strong> If stopped at a crossing with multiple tracks, do not proceed until ALL tracks are clear — another train may be coming from the opposite direction on the second track.",
        imgs: ["signs/signals/sig_railroad_crossing_gate.png"]
      }
    ]
  },

  {
    id: "signs",
    title: "Road Signs",
    icon: "fa-sign-hanging",
    desc: "All sign categories: regulatory, warning, work zone, guide, service, and pavement markings.",
    sections: [
      {
        heading: "Sign Shape Reference",
        body: "Shape communicates the sign's type even before you read it:<br><br>• <strong>Octagon</strong> — STOP only<br>• <strong>Inverted triangle</strong> — YIELD only<br>• <strong>Diamond</strong> — Warning (hazard ahead)<br>• <strong>Pentagon (point up)</strong> — School zone only<br>• <strong>Circle</strong> — Railroad crossing advance warning only<br>• <strong>Pennant (right-pointing triangle)</strong> — No Passing Zone only<br>• <strong>Vertical rectangle</strong> — Regulatory (speed limits, restrictions)<br>• <strong>Horizontal rectangle</strong> — Guide and informational<br>• <strong>Crossbuck (X)</strong> — Railroad crossing"
      },
      {
        heading: "Sign Color Reference",
        body: "<strong>Red</strong> — Stop, yield, or prohibition (Do Not Enter, Wrong Way, No U-Turn)<br><strong>White/Black</strong> — Regulatory (speed limits, lane use, turn restrictions)<br><strong>Yellow</strong> — General warning (curves, hazards, intersection types)<br><strong>Orange</strong> — Work zones and construction (fines doubled in active zones)<br><strong>Fluorescent Yellow-Green</strong> — Pedestrian, bicycle, and school zones<br><strong>Green</strong> — Guide: direction, distance, exits<br><strong>Blue</strong> — Motorist services: hospital, gas, food, lodging<br><strong>Brown</strong> — Recreation areas, parks, cultural and historic sites"
      },
      {
        heading: "Regulatory Signs",
        body: "Regulatory signs tell you what the law requires or prohibits. Disobeying them is a traffic violation.<br><br>Key signs: STOP · YIELD · DO NOT ENTER · WRONG WAY · ONE WAY · DIVIDED HIGHWAY · NO U-TURN · NO LEFT TURN · NO RIGHT TURN · NO TRUCKS · NO BICYCLES · NO PEDESTRIAN CROSSING · NO PARKING · DO NOT PASS · SPEED LIMIT · KEEP RIGHT · RESERVED PARKING (DISABLED) · Lane-use directional signs · NO TURN ON RED · Left Turn Yield on Flashing Yellow Arrow",
        imgs: ["signs/regulatory/reg_stop.png","signs/regulatory/reg_yield.png","signs/regulatory/reg_do_not_enter.png","signs/regulatory/reg_wrong_way.png","signs/regulatory/reg_one_way_left.png","signs/regulatory/reg_no_u_turn.png","signs/regulatory/reg_speed_limit_65.png","signs/regulatory/reg_no_turn_on_red.png"]
      },
      {
        heading: "Warning Signs",
        body: "Diamond-shaped yellow signs warn of upcoming road conditions. Slow down and be ready.<br><br>Key signs: Curves and turns (left/right curve, sharp turn, S-curves, winding road) · Chevrons · Divided highway begins/ends · Two-way traffic · Lane ends / merge · Intersection types (cross road, side road, T, Y, roundabout) · Narrow bridge · Slippery when wet · Deer crossing · Low clearance · Hill/downgrade · Traffic signal ahead · Stop sign ahead · Bicycle crossing · Pedestrian crossing · School zone · Horse-drawn vehicle · Share the road · Railroad crossing (circular)",
        imgs: ["signs/warning/warn_left_curve.png","signs/warning/warn_right_curve.png","signs/warning/warn_slippery_when_wet.png","signs/warning/warn_deer_crossing.png","signs/warning/warn_school_zone.png","signs/warning/warn_pedestrian_crossing.png","signs/warning/warn_no_passing_zone.png","signs/warning/warn_railroad_crossing_ahead.png"]
      },
      {
        heading: "Work Zone Signs",
        body: "Orange and black signs mark construction and maintenance areas. <strong>PA law: headlights must be on at all times in posted work zones</strong> — not just active ones. Fines are doubled for violations in active work zones. Flaggers' authority overrides all traffic control devices.<br><br>Key signs: Road Work Ahead · Workers Ahead · Flagger Ahead · Lane Closed Ahead · Active Work Zone When Flashing · End Active Work Zone · Road Closed Flooding<br><br><strong>Channeling devices</strong> (cones, barrels, tubes, panels) guide you through altered traffic patterns.",
        imgs: ["signs/work_zone/wz_road_work_ahead.png","signs/work_zone/wz_workers_ahead.png","signs/work_zone/wz_flagger_ahead.png","signs/work_zone/wz_right_lane_closed.png","signs/work_zone/wz_flagger_stop.png","signs/work_zone/wz_flagger_slow.png"]
      },
      {
        heading: "Guide & Service Signs",
        body: "<strong>Highway/Expressway Guide Signs (green)</strong> — Three advance signs posted: 2 miles, 1 mile, at exit. Exit numbers match mile markers. EXIT ONLY panels in yellow mark lanes that leave the highway.<br><br><strong>Route Markers</strong> — U.S. routes: black shield · PA routes: blue keystone · Interstate: red/white/blue shield. Even-numbered interstates run east-west; odd-numbered run north-south.<br><br><strong>Service Signs (blue)</strong> — Hospital, telephone, food, gas, diesel, lodging at upcoming exit.<br><br><strong>Tourist/Recreation Signs (brown)</strong> — Parks, museums, historical landmarks.",
        imgs: ["signs/guide/guide_interstate_shield.png","signs/guide/guide_us_route_marker.png","signs/guide/guide_pa_keystone_marker.png","signs/service/svc_hospital.png","signs/service/svc_gas.png","signs/service/svc_food.png","signs/service/svc_lodging.png"]
      },
      {
        heading: "Pavement Markings",
        body: "<strong>Yellow center lines</strong> separate traffic moving in opposite directions:<br>• Single broken yellow → passing permitted both sides when safe<br>• Double solid yellow → no passing either direction<br>• One solid + one broken → pass only from the broken-line side<br><br><strong>White lines</strong> separate lanes going the same direction:<br>• Broken white → lane changes permitted when safe<br>• Solid white → do not cross<br><br><strong>Edge lines</strong> — Solid white on the right edge; solid yellow on the left edge of divided highways.<br><br><strong>Pavement words/arrows</strong>: STOP AHEAD · YIELD · SCHOOL · R X R · BIKE LANE · ONLY",
        imgs: ["diagrams/pave_single_broken_yellow.png","diagrams/pave_double_solid_yellow.png","diagrams/pave_solid_broken_combo.png","diagrams/pave_center_turn_lane.png"]
      }
    ]
  },

  {
    id: "laws",
    title: "Traffic Laws & Right-of-Way",
    icon: "fa-scale-balanced",
    desc: "Intersections, right-of-way rules, passing, merging, turns, school buses, and pedestrians.",
    sections: [
      {
        heading: "Right-of-Way Fundamentals",
        body: "Right-of-way is never <em>taken</em> — it is always <em>given</em>. The law says who must yield, not who may proceed regardless of safety. Even if you legally have the right-of-way, you must yield if another driver fails to do so — your goal is always to avoid a crash.<br><br><strong>At uncontrolled intersections (no signs or signals):</strong><br>• Yield to vehicles already in the intersection<br>• If arriving simultaneously, yield to the vehicle on your <strong>right</strong><br><br><strong>T-intersections:</strong> Vehicles on the terminating road yield to through-road traffic.<br><br><strong>Entering from a driveway, alley, or private road:</strong> Always yield to all traffic on the public road."
      },
      {
        heading: "Four-Way Stops & Roundabouts",
        body: "<strong>Four-Way Stop — priority order:</strong><br>1. First to arrive = first to go<br>2. Tie (same time): yield to the vehicle on your right<br>3. Facing each other going straight: both may proceed<br>4. Facing each other, one turning: the turning vehicle yields<br><br><strong>Roundabouts / Traffic Circles:</strong><br>• Yield to ALL traffic already circulating inside the roundabout<br>• Travel counterclockwise<br>• Signal right when approaching your exit<br>• Never stop inside a roundabout — pull to the side only if an emergency vehicle requires it"
      },
      {
        heading: "Turning Rules",
        body: "<strong>Right turn:</strong> Approach in the rightmost lane. Complete the turn into the rightmost available lane. Signal at least 100 feet before turning.<br><br><strong>Left turn:</strong> Approach from the leftmost lane (or center turn lane). Complete into the closest lane. Yield to oncoming traffic and pedestrians. To avoid a tangle turn, begin turning before reaching the center X of the intersection.<br><br><strong>Right on Red:</strong> Permitted after a complete stop and yielding — unless a NO TURN ON RED sign is posted.<br><br><strong>Left on Red:</strong> Only from a one-way street onto another one-way street, after a full stop and yielding.<br><br><strong>U-Turns:</strong> Permitted only where drivers 500+ feet away can clearly see you, no sign prohibits it, and you are not on a curve or near a hilltop. Illegal at intersections marked with a sign.",
        imgs: ["signs/regulatory/reg_no_u_turn.png","signs/regulatory/reg_no_left_turn.png","signs/regulatory/reg_no_right_turn.png","signs/regulatory/reg_no_turn_on_red.png"]
      },
      {
        heading: "Passing Rules",
        body: "Always pass on the LEFT. You may pass on the right only when:<br>• The vehicle ahead is turning left and space on the right is clear<br>• You are on a one-way road with two or more lanes<br><br><strong>You may NOT pass when:</strong><br>• A solid yellow line is on your side of center<br>• Within 100 feet of a railroad crossing, intersection, bridge, or tunnel<br>• The view ahead is blocked (curve, hill)<br>• A vehicle ahead has stopped for a pedestrian in a crosswalk<br>• A school bus is stopped with red lights flashing<br><br>When being passed: do not speed up. Slow slightly to help the other driver complete the pass safely."
      },
      {
        heading: "School Bus Law",
        body: "When a school bus stops on a roadway and activates its red flashing lights and extended stop arm, <strong>ALL traffic in ALL lanes — including oncoming traffic — must stop</strong> and remain stopped until lights stop flashing and the stop arm retracts.<br><br><strong>One exception:</strong> On a physically divided highway with a concrete or metal barrier separating opposing traffic, drivers on the opposite side do not need to stop (a painted median does NOT qualify as a divided highway).<br><br>Stop at least <strong>10 feet</strong> from the bus. Failure to stop results in a <strong>60-day suspension</strong> and <strong>5 points</strong>.",
        imgs: ["scenes/scene_school_bus_stopping.png"]
      },
      {
        heading: "Pedestrians & Cyclists",
        body: "<strong>You must yield to pedestrians at all crosswalks</strong> — marked or unmarked.<br><br>Yield when pedestrians are:<br>• Crossing at any intersection (even without a painted crosswalk)<br>• In marked mid-block crosswalks<br>• On a sidewalk crossing a driveway you are entering<br>• Crossing with the signal while you are turning<br><br><strong>White cane / guide dog:</strong> Always yield to blind pedestrians regardless of location or signal state.<br><br><strong>Cyclists:</strong> Bicycles have all the rights and duties of motor vehicles. Pass cyclists with at least <strong>4 feet of clearance</strong>. Do not honk close to cyclists."
      },
      {
        heading: "Emergency Vehicles & Move Over Law",
        body: "When a siren sounds or you see flashing red/blue lights approaching from any direction:<br>• Pull to the right side of the road<br>• Stop as close to the curb as safely possible<br>• Remain stopped until the vehicle passes<br>• Maintain at least <strong>500 feet</strong> behind a moving emergency vehicle<br><br><strong>Move Over Law</strong> — When passing police, fire, EMS, tow trucks, or PennDOT vehicles stopped with lights flashing:<br>• Move <strong>one lane away</strong> if possible<br>• If you cannot move over, slow to at least <strong>20 mph below the posted limit</strong><br>• 1st offense: up to $500 · 2nd: up to $1,000 · 3rd+: up to $2,000<br>• Fines double in work zones"
      }
    ]
  },

  {
    id: "speed",
    title: "Speed & Space Management",
    icon: "fa-gauge-high",
    desc: "PA speed limits, fines, points, following distance, space cushion, and truck awareness.",
    sections: [
      {
        heading: "Pennsylvania Speed Limits",
        body: "Posted limits are the <strong>maximum</strong> under ideal conditions. You must drive slower when weather, traffic, or road conditions require it.<br><br><table style='width:100%;border-collapse:collapse;font-size:14px;'><tr style='background:#003087;color:#fff;'><th style='padding:8px 10px;text-align:left;'>Road Type</th><th style='padding:8px 10px;text-align:right;'>Limit</th></tr><tr style='background:#f0f5ff;'><td style='padding:8px 10px;'>Residential / urban street</td><td style='padding:8px 10px;text-align:right;'>25 mph</td></tr><tr><td style='padding:8px 10px;'>Business / commercial district</td><td style='padding:8px 10px;text-align:right;'>35 mph</td></tr><tr style='background:#f0f5ff;'><td style='padding:8px 10px;'>Rural two-lane highway</td><td style='padding:8px 10px;text-align:right;'>55 mph</td></tr><tr><td style='padding:8px 10px;'>Interstate / limited-access</td><td style='padding:8px 10px;text-align:right;'>65–70 mph (posted)</td></tr><tr style='background:#f0f5ff;'><td style='padding:8px 10px;'>School zone (lights flashing)</td><td style='padding:8px 10px;text-align:right;'>15 mph</td></tr><tr><td style='padding:8px 10px;'>Active work zone</td><td style='padding:8px 10px;text-align:right;'>Posted (fines doubled)</td></tr></table>"
      },
      {
        heading: "Speeding Fines & Points",
        body: "<table style='width:100%;border-collapse:collapse;font-size:14px;'><tr style='background:#003087;color:#fff;'><th style='padding:8px 10px;text-align:left;'>Over Limit</th><th style='padding:8px 10px;text-align:right;'>Points</th></tr><tr style='background:#f0f5ff;'><td style='padding:8px 10px;'>1–5 mph over</td><td style='padding:8px 10px;text-align:right;'>Fine only (no points)</td></tr><tr><td style='padding:8px 10px;'>6–10 mph over</td><td style='padding:8px 10px;text-align:right;'>2 points</td></tr><tr style='background:#f0f5ff;'><td style='padding:8px 10px;'>11–15 mph over</td><td style='padding:8px 10px;text-align:right;'>3 points</td></tr><tr><td style='padding:8px 10px;'>16–25 mph over</td><td style='padding:8px 10px;text-align:right;'>4 points</td></tr><tr style='background:#f0f5ff;'><td style='padding:8px 10px;'>26–30 mph over</td><td style='padding:8px 10px;text-align:right;'>5 points</td></tr><tr><td style='padding:8px 10px;'>31+ mph over</td><td style='padding:8px 10px;text-align:right;'>5 points + possible reckless driving charge</td></tr><tr style='background:#fff0e0;'><td style='padding:8px 10px;'>School zone violation</td><td style='padding:8px 10px;text-align:right;'>3 points + fine</td></tr></table>"
      },
      {
        heading: "Following Distance — The 4-Second Rule (PUB 95)",
        body: "To measure safe following distance:<br>1. Watch the rear of the vehicle ahead pass a fixed roadside point (sign, pole, crack)<br>2. Count: one-thousand-one, one-thousand-two, one-thousand-three, one-thousand-four<br>3. If you reach the same point before finishing the count, you are following too closely<br><br><strong>Increase following distance when:</strong><br>• Rain or slippery roads → <strong>5–6 seconds</strong><br>• Heavy rain, snow, or ice → <strong>6+ seconds</strong><br>• Following large trucks → <strong>4+ seconds</strong> (must see their mirrors) (need to see their mirrors)<br>• Being tailgated → add more space ahead as a buffer<br>• Going downhill — braking takes longer"
      },
      {
        heading: "Space Cushion Management",
        body: "Maintain space on all six sides of your vehicle:<br><br>• <strong>Zone 1 (front)</strong> — Primary following distance: 3+ seconds<br>• <strong>Zone 2 (front-right)</strong> — Watch for merging traffic and right turns<br>• <strong>Zone 3 (rear-right)</strong> — Vehicles about to pass<br>• <strong>Zone 4 (front-left)</strong> — Oncoming vehicles, left-turners<br>• <strong>Zone 5 (rear-left)</strong> — Vehicles you've just passed<br>• <strong>Zone 6 (rear)</strong> — Check mirrors every 5–8 seconds<br><br>Avoid driving in another vehicle's blind spot. If you cannot see a truck driver's mirrors, they cannot see you.",
        imgs: ["diagrams/diag_space_cushion_zones.png"]
      },
      {
        heading: "Aggressive Driving",
        body: "PA defines <strong>aggressive driving</strong> as committing 2 or more of these violations in a single incident:<br>• Speeding<br>• Following too closely (tailgating)<br>• Failing to yield right-of-way<br>• Improper passing<br>• Running red lights or stop signs<br>• Unsafe lane changes<br><br>Aggressive driving is a summary offense. <strong>Road rage</strong> that escalates to assault or property damage becomes a criminal charge.<br><br>If tailgated: do NOT brake suddenly. Gradually slow down and allow the other driver to pass, or change lanes when safe."
      }
    ]
  },

  {
    id: "safe",
    title: "Safe Driving Practices",
    icon: "fa-shield-halved",
    desc: "Defensive driving, distractions, weather, seat belts, sharing the road, and emergencies.",
    sections: [
      {
        heading: "Defensive Driving",
        body: "Defensive driving means anticipating hazards before they become emergencies:<br><br>• <strong>Scan 12–15 seconds ahead</strong> (about ¼ mile at highway speeds, 1 block in cities)<br>• <strong>Check mirrors every 5–8 seconds</strong><br>• <strong>Maintain space cushion</strong> on all sides<br>• <strong>Communicate early</strong> — signal turns, use horn appropriately, manage your lights<br>• <strong>Look left-right-left</strong> at every intersection before entering<br>• <strong>Expect mistakes</strong> from other drivers, pedestrians, and cyclists<br>• <strong>Cover (hover over) the brake</strong> when approaching high-risk situations — don't ride it"
      },
      {
        heading: "Distracted Driving",
        body: "Distraction takes your eyes, hands, or mind away from driving. Any of these qualifies.<br><br><strong>PA Law:</strong> Using a hand-held cell phone while driving is illegal. <strong>Texting while driving is a primary offense</strong> — police can pull you over for texting alone without any other infraction.<br><br>At 55 mph, looking at a phone for 5 seconds is the equivalent of driving the entire length of a football field with your eyes closed.<br><br>Research shows teen drivers with teen passengers are 13× more likely to crash than adults with adult passengers. Other major distractions: eating and drinking, adjusting radio/GPS, grooming, rubbernecking, interacting with passengers."
      },
      {
        heading: "Drowsy Driving",
        body: "Drowsiness slows reaction time as severely as alcohol. Warning signs you are too drowsy to drive safely:<br>• Frequent yawning or heavy eyelids<br>• Drifting from your lane or hitting rumble strips<br>• Missing exits or losing track of the last few miles<br>• Difficulty keeping your head up<br><br>High-risk times: 2–4 AM and 1–3 PM. Long monotonous interstate stretches increase risk.<br><br><strong>What to do:</strong> Pull off at a rest area or parking lot and nap for 20 minutes. Caffeine takes ~30 minutes to take effect and provides only temporary relief. The only real cure is sleep."
      },
      {
        heading: "Driving in Adverse Weather",
        body: "<strong>Rain:</strong> PA law — headlights on whenever wipers are in continuous or intermittent use. Slow down. Avoid cruise control (hydroplaning risk). If hydroplaning: ease off the gas, steer straight, do NOT brake hard.<br><br><strong>Snow & Ice:</strong> Accelerate and brake gently. Increase following distance to 6–10 seconds. Clear ALL snow from your vehicle before driving — flying debris from your car is your legal liability. Bridges and overpasses freeze first.<br><br><strong>Fog:</strong> Use LOW beams (high beams reflect off fog). If visibility drops to near zero, pull completely off the road, turn on hazard flashers, and take your foot off the brake pedal.<br><br><strong>Flooded Roads:</strong> TURN AROUND — DON'T DROWN. As little as 6 inches of fast-moving water can knock a person down; 2 feet can float most vehicles."
      },
      {
        heading: "Seat Belts & Child Restraints",
        body: "<strong>PA Law:</strong> All front-seat occupants and all rear passengers under age 18 must wear a seat belt. Seat belts reduce the risk of death in a crash by 45%.<br><br><strong>Child Restraint Law:</strong><br>• Under 2 years OR under 20 lbs → Rear-facing car seat<br>• Ages 2–4 / up to 40 lbs → Forward-facing seat with harness<br>• Ages 4–8 / under 4'9\" → Booster seat with seat belt<br>• Ages 8+ or 4'9\"+ → Seat belt alone<br><br>Never place a child in front of an active passenger-side airbag. Lock all doors — being ejected from a vehicle increases the risk of death by 75%."
      },
      {
        heading: "Sharing the Road with Trucks",
        body: "Large trucks have much bigger blind spots (No-Zones) than passenger vehicles:<br>• <strong>Front</strong> — 20 feet ahead<br>• <strong>Rear</strong> — 30 feet behind (no rearview mirror)<br>• <strong>Right side</strong> — full lane plus part of the next<br>• <strong>Left side</strong> — partial lane<br><br>Rule: If you cannot see the truck's side mirrors, the driver cannot see you. Never linger in No-Zones.<br><br>Trucks make <strong>wide right turns</strong> — they may swing left first. Never squeeze between a turning truck and the curb. A loaded truck at 65 mph needs approximately 600 feet to stop (vs. 400 feet for a car).",
        imgs: ["scenes/scene_truck_no_zones.png","scenes/scene_truck_wide_right_turn.png"]
      }
    ]
  },

  {
    id: "dui",
    title: "DUI / Alcohol & Drugs",
    icon: "fa-wine-bottle",
    desc: "PA DUI law, BAC tiers, implied consent, penalties, the ARD program, and drug impairment.",
    sections: [
      {
        heading: "Pennsylvania DUI Overview",
        body: "Driving Under the Influence (DUI) is one of the most serious traffic offenses in PA. You can be charged with DUI if <em>any substance</em> — alcohol, illegal drugs, prescription medication, or over-the-counter drugs — impairs your ability to drive safely, regardless of your BAC.<br><br>PA uses a <strong>three-tier BAC system</strong> with increasingly severe penalties:<br>• <strong>General Impairment:</strong> 0.08% – 0.099%<br>• <strong>High BAC:</strong> 0.10% – 0.159%<br>• <strong>Highest BAC:</strong> 0.16% and above (or any controlled substance in blood)"
      },
      {
        heading: "BAC Limits by Driver Type",
        body: "<table style='width:100%;border-collapse:collapse;font-size:14px;'><tr style='background:#003087;color:#fff;'><th style='padding:8px 10px;text-align:left;'>Driver Type</th><th style='padding:8px 10px;text-align:right;'>BAC Limit</th></tr><tr style='background:#ffeaea;'><td style='padding:8px 10px;'>Standard driver (age 21+)</td><td style='padding:8px 10px;text-align:right;'>0.08%</td></tr><tr><td style='padding:8px 10px;'>Commercial driver (CDL)</td><td style='padding:8px 10px;text-align:right;'>0.04%</td></tr><tr style='background:#ffeaea;'><td style='padding:8px 10px;'>Driver under age 21</td><td style='padding:8px 10px;text-align:right;'>0.02% (zero tolerance)</td></tr><tr><td style='padding:8px 10px;'>School bus driver</td><td style='padding:8px 10px;text-align:right;'>0.02%</td></tr></table><br>The only truly safe BAC for driving is <strong>0.00%</strong>. Even one drink impairs judgment and slows reaction time before the legal limit is reached."
      },
      {
        heading: "First-Offense Penalties",
        body: "<strong>General Impairment (0.08–0.099%):</strong> 6 months probation · $300 fine · Traffic safety school · Possible treatment. No license suspension if first offense.<br><br><strong>High BAC (0.10–0.159%):</strong> 48 hours to 6 months imprisonment · $500–$5,000 fine · 12-month license suspension.<br><br><strong>Highest BAC (0.16%+) or controlled substance:</strong> 72 hours to 6 months imprisonment · $1,000–$5,000 fine · 12-month license suspension."
      },
      {
        heading: "Repeat Offense Penalties",
        body: "<strong>Second DUI offense:</strong><br>• 5 days to 6 months imprisonment<br>• $300–$5,000 fine<br>• 12–18 month license suspension<br>• Ignition interlock device required for 1 year after license restoration<br><br><strong>Third and subsequent DUI:</strong><br>• 10 days to 2 years imprisonment<br>• $500–$10,000 fine<br>• 18-month license suspension<br>• Ignition interlock for 1 year<br><br>A DUI conviction stays on your PA driving record for <strong>10 years</strong>."
      },
      {
        heading: "Implied Consent Law",
        body: "By driving on PA roads, you automatically consent to chemical testing (breath, blood, or urine) if lawfully arrested for DUI. This is <strong>implied consent</strong>.<br><br><strong>Refusing chemical testing results in:</strong><br>• 1st refusal: <strong>12-month license suspension</strong><br>• 2nd refusal: <strong>18-month license suspension</strong><br>• Your refusal can be used as evidence against you in court<br>• You do NOT have the right to speak with an attorney before deciding whether to test<br><br>Note: A blood draw without a warrant requires separate affirmative consent."
      },
      {
        heading: "ARD Program & Underage DUI",
        body: "<strong>ARD (Accelerated Rehabilitative Disposition)</strong> — First-time DUI offenders may be eligible to complete program requirements (education, community service, fines) in exchange for having the charge dismissed without a permanent criminal conviction.<br><br><strong>Underage DUI (Zero Tolerance — drivers under 21):</strong><br>• BAC of 0.02% or higher triggers full DUI charges<br>• 1st offense: 90-day suspension · fine · highway safety school<br>• 2nd offense: 1-year suspension<br><br><strong>Medical marijuana:</strong> A valid PA medical marijuana card does NOT protect you from DUI. If THC impairs your ability to drive, you can be charged."
      }
    ]
  },

  {
    id: "parking",
    title: "Parking & Stopping Rules",
    icon: "fa-square-parking",
    desc: "No-parking zones, minimum distances, hill parking, parallel parking, disabled spaces.",
    sections: [
      {
        heading: "No-Parking Zones",
        body: "You may <strong>never</strong> park in these locations:<br><br>• Within <strong>15 feet</strong> of a fire hydrant<br>• Within <strong>20 feet</strong> of a crosswalk at an intersection<br>• Within <strong>30 feet</strong> of any flashing signal, stop sign, or yield sign<br>• Within <strong>50 feet</strong> of the nearest rail at a railroad crossing<br>• Within <strong>20 feet</strong> of a driveway entrance to a fire station<br>• On a sidewalk or crosswalk<br>• In an intersection<br>• On a bridge, elevated structure, or in a highway tunnel<br>• On railroad tracks<br>• Between roadways of a divided highway (crossovers)<br>• Double parking (alongside a parked vehicle)<br>• In a bike lane<br>• Where signs prohibit parking or stopping<br>• On a limited-access highway (except true emergencies)"
      },
      {
        heading: "Hill Parking — Wheel Position",
        body: "Always set your <strong>parking brake</strong> before leaving a vehicle on a hill. Then turn your wheels to prevent rolling into traffic if the brake fails:<br><br><strong>Downhill WITH a curb</strong> → Turn wheels <strong>RIGHT</strong> (toward curb). Car rolls into curb.<br><strong>Uphill WITH a curb</strong> → Turn wheels <strong>LEFT</strong> (away from curb). Car rolls back into curb.<br><strong>Uphill or downhill WITHOUT a curb</strong> → Turn wheels <strong>RIGHT</strong> (toward road edge). Car rolls off the road away from traffic.<br><br>Memory aid: <em>Uphill with a curb = away from curb. Everything else = toward the curb or edge.</em>",
        imgs: ["diagrams/diag_hill_parking.png"]
      },
      {
        heading: "Parallel Parking — 5-Step Method",
        body: "Parking at a right-hand curb:<br><br><strong>1.</strong> Pull alongside the vehicle ahead of your space, stopping even with it and about 2 feet away.<br><strong>2.</strong> Turn wheels sharply right. Back slowly toward the vehicle behind.<br><strong>3.</strong> As your front door passes the back bumper of the ahead vehicle, straighten wheels. Continue backing.<br><strong>4.</strong> When clear of the vehicle ahead, turn wheels sharply left. Back slowly until near the vehicle behind.<br><strong>5.</strong> Turn wheels right and pull forward to center your vehicle in the space.<br><br>Park no more than <strong>12 inches from the curb</strong>.",
        imgs: ["scenes/scene_parallel_parking_steps.png"]
      },
      {
        heading: "Disabled Parking & Stopping vs. Parking",
        body: "<strong>Disabled spaces</strong> are marked with the International Symbol of Access (blue wheelchair symbol). Parking without a valid placard or plate results in a <strong>$50–$200 fine</strong> plus possible towing. Municipalities may set higher fines.<br><br><strong>Stopping vs. Standing vs. Parking:</strong><br>• <strong>Stopping</strong> — Momentary halt; driver remains; engine may run<br>• <strong>Standing</strong> — Vehicle stationary with driver present; passengers may board/exit<br>• <strong>Parking</strong> — Driver leaves the vehicle unattended<br><br>Some zones prohibit all three (no-stopping zones). Others prohibit only parking or standing. Always read posted signs."
      }
    ]
  }
],

// ─────────────────────────────────────────────────────────────
//  QUESTION BANK  (100 questions)
// ─────────────────────────────────────────────────────────────
questions: [
  // ── SIGNALS ──────────────────────────────────────────────
  {id:1,module:"signals",q:"What must you do at a steady red traffic light?",img:null,options:["Slow down and proceed if clear","Stop completely before the stop line and wait for green","Yield to cross traffic then proceed","Stop, then proceed if no cars are coming"],answer:1,exp:"A steady red light requires a complete stop before the stop line or crosswalk. Wait for a green light. Right on red is allowed after a full stop only if no sign prohibits it."},
  {id:2,module:"signals",q:"A flashing RED light at an intersection means:",img:null,options:["Slow down and proceed with caution","Stop and proceed when safe — same as a stop sign","Signal malfunction — proceed normally","Wait for a green light"],answer:1,exp:"A flashing red is treated exactly like a STOP sign — come to a complete stop, then proceed when the way is clear."},
  {id:3,module:"signals",q:"A flashing YELLOW light means:",img:null,options:["Stop and wait","Slow down and proceed with caution","Signal is broken — treat as four-way stop","You have the right of way"],answer:1,exp:"A flashing yellow means caution. Slow down, look, and proceed carefully. You do not need to stop."},
  {id:4,module:"signals",q:"A flashing YELLOW ARROW signal means:",img:null,options:["You may not turn in that direction","Stop and wait for a solid green arrow","You may turn but must yield to oncoming traffic and pedestrians","Your turn is fully protected"],answer:2,exp:"A flashing yellow arrow permits turning but the turn is NOT protected. You must yield to oncoming traffic and pedestrians before proceeding."},
  {id:5,module:"signals",q:"A STEADY GREEN ARROW signal means:",img:null,options:["Proceed but yield to oncoming traffic","Your turn is protected — oncoming traffic has a red light","You may turn only if the road is completely clear","Yield to pedestrians and then proceed quickly"],answer:1,exp:"A steady green arrow provides a protected turn. Oncoming traffic is held by a red light. You must still yield to pedestrians in your path."},
  {id:6,module:"signals",q:"What does a steady YELLOW traffic light tell you?",img:null,options:["Speed up to clear the intersection","A red light is coming — slow down and prepare to stop","Yield to cross traffic","Signal is about to turn green"],answer:1,exp:"Yellow warns that red is about to appear. Slow down and stop if it's safe to do so. Never speed up to beat it."},
  {id:7,module:"signals",q:"A non-functioning traffic signal should be treated as:",img:null,options:["A green light","A yield sign","A four-way stop","No restriction — use your best judgment"],answer:2,exp:"A completely dark signal means treat the intersection as a four-way stop — all vehicles must stop and yield in turn."},
  {id:8,module:"signals",q:"A steady RED ARROW means:",img:null,options:["You may turn if the road is clear","Stop and do not turn in the arrow's direction until a green arrow appears","Yield to pedestrians then proceed","A U-turn is prohibited"],answer:1,exp:"A steady red arrow prohibits turning in the arrow's direction. Wait for a green arrow or flashing yellow arrow."},
  {id:9,module:"signals",q:"A lane use control signal showing a RED X over your lane means:",img:null,options:["Slow down in this lane","You may use this lane","You may NOT use this lane","Merge into this lane immediately"],answer:2,exp:"A red X over a lane means you are not allowed to travel in that lane."},
  {id:10,module:"signals",q:"The speed limit in a school zone when the yellow lights are flashing is:",img:null,options:["25 mph","20 mph","15 mph","10 mph"],answer:2,exp:"When yellow lights flash on school zone speed signs, the limit drops to 15 mph. Exceeding it results in 3 points and a fine."},
  {id:11,module:"signals",q:"When a traffic signal is broken and completely dark, you should:",img:null,options:["Proceed at a slow speed","Treat it as a yield sign","Treat it as a four-way stop","Wait for police to direct traffic"],answer:2,exp:"A completely non-functioning signal must be treated as a four-way stop. Everyone stops and yields in order of arrival."},
  {id:12,module:"signals",q:"A ramp metering signal turns green. This means:",img:null,options:["You have a protected entry and can merge freely","One vehicle per green may enter but you must still find a safe gap in traffic","All highway lanes must yield to you","You may accelerate to any speed to merge"],answer:1,exp:"Ramp meters control flow onto congested highways. Even with a green, you must find a safe gap — the light does not protect your entry."},

  // ── SIGNS ────────────────────────────────────────────────
  {id:13,module:"signs",q:"What shape is a STOP sign?",img:null,options:["Diamond","Pentagon","Octagon","Rectangle"],answer:2,exp:"Stop signs are the only 8-sided (octagon) signs on U.S. roads. This unique shape allows recognition even when snow-covered."},
  {id:14,module:"signs",q:"What shape is a YIELD sign?",img:null,options:["Diamond","Circle","Pentagon","Inverted triangle (pointing down)"],answer:3,exp:"Yield signs are inverted triangles pointing downward — the only sign with this shape in the U.S. system."},
  {id:15,module:"signs",q:"A diamond-shaped sign indicates:",img:"signs/warning/warn_left_curve.png",options:["Speed limit information","A regulatory restriction","A warning about a hazard or road condition ahead","A guide to services"],answer:2,exp:"Diamond-shaped signs are warning signs, alerting drivers to upcoming hazards or changing conditions."},
  {id:16,module:"signs",q:"Orange signs are used for:",img:null,options:["School zones","Construction and work zones","Recreation areas","Motorist services"],answer:1,exp:"Orange signs identify construction, maintenance, and work zones. Fines are doubled for violations in active work zones."},
  {id:17,module:"signs",q:"What does a pennant-shaped sign indicate?",img:"signs/warning/warn_no_passing_zone.png",options:["School zone ahead","No passing zone — posted on the left side of road","Pedestrian crossing zone","Railroad crossing ahead"],answer:1,exp:"The pennant (triangle pointing right) is the only pennant-shaped sign and marks the beginning of a no-passing zone."},
  {id:18,module:"signs",q:"Blue highway signs indicate:",img:null,options:["State parks and recreation areas","Motorist services: gas, food, hospital, lodging","Regulatory restrictions","Work zones"],answer:1,exp:"Blue signs indicate motorist services available at upcoming exits — hospitals, gas stations, restaurants, lodging, and telephone."},
  {id:19,module:"signs",q:"A school zone sign is what shape?",img:"signs/warning/warn_school_zone.png",options:["Diamond","Octagon","Pentagon (5 sides)","Circle"],answer:2,exp:"School zone signs are pentagon-shaped — the only pentagon sign on roadways. They may be yellow or fluorescent yellow-green."},
  {id:20,module:"signs",q:"Double solid yellow center lines mean:",img:"diagrams/pave_double_solid_yellow.png",options:["Passing allowed from either side when safe","No passing in either direction","Passing allowed only from the left side","Two-way traffic begins ahead"],answer:1,exp:"Double solid yellow lines prohibit passing in both directions, even without a No Passing sign."},
  {id:21,module:"signs",q:"This sign means:",img:"signs/regulatory/reg_do_not_enter.png",options:["Wrong way — you have entered a one-way road","You cannot enter from your current direction","Stop and check for conflicting traffic","Road is closed for maintenance"],answer:1,exp:"DO NOT ENTER signs are placed at the beginning of one-way streets and ramps where entering from your direction is prohibited."},
  {id:22,module:"signs",q:"The color of speed limit and other regulatory signs is:",img:null,options:["Yellow and black","Orange and black","White and black","Green and white"],answer:2,exp:"Regulatory signs are white with black lettering, or red and white for prohibition signs like STOP, YIELD, and DO NOT ENTER."},
  {id:23,module:"signs",q:"This sign means:",img:"signs/warning/warn_slippery_when_wet.png",options:["Road is wet — use caution at normal speed","Road surface is especially slippery when wet","Weight restriction on bridge","Ice forms on road"],answer:1,exp:"Slippery When Wet signs warn that the road surface is particularly dangerous in wet conditions. Reduce speed and avoid quick braking or acceleration."},
  {id:24,module:"signs",q:"A circular warning sign is used for:",img:"signs/warning/warn_railroad_crossing_ahead.png",options:["Roundabout ahead","Circular school zone","Railroad crossing advance warning only","No U-turn zone"],answer:2,exp:"The circle is used exclusively for railroad advance warning signs — the only circular warning sign in the U.S. signing system."},
  {id:25,module:"signs",q:"A solid white line between lanes means:",img:null,options:["Passing is allowed here","Do not change lanes at this point","Two-way traffic boundary","Bike lane boundary with no restriction on crossing"],answer:1,exp:"Solid white lines between lanes indicate you should not change lanes. Dashed (broken) white lines allow lane changes when safe."},
  {id:26,module:"signs",q:"A pavement marking with one solid and one broken yellow line means:",img:"diagrams/pave_solid_broken_combo.png",options:["Passing allowed from either side","No passing in either direction","Passing allowed only from the broken-line side","Center turn lane ahead"],answer:2,exp:"One solid + one broken yellow: passing is allowed only from the side with the broken line. If the solid line is on your side, you may not pass."},
  {id:27,module:"signs",q:"This sign indicates:",img:"signs/warning/warn_divided_highway_begins.png",options:["One-way road ahead","A divided highway begins — keep right of divider","Road narrows to one lane","Median ends ahead"],answer:1,exp:"This sign warns that a divided highway begins ahead. Keep to the right of the center divider or median."},
  {id:28,module:"signs",q:"Brown highway signs indicate:",img:null,options:["Regulatory restrictions","Recreation areas, parks, and cultural or historic sites","Motorist services","Detour routes"],answer:1,exp:"Brown signs direct drivers to recreational areas, state or national parks, and cultural or historical landmarks."},

  // ── LAWS ─────────────────────────────────────────────────
  {id:29,module:"laws",q:"At a 4-way stop, two cars arrive at exactly the same time. What should you do?",img:null,options:["The car on the left goes first","Yield to the car on your right","The car going straight has priority","Honk and proceed"],answer:1,exp:"When two vehicles arrive simultaneously at a 4-way stop, yield to the vehicle on your right."},
  {id:30,module:"laws",q:"When turning LEFT at an intersection, you must yield to:",img:null,options:["Vehicles directly behind you","Oncoming traffic and pedestrians in your path","Vehicles turning right from the opposite direction","Nobody — left turns have priority"],answer:1,exp:"Left turns cross oncoming traffic, so you must yield to all oncoming vehicles and pedestrians before completing the turn."},
  {id:31,module:"laws",q:"Pennsylvania's Move Over Law requires you to do which of the following when passing stopped emergency vehicles with lights on?",img:null,options:["Stop completely until they leave","Move one lane away OR slow to at least 20 mph below the posted limit","Use hazard lights and slow to 25 mph","Honk to warn them you're approaching"],answer:1,exp:"PA's Move Over Law: move one lane away from stopped emergency, tow, or PennDOT vehicles with lights active. If you can't move over, slow to at least 20 mph below the limit."},
  {id:32,module:"laws",q:"In Pennsylvania, a right turn on red is:",img:null,options:["Always illegal","Legal after a complete stop and yielding, unless a sign says otherwise","Legal only on one-way streets","Legal without stopping if no traffic is visible"],answer:1,exp:"Right on red is permitted after a complete stop and yielding to cross traffic and pedestrians, unless a No Turn on Red sign is posted."},
  {id:33,module:"laws",q:"On an undivided road, when a school bus stops with flashing red lights, you must:",img:null,options:["Slow to 15 mph and proceed carefully","Stop only if you are directly behind the bus","Stop in both directions until the lights stop and the stop arm retracts","Proceed if no children are visible in the roadway"],answer:2,exp:"All traffic in both directions on an undivided road must stop when a school bus displays flashing red lights and an extended stop arm."},
  {id:34,module:"laws",q:"The minimum clearance you must give a bicycle when passing in Pennsylvania is:",img:null,options:["2 feet","4 feet","6 feet","As much as possible — no specific minimum"],answer:1,exp:"Pennsylvania law requires at least 4 feet of clearance when passing a bicycle."},
  {id:35,module:"laws",q:"You may pass another vehicle on the RIGHT when:",img:null,options:["The vehicle ahead is going slower than you","The vehicle ahead is making a left turn and space allows, or on a one-way street","Any time the road is wide enough","Only on highways with 3 or more lanes"],answer:1,exp:"Passing on the right is only legal when the vehicle ahead is turning left (and space exists on the right) or on a one-way street."},
  {id:36,module:"laws",q:"When entering a roundabout, you must yield to:",img:null,options:["Vehicles entering from your left","Traffic already circulating inside the roundabout","Emergency vehicles only","No one — entering traffic has priority"],answer:1,exp:"All traffic entering a roundabout must yield to vehicles already circulating inside. Once inside, you have priority."},
  {id:37,module:"laws",q:"A left turn on red in Pennsylvania is legal only when:",img:null,options:["No other vehicles are approaching","Turning from a one-way street onto another one-way street after a complete stop","Turning from any street if you yield first","You are in the left lane and traffic is clear"],answer:1,exp:"Left on red is only permitted in PA when turning from a one-way street onto another one-way street, after a complete stop and yielding to traffic and pedestrians."},
  {id:38,module:"laws",q:"You must yield to a blind pedestrian with a white cane:",img:null,options:["Only at marked crosswalks","Only when a signal indicates pedestrian right-of-way","Always — even if they are not in a crosswalk","Only when they signal their intention to cross"],answer:2,exp:"You must always yield to pedestrians with a white cane or guide dog, regardless of location or signal phase."},
  {id:39,module:"laws",q:"You may NOT legally pass another vehicle within how many feet of a railroad crossing?",img:null,options:["50 feet","75 feet","100 feet","200 feet"],answer:2,exp:"Passing is illegal within 100 feet of a railroad crossing, intersection, bridge, or tunnel."},
  {id:40,module:"laws",q:"Aggressive driving in Pennsylvania is defined as committing how many moving violations in a single incident?",img:null,options:["1","2 or more","3 or more","Any act of speeding"],answer:1,exp:"Aggressive driving is defined as committing 2 or more moving violations in a single incident."},
  {id:41,module:"laws",q:"When an emergency vehicle approaches with siren and lights, you must:",img:null,options:["Speed up to clear the intersection","Stop at the nearest intersection","Pull to the right and stop until it passes","Move to the left to give it room on the right"],answer:2,exp:"Pull as far right as safely possible and stop. Stay stopped until the emergency vehicle has completely passed."},
  {id:42,module:"laws",q:"A vehicle entering a highway from a private driveway must:",img:null,options:["Proceed when the lane is momentarily clear","Yield to ALL traffic on the public road","Use emergency flashers before entering","Has the right-of-way if turning right"],answer:1,exp:"Any vehicle entering a public highway from a driveway, alley, or private road must yield to all traffic on the public road."},

  // ── SPEED ────────────────────────────────────────────────
  {id:43,module:"speed",q:"What is the default speed limit in a Pennsylvania residential area?",img:null,options:["15 mph","20 mph","25 mph","35 mph"],answer:2,exp:"The default residential speed limit in Pennsylvania is 25 mph unless otherwise posted."},
  {id:44,module:"speed",q:"What is the default speed limit in a PA business or urban district?",img:null,options:["25 mph","35 mph","45 mph","55 mph"],answer:1,exp:"Business and urban districts default to 35 mph in Pennsylvania unless otherwise posted."},
  {id:45,module:"speed",q:"Speeding fines are automatically doubled in:",img:null,options:["School zones at all times","Active work zones","All limited-access highways","Residential areas after dark"],answer:1,exp:"Speeding fines are doubled in active work zones in Pennsylvania."},
  {id:46,module:"speed",q:"How many points does driving 16–25 mph over the speed limit add?",img:null,options:["2 points","3 points","4 points","5 points"],answer:2,exp:"Driving 16–25 mph over the limit adds 4 points to your driving record."},
  {id:47,module:"speed",q:"At what point total does PennDOT send a warning letter requiring a special exam?",img:null,options:["3 points","6 points","10 points","11 points"],answer:1,exp:"At 6 points PennDOT sends a warning letter and requires you to pass a special point examination."},
  {id:48,module:"speed",q:"The 4-second following distance should be increased to at least 6 seconds in:",img:null,options:["Light rain","City traffic","Heavy rain, snow, or ice","Night driving on a highway"],answer:2,exp:"PA PUB 95 uses a 4-second baseline following distance. In hazardous conditions like heavy rain, snow, or ice, increase to 6 or more seconds."},
  {id:49,module:"speed",q:"How many consecutive violation-free months reduce your points by 3 after a suspension?",img:null,options:["6 months","9 months","12 months","18 months"],answer:2,exp:"12 consecutive violation-free months after a suspension reduces your point total by 3."},
  {id:50,module:"speed",q:"A loaded truck at 65 mph needs approximately how far to stop?",img:null,options:["Same as a car — about 400 feet","600 feet (vs about 400 feet for a car)","250 feet","1,000 feet"],answer:1,exp:"A loaded truck at 65 mph needs about 600 feet to stop. Always allow extra following distance behind large vehicles."},

  // ── SAFE ─────────────────────────────────────────────────
  {id:51,module:"safe",q:"How far ahead should you scan while driving on a highway?",img:null,options:["2–3 seconds","5–8 seconds","12–15 seconds (about ¼ mile)","30 seconds"],answer:2,exp:"Scan 12–15 seconds ahead — about 1 block in city driving; approximately ¼ mile at highway speeds. (PUB 95 Ch. 3)"},
  {id:52,module:"safe",q:"Texting while driving in Pennsylvania is:",img:null,options:["Legal if stopped at a red light","A primary offense — police can stop you for it alone","Only illegal for drivers under 18","Legal if using voice-to-text software"],answer:1,exp:"Texting while driving is a primary offense in PA. Police can pull you over solely for texting — no other infraction is needed."},
  {id:53,module:"safe",q:"At 55 mph, looking at your phone for 5 seconds covers approximately:",img:null,options:["50 feet","100 feet","The length of a football field (~400 feet)","About half a mile"],answer:2,exp:"At 55 mph, 5 seconds equals roughly 400 feet — the length of a football field driven without looking at the road."},
  {id:54,module:"safe",q:"If your car starts to hydroplane on a wet road, you should:",img:null,options:["Brake hard immediately","Accelerate briefly to regain traction","Ease off the gas and steer straight","Turn sharply in the direction of the skid"],answer:2,exp:"Ease off the gas and steer straight until the tires regain contact. Do not brake hard or turn sharply — either can cause a spin."},
  {id:55,module:"safe",q:"When parked facing UPHILL with a curb, your front wheels should be turned:",img:null,options:["Toward the curb (right)","Away from the curb (left)","Straight ahead","Either direction is acceptable"],answer:1,exp:"Uphill with a curb: turn wheels LEFT (away from curb). If brakes fail, the car rolls back into the curb and stops.",img_hint:"diagrams/diag_hill_parking.png"},
  {id:56,module:"safe",q:"When parked facing DOWNHILL, your wheels should be turned:",img:null,options:["Left (away from curb or edge)","Right (toward curb or road edge)","Straight","Either — the parking brake is sufficient"],answer:1,exp:"Downhill (with or without curb): turn wheels RIGHT. The car rolls toward the curb or road edge rather than into traffic."},
  {id:57,module:"safe",q:"In fog, you should use:",img:null,options:["High beam headlights","Low beam headlights","Hazard lights only","No special lights are needed"],answer:1,exp:"Use low beams in fog. High beams reflect off fog particles and reduce visibility. Low beams direct light downward toward the road."},
  {id:58,module:"safe",q:"PA law requires a child to use a booster seat until they are at least:",img:null,options:["4 years old","6 years old","8 years old or 4'9\" tall","10 years old or 80 lbs"],answer:2,exp:"Children must use a booster seat until they are at least 8 years old OR reach 4'9\" in height in Pennsylvania."},
  {id:59,module:"safe",q:"How often should you check your mirrors while driving?",img:null,options:["Every minute","Every 15–20 seconds","Every 5–8 seconds","Only when you intend to change lanes"],answer:2,exp:"Check your mirrors every 5–8 seconds to maintain a complete picture of surrounding traffic."},
  {id:60,module:"safe",q:"PA's headlight/wiper law requires headlights on:",img:null,options:["Only between sunset and sunrise","Whenever wipers are in continuous or intermittent use due to weather conditions","Only during heavy rain","When visibility drops below 500 feet"],answer:1,exp:"PA law requires headlights any time wipers are in use due to weather, AND when visibility is less than 1,000 feet."},
  {id:61,module:"safe",q:"The minimum following distance behind a moving emergency vehicle with lights and siren active is:",img:null,options:["100 feet","250 feet","500 feet","1,000 feet"],answer:2,exp:"Maintain at least 500 feet behind a moving emergency vehicle that is responding with lights and siren."},
  {id:62,module:"safe",q:"If a tire blows out while driving, you should:",img:null,options:["Brake hard immediately and steer to the shoulder","Grip the wheel firmly, ease off the gas, and steer straight to slow down","Swerve sharply toward the blowout side","Accelerate briefly to maintain vehicle stability"],answer:1,exp:"Grip the wheel firmly with both hands, ease off the gas gradually, steer straight to maintain direction, then slow to a controlled stop. Never brake hard or swerve suddenly."},

  // ── DUI ──────────────────────────────────────────────────
  {id:63,module:"dui",q:"What is the legal BAC limit for a standard driver (age 21+) in Pennsylvania?",img:null,options:["0.05%","0.08%","0.10%","0.12%"],answer:1,exp:"The BAC limit for drivers 21 and older is 0.08% in Pennsylvania."},
  {id:64,module:"dui",q:"What is the BAC limit for drivers under 21 in Pennsylvania?",img:null,options:["0.08%","0.04%","0.02%","0.00%"],answer:2,exp:"PA has zero tolerance for drivers under 21. A BAC of 0.02% or higher triggers DUI charges."},
  {id:65,module:"dui",q:"Pennsylvania's Implied Consent law means:",img:null,options:["You imply you are sober by choosing to drive","By driving in PA, you automatically consent to chemical testing if arrested for DUI","You consent to vehicle search any time you are stopped","You must consent to field sobriety tests on request"],answer:1,exp:"By operating a vehicle on PA roads, you automatically consent to chemical testing (breath, blood, or urine) if lawfully arrested for DUI."},
  {id:66,module:"dui",q:"Refusing a chemical test after a DUI arrest results in:",img:null,options:["No penalty — refusing is your legal right","License suspension; the refusal can be used as evidence in court","A $50 fine only","Automatic DUI conviction on the spot"],answer:1,exp:"Refusing chemical testing results in license suspension (12 months for first refusal) and the refusal can be used as evidence against you in court."},
  {id:67,module:"dui",q:"The BAC limit for CDL (commercial) drivers in Pennsylvania is:",img:null,options:["0.08%","0.06%","0.04%","0.02%"],answer:2,exp:"Commercial drivers are held to a stricter 0.04% BAC limit — half the standard limit."},
  {id:68,module:"dui",q:"Is driving while impaired by marijuana legal in PA with a valid medical marijuana card?",img:null,options:["Yes, with a valid card","No — DUI applies to all impairing substances regardless of legality","Only for minor impairment below clinical thresholds","Yes, if using a medically approved dose"],answer:1,exp:"A medical marijuana card does not protect you from DUI. Driving while impaired by any substance — including legal medical marijuana — is illegal."},
  {id:69,module:"dui",q:"A DUI conviction stays on your Pennsylvania driving record for:",img:null,options:["3 years","5 years","10 years","Permanently"],answer:2,exp:"A DUI conviction remains on your PA driving record for 10 years."},
  {id:70,module:"dui",q:"PA's 'Highest BAC' tier (most severe penalties) begins at:",img:null,options:["0.10%","0.12%","0.15%","0.16%"],answer:3,exp:"The Highest BAC tier begins at 0.16% (or any controlled substance in blood). It carries the most severe first-offense penalties."},
  {id:71,module:"dui",q:"The ARD program allows first-time DUI offenders to:",img:null,options:["Avoid chemical testing at the time of arrest","Have charges dismissed without a permanent criminal record after completing requirements","Receive only a reduced fine with no other consequences","Drive immediately with an ignition interlock installed"],answer:1,exp:"The Accelerated Rehabilitative Disposition (ARD) program allows first-time DUI offenders to complete requirements and avoid a permanent criminal record."},
  {id:72,module:"dui",q:"Which of the following can result in a DUI charge in Pennsylvania?",img:null,options:["Alcohol only","Illegal drugs only","Alcohol, illegal drugs, prescription medications, or OTC drugs that impair driving","Only substances listed on the federal controlled substances schedule"],answer:2,exp:"DUI in PA applies to any substance — alcohol, illegal drugs, prescription medications, or over-the-counter drugs — that impairs your ability to drive safely."},

  // ── PARKING ──────────────────────────────────────────────
  {id:73,module:"parking",q:"How close to a fire hydrant may you legally park?",img:null,options:["10 feet","15 feet","20 feet","25 feet"],answer:1,exp:"You must park at least 15 feet from a fire hydrant in Pennsylvania."},
  {id:74,module:"parking",q:"How close to a stop sign may you legally park?",img:null,options:["10 feet","20 feet","30 feet","50 feet"],answer:2,exp:"You must not park within 30 feet of any flashing signal, stop sign, or yield sign."},
  {id:75,module:"parking",q:"How close to a railroad crossing may you legally park?",img:null,options:["20 feet","30 feet","50 feet","100 feet"],answer:2,exp:"You may not park within 50 feet of the nearest rail at a railroad crossing."},
  {id:76,module:"parking",q:"The fine for parking in a disabled space without a valid placard in PA starts at:",img:null,options:["$10","$50","$100","$250"],answer:1,exp:"Fines range from $50 to $200 per violation for unauthorized parking in disabled spaces, though municipalities may set higher amounts."},
  {id:77,module:"parking",q:"How close to a crosswalk at an intersection may you legally park?",img:null,options:["10 feet","20 feet","30 feet","50 feet"],answer:1,exp:"You may not park within 20 feet of a crosswalk at an intersection."},
  {id:78,module:"parking",q:"When parked downhill WITH a curb, your wheels should be turned:",img:null,options:["Away from the curb (left)","Toward the curb (right)","Straight ahead","Either direction — the parking brake is enough"],answer:1,exp:"Downhill with a curb: turn wheels RIGHT (toward the curb). If brakes fail, the car rolls into the curb and stops rather than rolling into traffic."},

  // ── LICENSING ────────────────────────────────────────────
  {id:79,module:"licensing",q:"The PA knowledge test has how many questions, and how many must you answer correctly?",img:null,options:["20 questions — 16 correct","18 questions — 15 correct (83%)","25 questions — 20 correct","15 questions — 12 correct"],answer:1,exp:"The PA knowledge test has 18 questions. You must answer at least 15 correctly (83%) to pass."},
  {id:80,module:"licensing",q:"A new PA resident with a valid out-of-state license must obtain a PA license within:",img:null,options:["30 days","60 days","90 days","6 months"],answer:1,exp:"New Pennsylvania residents must obtain a PA driver's license within 60 days of establishing residency."},
  {id:81,module:"licensing",q:"At how many points does PennDOT suspend a driver's license?",img:null,options:["6 points","8 points","10 points","11 points"],answer:3,exp:"At 11 points, PennDOT suspends the license (5 days per point over 10). At 6 points they send a warning and require a special exam."},
  {id:82,module:"licensing",q:"Failure to stop for a school bus with flashing red lights results in:",img:null,options:["A $100 fine only","2 points on license","60-day license suspension plus 5 points","Immediate license revocation"],answer:2,exp:"Failure to stop for a school bus displaying flashing red lights results in a 60-day suspension plus 5 points on your record."},
  {id:83,module:"licensing",q:"During Stage 2 (Junior License), how many non-family passengers under 18 may ride during the first 6 months?",img:null,options:["None","One","Two","No restriction on passengers"],answer:1,exp:"During the first 6 months of a Junior License (Stage 2), only 1 non-family passenger under 18 is permitted."},
  {id:84,module:"licensing",q:"How many supervised night driving hours are required before the PA road test for drivers under 18?",img:null,options:["5 hours","10 hours","15 hours","20 hours"],answer:1,exp:"Of the required 65 supervised hours, at least 10 must be at night."},

  // ── MIXED TOPICAL ────────────────────────────────────────
  {id:85,module:"signs",q:"This sign means:",img:"signs/regulatory/reg_reserved_parking_disabled.png",options:["Parking for motorcycles only","Reserved for vehicles with valid disabled placards or plates","Hospital parking zone","Compact cars only"],answer:1,exp:"The Reserved Parking (disabled) sign indicates parking reserved for vehicles displaying valid disabled placards or registration plates."},
  {id:86,module:"laws",q:"When driving through a work zone, PA law requires:",img:null,options:["Reduce speed by exactly 15 mph","Turn on headlights at all times — even in daylight","Double your following distance as the only requirement","Use hazard lights throughout the zone"],answer:1,exp:"PA law requires headlights on at all times in all posted work zones — not just active ones. Failure adds an extra $25 fine if pulled over for another infraction."},
  {id:87,module:"signs",q:"This sign means:",img:"signs/warning/warn_low_clearance.png",options:["Maximum load weight limit","The structure ahead has a height restriction — do not enter if your vehicle is taller","Low-flying aircraft area","Road dips ahead"],answer:1,exp:"Low Clearance signs mark structures with height restrictions. If your vehicle is taller than the posted clearance, do not enter."},
  {id:88,module:"laws",q:"You are on an entrance ramp merging onto a highway. You must:",img:null,options:["Stop at the end of the ramp and wait for a large gap","Accelerate to highway speed and yield to traffic already on the highway","Honk to signal your intent to merge","Merge immediately from any speed — entering drivers have priority"],answer:1,exp:"Accelerate to highway speed on the ramp and yield to highway traffic. It is illegal to pass a vehicle in an acceleration lane."},
  {id:89,module:"safe",q:"PA law requires all snow and ice to be cleared from your vehicle before driving because:",img:null,options:["It blocks your view","Flying debris can cause accidents and you may be liable","It can damage other vehicles","All of the above"],answer:3,exp:"All of the above — you are legally liable in PA if snow or ice flies off your vehicle and causes an accident or injury."},
  {id:90,module:"signals",q:"Ramp metering signals on highway entrance ramps:",img:null,options:["Give you the right of way to merge","Regulate the flow of traffic entering the highway — one vehicle per green","Signal that the highway is at capacity — wait for red to clear","Apply only to commercial vehicles"],answer:1,exp:"Ramp meters control entry flow during congestion. One car goes per green signal, but you still must find a safe gap in highway traffic."},
  {id:91,module:"signs",q:"Guide signs on expressways and highways are what color?",img:null,options:["Blue and white","Brown and white","Green and white","White and black"],answer:2,exp:"Highway and expressway guide signs are green with white lettering, providing direction, distance, and exit information."},
  {id:92,module:"safe",q:"What is the minimum tire tread depth required on Pennsylvania vehicles?",img:null,options:["1/16 inch","1/32 inch","2/32 inch","4/32 inch"],answer:2,exp:"Pennsylvania requires a minimum tire tread depth of 2/32 of an inch. Worn tires must be replaced to pass inspection."},
  {id:93,module:"laws",q:"You approach an uncontrolled intersection at the same time as a vehicle coming from your left. Who yields?",img:null,options:["You yield — the vehicle on your left has priority","The vehicle coming from the left yields to you","Neither — both must stop and the larger vehicle proceeds","Whichever vehicle is going faster has priority"],answer:1,exp:"At uncontrolled intersections, when arriving simultaneously, yield to the vehicle on your right. The vehicle approaching from your left yields to you."},
  {id:94,module:"parking",q:"Double parking (alongside a parked vehicle) is:",img:null,options:["Legal for up to 5 minutes for loading or unloading","Legal if your hazard lights are on","Illegal at all times","Legal in commercial zones during business hours"],answer:2,exp:"Double parking is illegal at all times in Pennsylvania — it blocks traffic flow and creates a hazard."},
  {id:95,module:"safe",q:"The main danger of driving alongside a large truck for an extended period is:",img:null,options:["Turbulence from the truck could damage your vehicle","You are in the truck's No-Zone blind spot and the driver cannot see you","The truck's weight creates dangerous road ruts","Trucks travel faster and may rear-end you"],answer:1,exp:"Lingering alongside a truck places you in its No-Zone. The truck driver cannot see you. Pass quickly and completely."},
  {id:96,module:"signs",q:"This signal means:",img:"signs/signals/sig_flashing_yellow_arrow.png",options:["Stop — a protected turn signal is required","You may turn but must yield to oncoming traffic and pedestrians","Proceed quickly during the gap in traffic","No turns permitted during this phase"],answer:1,exp:"A flashing yellow arrow permits turning but requires yielding to oncoming traffic and pedestrians. Oncoming traffic has a green light — your turn is unprotected."},
  {id:97,module:"dui",q:"Driving while impaired by a prescription painkiller is:",img:null,options:["Legal if you have a valid prescription","Legal as long as your BAC is under 0.08%","Still a DUI offense if the drug impairs your driving","Only a DUI if you exceed the prescribed dose"],answer:2,exp:"DUI applies to any substance that impairs driving, including legally prescribed medications. A valid prescription does not prevent a DUI charge."},
  {id:98,module:"licensing",q:"During the Junior Learner's Permit stage, what are the nighttime driving restrictions?",img:null,options:["No restriction if supervised","No driving between 11 PM and 5 AM","No driving between 9 PM and 6 AM","No driving after midnight"],answer:1,exp:"Junior permit holders may not drive between 11 PM and 5 AM, regardless of whether they have a supervisor."},
  {id:99,module:"laws",q:"When must you stop at a railroad crossing even if no gate is down?",img:null,options:["Only if a train is visible on the tracks","When red lights are flashing, when you can see or hear a train, or when a flagger stops you","Only if another vehicle has stopped","Only at crossings marked with a STOP sign"],answer:1,exp:"Stop at a railroad crossing any time red lights are flashing, you can see or hear a train approaching, or a flagger signals you to stop — whether or not gates are present."},
  {id:100,module:"safe",q:"PA's vehicle safety inspection must be performed at:",img:null,options:["Any auto parts store","A PennDOT-certified inspection station only","Any licensed mechanic's shop","A police-authorized facility"],answer:1,exp:"PA vehicles must pass annual safety inspections at PennDOT state-certified inspection stations only."}
],

// ─────────────────────────────────────────────────────────────
//  FLASHCARDS  (36 cards)
// ─────────────────────────────────────────────────────────────
flashcards: [
  {front:"What does a STOP sign require?",back:"A COMPLETE stop before the stop line or crosswalk. Slowing without fully stopping is illegal. Yield to all traffic and pedestrians before proceeding."},
  {front:"What does a YIELD sign mean?",back:"Slow down and give right-of-way to traffic and pedestrians. Stop only if necessary. You must have a safe gap before entering."},
  {front:"Flashing RED light — what do you do?",back:"Treat it exactly like a STOP sign. Come to a complete stop, then proceed when safe."},
  {front:"Flashing YELLOW light — what do you do?",back:"Slow down and proceed with caution. You do not need to stop."},
  {front:"Flashing YELLOW ARROW — what does it mean?",back:"You may turn in the arrow's direction but the turn is NOT protected. You must yield to oncoming traffic and pedestrians first."},
  {front:"What is the PA 4-second following distance rule?",back:"Watch the vehicle ahead pass a fixed point. Count 4 full seconds before reaching it. If you arrive sooner, you are following too closely. Increase to 5–6 seconds in rain; 6+ seconds in snow or ice."},
  {front:"PA BAC limit for drivers age 21+?",back:"0.08%. At or above this level you can be charged with DUI."},
  {front:"PA BAC limit for drivers under 21?",back:"0.02% — zero tolerance. Even one drink can trigger a DUI charge for underage drivers."},
  {front:"PA BAC limit for CDL (commercial) drivers?",back:"0.04% — half the standard limit."},
  {front:"Uphill parking WITH a curb — which way do you turn wheels?",back:"LEFT (away from curb). If the brakes fail, the car rolls back into the curb and stops."},
  {front:"Downhill parking — which way do you turn wheels?",back:"RIGHT (toward curb or road edge). The car rolls toward the curb rather than into traffic."},
  {front:"Uphill or downhill with NO curb — which way do you turn wheels?",back:"RIGHT (toward the road edge). The car rolls off the road away from traffic rather than into it."},
  {front:"What is Pennsylvania's Move Over Law?",back:"Move one lane away from stopped emergency, tow, or PennDOT vehicles with lights flashing. If you can't move over, slow to at least 20 mph below the posted limit."},
  {front:"What shape is a WARNING sign?",back:"Diamond (4-sided, rotated 45°). Usually yellow with black symbols or lettering."},
  {front:"What shape is a school zone sign?",back:"Pentagon (5 sides, pointing up). Yellow or fluorescent yellow-green. The only pentagon sign on roadways."},
  {front:"What does orange mean on road signs?",back:"Construction and work zones. Fines are doubled for violations in active work zones. PA law: headlights required in all posted work zones."},
  {front:"What is aggressive driving in PA?",back:"Committing 2 or more moving violations in a single incident: speeding, tailgating, illegal passing, running lights/stop signs, unsafe lane changes, failing to yield."},
  {front:"How many supervised driving hours are required before the PA road test (under 18)?",back:"65 total hours — at least 10 must be at night."},
  {front:"What is implied consent in Pennsylvania?",back:"By driving in PA you automatically consent to chemical testing (breath, blood, or urine) if lawfully arrested for DUI. Refusal = license suspension."},
  {front:"PA school zone speed limit when lights flash?",back:"15 mph. Violation = 3 points + fine."},
  {front:"At a 4-way stop, two cars arrive simultaneously. Who goes first?",back:"The car on the RIGHT has priority. The car on the left must yield."},
  {front:"Minimum tire tread depth in Pennsylvania?",back:"2/32 of an inch. Below this, tires must be replaced to pass inspection."},
  {front:"Minimum distance you must stop from a school bus with red lights flashing?",back:"10 feet. Failure to stop = 60-day license suspension + 5 points."},
  {front:"PA Junior License (Stage 2) night restriction — first 6 months?",back:"No driving between 11 PM and 5 AM (exceptions: work, school, volunteer fire/EMS with notarized affidavit)."},
  {front:"Double solid yellow lines — can you pass?",back:"NO. Double solid yellow = no passing permitted in either direction."},
  {front:"Solid + broken yellow combination — when can you pass?",back:"Only from the BROKEN LINE side. If the solid line is on your side, you may not pass."},
  {front:"What are the truck No-Zones (blind spots)?",back:"Front: 20 feet · Rear: 30 feet · Both sides. Rule: if you can't see the truck's mirrors, the driver can't see you."},
  {front:"How long does a DUI conviction stay on your PA record?",back:"10 years."},
  {front:"What is the ARD program?",back:"Accelerated Rehabilitative Disposition — allows first-time DUI offenders to complete requirements (education, fines, community service) and avoid a permanent criminal record."},
  {front:"At what point total does PennDOT suspend your PA license?",back:"11 points. At 6 points they send a warning letter and require a special exam."},
  {front:"Default PA speed limit: residential area?",back:"25 mph."},
  {front:"Default PA speed limit: business/urban district?",back:"35 mph."},
  {front:"Default PA speed limit: rural two-lane highway?",back:"55 mph."},
  {front:"Minimum clearance when passing a bicycle in PA?",back:"4 feet. PA law requires at least 4 feet of space when passing a cyclist."},
  {front:"PA no-parking distance from a fire hydrant?",back:"15 feet."},
  {front:"PA no-parking distance from a stop sign or flashing signal?",back:"30 feet."}
]

}; // end PA_DATA
