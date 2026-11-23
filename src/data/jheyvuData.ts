export interface TimelineEvent {
  id: string;
  year: '2025' | '2026';
  month: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'debiut' | 'roleplay' | 'smp' | 'społeczność';
  highlight?: boolean;
}

export interface LoreChapter {
  id: string;
  numeral: string;
  title: string;
  subtitle: string;
  quote: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  imageCaption: string;
  accentColor: string;
  artifacts: { label: string; value: string }[];
}

export interface ModelGeneration {
  id: string;
  era: string;
  name: string;
  title: string;
  date: string;
  image: string;
  description: string;
  traits: string[];
  accent: string;
}

export interface SkinShowcase {
  id: string;
  name: string;
  owner: string;
  role: string;
  description: string;
  image: string;
  palette: string[];
  badge: string;
}

export interface SocialPortal {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  url: string;
  runeCode: string;
  accent: string;
  cta: string;
}

export const HERO_FORMS = {
  fantasy: {
    id: 'fantasy' as const,
    name: 'Szata Wygnańca z Sylvthary',
    subtitle: 'Forma Fabularna • Strój Fantasy',
    image: '/assets/model-fantasy.png',
    quote: '„Zrodzony w blasku Złotego Drzewa, naznaczony zakazaną magią cienia i kwitnącym znamieniem na lewym ramieniu.”',
    stats: [
      { label: 'Pochodzenie', value: 'Sylvthara (Ukryte Miasto)' },
      { label: 'Dziedzictwo', value: 'Mroczny Półelf' },
      { label: 'Atrybut', value: 'Liliowy Płaszcz & Sztylet Cienia' },
      { label: 'Oczy', value: 'Złoto Drzewa & Fiolet Próżni' },
    ],
    badge: 'STRÓJ FANTASY',
  },
  casual: {
    id: 'casual' as const,
    name: 'Liliowa Koszula Streamera',
    subtitle: 'Forma Codzienna • Nowy Model 2.0',
    image: '/assets/model-casual.png',
    quote: '„Mroczny półelf ubrany w liliową koszulę — gotowy na nocne rozmowy Just Chatting, budowanie w Minecrafcie i przygody z widzami.”',
    stats: [
      { label: 'Rola', value: 'VTuber • Streamer • Twórca' },
      { label: 'Redebiut', value: '10 Października 2026' },
      { label: 'Znak rozpoznawczy', value: 'Liliowa Koszula & Łańcuchy' },
      { label: 'Społeczność', value: 'Eliksirki (Komnata Alchemii)' },
    ],
    badge: 'STRÓJ ZWYKŁY',
  },
};

