(function () {
  function person(x, y, scale, skin, clothes, hair) {
    return `<g transform="translate(${x} ${y}) scale(${scale})">
      <path d="M8 22Q4 6 19 3Q35 4 32 23L29 16Q20 11 11 18Z" fill="${hair}"/>
      <circle cx="20" cy="21" r="13" fill="${skin}"/>
      <path d="M15 22h1m8 0h1" stroke="#40392f" stroke-width="2" stroke-linecap="round"/>
      <path d="M17 28q3 3 6 0" fill="none" stroke="#8f5149" stroke-width="1.7" stroke-linecap="round"/>
      <path d="M7 43q13-8 26 0l6 39H1Z" fill="${clothes}"/>
      <path d="m7 48-8 22m34-22 8 19" fill="none" stroke="${skin}" stroke-width="7" stroke-linecap="round"/>
      <path d="m13 81-2 23m18-23 3 23" stroke="#655247" stroke-width="7" stroke-linecap="round"/>
      <path d="M6 105h8m12 0h9" stroke="#493e37" stroke-width="5" stroke-linecap="round"/>
    </g>`;
  }

  function scene(content, sky = '#f6e8cc', ground = '#d7e3c3') {
    return `<svg viewBox="0 0 720 430" role="img" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="720" height="430" fill="${sky}"/>
      <circle cx="606" cy="77" r="35" fill="#f2cb77" opacity=".8"/>
      <path d="M0 292Q130 258 260 296T520 288T720 278V430H0Z" fill="${ground}"/>
      <path d="M0 340Q160 315 320 346T720 330V430H0Z" fill="#fff8e9" opacity=".5"/>
      ${content}
    </svg>`;
  }

  const illustrations = {
    breadCard: scene(`<rect x="76" y="72" width="156" height="134" rx="8" fill="#e2f0e5" stroke="#fff9e9" stroke-width="10"/><path d="M154 74v130M78 139h152" stroke="#fff9e9" stroke-width="8"/><path d="M0 288h720v28H0Z" fill="#9d674c"/><path d="M45 316h18v90H45m590-90h18v90h-18" fill="#8b5a43"/><rect x="351" y="252" width="135" height="35" rx="3" transform="rotate(-8 351 252)" fill="#fff3d3"/><path d="m373 267 55-7m-50 17 42-6" stroke="#b97d4a" stroke-width="4" stroke-linecap="round"/>${person(260, 148, 1.16, '#9d6242', '#668c72', '#565044')}${person(454, 174, .93, '#d99a68', '#d97556', '#392f2a')}<ellipse cx="567" cy="278" rx="37" ry="13" fill="#b97847"/><path d="M543 276q23-34 47 0Z" fill="#f5d28b"/>`, '#f4e3bf', '#c4d5b6'),
    breadMix: scene(`<rect x="0" y="291" width="720" height="27" fill="#9d674c"/><path d="M35 318h17v91H35m630-91h17v91h-17" fill="#8b5a43"/><ellipse cx="352" cy="285" rx="104" ry="24" fill="#d68b51"/><path d="M251 274q14 65 101 65t101-65" fill="#f6e0b5" stroke="#b87949" stroke-width="8"/><ellipse cx="352" cy="272" rx="83" ry="20" fill="#f5d69c"/><path d="M276 263q78 25 153-2" fill="none" stroke="#fff6df" stroke-width="7" stroke-linecap="round"/><circle cx="176" cy="248" r="22" fill="#fff4d8"/><path d="M157 248h38m-19-19v38" stroke="#d7a955" stroke-width="4"/>${person(248, 145, 1.12, '#9d6242', '#668c72', '#565044')}${person(430, 172, .92, '#d99a68', '#d97556', '#392f2a')}<path d="M348 229q-18-17-10-28m13 29q18-17 10-28" fill="none" stroke="#8db177" stroke-width="5" stroke-linecap="round"/>`, '#f4e3bf', '#c4d5b6'),
    breadOven: scene(`<rect x="83" y="104" width="236" height="194" rx="13" fill="#c58359"/><rect x="111" y="133" width="180" height="138" rx="52" fill="#59463d"/><path d="M129 250q-2-75 72-77 73 4 70 77Z" fill="#efb761"/><path d="M167 204q20-25 43 0m-58 33q33-18 83 0" fill="none" stroke="#fff0c8" stroke-width="6" stroke-linecap="round"/><rect x="350" y="286" width="320" height="25" fill="#9d674c"/><path d="M381 311h17v90h-17m222-90h17v90h-17" fill="#8b5a43"/>${person(390, 150, 1.08, '#9d6242', '#668c72', '#565044')}${person(540, 173, .9, '#d99a68', '#d97556', '#392f2a')}<path d="M320 209q-19-14-4-29m14 30q17-17 2-29" fill="none" stroke="#f2cb77" stroke-width="5" stroke-linecap="round"/>`, '#f4e3bf', '#c4d5b6'),
    breadShare: scene(`<path d="M72 283q14-91 103-101 89 6 101 101Z" fill="#79a276"/><path d="M112 244q63-77 123 0" fill="none" stroke="#c2d99c" stroke-width="8"/><rect x="74" y="299" width="574" height="23" fill="#9d674c"/><path d="M110 322h17v79h-17m468-79h17v79h-17" fill="#8b5a43"/><ellipse cx="360" cy="282" rx="94" ry="18" fill="#fff1d2"/><path d="M287 279q20-55 73-43 50-8 74 43Z" fill="#e7ae65"/><path d="M332 254q24-18 47 0m-62 13q69 17 113 0" fill="none" stroke="#fff3d4" stroke-width="6" stroke-linecap="round"/>${person(207, 151, .88, '#9d6242', '#668c72', '#565044')}${person(344, 142, 1.02, '#d99a68', '#d97556', '#392f2a')}${person(488, 164, .86, '#684735', '#e1b54e', '#302b28')}`, '#dcecf0', '#bad0a4'),
    seedBox: scene(`<rect x="92" y="80" width="170" height="138" rx="8" fill="#e2f0e5" stroke="#fff9e9" stroke-width="10"/><path d="M177 83v132m-82-69h164" stroke="#fff9e9" stroke-width="8"/><rect x="300" y="275" width="305" height="27" fill="#a16f4d"/><path d="M330 302h18v94h-18m208-94h18v94h-18" fill="#8b5a43"/><rect x="398" y="231" width="125" height="48" rx="7" fill="#c97e4e"/><path d="M409 231v-17q48-34 102 0v17" fill="none" stroke="#965a40" stroke-width="8"/><path d="M422 248q15-12 30 0m18 0q15-12 30 0" fill="none" stroke="#f2d18a" stroke-width="5"/>${person(248, 150, 1.1, '#9d6242', '#6f9576', '#565044')}${person(468, 169, .9, '#d99a68', '#d97556', '#392f2a')}<path d="M575 253q-11-18 4-29m7 29q12-18 0-28" fill="none" stroke="#75a36e" stroke-width="5"/>`, '#f5e8c9', '#c6d9ac'),
    gardenPlant: scene(`<path d="M0 308q120-40 240 0t240 0 240 0v122H0Z" fill="#9c7658"/><path d="M0 349q120-35 240 0t240 0 240 0" fill="none" stroke="#d6b17c" stroke-width="5"/><path d="M0 385q120-35 240 0t240 0 240 0" fill="none" stroke="#d6b17c" stroke-width="5"/><path d="M154 315v-72m0 32q-47-37-61-4 30 29 61 4m0-16q39-41 58-12-24 34-58 12" fill="#62956d"/><path d="M555 303v-88m0 38q-47-37-61-4 30 29 61 4m0-19q39-41 58-12-24 34-58 12" fill="#62956d"/>${person(251, 153, 1.08, '#9d6242', '#6f9576', '#565044')}${person(445, 178, .89, '#d99a68', '#d97556', '#392f2a')}<path d="m379 249 20 48m-23-46 27 3-10 19" fill="none" stroke="#5685a0" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`, '#dcecf0', '#bad19e'),
    gardenRain: scene(`<path d="M55 170q34-50 82-2 48-47 84 1 43-49 90 2" fill="#a5b7c1"/><path d="m130 192-15 33m65-33-15 33m78-31-15 33" stroke="#74a5bd" stroke-width="6" stroke-linecap="round"/><path d="M0 311q130-35 260 0t260 0 200 0v119H0Z" fill="#9c7658"/><path d="M0 354q130-30 260 0t260 0 200 0" fill="none" stroke="#d6b17c" stroke-width="5"/><path d="M346 314v-80m0 35q-40-29-53-4 24 24 53 4m0-14q34-34 50-9-20 29-50 9" fill="#62956d"/><path d="M488 309v-52m0 24q-30-24-40-3 19 19 40 3m0-10q26-27 39-7-15 23-39 7" fill="#62956d"/>${person(182, 170, 1.02, '#9d6242', '#6f9576', '#565044')}${person(374, 187, .85, '#d99a68', '#d97556', '#392f2a')}<path d="M528 265q14-16 29 0l-4 37h-24Z" fill="#d3864f"/><path d="M542 265v-27" stroke="#5685a0" stroke-width="5"/>`, '#dcecf0', '#bad19e'),
    gardenShare: scene(`<path d="M0 297q120-39 240 0t240 0 240 0v133H0Z" fill="#9c7658"/><path d="M70 282q-10-75 64-91 77 17 60 91Z" fill="#6a9c70"/><path d="M84 255q40-41 97 0m-90-24q34-38 78 0" fill="none" stroke="#b6d28e" stroke-width="8"/><rect x="255" y="273" width="390" height="22" fill="#a16f4d"/><path d="M289 295h17v81h-17m302-81h17v81h-17" fill="#8b5a43"/><path d="M355 268q14-31 31 0m8 0q15-39 30 0m15 0q14-28 29 0" fill="none" stroke="#d77d50" stroke-width="10" stroke-linecap="round"/><circle cx="367" cy="253" r="12" fill="#e5bc59"/><circle cx="421" cy="247" r="12" fill="#d86a54"/>${person(126, 158, .88, '#9d6242', '#6f9576', '#565044')}${person(326, 152, 1, '#d99a68', '#d97556', '#392f2a')}${person(526, 163, .85, '#684735', '#e1b54e', '#302b28')}`, '#f5e8c9', '#c6d9ac'),
    lanternMake: scene(`<rect x="75" y="82" width="148" height="127" rx="8" fill="#d6e8eb" stroke="#fff8e8" stroke-width="9"/><path d="M149 84v124m-72-62h144" stroke="#fff8e8" stroke-width="7"/><rect x="110" y="295" width="510" height="23" fill="#8e604c"/><path d="M145 318h16v86h-16m424-86h16v86h-16" fill="#765142"/><path d="M330 248h84l-8 44h-68Z" fill="#e9bb62"/><path d="M342 248v-11q30-27 60 0v11m-30 0v44" fill="none" stroke="#d98654" stroke-width="5"/><path d="m353 266 38 0m-31 13h25" stroke="#fff1c8" stroke-width="4"/>${person(218, 154, 1.08, '#684735', '#668c72', '#302b28')}${person(435, 174, .88, '#d99a68', '#d97556', '#392f2a')}<path d="M470 227q20-19 39 0v13h-39Z" fill="#e3a850"/>`, '#dce9ef', '#b9c9b8'),
    lanternLight: scene(`<path d="M0 310q140-46 280 0t280 0 160 0v120H0Z" fill="#7f8e84"/><path d="M61 306q18-106 98-124 78 27 90 124Z" fill="#4e795b"/><path d="M78 251q46-55 150 0" fill="none" stroke="#a5c181" stroke-width="9"/><path d="M348 280V174m-45 0h90l-9 82h-72Z" fill="#e2a74e" stroke="#fff0bd" stroke-width="6"/><path d="M330 174q18-32 37 0m-19 0v80" fill="none" stroke="#fff0bd" stroke-width="5"/><circle cx="349" cy="217" r="70" fill="#f4ce79" opacity=".16"/>${person(191, 170, 1.02, '#684735', '#668c72', '#302b28')}${person(425, 188, .84, '#d99a68', '#d97556', '#392f2a')}<circle cx="570" cy="89" r="42" fill="#f5e7bc"/><circle cx="586" cy="78" r="42" fill="#94a4ae"/>`, '#8598a7', '#a5b39a'),
    lanternWalk: scene(`<path d="M0 313q120-60 240 0t240 0 240 0v117H0Z" fill="#687f70"/><path d="M43 296q22-143 92-152 71 20 84 152Zm466 0q18-147 85-162 72 26 83 162Z" fill="#52795c"/><path d="M82 287q57-20 114 0m354 0q52-20 104 0" stroke="#a8c18a" stroke-width="8"/><path d="M352 298V185m-38 0h76l-8 72h-60Z" fill="#e2a74e" stroke="#fff0bd" stroke-width="5"/><path d="M326 185q26-32 52 0m-26 0v72" fill="none" stroke="#fff0bd" stroke-width="4"/><path d="M462 281V211m-29 0h58l-6 55h-46Z" fill="#db8055" stroke="#ffe0a2" stroke-width="4"/>${person(184, 176, .91, '#684735', '#668c72', '#302b28')}${person(346, 167, 1, '#d99a68', '#d97556', '#392f2a')}${person(513, 184, .82, '#9d6242', '#e1b54e', '#565044')}<circle cx="581" cy="75" r="28" fill="#f4dfaa"/>`, '#788998', '#a4b693'),
    lanternMorning: scene(`<path d="M0 304q145-45 290 0t290 0 140 0v126H0Z" fill="#9bb783"/><path d="M65 305q-5-105 85-139 91 29 82 139Z" fill="#648a60"/><path d="M86 245q60-49 135 0" fill="none" stroke="#bdd294" stroke-width="10"/><rect x="312" y="257" width="111" height="25" rx="3" fill="#8e604c"/><path d="M338 255v-74h58v74Z" fill="#e4a953" stroke="#fff0bd" stroke-width="5"/><path d="M338 181q29-32 58 0m-29 0v74" fill="none" stroke="#fff0bd" stroke-width="4"/><path d="M520 255q-40-47-75 0" fill="none" stroke="#88a86e" stroke-width="7"/>${person(206, 154, 1.08, '#684735', '#668c72', '#302b28')}${person(407, 174, .91, '#d99a68', '#d97556', '#392f2a')}<path d="M481 264q-15-26 3-40m8 39q19-22 3-39" fill="none" stroke="#6e9a6c" stroke-width="5"/>`, '#f4e3bf', '#c6d9ac'),
  };

  window.PICTURE_BOOKS = [
    {
      id: 'bread', category: 'Family recipes', title: 'The Recipe with No Numbers',
      summary: 'A young baker learns that some recipes live in our hands, not on a page.',
      art: 'breadCard',
      pages: [
        { title: 'A floury old card', art: 'breadCard', text: 'Amira found a floury card in Nana Laila’s kitchen. There were no cups or numbers on it. “How will we know what to add?” Amira asked. Nana smiled. “We will learn with our hands.”' },
        { title: 'Soft as a pillow', art: 'breadMix', text: 'Nana showed Amira how to mix the dough. Add a little water. Fold it gently. Feel it again. “Now it is soft as a pillow,” Nana said. Amira tried, and soon her hands knew.' },
        { title: 'Warm from the oven', art: 'breadOven', text: 'While the bread baked, the kitchen filled with a warm, toasty smell. Amira set the table. Nana told her who had taught her this recipe, many years ago.' },
        { title: 'A recipe to share', art: 'breadShare', text: 'They shared the bread with their neighbors. The next week, Amira showed her cousin how the dough should feel. The recipe traveled on, from one pair of caring hands to another.' },
      ],
    },
    {
      id: 'seeds', category: 'Growing together', title: 'The Seed Box',
      summary: 'Two generations save seeds, care for a garden, and share what grows.',
      art: 'seedBox',
      pages: [
        { title: 'A little wooden box', art: 'seedBox', text: 'Grandpa Ravi opened a little wooden box. Inside were seeds from last summer’s garden. “These tiny seeds hold a whole new garden,” he told Mira.' },
        { title: 'Make room in the soil', art: 'gardenPlant', text: 'Together they made small rows in the earth. Grandpa showed Mira how deep each seed should go. Mira tucked them in and patted the soil like a blanket.' },
        { title: 'A rainy day helper', art: 'gardenRain', text: 'Rain tapped the garden roof. Mira worried the seeds would be lonely underground. “Roots grow quietly,” said Grandpa. “We give them time, water, and a little sunshine.”' },
        { title: 'Seeds for next year', art: 'gardenShare', text: 'Soon the garden was full of bright tomatoes and green leaves. Mira saved a few seeds in the wooden box. Next year, she would teach a friend how to plant them.' },
      ],
    },
    {
      id: 'lanterns', category: 'Community traditions', title: 'Lanterns at Dusk',
      summary: 'A child and her elder make a lantern for a neighborhood evening walk.',
      art: 'lanternMake',
      pages: [
        { title: 'Paper, string, and a story', art: 'lanternMake', text: 'When evening came, Leena helped Auntie Noor make a paper lantern. As they folded and tied the string, Auntie told her how neighbors used to gather here after the harvest.' },
        { title: 'A small light', art: 'lanternLight', text: 'They placed a little light inside. It glowed like a tiny moon. “We carry it carefully,” Auntie said. Leena held the handle with both hands.' },
        { title: 'Along the garden path', art: 'lanternWalk', text: 'Friends and neighbors met beneath the trees. One by one, their lanterns shone along the path. People waved, walked together, and shared stories from their own families.' },
        { title: 'A new story joins', art: 'lanternMorning', text: 'The next morning, Leena told her little brother about the walk. Then she showed him how to fold a lantern. Their family tradition had room for one more story.' },
      ],
    },
  ];

  window.pictureBookIllustration = function (sceneName) {
    return illustrations[sceneName] || illustrations.breadCard;
  };
})();