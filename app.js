const DATABASE_NAME = 'kinfolk-oral-history';
const STORE_NAME = 'stories';
const databaseVersion = 1;

const HISTORY_FEATURES = [
  {
    title: 'Migrant Mother',
    date: 'NIPOMO, CALIFORNIA · 1936',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Lange-MigrantMother02.jpg/960px-Lange-MigrantMother02.jpg',
    alt: 'Florence Owens Thompson with her children, photographed by Dorothea Lange in 1936.',
    story: 'Dorothea Lange photographed Florence Owens Thompson and her children for the Farm Security Administration during the Great Depression. The images became widely known; Thompson’s own story is more than a caption.',
    credit: 'Dorothea Lange · Library of Congress · Public domain',
    source: 'https://hdl.loc.gov/loc.pnp/fsa.8b29516',
    sourceLabel: 'Library of Congress record',
    imageSource: 'https://commons.wikimedia.org/wiki/File:Lange-MigrantMother02.jpg',
  },
  {
    title: 'A child reading at Manzanar',
    date: 'MANZANAR, CALIFORNIA · 1942',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Reading_the_Funnies%2C_Photo_by_Dorthy_Lange_at_the_Manzanar_War_Relocation_Center.jpg/960px-Reading_the_Funnies%2C_Photo_by_Dorthy_Lange_at_the_Manzanar_War_Relocation_Center.jpg',
    alt: 'A child reads a comic at Manzanar, photographed by Dorothea Lange in 1942.',
    story: 'This photograph records an ordinary moment inside Manzanar, one of the camps where Japanese Americans were incarcerated during World War II. Everyday details help keep individual lives visible in the historical record.',
    credit: 'Dorothea Lange · National Park Service / National Archives · Public domain',
    source: 'https://www.nps.gov/manz/learn/historyculture/index.htm',
    sourceLabel: 'Manzanar National Historic Site',
    imageSource: 'https://commons.wikimedia.org/wiki/File:Reading_the_Funnies,_Photo_by_Dorthy_Lange_at_the_Manzanar_War_Relocation_Center.jpg',
  },
  {
    title: 'March on Washington',
    date: 'WASHINGTON, D.C. · AUGUST 28, 1963',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/Civil_Rights_March_on_Washington%2C_D.C._%28Dr._Martin_Luther_King%2C_Jr._and_Mathew_Ahmann_in_a_crowd.%29_-_NARA_-_542015_-_Restoration.jpg/960px-Civil_Rights_March_on_Washington%2C_D.C._%28Dr._Martin_Luther_King%2C_Jr._and_Mathew_Ahmann_in_a_crowd.%29_-_NARA_-_542015_-_Restoration.jpg',
    alt: 'Martin Luther King Jr. and Mathew Ahmann among participants at the 1963 March on Washington.',
    story: 'More than 200,000 people gathered for the March on Washington for Jobs and Freedom. This National Archives photograph shows Dr. Martin Luther King Jr. among the crowd, placing collective action in the frame.',
    credit: 'Rowland Scherman · U.S. National Archives · Public domain',
    source: 'https://www.archives.gov/research/african-americans/civil-rights/march-on-washington',
    sourceLabel: 'National Archives',
    imageSource: 'https://commons.wikimedia.org/wiki/File:Civil_Rights_March_on_Washington,_D.C._(Dr._Martin_Luther_King,_Jr._and_Mathew_Ahmann_in_a_crowd.)_-_NARA_-_542015_-_Restoration.jpg',
  },
];

const STORY_COLLECTIONS = [
  ['Home & food', 'The recipe remembered by feel', 'What did an elder teach you to cook without measuring?'],
  ['Home & food', 'A meal for a special day', 'Which foods made a holiday or gathering feel different from an ordinary day?'],
  ['Home & food', 'Preserving the harvest', 'How did your family store, dry, pickle, or preserve food for another season?'],
  ['Home & food', 'The neighborhood oven', 'Where did people bake, share meals, or exchange ingredients?'],
  ['Home & food', 'Tea, coffee, and visiting', 'What were the small rituals of welcoming someone into the home?'],
  ['Home & food', 'The first meal after a journey', 'What food meant home after a long trip or a move?'],
  ['Seasons & ceremony', 'A new year in the old calendar', 'How did elders mark the beginning of a year or a new season?'],
  ['Seasons & ceremony', 'Preparing for a community festival', 'Who did the work that made the celebration possible?'],
  ['Seasons & ceremony', 'The harvest gathering', 'What customs brought neighbors together at harvest time?'],
  ['Seasons & ceremony', 'A wedding remembered', 'Which wedding customs mattered most to the people who took part?'],
  ['Seasons & ceremony', 'Welcoming a new child', 'How did relatives or neighbors welcome a baby and support the family?'],
  ['Seasons & ceremony', 'Remembering those who died', 'How did your family honor people who were no longer here?'],
  ['Land & knowledge', 'Reading weather and sky', 'What signs in clouds, wind, plants, or stars did elders watch for?'],
  ['Land & knowledge', 'Planting by local knowledge', 'What did experienced growers know about soil, seed, and timing?'],
  ['Land & knowledge', 'A place that changed', 'How did a river, forest, shoreline, or neighborhood change within an elder’s lifetime?'],
  ['Land & knowledge', 'Making and mending clothes', 'Who taught the family to sew, repair, weave, or care for clothing?'],
  ['Land & knowledge', 'A craft passed between hands', 'What object or craft carries a skill learned from an older relative?'],
  ['Land & knowledge', 'A traditional home', 'How did people build, arrange, or adapt homes for the local climate and community?'],
  ['Songs & stories', 'A lullaby that stayed', 'What song did elders sing, and what do they remember about learning it?'],
  ['Songs & stories', 'The story told around the table', 'Which story was retold at family gatherings, and how did it change over time?'],
  ['Songs & stories', 'Music for work', 'What songs or rhythms helped people work together or keep time?'],
  ['Songs & stories', 'A dance at a gathering', 'Who taught the steps, and when did people dance together?'],
  ['Songs & stories', 'A saying with a story behind it', 'What local phrase did elders use, and what did it mean in its original setting?'],
  ['Songs & stories', 'How news used to travel', 'How did people share important news before phones or the internet?'],
  ['Work & community', 'The first day on the job', 'What was an elder’s first paid job, apprenticeship, or family responsibility?'],
  ['Work & community', 'Market day', 'What did people buy, sell, barter, or learn at the local market?'],
  ['Work & community', 'Neighbors building together', 'When did a community come together to build, repair, or prepare something?'],
  ['Work & community', 'Caring across generations', 'How did relatives share the work of raising children or caring for elders?'],
  ['Work & community', 'A skill from a former occupation', 'What knowledge from an elder’s work is still useful today?'],
  ['Work & community', 'Leaving and carrying home along', 'Which customs, words, or recipes traveled with a family after migration?'],
  ['Belonging & memory', 'A name and its meaning', 'Who chose an elder’s name, and what story or hope came with it?'],
  ['Belonging & memory', 'A rite of passage', 'What marked a transition into adulthood, a new role, or greater responsibility?'],
  ['Belonging & memory', 'An heirloom with a history', 'What object has been passed down, and what does its keeper want remembered?'],
  ['Belonging & memory', 'Visiting elders', 'What did showing respect and care for older people look like in daily life?'],
  ['Belonging & memory', 'A language nearly lost', 'Which words, expressions, or ways of speaking does an elder hope will continue?'],
  ['Belonging & memory', 'A tradition that changed', 'Which custom has changed across generations, and what do elders think should remain?'],
  ['Learning & memory', 'The walk to school', 'Who walked with you, and what did you notice along the way?'],
  ['Learning & memory', 'A lesson outside the classroom', 'What important skill did you learn from family, neighbors, or the land?'],
  ['Learning & memory', 'A toy made by hand', 'What did children make or invent when a store-bought toy was not available?'],
  ['Everyday life', 'A letter that traveled far', 'Who exchanged letters, and what did people look forward to hearing?'],
  ['Everyday life', 'The neighborhood meeting place', 'Where did people gather, and what kinds of news or help were shared there?'],
  ['Everyday life', 'A game everyone knew', 'What rules, rhymes, or equipment made a local game special?'],
  ['Care & connection', 'When neighbors helped', 'How did people show up for one another during a difficult time?'],
  ['Care & connection', 'Welcoming a newcomer', 'What helped a new neighbor or family feel that they belonged?'],
  ['Care & connection', 'A photograph behind the story', 'Who is in a family photo, and what would they want remembered about that day?'],
  ['Language & belonging', 'Words used at home', 'Which languages or expressions did people use in different places or with different generations?'],
  ['Language & belonging', 'A name spoken with care', 'How should a name be pronounced, and what story does its owner want to share?'],
  ['Language & belonging', 'A saying for hard times', 'What words helped people keep going, and who first said them?'],
];