export const GAMES_ARSENAL = [
  {
    name: 'Minecraft',
    tag: 'Królestwo Główne • SMP & Roleplay',
    desc: 'Serce kanału Jheyvu — od wielkich projektów fabularnych SAGA RP po luźne serwery z widzami i autorskie skiny.',
    rune: 'I',
  },
  {
    name: 'Genshin Impact',
    tag: 'Fantastyczne Podróże',
    desc: 'Eksploracja magicznych krain Teyvatu, fabularne questy i wspólne analizowanie bohaterów.',
    rune: 'II',
  },
  {
    name: 'Cyberpunk 2077',
    tag: 'Mroczna Przyszłość',
    desc: 'Nocne wyprawy do Night City pełne emocji, mocnych wyborów fabularnych i klimatu.',
    rune: 'III',
  },
  {
    name: 'Phasmophobia',
    tag: 'Polowania na Duchy',
    desc: 'Nieprzewidywalne śledztwa paranormalne w kooperacji, gdzie spokój półelfa bywa wystawiony na ciężką próbę.',
    rune: 'IV',
  },
  {
    name: 'Meccha Chameleon',
    tag: 'Zręcznościowy Chaos',
    desc: 'Barwne, dynamiczne wyzwania pełne śmiechu i rywalizacji na żywo.',
    rune: 'V',
  },
  {
    name: 'Just Chatting',
    tag: 'Serce Społeczności',
    desc: 'Swobodne rozmowy przy świecach, wspólne śmiechy, oglądanie materiałów i bliska relacja z Eliksirkami.',
    rune: 'VI',
  },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: '2025-08-debiut',
    year: '2025',
    month: 'VIII • Sierpień 2025',
    title: 'Pierwszy Debiut VTubera',
    subtitle: 'Narodziny postaci Jheyvu w sieci',
    description:
      'Rozpoczęcie oficjalnej działalności jako polski VTuber i streamer — pierwsze spotkania z widzami w magicznym klimacie.',
    category: 'debiut',
    highlight: true,
  },
  {
    id: '2025-08-tdm2',
    year: '2025',
    month: 'VIII • Sierpień 2025',
    title: 'Total Drama Minecraft 2 (TDM 2)',
    subtitle: 'Debiut serwerowy w wielkim projekcie',
    description:
      'Pierwsze wielkie wyzwanie na serwerze Total Drama Minecraft 2, gdzie Jheyvu dał się poznać szerszej społeczności.',
    category: 'smp',
  },
  {
    id: '2025-09-herbacraft',
    year: '2025',
    month: 'IX • Wrzesień 2025',
    title: 'HerbaCraft z Widzami',
    subtitle: 'Wspólne budowanie społeczności',
    description:
      'Serwer integracyjny z widzami, podczas którego zacieśniły się więzi społeczności Eliksirków.',
    category: 'społeczność',
  },
  {
    id: '2025-10-saga-proto',
    year: '2025',
    month: 'X–XI • Październik / Listopad 2025',
    title: 'Pierwowzór SAGA RP (Mody)',
    subtitle: 'SAGA RP 0 — Narodziny multiwersum',
    description:
      'Pierwsza zmodyfikowana odsłona autorskiego projektu roleplay z unikalnymi rasami, magią i wyścigiem po Jajo Smoka, zakończona pamiętnym buntem Demo przeciwko bogom serwera.',
    category: 'roleplay',
    highlight: true,
  },
  {
    id: '2025-12-streamcraft',
    year: '2025',
    month: 'XII • Grudzień 2025',
    title: 'StreamCraft — Fabuła',
    subtitle: 'Zimowa opowieść serwerowa',
    description:
      'Zaangażowanie w rozbudowane wątki fabularne na serwerze StreamCraft pod koniec 2025 roku.',
    category: 'roleplay',
  },
  {
    id: '2026-01-streamcraft-end',
    year: '2026',
    month: 'I • Styczeń 2026',
    title: 'Finał Projektu StreamCraft',
    subtitle: 'Domknięcie rozdziału',
    description:
      'Zwieńczenie historii na serwerze StreamCraft i przygotowania do otwarcia zupełnie nowego świata SAGA RP.',
    category: 'roleplay',
  },
  {
    id: '2026-02-saga-s1',
    year: '2026',
    month: 'II • Luty 2026',
    title: 'Oficjalny Start SAGA RP — Sezon 1',
    subtitle: 'Przebudzenie w świecie Celedianu',
    description:
      'Po wielkim resecie świata bohaterowie trafiają do Celedianu. Start oficjalnej edycji współtworzonej z Diyą (C4llMeDiya) z frakcjami, ruinami i muzyką.',
    category: 'roleplay',
    highlight: true,
  },
  {
    id: '2026-05-niewiemsmp',
    year: '2026',
    month: 'V • Maj 2026',
    title: 'Nie Wiem SMP 1',
    subtitle: 'Nowe sojusze i przygody',
    description:
      'Dołączenie do projektu Nie Wiem SMP 1 — kolejne niezapomniane interakcje z twórcami na polskiej scenie Minecraft.',
    category: 'smp',
  },
  {
    id: '2026-08-lupicraft',
    year: '2026',
    month: 'VIII • Sierpień 2026',
    title: 'LupiCraft S3 & TDM 3',
    subtitle: 'Letnie kampanie serwerowe',
    description:
      'Udział w trzeciej odsłonie LupiCraft oraz powrót do korzeni w ramach Total Drama Minecraft 3 (TDM 3).',
    category: 'smp',
  },
  {
    id: '2026-10-redebiut',
    year: '2026',
    month: 'X • 10 Października 2026',
    title: 'Wielki Redebiut 2.0',
    subtitle: 'Nowy model, pełny lore Sylvthary i nowa era',
    description:
      'Prezentacja zupełnie nowego modelu VTubera w dwóch wariantach (fantasy i liliowa koszula), głębokiej historii wygnania z Sylvthary oraz planów na sezon 2026/2027.',
    category: 'debiut',
    highlight: true,
  },
];

