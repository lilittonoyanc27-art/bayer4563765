import { TextArticle, QuizData, PracticeQuestion } from './types';

export const articleText1: TextArticle = {
  id: 'carlos-deporte',
  titleOriginal: 'Հայերեն — Կառլոսը և սպորտը',
  titleTranslation: 'Español — Carlos y el deporte',
  primaryLang: 'hy',
  targetLang: 'es',
  sentences: [
    {
      id: 't1-s1',
      original: 'Այսօր Կառլոսը որոշել է զբոսնել այգում։',
      translation: 'Hoy Carlos ha decidido pasear por el parque.',
      originalLang: 'hy',
      targetLang: 'es',
    },
    {
      id: 't1-s2',
      original: 'Առավոտյան նա մարզասրահ է գնացել և մեկ ժամ մարզվել է։',
      translation: 'Por la mañana ha ido al gimnasio y ha entrenado durante una hora.',
      originalLang: 'hy',
      targetLang: 'es',
    },
    {
      id: 't1-s3',
      original: 'Նա վազել է, մի քանի վարժություն է արել և շատ ջուր է խմել։',
      translation: 'Ha corrido, ha hecho algunos ejercicios y ha bebido mucha agua.',
      originalLang: 'hy',
      targetLang: 'es',
    },
    {
      id: 't1-s4',
      original: 'Մարզումից հետո Կառլոսը հանդիպել է իր ընկեր Պեդրոյին։',
      translation: 'Después de entrenar, Carlos se ha encontrado con su amigo Pedro.',
      originalLang: 'hy',
      targetLang: 'es',
    },
    {
      id: 't1-s5',
      original: 'Նրանք միասին զբոսնել են այգում և խոսել սպորտի մասին։',
      translation: 'Han paseado juntos por el parque y han hablado de deporte.',
      originalLang: 'hy',
      targetLang: 'es',
    },
    {
      id: 't1-s6',
      original: 'Պեդրոն Կառլոսին խորհուրդ է տվել ավելի հաճախ մարզվել։',
      translation: 'Pedro le ha aconsejado a Carlos hacer ejercicio más a menudo.',
      originalLang: 'hy',
      targetLang: 'es',
    },
    {
      id: 't1-s7',
      original: 'Կեսօրին Կառլոսը վերադարձել է տուն և առողջ ճաշ է պատրաստել։',
      translation: 'Al mediodía, Carlos ha vuelto a casa y ha preparado una comida saludable.',
      originalLang: 'hy',
      targetLang: 'es',
    },
    {
      id: 't1-s8',
      original: 'Հետո նա մի փոքր հանգստացել է և երաժշտություն լսել։',
      translation: 'Después ha descansado un poco y ha escuchado música.',
      originalLang: 'hy',
      targetLang: 'es',
    },
    {
      id: 't1-s9',
      original: 'Այսօր նա իրեն շատ լավ է զգացել և որոշել է հաջորդ շաբաթ նույնպես մարզասրահ գնալ։',
      translation: 'Hoy se ha sentido muy bien y ha decidido ir al gimnasio también la próxima semana.',
      originalLang: 'hy',
      targetLang: 'es',
    },
  ],
  grammarNotes: [
    'Pretérito Perfecto Compound Past Tense:',
    'ha decidido (որոշել է), ha ido (գնացել է), ha entrenado (մարզվել է)',
    'ha corrido (վազել է), ha hecho (արել է - hacer), ha bebido (խմել է)',
    'se ha encontrado (հանդիպել է), han paseado (զբոսնել են), han hablado (խոսել են)',
    'ha aconsejado (խորհուրդ է տվել), ha vuelto (վերադարձել է - volver), ha preparado (պատրաստել է)',
    'ha descansado (հանգստացել է), ha escuchado (լսել է), se ha sentido (զգացել է)'
  ]
};