const AUDIO_SCRIPTS = [
  {
    category: 'Family & home',
    title: 'The family table',
    questions: [
      'What meal takes you back to a particular person or place?',
      'Who taught you to make it, and how did they teach you?',
      'What sounds, smells, or small details do you remember?',
      'When did your family make this meal together?',
      'Has the recipe changed as it passed between people?',
      'What would you like the next generation to know about it?',
    ],
  },

  {
    category: 'Childhood & place',
    title: 'A place you knew by heart',
    questions: [
      'What place from your childhood can you still picture clearly?',
      'What did a day there sound and feel like?',
      'Who else shared that place with you?',
      'What has changed there, and what has stayed with you?',
      'Is there a story about that place you have not told before?',
      'What do you hope someone remembers about it?',
    ],
  },
  {
    category: 'Work & craft',
    title: 'A skill learned over time',
    questions: [
      'What work or craft did you spend time learning?',
      'Who first showed you how to do it?',
      'What did a beginner usually get wrong?',
      'Can you describe the tools and the steps in your own words?',
      'How did this work support your family or community?',
      'Is there a part of this knowledge you would like to pass on?',
    ],
  },
  {
    category: 'Culture & celebration',
    title: 'Getting ready for a celebration',
    questions: [
      'Which celebration or seasonal gathering stands out to you?',
      'How did people prepare before the day arrived?',
      'What music, clothing, foods, or greetings do you remember?',
      'Who had a role in making the gathering happen?',
      'How has the tradition changed in your lifetime?',
      'Are there parts that should stay private or be shared only in a certain way?',
    ],
  },
  {
    category: 'Migration & belonging',
    title: 'Carrying home with you',
    questions: [
      'What journey or move changed your life?',
      'What did you bring that helped you feel connected to home?',
      'Who helped you settle or find your way?',
      'What was difficult to explain to people in your new community?',
      'Which language, custom, or recipe did you keep close?',
      'What would you like younger relatives to understand about that time?',
    ],
  },
  {
    category: 'Wisdom & memory',
    title: 'A lesson worth keeping',
    questions: [
      'What advice did an older person give you that stayed with you?',
      'When did you understand what they meant?',
      'What is something you learned the hard way?',
      'Which family or community saying captures that lesson?',
      'Has your view of the lesson changed over time?',
      'What question would you like someone to ask you next?',
    ],
  },
];

const TRANSLATION_LANGUAGES = [
  ['en', 'English (original)'], ['es', 'Español'], ['fr', 'Français'], ['hi', 'हिन्दी'],
  ['ur', 'اردو'], ['bn', 'বাংলা'], ['ar', 'العربية'], ['zh-CN', '中文'], ['ja', '日本語'],
  ['ko', '한국어'], ['pt', 'Português'], ['ru', 'Русский'], ['sw', 'Kiswahili'],
  ['de', 'Deutsch'], ['it', 'Italiano'], ['tr', 'Türkçe'], ['vi', 'Tiếng Việt'],
  ['id', 'Bahasa Indonesia'], ['ne', 'नेपाली'], ['pa', 'ਪੰਜਾਬੀ'], ['mr', 'मराठी'],
  ['ta', 'தமிழ்'], ['te', 'తెలుగు'], ['gu', 'ગુજરાતી'], ['th', 'ไทย'], ['fa', 'فارسی'],
  ['he', 'עברית'], ['nl', 'Nederlands'], ['yo', 'Yorùbá'], ['ha', 'Hausa'],
  ['am', 'አማርኛ'], ['pl', 'Polski'], ['uk', 'Українська'], ['el', 'Ελληνικά'],
  ['ro', 'Română'], ['tl', 'Filipino'], ['so', 'Soomaali'], ['da', 'Dansk'],
  ['fi', 'Suomi'], ['sv', 'Svenska'], ['no', 'Norsk'], ['other', 'Other language...'],
];

