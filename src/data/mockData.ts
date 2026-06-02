import { Differential, ProcessStep, StatItem, Testimonial, GalleryPhoto } from '../types';

export const DIFFERENTIALS: Differential[] = [
  {
    id: 'diff-1',
    title: 'Strategia sprzedaży',
    description: 'Każda nieruchomość otrzymuje w pełni indywidualny plan działania, dopasowany do jej specyfiki, unikalnych atutów oraz aktualnych trendów rynkowych w Suwałkach.',
    iconName: 'Compass'
  },
  {
    id: 'diff-2',
    title: 'Home staging',
    description: 'Profesjonalne przygotowanie wnętrz zwiększające atrakcyjność oferty w oczach kupujących, co bezpośrednio przekłada się na wyższą wartość transakcyjną.',
    iconName: 'Sparkles'
  },
  {
    id: 'diff-3',
    title: 'Profesjonalna fotografia',
    description: '15 lat doświadczenia w branży fotograficznej pozwala mi pokazać wnętrza z głębią, naturalnym światłem i dbałością o detale, które wywołują silne emocje.',
    iconName: 'Camera'
  },
  {
    id: 'diff-4',
    title: 'Umowa na wyłączność',
    description: 'Dzięki pełnemu zaufaniu i wyłączności, inwestuję 100% swoich sił, środków marketingowych i czasu w maksymalne wypromowanie wyłącznie Twojej nieruchomości.',
    iconName: 'ShieldCheck'
  }
];

export const STATS: StatItem[] = [
  {
    id: 'stat-1',
    value: '8+',
    numberValue: 8,
    suffix: '+',
    label: 'Lat doświadczenia na rynku'
  },
  {
    id: 'stat-2',
    value: '15+',
    numberValue: 15,
    suffix: '+',
    label: 'Lat doświadczenia fotograficznego'
  },
  {
    id: 'stat-3',
    value: '100%',
    numberValue: 100,
    suffix: '%',
    label: 'Zaangażowania i pasji'
  },
  {
    id: 'stat-4',
    value: '10%',
    numberValue: 10,
    suffix: '%',
    label: 'Potencjalnie wyższa cena sprzedaży'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Bezpłatna konsultacja',
    description: 'Spotykamy się przy kawie, rozmawiamy o Twoich celach, potrzebach oraz analizujemy potencjał i aktualny stan prawny nieruchomości.'
  },
  {
    step: 2,
    title: 'Analiza nieruchomości',
    description: 'Przeprowadzam rzetelne badanie rynku w Suwałkach i okolicy, określając optymalną cenę ofertową i grupę docelową klientów.'
  },
  {
    step: 3,
    title: 'Przygotowanie i sesja zdjęciowa',
    description: 'Przeprowadzam profesjonalny home staging. Następnie wykonuję ekskluzywną sesję fotograficzną, pokazującą posiadłość z najlepszej strony.'
  },
  {
    step: 4,
    title: 'Marketing i promocja',
    description: 'Wdrażam zaawansowaną kampanię reklamową, docierając bezpośrednio do zdecydowanych nabywców za pomocą mediów społecznościowych i portali partnerskich.'
  },
  {
    step: 5,
    title: 'Negocjacje i sprzedaż',
    description: 'Prowadzę twarde, profesjonalne rozmowy z kupującymi. Koordynuję wszelkie formalności prawne i notarialne, aż do przekazania kluczy.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'review-1',
    name: 'Anna Kowalska',
    role: 'Właścicielka apartamentu przy ul. Kościuszki',
    text: 'Pani Olga to absolutna profesjonalistka. Dzięki cudownemu home stagingowi i niesamowitym zdjęciom, nasze mieszkanie sprzedało się w zaledwie dwa tygodnie i to o 9.5% drożej niż zakładaliśmy! Cały proces przebiegł bezstresowo i w luksusowej atmosferze.',
    rating: 5,
    date: 'Kwiecień 2026',
    location: 'Suwałki'
  },
  {
    id: 'review-2',
    name: 'Janusz Wiśniewski',
    role: 'Sprzedawca domu jednorodzinnego',
    text: 'Zdecydowałem się na umowę na wyłączność i to była najlepsza decyzja. Olga włożyła serce w reklamę, zrobiła wspaniałe ujęcia fotograficzne i w pełni odciążyła nas z uciążliwych telefonów. Pełna kultura, ogromna wiedza o suwalskim rynku i pełny zysk.',
    rating: 5,
    date: 'Marzec 2026',
    location: 'Suwałki, okolice'
  },
  {
    id: 'review-3',
    name: 'Małgorzata i Piotr B.',
    role: 'Właściciele willi w Suwałkach',
    text: 'Olga to nie tylko agentka o nienagannej etyce, ale artystka posiadająca niesamowity zmysł estetyczny. Zdjęcia wnętrz jej autorstwa sprawiły, że nasza posiadłość wyglądała jak z luksusowego katalogu wnętrzarskiego. Szczerze polecamy każdemu, kto szuka najwyższego standardu obsługi.',
    rating: 5,
    date: 'Luty 2026',
    location: 'Suwałki'
  },
  {
    id: 'review-4',
    name: 'Krzysztof Kamiński',
    role: 'Inwestor na rynku nieruchomości',
    text: 'Współpracuję z wieloma agentami, ale podejście Olgi Rapczyńskiej do marketingu i fotografii to absolutna rzadkość w Polsce. Każda nieruchomość traktowana jest jak dzieło sztuki. Wyniki finansowe mówią same za siebie. Zawsze 10/10.',
    rating: 5,
    date: 'Styczeń 2026',
    location: 'Suwałki'
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'photo-1',
    url: 'images/hero_estate_bg_1780383909180.png',
    title: 'Salon w stylu Modern Luxury',
    subtitle: 'Przykład pełnej aranżacji i fotografii wykonanej na potrzeby oferty premium.',
    category: 'Home Staging'
  },
  {
    id: 'photo-2',
    url: 'images/home_staging_kitchen_1780383928244.png',
    title: 'Marmurowa, minimalistyczna kuchnia',
    subtitle: 'Kluczowe zbliżenie na detale i luksusowe wykończenia przyciąga wymagających kupujących.',
    category: 'Fotografia Wnętrz'
  },
  {
    id: 'photo-3',
    url: 'images/staging_living_room_1780383950860.png',
    title: 'Sypialnia z widokiem na las suwalski',
    subtitle: 'Nastrojowe, naturalne światło budujące poczucie harmonii, spokoju i przestronności.',
    category: 'Home Staging'
  },
  {
    id: 'photo-4',
    // Fallback known premium placeholder image from a clean architecture CDN
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    title: 'Słoneczna jadalnia o poranku',
    subtitle: 'Ciepłe, nastrojowe kadry kładące nacisk na prestiż oraz funkcjonalność stref jadalnych.',
    category: 'Fotografia Wnętrz'
  },
  {
    id: 'photo-5',
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    title: 'Boutique łazienka z naturalnymi akcentami',
    subtitle: 'Krótki czas sprzedaży dzięki profesjonalnie zaprezentowanej strefie wypoczynku spa.',
    category: 'Wykończenie Detali'
  },
  {
    id: 'photo-6',
    url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
    title: 'Przytulny gabinet domowy',
    subtitle: 'Wdrażanie strategii zwiększającej przestrzeń użytkową na profesjonalnych fotografiach.',
    category: 'Home Staging'
  }
];
