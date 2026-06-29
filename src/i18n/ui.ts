export const languages = {
  en: 'English',
  fr: 'Français',
  ar: 'العربية',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

// Languages that read right-to-left.
export const rtlLangs: Lang[] = ['ar'];

interface Card {
  icon: string;
  title: string;
  desc: string;
}

interface Step {
  num: string;
  title: string;
  desc: string;
}

interface Translation {
  htmlLang: string;
  title: string;
  description: string;
  nav: {
    features: string;
    how: string;
    blog: string;
    login: string;
    getStarted: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    sub: string;
    ctaPrimary: string;
    ctaGhost: string;
    stats: { strong: string; label: string }[];
  };
  features: {
    label: string;
    title: string;
    cards: Card[];
  };
  how: {
    label: string;
    title: string;
    steps: Step[];
  };
  cta: {
    title: string;
    sub: string;
    btn: string;
  };
  youtube: {
    label: string;
    title: string;
  };
  footer: {
    app: string;
    about: string;
  };
}

export const ui: Record<Lang, Translation> = {
  en: {
    htmlLang: 'en',
    title: 'Deutsch Lernen',
    description:
      'Learn German with interactive vocabulary, grammar exercises, reading stories, and progress tracking.',
    nav: {
      features: 'Features',
      how: 'How it works',
      blog: 'Blog',
      login: 'Log in',
      getStarted: 'Get started free',
    },
    hero: {
      badge: '✦ Free to start',
      title1: 'Learn German,',
      title2: 'the smart way.',
      sub: 'Vocabulary drills, grammar exercises, reading stories, and a leaderboard to keep you motivated — all in one place.',
      ctaPrimary: 'Start learning for free',
      ctaGhost: "See what's inside →",
      stats: [
        { strong: '4', label: 'learning modules' },
        { strong: 'A1 → C1', label: 'all levels' },
        { strong: 'Google', label: 'sign-in' },
      ],
    },
    features: {
      label: 'What you get',
      title: 'Everything you need to master German',
      cards: [
        {
          icon: '📚',
          title: 'Vocabulary',
          desc: 'Structured word lists organized by level and topic. Build your vocabulary step by step from A1 to C1.',
        },
        {
          icon: '✏️',
          title: 'Grammar Exercises',
          desc: 'Interactive exercises covering cases, verb conjugations, sentence structure, and more.',
        },
        {
          icon: '📖',
          title: 'Reading Stories',
          desc: 'Short stories with audio support, graded by difficulty so you always read at the right level.',
        },
        {
          icon: '📈',
          title: 'Progress Tracking',
          desc: 'See your streaks, completed lessons, and time spent. A leaderboard keeps the competitive edge alive.',
        },
        {
          icon: '👩‍🏫',
          title: 'Teacher Support',
          desc: 'Teachers can assign exercises, track student progress, and manage their class — all from one dashboard.',
        },
        {
          icon: '🔐',
          title: 'Easy Sign-in',
          desc: 'Log in with your Google account in one click. No password to remember, no hassle.',
        },
      ],
    },
    how: {
      label: 'How it works',
      title: 'Three steps to fluency',
      steps: [
        {
          num: '01',
          title: 'Create your account',
          desc: "Sign up in seconds with Google or email. Pick your current level and we'll build the right path for you.",
        },
        {
          num: '02',
          title: 'Pick a module',
          desc: 'Choose vocabulary, grammar, or reading — or follow the guided course that mixes all three.',
        },
        {
          num: '03',
          title: 'Track your growth',
          desc: 'Complete exercises, earn points, climb the leaderboard, and watch your German get better every day.',
        },
      ],
    },
    cta: {
      title: 'Ready to speak German?',
      sub: 'Join learners already improving their German every day.',
      btn: "Get started — it's free",
    },
    footer: {
      app: 'App',
      about: 'About',
    },
  },

  fr: {
    htmlLang: 'fr',
    title: 'Deutsch Lernen',
    description:
      "Apprenez l'allemand avec du vocabulaire interactif, des exercices de grammaire, des histoires à lire et un suivi des progrès.",
    nav: {
      features: 'Fonctionnalités',
      how: 'Comment ça marche',
      blog: 'Blog',
      login: 'Connexion',
      getStarted: 'Commencer gratuitement',
    },
    hero: {
      badge: '✦ Gratuit pour commencer',
      title1: "Apprenez l'allemand,",
      title2: 'intelligemment.',
      sub: 'Exercices de vocabulaire, de grammaire, histoires à lire et un classement pour rester motivé — le tout au même endroit.',
      ctaPrimary: 'Commencer gratuitement',
      ctaGhost: 'Découvrir le contenu →',
      stats: [
        { strong: '4', label: "modules d'apprentissage" },
        { strong: 'A1 → C1', label: 'tous les niveaux' },
        { strong: 'Google', label: 'connexion' },
      ],
    },
    features: {
      label: 'Ce que vous obtenez',
      title: "Tout ce qu'il faut pour maîtriser l'allemand",
      cards: [
        {
          icon: '📚',
          title: 'Vocabulaire',
          desc: 'Des listes de mots structurées par niveau et par thème. Enrichissez votre vocabulaire pas à pas, de A1 à C1.',
        },
        {
          icon: '✏️',
          title: 'Exercices de grammaire',
          desc: 'Des exercices interactifs sur les cas, la conjugaison, la structure des phrases, et bien plus encore.',
        },
        {
          icon: '📖',
          title: 'Histoires à lire',
          desc: 'Des histoires courtes avec support audio, classées par difficulté pour toujours lire au bon niveau.',
        },
        {
          icon: '📈',
          title: 'Suivi des progrès',
          desc: 'Visualisez vos séries, vos leçons terminées et le temps passé. Un classement entretient l’esprit de compétition.',
        },
        {
          icon: '👩‍🏫',
          title: 'Soutien des enseignants',
          desc: 'Les enseignants peuvent assigner des exercices, suivre les progrès et gérer leur classe depuis un seul tableau de bord.',
        },
        {
          icon: '🔐',
          title: 'Connexion facile',
          desc: 'Connectez-vous avec votre compte Google en un clic. Aucun mot de passe à retenir, sans complication.',
        },
      ],
    },
    how: {
      label: 'Comment ça marche',
      title: 'Trois étapes vers la maîtrise',
      steps: [
        {
          num: '01',
          title: 'Créez votre compte',
          desc: 'Inscrivez-vous en quelques secondes avec Google ou par e-mail. Choisissez votre niveau et nous créons le parcours idéal.',
        },
        {
          num: '02',
          title: 'Choisissez un module',
          desc: 'Choisissez le vocabulaire, la grammaire ou la lecture — ou suivez le cours guidé qui combine les trois.',
        },
        {
          num: '03',
          title: 'Suivez votre progression',
          desc: 'Faites des exercices, gagnez des points, grimpez au classement et améliorez votre allemand chaque jour.',
        },
      ],
    },
    cta: {
      title: 'Prêt à parler allemand ?',
      sub: 'Rejoignez les apprenants qui améliorent leur allemand chaque jour.',
      btn: "Commencer — c'est gratuit",
    },
    footer: {
      app: 'Application',
      about: 'À propos',
    },
  },

  ar: {
    htmlLang: 'ar',
    title: 'Deutsch Lernen',
    description:
      'تعلّم الألمانية مع مفردات تفاعلية وتمارين قواعد وقصص للقراءة وتتبّع للتقدّم.',
    nav: {
      features: 'المميزات',
      how: 'كيف يعمل',
      blog: 'المدونة',
      login: 'تسجيل الدخول',
      getStarted: 'ابدأ مجانًا',
    },
    hero: {
      badge: '✦ مجاني للبدء',
      title1: 'تعلّم الألمانية،',
      title2: 'بالطريقة الذكية.',
      sub: 'تمارين المفردات، تمارين القواعد، قصص للقراءة، ولوحة متصدّرين تبقيك متحمسًا — كل ذلك في مكان واحد.',
      ctaPrimary: 'ابدأ التعلّم مجانًا',
      ctaGhost: 'اكتشف المحتوى ←',
      stats: [
        { strong: '4', label: 'وحدات تعليمية' },
        { strong: 'A1 → C1', label: 'جميع المستويات' },
        { strong: 'Google', label: 'تسجيل الدخول' },
      ],
    },
    features: {
      label: 'ما الذي تحصل عليه',
      title: 'كل ما تحتاجه لإتقان الألمانية',
      cards: [
        {
          icon: '📚',
          title: 'المفردات',
          desc: 'قوائم كلمات منظّمة حسب المستوى والموضوع. ابنِ مفرداتك خطوة بخطوة من A1 إلى C1.',
        },
        {
          icon: '✏️',
          title: 'تمارين القواعد',
          desc: 'تمارين تفاعلية تغطّي الحالات الإعرابية، تصريف الأفعال، بنية الجملة، والمزيد.',
        },
        {
          icon: '📖',
          title: 'قصص للقراءة',
          desc: 'قصص قصيرة مدعومة بالصوت، مصنّفة حسب الصعوبة لتقرأ دائمًا في المستوى المناسب.',
        },
        {
          icon: '📈',
          title: 'تتبّع التقدّم',
          desc: 'اطّلع على سلاسل إنجازك والدروس المكتملة والوقت المستغرق. لوحة المتصدّرين تُبقي روح المنافسة حيّة.',
        },
        {
          icon: '👩‍🏫',
          title: 'دعم المعلّمين',
          desc: 'يمكن للمعلّمين إسناد التمارين ومتابعة تقدّم الطلاب وإدارة الصف — كل ذلك من لوحة تحكّم واحدة.',
        },
        {
          icon: '🔐',
          title: 'تسجيل دخول سهل',
          desc: 'سجّل الدخول بحساب Google بنقرة واحدة. لا كلمة مرور لتتذكّرها، وبلا عناء.',
        },
      ],
    },
    how: {
      label: 'كيف يعمل',
      title: 'ثلاث خطوات نحو الطلاقة',
      steps: [
        {
          num: '01',
          title: 'أنشئ حسابك',
          desc: 'سجّل في ثوانٍ عبر Google أو البريد الإلكتروني. اختر مستواك الحالي وسنبني لك المسار المناسب.',
        },
        {
          num: '02',
          title: 'اختر وحدة',
          desc: 'اختر المفردات أو القواعد أو القراءة — أو اتبع الدورة الموجّهة التي تجمع الثلاثة.',
        },
        {
          num: '03',
          title: 'تابع تطوّرك',
          desc: 'أكمل التمارين، اكسب النقاط، تصدّر القائمة، وشاهد لغتك الألمانية تتحسّن كل يوم.',
        },
      ],
    },
    cta: {
      title: 'هل أنت مستعد للتحدّث بالألمانية؟',
      sub: 'انضم إلى المتعلّمين الذين يطوّرون ألمانيتهم كل يوم.',
      btn: 'ابدأ — إنه مجاني',
    },
    footer: {
      app: 'التطبيق',
      about: 'حول',
    },
  },
};