const elements = {
  dialog: document.querySelector('#storyDialog'),
  form: document.querySelector('#storyForm'),
  list: document.querySelector('#storyList'),
  detail: document.querySelector('#storyDetail'),
  search: document.querySelector('#searchStories'),
  tagFilters: document.querySelector('#tagFilters'),
  storyCount: document.querySelector('#storyCount'),
  navCount: document.querySelector('#navCount'),
  resultCount: document.querySelector('#resultCount'),
  title: document.querySelector('#storyTitle'),
  modeSwitch: document.querySelector('.mode-switch'),
  recordingBox: document.querySelector('#recordingBox'),
  narrativeField: document.querySelector('#narrativeField'),
  narrative: document.querySelector('#storyNarrative'),
  storyteller: document.querySelector('#storyteller'),
  place: document.querySelector('#storyPlace'),
  date: document.querySelector('#storyDate'),
  tags: document.querySelector('#storyTags'),
  context: document.querySelector('#storyContext'),
  transcript: document.querySelector('#storyTranscript'),
  transcriptField: document.querySelector('#transcriptField'),
  photoFile: document.querySelector('#storyPhoto'),
  photoCaption: document.querySelector('#photoCaption'),
  photoPreviewWrap: document.querySelector('#photoPreviewWrap'),
  photoPreview: document.querySelector('#photoPreview'),
  photoName: document.querySelector('#photoName'),
  historyView: document.querySelector('#historyView'),
  collectionView: document.querySelector('#collectionView'),
  historyFeatures: document.querySelector('#historyFeatures'),
  audioScripts: document.querySelector('#audioScripts'),
  recordingScript: document.querySelector('#recordingScript'),
  recordingScriptTitle: document.querySelector('#recordingScriptTitle'),
  recordingQuestions: document.querySelector('#recordingQuestions'),
  storyCollections: document.querySelector('#storyCollections'),
  pictureBooksView: document.querySelector('#pictureBooksView'),
  pictureBookLibrary: document.querySelector('#pictureBookLibrary'),
  pictureBookGrid: document.querySelector('#pictureBookGrid'),
  storybookReader: document.querySelector('#storybookReader'),
  storybookArt: document.querySelector('#storybookArt'),
  storybookCategory: document.querySelector('#storybookCategory'),
  storybookTitle: document.querySelector('#storybookTitle'),
  storybookPageNumber: document.querySelector('#storybookPageNumber'),
  storybookText: document.querySelector('#storybookText'),
  readerProgress: document.querySelector('#readerProgress'),
  previousBookPage: document.querySelector('#previousBookPage'),
  nextBookPage: document.querySelector('#nextBookPage'),
  readPageAloud: document.querySelector('#readPageAloud'),
  narrationStatus: document.querySelector('#narrationStatus'),
  storybookLanguage: document.querySelector('#storybookLanguage'),
  customBookLanguage: document.querySelector('#customBookLanguage'),
  translateBookButton: document.querySelector('#translateBookButton'),
  scriptLanguage: document.querySelector('#scriptLanguage'),
  customScriptLanguage: document.querySelector('#customScriptLanguage'),
  audioFile: document.querySelector('#audioFile'),
  audioPreview: document.querySelector('#audioPreview'),
  recordButton: document.querySelector('#recordButton'),
  recordButtonText: document.querySelector('#recordButtonText'),
  pauseButton: document.querySelector('#pauseButton'),
  recordingLight: document.querySelector('#recordingLight'),
  recordingStatus: document.querySelector('#recordingStatus'),
  recordingTime: document.querySelector('#recordingTime'),
  recordingHint: document.querySelector('#recordingHint'),
  saveButton: document.querySelector('#saveStory'),
  formMessage: document.querySelector('#formMessage'),
  toast: document.querySelector('#toast'),
};

let database;
let stories = [];
let selectedStoryId = null;
let activeTag = '';
let captureMode = 'write';
let activeAudioScript = null;
let activePictureBook = null;
let activeBookPage = 0;
let activeBookTranslation = null;
const translatedScripts = new Map();
const translatedBooks = new Map();
const translatedTextCache = new Map();
let recorder = null;
let recorderStream = null;
let recordingParts = [];
let recordingBlob = null;
let recordingStartedAt = 0;
let elapsedBeforePause = 0;
let recordingTicker = null;
let previewUrl = null;
let detailAudioUrl = null;
let detailPhotoUrl = null;
let photoPreviewUrl = null;
let storyPhoto = null;
let recordingDurationSeconds = 0;
let toastTimeout = null;

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DATABASE_NAME, databaseVersion);
    request.onupgradeneeded = () => {
      const store = request.result.createObjectStore(STORE_NAME, { keyPath: 'id' });
      store.createIndex('createdAt', 'createdAt');
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function databaseRequest(mode, operation) {
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(STORE_NAME, mode);
    const request = operation(transaction.objectStore(STORE_NAME));
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
    transaction.onabort = () => reject(transaction.error || new Error('The local storage transaction failed.'));
  });
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]);
}

function getLanguageCode(select, customInput) {
  const code = select.value === 'other' ? customInput.value.trim() : select.value;
  return /^[a-z]{2,3}(?:[-_][a-z0-9]{2,8})?$/i.test(code) ? code : null;
}

function populateTranslationLanguages() {
  const options = TRANSLATION_LANGUAGES.map(([code, name]) => `<option value="${code}">${escapeHtml(name)}</option>`).join('');
  elements.storybookLanguage.innerHTML = options;
  elements.scriptLanguage.innerHTML = options;
}

async function translatePublicText(text, language) {
  const cacheKey = `${language}:${text}`;
  if (translatedTextCache.has(cacheKey)) return translatedTextCache.get(cacheKey);
  const query = new URLSearchParams({ q: text, langpair: `en|${language}` });
  const response = await fetch(`https://api.mymemory.translated.net/get?${query}`);
  if (!response.ok) throw new Error('The translation service could not be reached.');
  const result = await response.json();
  if (result.responseStatus !== 200 || !result.responseData?.translatedText) {
    throw new Error(result.responseDetails || 'This language is not available from the translation service.');
  }
  const decoder = document.createElement('textarea');
  decoder.innerHTML = result.responseData.translatedText;
  const translated = decoder.value;
  translatedTextCache.set(cacheKey, translated);
  return translated;
}

