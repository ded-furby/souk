// Shot lists for render.mjs. Framing is anchored on bones so before/after sheets line up exactly.
// The rigged monkey faces +Z; camera `dir` is the direction from the anchor to the camera.
const S = 560;
const body = (name, clip, t, dir, extra = {}) => ({ name, clip, t, target: [0, 0.3, 0], dir, dist: 1.75, w: S, h: S, ...extra });
const face = (name, clip, t, dir, extra = {}) => ({ name, clip, t, target: 'head', offset: [0, 0.07, 0], dir, dist: 0.62, w: S, h: S, ...extra });
const tail = (name, clip, t, dir, extra = {}) => ({ name, clip, t, target: 'tail_2', dir, dist: 0.95, w: S, h: S, ...extra });

export const SETS = {
  // first look at the model: all around, face, tail
  overview: [
    body('front', 'stand_idle', 0.5, [0, 0.12, 1]),
    body('threeq', 'stand_idle', 0.5, [0.7, 0.2, 0.75]),
    body('side', 'stand_idle', 0.5, [1, 0.1, 0]),
    body('back', 'stand_idle', 0.5, [-0.4, 0.25, -1]),
    face('face_front', 'stand_idle', 0.5, [0, 0.05, 1]),
    face('face_threeq', 'stand_idle', 0.5, [0.65, 0.1, 0.75]),
    face('face_side', 'stand_idle', 0.5, [1, 0.05, 0.1]),
    tail('tail_side', 'stand_idle', 0.5, [-1, 0.2, 0.1]),
  ],
  // the before/after comparison sheet: full body front / 3-4, face close-up, tail — in idle (sitting), walk and sit
  compare: [
    body('idle_front', 'idle', 1.0, [0, 0.12, 1]),
    body('idle_threeq', 'idle', 1.0, [0.7, 0.2, 0.75]),
    face('idle_face', 'idle', 1.0, [0.25, 0.05, 1]),
    tail('idle_tail', 'idle', 1.0, [-0.75, 0.3, -0.65]),
    body('stand_front', 'stand_idle', 0.5, [0, 0.12, 1]),
    body('stand_threeq', 'stand_idle', 0.5, [0.7, 0.2, 0.75]),
    face('stand_face', 'stand_idle', 0.5, [0.0, 0.05, 1]),
    tail('stand_tail', 'stand_idle', 0.5, [-1, 0.2, 0.1]),
    body('walk_front', 'walk', 0.3, [0, 0.12, 1]),
    body('walk_threeq', 'walk', 0.3, [0.7, 0.2, 0.75]),
    face('walk_face', 'walk', 0.3, [0.55, 0.08, 0.8]),
    tail('walk_tail', 'walk', 0.3, [-1, 0.2, 0.1]),
    body('sit_front', 'sit_down', 1.3, [0, 0.12, 1]),
    body('sit_threeq', 'sit_down', 1.3, [0.7, 0.2, 0.75]),
    face('sit_face', 'sit_down', 1.3, [-0.55, 0.08, 0.8]),
    tail('sit_tail', 'sit_down', 1.3, [-0.75, 0.3, -0.65]),
  ],
  // as he is usually seen: small on screen
  distance: [
    body('far_front', 'stand_idle', 0.5, [0.15, 0.25, 1], { dist: 5.5, w: 640, h: 360 }),
    body('far_threeq', 'idle', 1.0, [0.7, 0.3, 0.75], { dist: 5.5, w: 640, h: 360 }),
    body('mid_front', 'stand_idle', 0.5, [0.1, 0.2, 1], { dist: 3.2, w: 640, h: 360 }),
    body('mid_walk', 'walk', 0.3, [0.6, 0.2, 0.8], { dist: 3.2, w: 640, h: 360 }),
  ],
};

// every clip at several times, 3/4 front and 3/4 back (used for the animation check sheets)
const CLIPS = { idle: 4.03, stand_idle: 3.37, walk: 1.1, run: 0.7, beckon: 2.0, point: 2.0, excited: 1.53, look_around: 3.0, dig: 1.53, reach_touch: 2.5, surprised: 1.5, sit_down: 1.33 };
SETS.clips = [];
SETS.clipsBack = [];
for (const [c, d] of Object.entries(CLIPS))
  for (let k = 0; k < 6; k++) {
    const t = (d * k) / 5.001;
    SETS.clips.push(body(`${c}_${k}`, c, t, [0.7, 0.2, 0.75], { w: 360, h: 360, dist: 2.0 }));
    SETS.clipsBack.push(body(`${c}_${k}`, c, t, [-0.85, 0.3, -0.5], { w: 360, h: 360, dist: 2.0 }));
  }

// Before/after contact sheet (tools/monkey/contact.py pairs the two renders). Fixed world cameras, so both models are
// seen from exactly the same place whatever their skinning does.
const fixed = (name, clip, t, target, dir, dist, extra = {}) => ({ name, clip, t, target, dir, dist, w: 420, h: 420, ...extra });
const BODY = [0, 0.3, 0], FACE = [0.1, 0.43, 0.12], PLAYER = [0.2, 1.6, 2.2]; // PLAYER: eye of someone standing 2 m in front
SETS.sheet = [
  fixed('front', 'idle', 1.0, BODY, [0, 0.12, 1], 1.9),
  fixed('three_quarter', 'idle', 1.0, BODY, [0.7, 0.2, 0.75], 1.9),
  fixed('side', 'idle', 1.0, BODY, [1, 0.1, 0], 1.9),
  fixed('back', 'idle', 1.0, BODY, [-0.4, 0.25, -1], 1.9),
  fixed('face_front', 'idle', 1.0, FACE, [0.1, 0.05, 1], 0.62),
  fixed('face_three_quarter', 'idle', 1.0, FACE, [0.7, 0.1, 0.72], 0.62),
  fixed('tail', 'idle', 1.0, [-0.17, 0.27, -0.06], [-0.3, 0.2, -1], 0.95),
  fixed('top_down_fez', 'idle', 1.0, [0.07, 0.5, 0.05], [0.02, 1, 0.3], 0.9),
  fixed('in_game_looking_at_player', 'stand_idle', 0.5, BODY, [0.1, 0.45, 1], 1.9, { aim: PLAYER }),
  fixed('in_game_face', 'stand_idle', 0.5, [0.09, 0.42, 0.08], [0.1, 0.5, 1], 0.8, { aim: PLAYER }),
  fixed('in_game_looking_left', 'stand_idle', 0.5, BODY, [0.1, 0.45, 1], 1.9, { aim: [2.0, 1.6, 0.8] }),
  fixed('walk_a', 'walk', 0.3, BODY, [0.7, 0.2, 0.75], 1.9),
  fixed('walk_b', 'walk', 0.85, BODY, [0.7, 0.2, 0.75], 1.9),
  fixed('beckon_a', 'beckon', 0.8, BODY, [0.7, 0.2, 0.75], 1.9),
  fixed('beckon_b', 'beckon', 1.3, BODY, [-0.5, 0.2, 0.85], 1.9),
  fixed('sit_down_a', 'sit_down', 0.6, BODY, [0.7, 0.2, 0.75], 1.9),
  fixed('sit_down_b', 'sit_down', 1.3, BODY, [0.7, 0.2, 0.75], 1.9),
  fixed('excited', 'excited', 0.6, BODY, [0.7, 0.2, 0.75], 1.9),
];