export const LORE_CHAPTERS: LoreChapter[] = [
  {
    id: 'sylvthara',
    numeral: 'AKT I',
    title: 'Sylvthara i Złote Drzewo',
    subtitle: 'Dzieciństwo w cieniu dawnej magii',
    quote: '„Zanim cień przemówił pierwszym szeptem, w ogrodach Sylvthary tańczyły świetliste gołębie...”',
    paragraphs: [
      'Jheyvu to młody półelf pochodzący z tajemniczej Sylvthary — miasta skrytego przed wzrokiem świata, którego mieszkańcy od wieków czerpią swoją szlachetną magię z potężnego Złotego Drzewa.',
      'W czasach niewinności jego dłonie potrafiły przywoływać świetliste, złote ptaki, a różnobarwne oczy — jedno bursztynowe niczym żywica Złotego Drzewa, drugie fioletowe jak nocna pustka — zwiastowały przeznaczenie wykraczające poza mury rodzinnego domu.',
      'Jednak gdy w jego krwi przebudziła się nieznana i zakazana magia cienia, dawny dom odwrócił od niego wzrok. Wygnany przez własnych bliskich, musiał opuścić wszystko, co znał.',
    ],
    image: '/assets/maly-jheyvu.png',
    imageAlt: 'Mały Jheyvu nawołujący świetliste gołębie w ogrodzie Sylvthary',
    imageCaption: 'Wspomnienie z Sylvthary — młody Jheyvu i świetliste gołębie pod czujnym okiem rodziców.',
    accentColor: '#f2c97d',
    artifacts: [
      { label: 'Kraina pochodzenia', value: 'Sylvthara' },
      { label: 'Źródło mocy miasta', value: 'Złote Drzewo' },
      { label: 'Powód wygnania', value: 'Zakazana Magia Cienia' },
    ],
  },
  {
    id: 'wiezy-portal',
    numeral: 'AKT II',
    title: 'Przez Portal: Diya i Ilka',
    subtitle: 'Rodzina odnaleziona pośród obcych wymiarów',
    quote: '„Wyrzucony z własnego świata, odnalazł dom tam, gdzie kwitną szkarłatno-różowe drzewa.”',
    paragraphs: [
      'Przekraczając niestabilny, tajemniczy portal, wygnany półelf trafia do zupełnie nowej rzeczywistości. Zamiast samotności znajduje jednak osoby, które całkowicie odmieniają jego los.',
      'To właśnie po drugiej stronie portalu poznaje Diyę oraz Ilkę, z którymi tworzy nową, nierozłączną rodzinę. Razem przemierzają kolejne światy, dzieląc zarówno chwile spokoju pod kwitnącymi koronami drzew, jak i niebezpieczeństwa czyhające na granicach wymiarów.',
    ],
    image: '/assets/jheyvu-diya-ilka.png',
    imageAlt: 'Jheyvu, Diya i Ilka w kwitnącym lesie',
    imageCaption: 'Jheyvu, Diya oraz Ilka — nowa rodzina zrodzona podczas podróży między wymiarami.',
    accentColor: '#d8b4e2',
    artifacts: [
      { label: 'Towarzyszki podróży', value: 'Diya & Ilka' },
      { label: 'Więź', value: 'Rodzina z wyboru' },
      { label: 'Szlak', value: 'Międzywymiarowe Portale' },
    ],
  },
  {
    id: 'voith',
    numeral: 'AKT III',
    title: 'Pęknięte Lustro i Cień Voitha',
    subtitle: 'Utracone wspomnienia i prawda o magii',
    quote: '„Każda zmiana linii czasowej zostawia rysę na szkle. A z każdego pęknięcia patrzy Voith.”',
    paragraphs: [
      'Wspólne podróże między światami szybko przestają być niewinną przygodą. Zacierające się, utracone wspomnienia oraz nieustannie zmieniające się linie czasowe zaczynają splatać wokół bohaterów gęstą sieć tajemnic.',
      'W ślad za nimi podąża niepokojąca, potężna istota zwana Voithem. Aby ocalić swoją nową rodzinę, Jheyvu musi spojrzeć w pęknięte zwierciadło własnej przeszłości i zmierzyć się z prawdziwą naturą swojej magii cienia.',
    ],
    image: '/assets/jheyvu-art.png',
    imageAlt: 'Ilustracja Jheyvu w komnacie przed pękniętym lustrem',
    imageCaption: 'Oblicze półelfa w blasku rozbitego zwierciadła wymiarów.',
    accentColor: '#b56eff',
    artifacts: [
      { label: 'Antagonista', value: 'Tajemnicza istota Voith' },
      { label: 'Zagrożenie', value: 'Anomalie linii czasowych' },
      { label: 'Przeznaczenie', value: 'Prawda o Magii Cienia' },
    ],
  },
];