function formatDate(value) {
  if (!value) return '';
  return new Intl.DateTimeFormat(undefined, { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(value));
}

function formatDuration(seconds = 0) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
  const remainder = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${remainder}`;
}

function initials(story) {
  const label = story.storyteller || story.title;
  return label.split(/\s+/).slice(0, 2).map((part) => part.charAt(0)).join('').toUpperCase() || 'K';
}

function getVisibleStories() {
  const query = elements.search.value.trim().toLocaleLowerCase();
  return [...stories]
    .filter((story) => !activeTag || story.tags.includes(activeTag))
    .filter((story) => {
      if (!query) return true;
      const searchable = [story.title, story.storyteller, story.place, story.date, story.context, story.narrative, story.transcript, story.photoCaption, ...story.tags]
        .join(' ')
        .toLocaleLowerCase();
      return searchable.includes(query);
    })
    .sort((first, second) => second.createdAt - first.createdAt);
}

function renderHistoryLibrary() {
  document.querySelectorAll('[data-collection-count]').forEach((element) => {
    element.textContent = STORY_COLLECTIONS.length;
  });
  elements.historyFeatures.innerHTML = HISTORY_FEATURES.map((feature) => `
    <article class="history-feature">
      <img class="history-feature-image" src="${feature.image}" alt="${escapeHtml(feature.alt)}" loading="lazy" referrerpolicy="no-referrer">
      <div class="history-feature-copy">
        <p class="history-feature-date">${escapeHtml(feature.date)}</p>
        <h3>${escapeHtml(feature.title)}</h3>
        <p>${escapeHtml(feature.story)}</p>
        <div class="history-feature-source"><span>${escapeHtml(feature.credit)}</span><a href="${feature.source}" target="_blank" rel="noopener noreferrer">${escapeHtml(feature.sourceLabel)}</a><a href="${feature.imageSource}" target="_blank" rel="noopener noreferrer">Photo record</a></div>
      </div>
    </article>
  `).join('');

  elements.storyCollections.innerHTML = STORY_COLLECTIONS.map(([category, title, prompt], index) => `
    <button class="collection-prompt" type="button" data-story-prompt="${index}">
      <span class="collection-prompt-category">${escapeHtml(category)}</span>
      <strong>${escapeHtml(title)}</strong>
      <span>${escapeHtml(prompt)}</span>
    </button>
  `).join('');

  elements.audioScripts.innerHTML = AUDIO_SCRIPTS.map((script, index) => `
    <details class="script-card">
      <summary><span class="script-card-category">${escapeHtml(script.category)}</span><strong>${escapeHtml(script.title)}</strong></summary>
      <div class="script-card-body"><ol>${script.questions.map((question) => `<li>${escapeHtml(question)}</li>`).join('')}</ol>
        <button class="button button-light script-translation-button" type="button" data-translate-script="${index}">Translate guide</button>
        <div class="script-translation" data-script-translation="${index}" hidden></div>
        <button class="button button-primary" type="button" data-audio-script="${index}"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3m-4 0h8"/></svg><span>Record with this guide</span></button>
      </div>
    </details>
  `).join('');
}

function showView(viewName) {
  const isHistory = viewName === 'history';
  const isPictureBooks = viewName === 'picturebooks';
  stopNarration(false);
  elements.collectionView.hidden = isHistory || isPictureBooks;
  elements.historyView.hidden = !isHistory;
  elements.pictureBooksView.hidden = !isPictureBooks;
  if (isPictureBooks) {
    elements.storybookReader.hidden = true;
    elements.pictureBookLibrary.hidden = false;
  }
  document.querySelector('#collectionNav').classList.toggle('is-active', !isHistory);
  document.querySelector('#historyNav').classList.toggle('is-active', isHistory);
  document.querySelector('#pictureBooksNav').classList.toggle('is-active', isPictureBooks);
  document.querySelector('#collectionNav').classList.toggle('is-active', !isHistory && !isPictureBooks);
  document.querySelector('.breadcrumb strong').textContent = isHistory ? 'Story collections' : isPictureBooks ? 'Picture books' : 'Collection';
  document.querySelector('#pageTitle').focus?.();
}

function renderPictureBookLibrary() {
  elements.pictureBookGrid.innerHTML = PICTURE_BOOKS.map((book) => `
    <button class="picturebook-card" type="button" data-picture-book="${escapeHtml(book.id)}">
      <span class="picturebook-cover">${pictureBookIllustration(book.art)}</span>
      <span class="picturebook-card-copy"><span class="picturebook-category">${escapeHtml(book.category)}</span><strong>${escapeHtml(book.title)}</strong><span>${escapeHtml(book.summary)}</span><span class="picturebook-open"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7v14M12 7C9 4.5 6 4 3.5 4.5v14C7 17.8 9.5 18.5 12 21m0-14c3-2.5 6-3 8.5-2.5v14C17 17.8 14.5 18.5 12 21Z"/></svg>Open storybook · ${book.pages.length} pages</span></span>
    </button>
  `).join('');
}

function stopNarration(updateStatus = true) {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  if (elements.readPageAloud) {
    elements.readPageAloud.setAttribute('aria-pressed', 'false');
    elements.readPageAloud.querySelector('span').textContent = 'Read this page';
  }
  if (updateStatus && elements.narrationStatus) elements.narrationStatus.textContent = 'Narration stopped.';
}

function renderPicturePage() {
  if (!activePictureBook) return;
  const page = activeBookTranslation?.[activeBookPage] || activePictureBook.pages[activeBookPage];
  stopNarration(false);
  elements.storybookArt.innerHTML = pictureBookIllustration(page.art);
  elements.storybookArt.setAttribute('aria-label', `${activePictureBook.title}: ${page.title}`);
  elements.storybookCategory.textContent = activePictureBook.category;
  elements.storybookTitle.textContent = activePictureBook.title;
  elements.storybookPageNumber.textContent = `PAGE ${activeBookPage + 1} OF ${activePictureBook.pages.length}`;
  elements.storybookText.textContent = page.text;
  elements.readerProgress.innerHTML = activePictureBook.pages.map((item, index) => `<span class="reader-progress-dot${index === activeBookPage ? ' is-current' : ''}" aria-hidden="true"></span>`).join('');
  elements.previousBookPage.disabled = activeBookPage === 0;
  elements.nextBookPage.disabled = activeBookPage === activePictureBook.pages.length - 1;
  elements.narrationStatus.textContent = 'Narration uses your device’s built-in voice.';
}

function openPictureBook(bookId) {
  activePictureBook = PICTURE_BOOKS.find((book) => book.id === bookId);
  if (!activePictureBook) return;
  activeBookPage = 0;
  const language = getLanguageCode(elements.storybookLanguage, elements.customBookLanguage);
  activeBookTranslation = language && language !== 'en' ? translatedBooks.get(`${bookId}:${language}`) || null : null;
  elements.pictureBookLibrary.hidden = true;
  elements.storybookReader.hidden = false;
  renderPicturePage();
}

async function translatePictureBook() {
  if (!activePictureBook) return;
  const language = getLanguageCode(elements.storybookLanguage, elements.customBookLanguage);
  if (!language) {
    elements.narrationStatus.textContent = 'Enter a valid language code, such as es, hi, or ar.';
    return;
  }
  if (language === 'en') {
    activeBookTranslation = null;
    renderPicturePage();
    return;
  }
  const cacheKey = `${activePictureBook.id}:${language}`;
  const savedTranslation = translatedBooks.get(cacheKey);
  if (savedTranslation) {
    activeBookTranslation = savedTranslation;
    renderPicturePage();
    return;
  }
  const book = activePictureBook;
  elements.translateBookButton.disabled = true;
  elements.translateBookButton.textContent = 'Translating...';
  try {
    const translatedPages = [];
    for (let index = 0; index < book.pages.length; index += 1) {
      elements.narrationStatus.textContent = `Translating page ${index + 1} of ${book.pages.length}...`;
      const page = book.pages[index];
      translatedPages.push({
        ...page,
        title: await translatePublicText(page.title, language),
        text: await translatePublicText(page.text, language),
      });
    }
    translatedBooks.set(cacheKey, translatedPages);
    if (activePictureBook?.id === book.id) {
      activeBookTranslation = translatedPages;
      renderPicturePage();
      elements.narrationStatus.textContent = `Translated to ${language}. Read-aloud uses the matching voice available on this device.`;
    }
  } catch (error) {
    elements.narrationStatus.textContent = `Translation unavailable: ${error.message}`;
  } finally {
    elements.translateBookButton.disabled = false;
    elements.translateBookButton.textContent = 'Translate this book';
  }
}

async function translateAudioScript(index) {
  const language = getLanguageCode(elements.scriptLanguage, elements.customScriptLanguage);
  const panel = document.querySelector(`[data-script-translation="${index}"]`);
  const button = document.querySelector(`[data-translate-script="${index}"]`);
  if (!language) {
    panel.hidden = false;
    panel.textContent = 'Enter a valid language code, such as es, hi, or ar.';
    return;
  }
  if (language === 'en') {
    panel.hidden = true;
    return;
  }
  const key = `${index}:${language}`;
  button.disabled = true;
  button.textContent = 'Translating...';
  try {
    let translated = translatedScripts.get(key);
    if (!translated) {
      const script = AUDIO_SCRIPTS[index];
      translated = {
        title: await translatePublicText(script.title, language),
        questions: [],
      };
      for (const question of script.questions) translated.questions.push(await translatePublicText(question, language));
      translatedScripts.set(key, translated);
    }
    panel.innerHTML = `<h4>${escapeHtml(translated.title)}</h4><ol>${translated.questions.map((question) => `<li>${escapeHtml(question)}</li>`).join('')}</ol>`;
    panel.hidden = false;
  } catch (error) {
    panel.hidden = false;
    panel.textContent = `Translation unavailable: ${error.message}`;
  } finally {
    button.disabled = false;
    button.textContent = 'Translate guide';
  }
}

function narrateCurrentPage() {
  if (!activePictureBook || !('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) {
    elements.narrationStatus.textContent = 'Read-aloud audio is not available in this browser.';
    elements.readPageAloud.disabled = true;
    return;
  }
  if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
    window.speechSynthesis.pause();
    elements.readPageAloud.querySelector('span').textContent = 'Resume reading';
    elements.narrationStatus.textContent = 'Narration paused.';
    return;
  }
  if (window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
    elements.readPageAloud.querySelector('span').textContent = 'Pause reading';
    elements.narrationStatus.textContent = 'Reading aloud.';
    return;
  }
  const language = getLanguageCode(elements.storybookLanguage, elements.customBookLanguage) || 'en';
  if (language !== 'en' && !activeBookTranslation) {
    elements.narrationStatus.textContent = 'Translate this book before reading it aloud in the selected language.';
    return;
  }
  const page = activeBookTranslation?.[activeBookPage] || activePictureBook.pages[activeBookPage];
  const utterance = new SpeechSynthesisUtterance(`${page.title}. ${page.text}`);
  utterance.rate = 0.88;
  utterance.pitch = 1.04;
  utterance.lang = language;
  const matchingVoice = window.speechSynthesis.getVoices().find((voice) => voice.lang.toLowerCase().startsWith(language.toLowerCase()));
  if (matchingVoice) utterance.voice = matchingVoice;
  utterance.onend = () => {
    elements.readPageAloud.setAttribute('aria-pressed', 'false');
    elements.readPageAloud.querySelector('span').textContent = 'Read this page';
    elements.narrationStatus.textContent = 'Page narration finished.';
  };
  utterance.onerror = () => {
    elements.narrationStatus.textContent = 'Narration could not start. Check that your device has a speech voice available.';
    elements.readPageAloud.setAttribute('aria-pressed', 'false');
    elements.readPageAloud.querySelector('span').textContent = 'Read this page';
  };
  elements.readPageAloud.setAttribute('aria-pressed', 'true');
  elements.readPageAloud.querySelector('span').textContent = 'Pause reading';
  elements.narrationStatus.textContent = 'Reading aloud.';
  window.speechSynthesis.speak(utterance);
}

function renderTagFilters() {
  const tags = [...new Set(stories.flatMap((story) => story.tags))].sort((a, b) => a.localeCompare(b));
  elements.tagFilters.innerHTML = tags.map((tag) => `
    <button class="tag-filter${activeTag === tag ? ' is-active' : ''}" type="button" data-tag="${escapeHtml(tag)}" aria-pressed="${activeTag === tag}">${escapeHtml(tag)}</button>
  `).join('');
}

function renderList() {
  const visibleStories = getVisibleStories();
  elements.storyCount.textContent = stories.length;
  elements.navCount.textContent = stories.length;
  elements.resultCount.textContent = `${visibleStories.length} ${visibleStories.length === 1 ? 'ITEM' : 'ITEMS'}`;
  if (!visibleStories.length) {
    const message = stories.length ? 'No stories match your search. Try another name, place, or tag.' : 'Your saved interviews and notes will live here.';
    elements.list.innerHTML = `<div class="list-empty"><p>${message}</p></div>`;
    if (selectedStoryId && !stories.some((story) => story.id === selectedStoryId)) selectedStoryId = null;
    if (stories.length && selectedStoryId) renderDetail();
    else renderEmptyDetail();
    return;
  }

  if (!visibleStories.some((story) => story.id === selectedStoryId)) selectedStoryId = visibleStories[0].id;
  elements.list.innerHTML = visibleStories.map((story, index) => {
    const format = story.mode === 'record' || story.audio ? 'Recorded story' : 'Written story';
    const subtitle = [story.storyteller, story.place].filter(Boolean).join(' · ') || format;
    return `<button class="story-row${story.id === selectedStoryId ? ' is-selected' : ''}" type="button" data-id="${escapeHtml(story.id)}" aria-pressed="${story.id === selectedStoryId}">
      <span class="story-avatar color-${index % 4}">${escapeHtml(initials(story))}</span>
      <span class="story-row-copy"><span class="story-row-title">${escapeHtml(story.title)}</span><span class="story-row-meta">${escapeHtml(subtitle)}${story.date ? ` · ${escapeHtml(story.date)}` : ''}</span></span>
      <span class="story-row-arrow" aria-hidden="true">›</span>
    </button>`;
  }).join('');
  renderDetail();
}

function renderEmptyDetail() {
  if (detailAudioUrl) URL.revokeObjectURL(detailAudioUrl);
  if (detailPhotoUrl) URL.revokeObjectURL(detailPhotoUrl);
  detailAudioUrl = null;
  detailPhotoUrl = null;
  elements.detail.innerHTML = `<div class="detail-empty">
    <div class="empty-art" aria-hidden="true"><span class="art-sun"></span><span class="art-line art-line-one"></span><span class="art-line art-line-two"></span><span class="art-line art-line-three"></span><span class="art-stem"></span><span class="art-leaf art-leaf-one"></span><span class="art-leaf art-leaf-two"></span></div>
    <p class="eyebrow">MEMORIES, MADE TANGIBLE</p><h2>A story begins<br>with a voice or a page.</h2>
    <p class="empty-copy">Write it in your own words, record a voice, or begin with a story collection prompt.</p>
    <button class="button button-primary" type="button" data-action="create"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg><span>Start a story</span></button>
  </div>`;
}

function renderDetail() {
  const story = stories.find((item) => item.id === selectedStoryId);
  if (!story) {
    renderEmptyDetail();
    return;
  }
  if (detailAudioUrl) URL.revokeObjectURL(detailAudioUrl);
  detailAudioUrl = story.audio ? URL.createObjectURL(story.audio) : null;
  if (detailPhotoUrl) URL.revokeObjectURL(detailPhotoUrl);
  detailPhotoUrl = story.photo ? URL.createObjectURL(story.photo) : null;
  const locationLine = [story.storyteller && `with <strong>${escapeHtml(story.storyteller)}</strong>`, story.place && `in <strong>${escapeHtml(story.place)}</strong>`, story.date && escapeHtml(story.date)].filter(Boolean).join(' <span aria-hidden="true">·</span> ');
  const audio = detailAudioUrl ? `<audio class="detail-player" controls preload="metadata" src="${detailAudioUrl}">Audio playback is not supported in this browser.</audio>` : '';
  const photo = detailPhotoUrl ? `<figure class="detail-photo"><img src="${detailPhotoUrl}" alt="${escapeHtml(story.photoCaption || story.title)}"><figcaption>${escapeHtml(story.photoCaption || story.title)}</figcaption></figure>` : '';
  const tags = story.tags.length ? `<div class="detail-tags">${story.tags.map((tag) => `<span class="story-tag">${escapeHtml(tag)}</span>`).join('')}</div>` : '';
  const context = story.context ? `<section class="detail-section"><h3>THE STORY</h3><p>${escapeHtml(story.context)}</p></section>` : '';
  const narrative = story.narrative ? `<section class="detail-section narrative-content"><h3>WRITTEN STORY</h3><p>${escapeHtml(story.narrative)}</p></section>` : '';
  const transcript = story.transcript ? `<section class="detail-section transcript"><h3>TRANSCRIPT & NOTES</h3><p>${escapeHtml(story.transcript)}</p></section>` : '';
  const hasNotes = story.narrative || story.transcript || story.context;
  elements.detail.innerHTML = `<article class="detail-content">
    <div class="detail-topline"><span class="detail-date">ADDED ${escapeHtml(formatDate(story.createdAt).toUpperCase())}</span>
      <div class="detail-actions">${story.audio ? `<button class="icon-button" type="button" data-action="download-audio" data-id="${escapeHtml(story.id)}" aria-label="Download audio" title="Download audio"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 17v3h14v-3"/></svg></button>` : ''}${hasNotes ? `<button class="icon-button" type="button" data-action="download-notes" data-id="${escapeHtml(story.id)}" aria-label="Download written story" title="Download written story"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 17v3h14v-3"/></svg></button>` : ''}<button class="icon-button danger" type="button" data-action="delete" data-id="${escapeHtml(story.id)}" aria-label="Delete story" title="Delete story"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M10 11v6M14 11v6M5 7l1 14h12l1-14M9 7V4h6v3"/></svg></button></div>
    </div>
    <h2>${escapeHtml(story.title)}</h2>
    ${locationLine ? `<p class="detail-byline">${locationLine}</p>` : ''}
    ${photo}${audio}${tags}${context}${narrative}${transcript}
    ${!audio && !context && !narrative && !transcript ? '<section class="detail-section"><h3>YOUR STORY</h3><p>This story is ready for its first words. Open it again to add a written memory or recording.</p></section>' : ''}
  </article>`;
}

async function refreshStories() {
  stories = await databaseRequest('readonly', (store) => store.getAll());
  renderTagFilters();
  renderList();
}

async function seedStarterStories() {
  const seedKey = 'kinfolk-starter-stories-added';
  if (localStorage.getItem(seedKey)) return;
  const existingCount = await databaseRequest('readonly', (store) => store.count());
  if (existingCount) {
    localStorage.setItem(seedKey, 'true');
    return;
  }
  const examples = PICTURE_BOOKS.map((book, index) => ({
    id: `starter-example-${book.id}`,
    mode: 'write',
    isExample: true,
    title: book.title,
    storyteller: 'Fictional example',
    place: '',
    date: '',
    tags: ['starter example', book.category.toLocaleLowerCase()],
    context: 'Fictional sample story to demonstrate the archive. This is not a recorded or real family oral history.',
    narrative: book.pages.map((page) => page.text).join('\n\n'),
    transcript: '',
    audio: null,
    audioType: '',
    photo: new Blob([pictureBookIllustration(book.art)], { type: 'image/svg+xml' }),
    photoCaption: `Original illustration for the fictional picture book “${book.title}”.`,
    duration: 0,
    createdAt: Date.now() - index,
  }));
  await databaseRequest('readwrite', (store) => examples.map((example) => store.add(example)).at(-1));
  localStorage.setItem(seedKey, 'true');
}

function setToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add('is-visible');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => elements.toast.classList.remove('is-visible'), 3000);
}

function showDialog(mode = 'write', prompt = null) {
  elements.form.reset();
  elements.formMessage.textContent = '';
  captureMode = mode;
  recordingBlob = null;
  storyPhoto = null;
  recordingDurationSeconds = 0;
  resetRecordingControls();
  setPreview(null);
  setPhotoPreview(null);
  elements.title.value = prompt?.title || '';
  elements.narrative.placeholder = prompt?.prompt || 'Tell it in your own words. Start anywhere; you can add to it later.';
  elements.tags.value = prompt?.category || '';
  activeAudioScript = prompt?.questions ? prompt : null;
  applyCaptureMode();
  applyRecordingScript();
  elements.dialog.showModal();
  requestAnimationFrame(() => elements.title.focus());
}

function closeDialog() {
  if (recorder && recorder.state !== 'inactive') {
    recorder.onstop = null;
    recorder.stop();
  }
  stopRecorderStream();
  clearInterval(recordingTicker);
  elements.dialog.close();
  if (previewUrl) URL.revokeObjectURL(previewUrl);
  previewUrl = null;
  setPhotoPreview(null);
  storyPhoto = null;
}

function applyCaptureMode() {
  elements.modeSwitch.querySelectorAll('[data-mode]').forEach((button) => {
    const selected = button.dataset.mode === captureMode;
    button.classList.toggle('is-active', selected);
    button.setAttribute('aria-pressed', selected);
  });
  elements.recordingBox.hidden = captureMode !== 'record';
  elements.narrativeField.hidden = captureMode !== 'write';
  elements.narrative.required = captureMode === 'write';
  elements.transcriptField.hidden = captureMode !== 'record';
}

function applyRecordingScript() {
  elements.recordingScript.hidden = !activeAudioScript;
  if (!activeAudioScript) return;
  elements.recordingScriptTitle.textContent = activeAudioScript.title;
  elements.recordingQuestions.innerHTML = activeAudioScript.questions.map((question) => `<li>${escapeHtml(question)}</li>`).join('');
}

function setPreview(blob) {
  if (previewUrl) URL.revokeObjectURL(previewUrl);
  previewUrl = blob ? URL.createObjectURL(blob) : null;
  elements.audioPreview.hidden = !previewUrl;
  elements.audioPreview.removeAttribute('src');
  if (previewUrl) elements.audioPreview.src = previewUrl;
}

function setPhotoPreview(file) {
  if (photoPreviewUrl) URL.revokeObjectURL(photoPreviewUrl);
  photoPreviewUrl = file ? URL.createObjectURL(file) : null;
  elements.photoPreviewWrap.hidden = !file;
  elements.photoPreview.removeAttribute('src');
  elements.photoName.textContent = file?.name || '';
  if (photoPreviewUrl) elements.photoPreview.src = photoPreviewUrl;
}

function setRecordingTime(seconds) {
  elements.recordingTime.textContent = formatDuration(seconds);
}

function resetRecordingControls() {
  clearInterval(recordingTicker);
  recorder = null;
  recordingParts = [];
  elapsedBeforePause = 0;
  recordingStartedAt = 0;
  setRecordingTime(0);
  elements.recordButton.disabled = false;
  elements.recordButton.classList.remove('is-recording');
  elements.recordButton.setAttribute('aria-label', 'Start recording');
  elements.recordButton.title = 'Start recording';
  elements.recordButtonText.textContent = 'Start recording';
  elements.pauseButton.disabled = true;
  elements.pauseButton.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6v12M15 6v12"/></svg><span>Pause</span>';
  elements.recordingLight.classList.remove('is-recording');
  elements.recordingStatus.textContent = 'AUDIO RECORDING';
}

function stopRecorderStream() {
  if (recorderStream) recorderStream.getTracks().forEach((track) => track.stop());
  recorderStream = null;
}

async function startRecording() {
  if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') {
    elements.formMessage.textContent = 'Microphone recording is not supported here. Choose an audio file instead.';
    return;
  }
  try {
    recorderStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const preferredType = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4'].find((type) => MediaRecorder.isTypeSupported(type));
    recorder = preferredType ? new MediaRecorder(recorderStream, { mimeType: preferredType }) : new MediaRecorder(recorderStream);
    recordingParts = [];
    recordingBlob = null;
    recorder.ondataavailable = (event) => { if (event.data.size) recordingParts.push(event.data); };
    recorder.onerror = () => { elements.formMessage.textContent = 'The recording stopped unexpectedly. Please try again or choose an audio file.'; stopRecorderStream(); };
    recorder.onstop = () => {
      recordingBlob = new Blob(recordingParts, { type: recorder.mimeType || 'audio/webm' });
      recordingDurationSeconds = elapsedBeforePause;
      setPreview(recordingBlob);
      elements.recordingHint.textContent = `Recording ready (${formatDuration(elapsedBeforePause)}). You can listen before saving.`;
      stopRecorderStream();
      resetRecordingControls();
    };
    recorder.start(500);
    recordingStartedAt = Date.now();
    elements.recordButton.classList.add('is-recording');
    elements.recordButton.setAttribute('aria-label', 'Stop recording');
    elements.recordButton.title = 'Stop recording';
    elements.recordButtonText.textContent = 'Stop recording';
    elements.pauseButton.disabled = false;
    elements.recordingLight.classList.add('is-recording');
    elements.recordingStatus.textContent = 'RECORDING LIVE';
    elements.recordingHint.textContent = 'Speak naturally. Select stop when the story is finished.';
    recordingTicker = setInterval(() => {
      setRecordingTime(elapsedBeforePause + Math.floor((Date.now() - recordingStartedAt) / 1000));
    }, 250);
  } catch (error) {
    stopRecorderStream();
    elements.formMessage.textContent = error.name === 'NotAllowedError'
      ? 'Microphone access was not allowed. Choose an audio file or enable microphone access in your browser.'
      : 'Could not start the microphone. Choose an audio file or try again.';
  }
}

function stopRecording() {
  if (!recorder || recorder.state === 'inactive') return;
  if (recorder.state === 'recording') elapsedBeforePause += Math.floor((Date.now() - recordingStartedAt) / 1000);
  clearInterval(recordingTicker);
  recorder.stop();
  elements.recordButton.disabled = true;
  elements.pauseButton.disabled = true;
  elements.recordingStatus.textContent = 'SAVING AUDIO';
}

function togglePause() {
  if (!recorder) return;
  if (recorder.state === 'recording') {
    recorder.pause();
    elapsedBeforePause += Math.floor((Date.now() - recordingStartedAt) / 1000);
    clearInterval(recordingTicker);
    elements.pauseButton.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 11 7-11 7V5Z"/></svg><span>Resume</span>';
    elements.recordingStatus.textContent = 'RECORDING PAUSED';
    elements.recordingLight.classList.remove('is-recording');
  } else if (recorder.state === 'paused') {
    recorder.resume();
    recordingStartedAt = Date.now();
    recordingTicker = setInterval(() => setRecordingTime(elapsedBeforePause + Math.floor((Date.now() - recordingStartedAt) / 1000)), 250);
    elements.pauseButton.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6v12M15 6v12"/></svg><span>Pause</span>';
    elements.recordingStatus.textContent = 'RECORDING LIVE';
    elements.recordingLight.classList.add('is-recording');
  }
}

async function saveStory(event) {
  event.preventDefault();
  const title = elements.title.value.trim();
  if (!title) {
    elements.formMessage.textContent = 'Add a title to save this story.';
    elements.title.focus();
    return;
  }
  if (captureMode === 'write' && !elements.narrative.value.trim()) {
    elements.formMessage.textContent = 'Add the written story before saving.';
    elements.narrative.focus();
    return;
  }
  if (captureMode === 'record' && !recordingBlob) {
    elements.formMessage.textContent = 'Record or choose an audio file before saving this story.';
    return;
  }
  if (recorder && recorder.state !== 'inactive') {
    elements.formMessage.textContent = 'Stop the recording before saving.';
    return;
  }
  elements.saveButton.disabled = true;
  elements.formMessage.textContent = '';
  const story = {
    id: crypto.randomUUID(),
    mode: captureMode,
    title,
    storyteller: elements.storyteller.value.trim(),
    place: elements.place.value.trim(),
    date: elements.date.value.trim(),
    tags: [...new Set(elements.tags.value.split(',').map((tag) => tag.trim()).filter(Boolean))],
    context: elements.context.value.trim(),
    narrative: elements.narrative.value.trim(),
    transcript: elements.transcript.value.trim(),
    audio: recordingBlob,
    audioType: recordingBlob?.type || '',
    photo: storyPhoto,
    photoCaption: elements.photoCaption.value.trim(),
    duration: recordingDurationSeconds,
    createdAt: Date.now(),
  };
  try {
    await databaseRequest('readwrite', (store) => store.add(story));
    closeDialog();
    showView('collection');
    elements.search.value = '';
    activeTag = '';
    await refreshStories();
    selectedStoryId = story.id;
    renderList();
    setToast('Story saved on this device.');
  } catch (error) {
    elements.formMessage.textContent = 'Could not save this story. Check available browser storage and try again.';
  } finally {
    elements.saveButton.disabled = false;
  }
}

function downloadBlob(blob, filename) {
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function downloadAudio(story) {
  if (!story?.audio) return;
  const extension = story.audio.type.includes('mp4') ? 'm4a' : story.audio.type.includes('ogg') ? 'ogg' : 'webm';
  downloadBlob(story.audio, `${story.title.replace(/[\\/:*?"<>|]/g, '-').slice(0, 80) || 'oral-history'}.${extension}`);
}

function downloadNotes(story) {
  if (!story) return;
  const text = [story.title, story.storyteller && `Storyteller: ${story.storyteller}`, story.place && `Place: ${story.place}`, story.date && `Date: ${story.date}`, story.tags.length && `Tags: ${story.tags.join(', ')}`, '', story.context && `Context\n${story.context}`, story.narrative && `Written story\n${story.narrative}`, story.transcript && `Transcript & notes\n${story.transcript}`, story.photoCaption && `Photo\n${story.photoCaption}`].filter(Boolean).join('\n\n');
  downloadBlob(new Blob([text], { type: 'text/plain;charset=utf-8' }), `${story.title.replace(/[\\/:*?"<>|]/g, '-').slice(0, 80) || 'oral-history'}-notes.txt`);
}

async function deleteStory(storyId) {
  const story = stories.find((item) => item.id === storyId);
  if (!story || !window.confirm(`Delete “${story.title}” from this device? This cannot be undone.`)) return;
  await databaseRequest('readwrite', (store) => store.delete(storyId));
  if (selectedStoryId === storyId) selectedStoryId = null;
  await refreshStories();
  setToast('Story deleted from this device.');
}

function addListeners() {
  ['#topNewStory', '#newStoryNav', '#emptyCreate'].forEach((selector) => document.querySelector(selector).addEventListener('click', () => showDialog()));
  document.querySelector('#collectionNav').addEventListener('click', () => showView('collection'));
  document.querySelector('#historyNav').addEventListener('click', () => showView('history'));
  document.querySelector('#pictureBooksNav').addEventListener('click', () => showView('picturebooks'));
  elements.storybookLanguage.addEventListener('change', () => {
    elements.customBookLanguage.hidden = elements.storybookLanguage.value !== 'other';
    const language = getLanguageCode(elements.storybookLanguage, elements.customBookLanguage);
    activeBookTranslation = language && activePictureBook ? translatedBooks.get(`${activePictureBook.id}:${language}`) || null : null;
    if (activePictureBook) renderPicturePage();
    if (language && language !== 'en' && !activeBookTranslation) {
      elements.narrationStatus.textContent = 'Select “Translate this book” to show this story in the chosen language.';
    }
  });
  elements.customBookLanguage.addEventListener('input', () => {
    const language = getLanguageCode(elements.storybookLanguage, elements.customBookLanguage);
    activeBookTranslation = language && activePictureBook ? translatedBooks.get(`${activePictureBook.id}:${language}`) || null : null;
    if (activePictureBook && activeBookTranslation) renderPicturePage();
  });
  elements.translateBookButton.addEventListener('click', translatePictureBook);
  elements.scriptLanguage.addEventListener('change', () => {
    elements.customScriptLanguage.hidden = elements.scriptLanguage.value !== 'other';
    document.querySelectorAll('.script-translation').forEach((panel) => { panel.hidden = true; });
  });
  elements.customScriptLanguage.addEventListener('input', () => {
    document.querySelectorAll('.script-translation').forEach((panel) => { panel.hidden = true; });
  });
  elements.pictureBookGrid.addEventListener('click', (event) => {
    const card = event.target.closest('[data-picture-book]');
    if (card) openPictureBook(card.dataset.pictureBook);
  });
  document.querySelector('#backToBooks').addEventListener('click', () => {
    stopNarration(false);
    activePictureBook = null;
    elements.storybookReader.hidden = true;
    elements.pictureBookLibrary.hidden = false;
  });
  elements.previousBookPage.addEventListener('click', () => {
    if (activeBookPage === 0) return;
    activeBookPage -= 1;
    renderPicturePage();
  });
  elements.nextBookPage.addEventListener('click', () => {
    if (!activePictureBook || activeBookPage >= activePictureBook.pages.length - 1) return;
    activeBookPage += 1;
    renderPicturePage();
  });
  elements.readPageAloud.addEventListener('click', narrateCurrentPage);
  document.querySelector('#closeDialog').addEventListener('click', closeDialog);
  document.querySelector('#cancelDialog').addEventListener('click', closeDialog);
  elements.form.addEventListener('submit', saveStory);
  elements.modeSwitch.addEventListener('click', (event) => {
    const button = event.target.closest('[data-mode]');
    if (!button || (recorder && recorder.state !== 'inactive')) return;
    captureMode = button.dataset.mode;
    applyCaptureMode();
  });
  elements.search.addEventListener('input', renderList);
  elements.recordButton.addEventListener('click', () => {
    if (recorder && recorder.state !== 'inactive') stopRecording();
    else startRecording();
  });
  elements.pauseButton.addEventListener('click', togglePause);
  elements.audioFile.addEventListener('change', () => {
    const file = elements.audioFile.files?.[0];
    if (!file) return;
    recordingBlob = file;
    elapsedBeforePause = 0;
    setRecordingTime(0);
    setPreview(file);
    elements.recordingHint.textContent = `Audio selected: ${file.name} (${(file.size / (1024 * 1024)).toFixed(1)} MB).`;
    elements.formMessage.textContent = '';
  });
  elements.photoFile.addEventListener('change', () => {
    const file = elements.photoFile.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      elements.formMessage.textContent = 'Choose an image file for the story photo.';
      elements.photoFile.value = '';
      return;
    }
    if (file.size > 12 * 1024 * 1024) {
      elements.formMessage.textContent = 'Choose an image smaller than 12 MB to keep local storage manageable.';
      elements.photoFile.value = '';
      return;
    }
    storyPhoto = file;
    setPhotoPreview(file);
    elements.formMessage.textContent = '';
  });
  elements.storyCollections.addEventListener('click', (event) => {
    const button = event.target.closest('[data-story-prompt]');
    if (!button) return;
    const [category, title, prompt] = STORY_COLLECTIONS[Number(button.dataset.storyPrompt)];
    showDialog('write', { category, title, prompt });
  });
  elements.audioScripts.addEventListener('click', async (event) => {
    const translationButton = event.target.closest('[data-translate-script]');
    if (translationButton) {
      await translateAudioScript(Number(translationButton.dataset.translateScript));
      return;
    }
    const recordButton = event.target.closest('[data-audio-script]');
    if (!recordButton) return;
    const index = Number(recordButton.dataset.audioScript);
    const script = AUDIO_SCRIPTS[index];
    const language = getLanguageCode(elements.scriptLanguage, elements.customScriptLanguage);
    if (language && language !== 'en' && !translatedScripts.has(`${index}:${language}`)) await translateAudioScript(index);
    const translated = language ? translatedScripts.get(`${index}:${language}`) : null;
    showDialog('record', {
      title: translated?.title || script.title,
      category: script.category,
      questions: translated?.questions || script.questions,
    });
    if (language && language !== 'en' && !translated) elements.formMessage.textContent = 'Translation was unavailable; the English guide is shown.';
  });
  elements.tagFilters.addEventListener('click', (event) => {
    const button = event.target.closest('[data-tag]');
    if (!button) return;
    activeTag = activeTag === button.dataset.tag ? '' : button.dataset.tag;
    renderTagFilters();
    renderList();
  });
  elements.list.addEventListener('click', (event) => {
    const row = event.target.closest('[data-id]');
    if (!row) return;
    selectedStoryId = row.dataset.id;
    renderList();
  });
  elements.detail.addEventListener('click', (event) => {
    const action = event.target.closest('[data-action]');
    if (!action) return;
    const story = stories.find((item) => item.id === action.dataset.id);
    if (action.dataset.action === 'delete') deleteStory(action.dataset.id);
    if (action.dataset.action === 'download-audio') downloadAudio(story);
    if (action.dataset.action === 'download-notes') downloadNotes(story);
    if (action.dataset.action === 'create') showDialog();
  });
  elements.dialog.addEventListener('click', (event) => {
    if (event.target === elements.dialog) closeDialog();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === '/' && !elements.dialog.open && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      event.preventDefault();
      elements.search.focus();
    }
    if (event.key === 'Escape' && elements.dialog.open) closeDialog();
  });
}

async function initialize() {
  addListeners();
  populateTranslationLanguages();
  renderHistoryLibrary();
  renderPictureBookLibrary();
  try {
    database = await openDatabase();
    await seedStarterStories();
    await refreshStories();
  } catch (error) {
    elements.list.innerHTML = '<div class="list-empty"><p>Local storage is unavailable in this browser. Try a current browser with site storage enabled.</p></div>';
    elements.storyCount.textContent = '—';
    elements.navCount.textContent = '—';
    elements.resultCount.textContent = 'STORAGE UNAVAILABLE';
  }
}

initialize();