export const articleText2: TextArticle = {
  id: 'carlos-dia-ocupado',
  titleOriginal: 'Español — Un día ocupado de Carlos',
  titleTranslation: 'Հայերեն — Կառլոսի զբաղված օրը',
  primaryLang: 'es',
  targetLang: 'hy',
  sentences: [
    {
      id: 't2-s1',
      original: 'Esta semana Carlos ha tenido mucho trabajo.',
      translation: 'Այս շաբաթ Կառլոսը շատ աշխատանք է ունեցել։',
      originalLang: 'es',
      targetLang: 'hy',
    },
    {
      id: 't2-s2',
      original: 'Cada día se ha levantado temprano y ha salido de casa antes de las ocho.',
      translation: 'Ամեն օր նա վաղ է արթնացել և տնից դուրս է եկել ժամը ութից առաջ։',
      originalLang: 'es',
      targetLang: 'hy',
    },
    {
      id: 't2-s3',
      original: 'Hoy ha llegado a la oficina a las ocho y media.',
      translation: 'Այսօր նա գրասենյակ է հասել ժամը ութ անց կեսին։',
      originalLang: 'es',
      targetLang: 'hy',
    },
    {
      id: 't2-s4',
      original: 'Primero ha revisado sus mensajes y después ha hablado con varios compañeros.',
      translation: 'Սկզբում նա ստուգել է իր հաղորդագրությունները, իսկ հետո խոսել է մի քանի գործընկերների հետ։',
      originalLang: 'es',
      targetLang: 'hy',
    },
    {
      id: 't2-s5',
      original: 'También ha preparado una presentación importante y ha enviado algunos documentos.',
      translation: 'Նա նաև կարևոր ներկայացում է պատրաստել և մի քանի փաստաթուղթ ուղարկել։',
      originalLang: 'es',
      targetLang: 'hy',
    },
    {
      id: 't2-s6',
      original: 'A la hora de comer, Carlos ha quedado con un amigo en una cafetería cerca de la oficina.',
      translation: 'Ճաշի ժամին Կառլոսը հանդիպել է ընկերոջ հետ գրասենյակի մոտ գտնվող սրճարանում։',
      originalLang: 'es',
      targetLang: 'hy',
    },
    {
      id: 't2-s7',
      original: 'Han comido juntos y han hablado de sus planes para el fin de semana.',
      translation: 'Նրանք միասին ճաշել են և խոսել հանգստյան օրերի իրենց ծրագրերի մասին։',
      originalLang: 'es',
      targetLang: 'hy',
    },
    {
      id: 't2-s8',
      original: 'Por la tarde, Carlos ha vuelto al trabajo y ha terminado todas sus tareas.',
      translation: 'Կեսօրից հետո Կառլոսը վերադարձել է աշխատանքի և ավարտել իր բոլոր առաջադրանքները։',
      originalLang: 'es',
      targetLang: 'hy',
    },
    {
      id: 't2-s9',
      original: 'Antes de volver a casa, ha pasado por el supermercado y ha comprado algunas cosas.',
      translation: 'Նախքան տուն վերադառնալը նա մտել է սուպերմարկետ և մի քանի բան գնել։',
      originalLang: 'es',
      targetLang: 'hy',
    },
    {
      id: 't2-s10',
      original: '—Hoy he hecho muchas cosas, pero todavía no he descansado —ha pensado Carlos.',
      translation: '— Այսօր ես շատ բան եմ արել, բայց դեռ չեմ հանգստացել, — մտածել է Կառլոսը։',
      originalLang: 'es',
      targetLang: 'hy',
    },
  ],
  grammarNotes: [
    'Key expressions for a busy day:',
    'ha tenido (ունեցել է), se ha levantado (արթնացել է), ha salido (դուրս է եկել)',
    'ha llegado (հասել է), ha revisado (ստուգել է), ha enviado (ուղարկել է)',
    'ha quedado con (հանդիպել է), han comido (ճաշել են), ha terminado (ավարտել է)',
    'ha pasado por (մտել է/անցել է), ha comprado (գնել է), he hecho (արել եմ), no he descansado (չեմ հանգստացել)'
  ]
};