export const MODEL_GENERATIONS: ModelGeneration[] = [
  {
    id: 'gen-old',
    era: 'ERA I • Debiut 2025',
    name: 'Królewski Druid z Kosturem',
    title: 'Pierwszy Model VTubera (2025)',
    date: 'Sierpień 2025',
    image: '/assets/model-old.png',
    description:
      'Historyczny pierwszy model, w którym Jheyvu zadebiutował podczas Total Drama Minecraft 2. Zielona tunika, fioletowy płaszcz z pikselowym ornamentem i drewniany kostur z błękitną kulą.',
    traits: ['Kostur Pradawnego Lasu', 'Szmaragdowa Brosza', 'Pikselowy Płaszcz', 'Debiut TDM 2'],
    accent: '#68b684',
  },
  {
    id: 'gen-3d',
    era: 'ERA II • Forma Przestrzenna',
    name: 'Awatar 3D w Liliowej Koszuli',
    title: 'Model Trójwymiarowy 3D',
    date: '2025 / 2026',
    image: '/assets/model-3d.png',
    description:
      'Trójwymiarowa inkarnacja Jheyvu łącząca czarny golf z naszyjnikiem, rozpiętą liliową koszulę oraz swobodę ekspresji ruchowej podczas transmisji specjalnych.',
    traits: ['Pełny Rigging 3D', 'Czarny Golf & Srebrny Krzyż', 'Liliowa Koszula', 'Dynamiczna Ekspresja'],
    accent: '#9f86ff',
  },
  {
    id: 'gen-new-casual',
    era: 'ERA III • Redebiut 10.10.2026',
    name: 'Nowy Model 2.0 — Strój Zwykły',
    title: 'Mroczny Półelf w Liliowej Koszuli',
    date: '10 Października 2026',
    image: '/assets/model-casual.png',
    description:
      'Zaprezentowany podczas wielkiego redebiutu 10.10.2026. Dopracowany w każdym detalu model z kwitnącymi złotymi gałęziami na skórze, kolczykiem półksiężyca, łańcuchami i kultową liliową koszulą.',
    traits: ['Złote Kwiaty Cienia na Ramieniu', 'Srebrny Półksiężyc', 'Liliowa Koszula & Szarfa', 'Heterochromia'],
    accent: '#d8b4e2',
  },
  {
    id: 'gen-new-fantasy',
    era: 'ERA III • Redebiut 10.10.2026',
    name: 'Nowy Model 2.0 — Strój Fantasy',
    title: 'Wędrowiec z Sylvthary',
    date: '10 Października 2026',
    image: '/assets/model-fantasy.png',
    description:
      'Pełny rynsztunek fabularny Jheyvu z uniwersum Sylvthary i SAGA RP — liliowy kaptur podróżny, skórzana sakwa alchemiczna, sztylet przy pasie i lniana tunika wędrowca.',
    traits: ['Kaptur Wędrowca', 'Sakwa Alchemiczna', 'Ukryty Sztylet', 'Szata z Sylvthary'],
    accent: '#f2c97d',
  },
];

export const SKINS_SHOWCASE: SkinShowcase[] = [
  {
    id: 'skin-jheyvu',
    name: 'Jheyvu',
    owner: 'Autorski Skin Twórcy',
    role: 'Mroczny Półelf w Liliowej Koszuli',
    description:
      'Autorski skin wykonany na potrzeby własnej postaci — z dwukolorowymi włosami, heterochromią (złote i fioletowe oko), liliową koszulą oraz tatuażem gałęzi na lewym ramieniu.',
    image: '/assets/skin-jheyvu.png',
    palette: ['#d283ff', '#654534', '#d8cab8', '#f2c94c', '#1c1b22'],
    badge: 'ORYGINAŁ TWÓRCY',
  },
  {
    id: 'skin-brtk',
    name: 'BRTK',
    owner: 'Realizacja dla twórcy BRTK',
    role: 'Błękitny Zwiadowca',
    description:
      'Spersonalizowany skin przygotowany specjalnie dla twórcy BRTK — z charakterystycznym nakryciem głowy z uszami, warstwowym niebieskim strojem i szmaragdowymi oczami.',
    image: '/assets/skin-brtk.png',
    palette: ['#4b729f', '#2f4b6e', '#2d8a61', '#3b2820', '#1e2024'],
    badge: 'ZAMÓWIENIE TWÓRCY',
  },
  {
    id: 'skin-ilka',
    name: 'Ilka',
    owner: 'Realizacja dla Ileczki',
    role: 'Szkarłatno-Złota Bohaterka',
    description:
      'Skin wykonany dla Ileczki — wiernie oddający długi karmazynowy warkocz, czarną tunikę ze złotymi detalami oraz charakterystyczny styl znany ze wspólnych przygód.',
    image: '/assets/skin-ilka.png',
    palette: ['#7e191b', '#d99b26', '#141416', '#f2dede', '#36363c'],
    badge: 'RODZINA SAGA RP',
  },
  {
    id: 'skin-endry',
    name: 'Endry Nightmare',
    owner: 'Realizacja dla Endry Nightmare',
    role: 'Karmazynowy Łowca Cieni',
    description:
      'Mroczny, szczegółowo cieniowany skin przygotowany dla Endry Nightmare — z długim brązowo-bordowym płaszczem, świecącymi szkarłatnymi oczami i bojowym wykończeniem.',
    image: '/assets/skin-endry.png',
    palette: ['#7a1c1c', '#3c2624', '#c92a2a', '#6c7a89', '#1f1617'],
    badge: 'KREACJA DARK FANTASY',
  },
];

export const SOCIAL_PORTALS: SocialPortal[] = [
  {
    id: 'twitch',
    name: 'Twitch',
    subtitle: 'Transmisje na żywo',
    description: 'Dołącz do strumieni na żywo z Minecrafta, SAGA RP, gier fabularnych i wieczornych rozmów Just Chatting.',
    url: 'https://www.twitch.tv/jheyvu',
    runeCode: 'TWITCH.TV/JHEYVU',
    accent: '#b56eff',
    cta: 'Oglądaj Na Żywo',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    subtitle: 'Filmy i materiały gamingowe',
    description: 'Oficjalny lore Sylvthary, odcinki i podsumowania SAGA RP oraz najważniejsze materiały wideo.',
    url: 'https://www.youtube.com/@jheyvu',
    runeCode: 'YOUTUBE.COM/@JHEYVU',
    accent: '#ff5c77',
    cta: 'Odwiedź Kanał',
  },
  {
    id: 'discord',
    name: 'Discord — Eliksirki',
    subtitle: 'Społeczność Jheyvu',
    description: 'Serwer Discord skupiający społeczność Jheyvu. Poznaj nowych ludzi, rozmawiaj o grach i spędzaj wspólnie czas!',
    url: 'https://discord.com/invite/faaTujmWUE',
    runeCode: 'DISCORD',
    accent: '#8c9eff',
    cta: 'Wstąp do Eliksirków',
  },
  {
    id: 'vgen',
    name: 'VGen',
    subtitle: 'Zamówienia na skiny Minecraft',
    description: 'Zamów spersonalizowanego skina Minecraft — kreacje fantasy, postacie RP lub skiny inspirowane Twoim wyglądem.',
    url: 'https://vgen.co/jheyvu',
    runeCode: 'VGEN.CO/JHEYVU',
    accent: '#a3e635',
    cta: 'Zamów Skina na VGen',
  },
  {
    id: 'x',
    name: 'X (Twitter)',
    subtitle: 'Aktualności i posty',
    description: 'Bądź na bieżąco z ogłoszeniami, harmonogramem transmisji, grafikami i zakulisowymi wpisami.',
    url: 'https://x.com/jheyvu',
    runeCode: 'X.COM/JHEYVU',
    accent: '#d8b4e2',
    cta: 'Obserwuj Profil',
  },
  {
    id: 'plvtuber',
    name: 'PLVtuber',
    subtitle: 'Katalog polskich VTuberów',
    description: 'Oficjalna karta twórcy na platformie skupiającej polską scenę wirtualnych streamerów.',
    url: 'https://plvtuber.pl/@jheyvu',
    runeCode: 'PLVTUBER.PL/@JHEYVU',
    accent: '#f2c97d',
    cta: 'Zobacz Kartę Twórcy',
  },
  {
    id: 'tipply',
    name: 'Tipply',
    subtitle: 'Wsparcie twórcy',
    description: 'Wesprzyj rozwój kolejnych sezonów SAGA RP, ulepszenia modelu i nowe projekty na kanale.',
    url: 'https://tipply.pl/@jheyvu',
    runeCode: 'TIPPLY.PL/@JHEYVU',
    accent: '#fbbf24',
    cta: 'Wesprzyj Alchemika',
  },
];

export const CHAMBER_EASTER_EGGS = [
  {
    title: 'Księgozbiór o Diyi',
    detail: 'Na górnej półce regału spoczywają tomy: „Everything about Diya”, „10 Reasons why I love Diya” oraz „Diya and friends”.',
  },
  {
    title: 'Księga Kucharska Ilki',
    detail: 'Na dolnej półce znajdziesz „Ilka Cookbook”, „Steal and run: Gold digger 101” oraz poradnik „Jak wychować Syna?”.',
  },
  {
    title: 'Złota Gałąź Borka & Eliksir z Macką',
    detail: 'Pod szklanym kloszem z tabliczką „BOREK” lśni złota gałązka z Sylvthary, a obok bulgocze fioletowy eliksir.',
  },
];