export const quiz1Data: QuizData = {
  id: 'quiz-1',
  titleEs: '1. Викторина — Carlos y el deporte',
  titleHy: '1. Վիկտորինա — Կառլոսը և սպորտը',
  descriptionEs: 'Elige la respuesta correcta.',
  descriptionHy: 'Ընտրիր ճիշտ պատասխանը։',
  questions: [
    {
      id: 1,
      questionEs: '¿Qué ha decidido hacer Carlos hoy?',
      questionHy: 'Ի՞նչ է որոշել անել Կառլոսն այսօր։',
      options: [
        { id: 'a', textEs: 'a) Ir al trabajo', textHy: 'ա) Գնալ աշխատանքի' },
        { id: 'b', textEs: 'b) Pasear por el parque', textHy: 'բ) Զբոսնել այգում' },
        { id: 'c', textEs: 'c) Quedarse en casa', textHy: 'գ) Մնալ տանը' }
      ],
      correctOptionId: 'b'
    },
    {
      id: 2,
      questionEs: '¿Adónde ha ido Carlos por la mañana?',
      questionHy: 'Ո՞ւր է գնացել Կառլոսն առավոտյան։',
      options: [
        { id: 'a', textEs: 'a) Al gimnasio', textHy: 'ա) Մարզասրահ' },
        { id: 'b', textEs: 'b) Al supermercado', textHy: 'բ) Սուպերմարկետ' },
        { id: 'c', textEs: 'c) A la oficina', textHy: 'գ) Գրասենյակ' }
      ],
      correctOptionId: 'a'
    },
    {
      id: 3,
      questionEs: '¿Cuánto tiempo ha entrenado?',
      questionHy: 'Որքա՞ն ժամանակ է նա մարզվել։',
      options: [
        { id: 'a', textEs: 'a) Media hora', textHy: 'ա) Կես ժամ' },
        { id: 'b', textEs: 'b) Una hora', textHy: 'բ) Մեկ ժամ' },
        { id: 'c', textEs: 'c) Dos horas', textHy: 'գ) Երկու ժամ' }
      ],
      correctOptionId: 'b'
    },
    {
      id: 4,
      questionEs: '¿Qué ha hecho Carlos en el gimnasio?',
      questionHy: 'Ի՞նչ է արել Կառլոսը մարզասրահում։',
      options: [
        { id: 'a', textEs: 'a) Ha corrido y ha hecho ejercicios', textHy: 'ա) Վազել է և վարժություններ է արել' },
        { id: 'b', textEs: 'b) Ha leído un libro', textHy: 'բ) Գիրք է կարդացել' },
        { id: 'c', textEs: 'c) Ha hablado por teléfono', textHy: 'գ) Հեռախոսով է խոսել' }
      ],
      correctOptionId: 'a'
    },
    {
      id: 5,
      questionEs: '¿Qué ha bebido Carlos?',
      questionHy: 'Ի՞նչ է խմել Կառլոսը։',
      options: [
        { id: 'a', textEs: 'a) Café', textHy: 'ա) Սուրճ' },
        { id: 'b', textEs: 'b) Zumo', textHy: 'բ) Հյութ' },
        { id: 'c', textEs: 'c) Mucha agua', textHy: 'գ) Շատ ջուր' }
      ],
      correctOptionId: 'c'
    },
    {
      id: 6,
      questionEs: '¿Con quién se ha encontrado después de entrenar?',
      questionHy: 'Ո՞ւմ է հանդիպել մարզվելուց հետո։',
      options: [
        { id: 'a', textEs: 'a) Con Lucía', textHy: 'ա) Լուկիայի հետ' },
        { id: 'b', textEs: 'b) Con Pedro', textHy: 'բ) Պեդրոյի հետ' },
        { id: 'c', textEs: 'c) Con su profesor', textHy: 'գ) Իր ուսուցչի հետ' }
      ],
      correctOptionId: 'b'
    },
    {
      id: 7,
      questionEs: '¿Dónde han paseado Carlos y Pedro?',
      questionHy: 'Որտե՞ղ են զբոսնել Կառլոսն ու Պեդրոն։',
      options: [
        { id: 'a', textEs: 'a) Por el parque', textHy: 'ա) Այգում' },
        { id: 'b', textEs: 'b) Por el centro', textHy: 'բ) Կենտրոնում' },
        { id: 'c', textEs: 'c) Por la playa', textHy: 'գ) Լողափում' }
      ],
      correctOptionId: 'a'
    },
    {
      id: 8,
      questionEs: '¿De qué han hablado?',
      questionHy: 'Ինչի՞ մասին են խոսել։',
      options: [
        { id: 'a', textEs: 'a) De trabajo', textHy: 'ա) Աշխատանքի մասին' },
        { id: 'b', textEs: 'b) De viajes', textHy: 'բ) Ճանապարհորդությունների մասին' },
        { id: 'c', textEs: 'c) De deporte', textHy: 'գ) Սպորտի մասին' }
      ],
      correctOptionId: 'c'
    },
    {
      id: 9,
      questionEs: '¿Qué le ha aconsejado Pedro a Carlos?',
      questionHy: 'Ի՞նչ է խորհուրդ տվել Պեդրոն Կառլոսին։',
      options: [
        { id: 'a', textEs: 'a) Trabajar más', textHy: 'ա) Ավելի շատ աշխատել' },
        { id: 'b', textEs: 'b) Hacer ejercicio más a menudo', textHy: 'բ) Ավելի հաճախ մարզվել' },
        { id: 'c', textEs: 'c) Dormir menos', textHy: 'գ) Քիչ քնել' }
      ],
      correctOptionId: 'b'
    },
    {
      id: 10,
      questionEs: '¿Qué ha hecho Carlos al mediodía?',
      questionHy: 'Ի՞նչ է արել Կառլոսը կեսօրին։',
      options: [
        { id: 'a', textEs: 'a) Ha vuelto a casa y ha preparado una comida saludable', textHy: 'ա) Վերադարձել է տուն և առողջ ճաշ է պատրաստել' },
        { id: 'b', textEs: 'b) Ha ido al cine', textHy: 'բ) Գնացել է կինո' },
        { id: 'c', textEs: 'c) Ha vuelto al gimnasio', textHy: 'գ) Վերադարձել է մարզասրահ' }
      ],
      correctOptionId: 'a'
    },
    {
      id: 11,
      questionEs: '¿Qué ha hecho después de comer?',
      questionHy: 'Ի՞նչ է արել ուտելուց հետո։',
      options: [
        { id: 'a', textEs: 'a) Ha trabajado', textHy: 'ա) Աշխատել է' },
        { id: 'b', textEs: 'b) Ha descansado y ha escuchado música', textHy: 'բ) Հանգստացել է և երաժշտություն լսել' },
        { id: 'c', textEs: 'c) Ha salido con sus amigos', textHy: 'գ) Դուրս է եկել ընկերների հետ' }
      ],
      correctOptionId: 'b'
    },
    {
      id: 12,
      questionEs: '¿Cómo se ha sentido Carlos hoy?',
      questionHy: 'Ինչպե՞ս է իրեն զգացել Կառլոսն այսօր։',
      options: [
        { id: 'a', textEs: 'a) Muy bien', textHy: 'ա) Շատ լավ' },
        { id: 'b', textEs: 'b) Mal', textHy: 'բ) Վատ' },
        { id: 'c', textEs: 'c) Cansado y triste', textHy: 'գ) Հոգնած և տխուր' }
      ],
      correctOptionId: 'a'
    }
  ]
};

export const quiz2Data: QuizData = {
  id: 'quiz-2',
  titleEs: '2. Викторина — Un día ocupado de Carlos',
  titleHy: '2. Վիկտորինա — Կառլոսի զբաղված օրը',
  descriptionEs: 'Elige la respuesta correcta.',
  descriptionHy: 'Ընտրիր ճիշտ պատասխանը։',
  questions: [
    {
      id: 1,
      questionEs: '¿Cómo ha sido esta semana para Carlos?',
      questionHy: 'Ինչպիսի՞ն է եղել այս շաբաթը Կառլոսի համար։',
      options: [
        { id: 'a', textEs: 'a) Ha tenido mucho trabajo', textHy: 'ա) Շատ աշխատանք է ունեցել' },
        { id: 'b', textEs: 'b) Ha estado de vacaciones', textHy: 'բ) Արձակուրդում է եղել' },
        { id: 'c', textEs: 'c) No ha hecho nada', textHy: 'գ) Ոչինչ չի արել' }
      ],
      correctOptionId: 'a'
    },
    {
      id: 2,
      questionEs: '¿A qué hora ha salido de casa cada día?',
      questionHy: 'Ամեն օր ժամը քանիսի՞ն է նա դուրս եկել տնից։',
      options: [
        { id: 'a', textEs: 'a) Después de las nueve', textHy: 'ա) Իննից հետո' },
        { id: 'b', textEs: 'b) Antes de las ocho', textHy: 'բ) Ութից առաջ' },
        { id: 'c', textEs: 'c) A las diez', textHy: 'գ) Տասին' }
      ],
      correctOptionId: 'b'
    },
    {
      id: 3,
      questionEs: '¿A qué hora ha llegado hoy a la oficina?',
      questionHy: 'Այսօր ժամը քանիսի՞ն է նա հասել գրասենյակ։',
      options: [
        { id: 'a', textEs: 'a) A las ocho', textHy: 'ա) Ութին' },
        { id: 'b', textEs: 'b) A las ocho y media', textHy: 'բ) Ութ անց կեսին' },
        { id: 'c', textEs: 'c) A las nueve y media', textHy: 'գ) Ինն անց կեսին' }
      ],
      correctOptionId: 'b'
    },
    {
      id: 4,
      questionEs: '¿Qué ha hecho primero en la oficina?',
      questionHy: 'Ի՞նչ է նա առաջինը արել գրասենյակում։',
      options: [
        { id: 'a', textEs: 'a) Ha revisado sus mensajes', textHy: 'ա) Ստուգել է իր հաղորդագրությունները' },
        { id: 'b', textEs: 'b) Ha comido', textHy: 'բ) Կերել է' },
        { id: 'c', textEs: 'c) Ha preparado café', textHy: 'գ) Սուրճ է պատրաստել' }
      ],
      correctOptionId: 'a'
    },
    {
      id: 5,
      questionEs: '¿Con quién ha hablado Carlos?',
      questionHy: 'Ո՞ւմ հետ է խոսել Կառլոսը։',
      options: [
        { id: 'a', textEs: 'a) Con varios compañeros', textHy: 'ա) Մի քանի գործընկերների հետ' },
        { id: 'b', textEs: 'b) Solo con Pedro', textHy: 'բ) Միայն Պեդրոյի հետ' },
        { id: 'c', textEs: 'c) Con su familia', textHy: 'գ) Իր ընտանիքի հետ' }
      ],
      correctOptionId: 'a'
    },
    {
      id: 6,
      questionEs: '¿Qué ha preparado?',
      questionHy: 'Ի՞նչ է նա պատրաստել։',
      options: [
        { id: 'a', textEs: 'a) Una comida', textHy: 'ա) Ուտեստ' },
        { id: 'b', textEs: 'b) Una presentación importante', textHy: 'բ) Կարևոր ներկայացում' },
        { id: 'c', textEs: 'c) Una fiesta', textHy: 'գ) Խնջույք' }
      ],
      correctOptionId: 'b'
    },
    {
      id: 7,
      questionEs: '¿Qué documentos ha enviado?',
      questionHy: 'Ի՞նչ է արել փաստաթղթերի հետ։',
      options: [
        { id: 'a', textEs: 'a) Los ha perdido', textHy: 'ա) Կորցրել է դրանք' },
        { id: 'b', textEs: 'b) Ha enviado algunos documentos', textHy: 'բ) Ուղարկել է մի քանի փաստաթուղթ' },
        { id: 'c', textEs: 'c) Los ha comprado', textHy: 'գ) Գնել է դրանք' }
      ],
      correctOptionId: 'b'
    },
    {
      id: 8,
      questionEs: '¿Con quién ha quedado a la hora de comer?',
      questionHy: 'Ո՞ւմ հետ է հանդիպել ճաշի ժամին։',
      options: [
        { id: 'a', textEs: 'a) Con un amigo', textHy: 'ա) Ընկերոջ հետ' },
        { id: 'b', textEs: 'b) Con su jefe', textHy: 'բ) Իր ղեկավարի հետ' },
        { id: 'c', textEs: 'c) Con Lucía', textHy: 'գ) Լուկիայի հետ' }
      ],
      correctOptionId: 'a'
    },
    {
      id: 9,
      questionEs: '¿Dónde han comido?',
      questionHy: 'Որտե՞ղ են նրանք ճաշել։',
      options: [
        { id: 'a', textEs: 'a) En casa', textHy: 'ա) Տանը' },
        { id: 'b', textEs: 'b) En una cafetería cerca de la oficina', textHy: 'բ) Գրասենյակի մոտ գտնվող սրճարանում' },
        { id: 'c', textEs: 'c) En el parque', textHy: 'գ) Այգում' }
      ],
      correctOptionId: 'b'
    },
    {
      id: 10,
      questionEs: '¿De qué han hablado?',
      questionHy: 'Ինչի՞ մասին են խոսել։',
      options: [
        { id: 'a', textEs: 'a) De sus planes para el fin de semana', textHy: 'ա) Հանգստյան օրերի իրենց ծրագրերի մասին' },
        { id: 'b', textEs: 'b) De español', textHy: 'բ) Իսպաներենի մասին' },
        { id: 'c', textEs: 'c) De fútbol', textHy: 'գ) Ֆուտբոլի մասին' }
      ],
      correctOptionId: 'a'
    },
    {
      id: 11,
      questionEs: '¿Qué ha hecho Carlos por la tarde?',
      questionHy: 'Ի՞նչ է արել Կառլոսը կեսօրից հետո։',
      options: [
        { id: 'a', textEs: 'a) Ha vuelto al trabajo', textHy: 'ա) Վերադարձել է աշխատանքի' },
        { id: 'b', textEs: 'b) Ha ido a casa inmediatamente', textHy: 'բ) Անմիջապես տուն է գնացել' },
        { id: 'c', textEs: 'c) Ha ido al gimnasio', textHy: 'գ) Գնացել է մարզասրահ' }
      ],
      correctOptionId: 'a'
    },
    {
      id: 12,
      questionEs: '¿Qué ha hecho antes de volver a casa?',
      questionHy: 'Ի՞նչ է արել տուն վերադառնալուց առաջ։',
      options: [
        { id: 'a', textEs: 'a) Ha ido al cine', textHy: 'ա) Գնացել է կինո' },
        { id: 'b', textEs: 'b) Ha pasado por el supermercado', textHy: 'բ) Մտել է սուպերմարկետ' },
        { id: 'c', textEs: 'c) Ha visitado a Pedro', textHy: 'գ) Այցելել է Պեդրոյին' }
      ],
      correctOptionId: 'b'
    },
    {
      id: 13,
      questionEs: '¿Qué ha comprado?',
      questionHy: 'Ի՞նչ է գնել։',
      options: [
        { id: 'a', textEs: 'a) Algunas cosas', textHy: 'ա) Մի քանի բան' },
        { id: 'b', textEs: 'b) Un coche', textHy: 'բ) Մեքենա' },
        { id: 'c', textEs: 'c) Un ordenador', textHy: 'գ) Համակարգիչ' }
      ],
      correctOptionId: 'a'
    },
    {
      id: 14,
      questionEs: '¿Ha descansado Carlos?',
      questionHy: 'Կառլոսը հանգստացե՞լ է։',
      options: [
        { id: 'a', textEs: 'a) Sí, mucho', textHy: 'ա) Այո, շատ' },
        { id: 'b', textEs: 'b) No, todavía no', textHy: 'բ) Ոչ, դեռ ոչ' },
        { id: 'c', textEs: 'c) Sí, toda la tarde', textHy: 'գ) Այո, ամբողջ կեսօրը' }
      ],
      correctOptionId: 'b'
    }
  ]
};

export const practiceQuestionsData: PracticeQuestion[] = [
  {
    id: 1,
    questionEs: '1. ¿Has hecho deporte esta semana?',
    questionHy: 'Այս շաբաթ սպորտով զբաղվե՞լ ես։',
    examples: [
      {
        id: 'p1-e1',
        textEs: 'Sí, he hecho deporte dos veces esta semana.',
        textHy: 'Այո, այս շաբաթ երկու անգամ սպորտով եմ զբաղվել։'
      },
      {
        id: 'p1-e2',
        textEs: 'Sí, he ido a correr y también he hecho algunos ejercicios en casa.',
        textHy: 'Այո, վազելու եմ գնացել և նաև տանը մի քանի վարժություն եմ արել։'
      },
      {
        id: 'p1-e3',
        textEs: 'No, esta semana no he hecho deporte porque he tenido mucho trabajo.',
        textHy: 'Ոչ, այս շաբաթ սպորտով չեմ զբաղվել, որովհետև շատ աշխատանք եմ ունեցել։'
      }
    ]
  },
  {
    id: 2,
    questionEs: '2. ¿Has ido alguna vez al gimnasio?',
    questionHy: 'Երբևէ մարզասրահ գնացե՞լ ես։',
    examples: [
      {
        id: 'p2-e1',
        textEs: 'Sí, he ido muchas veces al gimnasio.',
        textHy: 'Այո, շատ անգամ եմ մարզասրահ գնացել։'
      },
      {
        id: 'p2-e2',
        textEs: 'Sí, he ido algunas veces, pero prefiero hacer ejercicio en casa.',
        textHy: 'Այո, մի քանի անգամ գնացել եմ, բայց նախընտրում եմ տանը մարզվել։'
      },
      {
        id: 'p2-e3',
        textEs: 'No, nunca he ido al gimnasio.',
        textHy: 'Ոչ, երբեք մարզասրահ չեմ գնացել։'
      }
    ]
  },
  {
    id: 3,
    questionEs: '3. ¿Qué ejercicios has hecho últimamente?',
    questionHy: 'Վերջերս ի՞նչ վարժություններ ես արել։',
    examples: [
      {
        id: 'p3-e1',
        textEs: 'Últimamente he hecho ejercicios para las piernas y los brazos.',
        textHy: 'Վերջերս ոտքերի և ձեռքերի համար վարժություններ եմ արել։'
      },
      {
        id: 'p3-e2',
        textEs: 'He corrido, he caminado mucho y he hecho estiramientos.',
        textHy: 'Վազել եմ, շատ քայլել եմ և ձգումներ եմ արել։'
      },
      {
        id: 'p3-e3',
        textEs: 'He hecho ejercicios sencillos en casa, como sentadillas y abdominales.',
        textHy: 'Տանը պարզ վարժություններ եմ արել, օրինակ՝ կքանիստ և որովայնի վարժություններ։'
      }
    ]
  },
  {
    id: 4,
    questionEs: '4. ¿Has salido a pasear esta semana? ¿Con quién?',
    questionHy: 'Այս շաբաթ զբոսնելու դուրս եկե՞լ ես։ Ո՞ւմ հետ։',
    examples: [
      {
        id: 'p4-e1',
        textEs: 'Sí, he salido a pasear con una amiga.',
        textHy: 'Այո, ընկերուհուս հետ զբոսնելու եմ դուրս եկել։'
      },
      {
        id: 'p4-e2',
        textEs: 'Sí, he paseado con mi familia por el parque.',
        textHy: 'Այո, ընտանիքիս հետ այգում զբոսնել եմ։'
      },
      {
        id: 'p4-e3',
        textEs: 'No, esta semana no he salido a pasear.',
        textHy: 'Ոչ, այս շաբաթ զբոսնելու դուրս չեմ եկել։'
      },
      {
        id: 'p4-e4',
        textEs: 'He salido solo/a y he caminado durante una hora.',
        textHy: 'Մենակ եմ դուրս եկել և մեկ ժամ քայլել եմ։'
      }
    ]
  },
  {
    id: 5,
    questionEs: '5. ¿Te has encontrado con algún amigo últimamente?',
    questionHy: 'Վերջերս որևէ ընկերոջ հանդիպե՞լ ես։',
    examples: [
      {
        id: 'p5-e1',
        textEs: 'Sí, me he encontrado con un amigo esta semana.',
        textHy: 'Այո, այս շաբաթ ընկերոջս եմ հանդիպել։'
      },
      {
        id: 'p5-e2',
        textEs: 'Sí, me he encontrado con una amiga por casualidad en el centro.',
        textHy: 'Այո, կենտրոնում պատահաբար ընկերուհուս եմ հանդիպել։'
      },
      {
        id: 'p5-e3',
        textEs: 'No, últimamente no me he encontrado con ningún amigo.',
        textHy: 'Ոչ, վերջերս որևէ ընկերոջ չեմ հանդիպել։'
      }
    ]
  },
  {
    id: 6,
    questionEs: '6. ¿Has bebido suficiente agua hoy?',
    questionHy: 'Այսօր բավականաչափ ջուր խմե՞լ ես։',
    examples: [
      {
        id: 'p6-e1',
        textEs: 'Sí, hoy he bebido bastante agua.',
        textHy: 'Այո, այսօր բավական շատ ջուր եմ խմել։'
      },
      {
        id: 'p6-e2',
        textEs: 'Sí, he bebido unos dos litros de agua.',
        textHy: 'Այո, մոտ երկու լիտր ջուր եմ խմել։'
      },
      {
        id: 'p6-e3',
        textEs: 'No, hoy no he bebido suficiente agua.',
        textHy: 'Ոչ, այսօր բավականաչափ ջուր չեմ խմել։'
      },
      {
        id: 'p6-e4',
        textEs: 'Todavía no, pero voy a beber más agua durante el día.',
        textHy: 'Դեռ ոչ, բայց օրվա ընթացքում ավելի շատ ջուր եմ խմելու։'
      }
    ]
  },
  {
    id: 7,
    questionEs: '7. ¿Has preparado alguna comida saludable esta semana?',
    questionHy: 'Այս շաբաթ որևէ առողջ ուտեստ պատրաստե՞լ ես։',
    examples: [
      {
        id: 'p7-e1',
        textEs: 'Sí, he preparado una ensalada con verduras.',
        textHy: 'Այո, բանջարեղենով աղցան եմ պատրաստել։'
      },
      {
        id: 'p7-e2',
        textEs: 'Sí, he cocinado pollo con verduras.',
        textHy: 'Այո, բանջարեղենով հավ եմ պատրաստել։'
      },
      {
        id: 'p7-e3',
        textEs: 'He preparado una comida sencilla y saludable en casa.',
        textHy: 'Տանը պարզ և առողջ ուտեստ եմ պատրաստել։'
      },
      {
        id: 'p7-e4',
        textEs: 'No, esta semana no he cocinado mucho.',
        textHy: 'Ոչ, այս շաբաթ շատ չեմ պատրաստել։'
      }
    ]
  },
  {
    id: 8,
    questionEs: '8. ¿Cómo te has sentido después de hacer deporte?',
    questionHy: 'Ինչպե՞ս ես քեզ զգացել սպորտով զբաղվելուց հետո։',
    examples: [
      {
        id: 'p8-e1',
        textEs: 'Me he sentido muy bien y con más energía.',
        textHy: 'Ինձ շատ լավ և ավելի եռանդուն եմ զգացել։'
      },
      {
        id: 'p8-e2',
        textEs: 'Me he sentido un poco cansado/a, pero contento/a.',
        textHy: 'Մի փոքր հոգնած եմ զգացել, բայց ուրախ։'
      },
      {
        id: 'p8-e3',
        textEs: 'Me he sentido relajado/a después de hacer ejercicio.',
        textHy: 'Մարզվելուց հետո ինձ հանգիստ եմ զգացել։'
      },
      {
        id: 'p8-e4',
        textEs: 'Al principio me he sentido cansado/a, pero después me he sentido mucho mejor.',
        textHy: 'Սկզբում հոգնած եմ զգացել, բայց հետո շատ ավելի լավ եմ զգացել։'
      }
    ]
  }
];
