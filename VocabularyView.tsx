import React, { useState } from 'react';
import { speakText } from './speech';
import { Volume2, BookMarked, Sparkles, Check, RotateCcw, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface Flashcard {
  verbInfinitive: string;
  pastForm: string;
  hyTranslation: string;
  exampleEs: string;
  exampleHy: string;
}

const flashcards: Flashcard[] = [
  {
    verbInfinitive: 'decidir (որոշել)',
    pastForm: 'ha decidido',
    hyTranslation: 'որոշել է',
    exampleEs: 'Hoy Carlos ha decidido pasear por el parque.',
    exampleHy: 'Այսօր Կառլոսը որոշել է զբոսնել այգում։'
  },
  {
    verbInfinitive: 'ir (գնալ)',
    pastForm: 'ha ido',
    hyTranslation: 'գնացել է',
    exampleEs: 'Por la mañana ha ido al gimnasio.',
    exampleHy: 'Առավոտյան նա մարզասրահ է գնացել։'
  },
  {
    verbInfinitive: 'entrenar (մարզվել)',
    pastForm: 'ha entrenado',
    hyTranslation: 'մարզվել է',
    exampleEs: 'Ha entrenado durante una hora.',
    exampleHy: 'Մեկ ժամ մարզվել է։'
  },
  {
    verbInfinitive: 'correr (վազել)',
    pastForm: 'ha corrido',
    hyTranslation: 'վազել է',
    exampleEs: 'Ha corrido en el parque.',
    exampleHy: 'Վազել է այգում։'
  },
  {
    verbInfinitive: 'hacer (անել - irregular)',
    pastForm: 'ha hecho',
    hyTranslation: 'արել է',
    exampleEs: 'Ha hecho algunos ejercicios y hoy he hecho muchas cosas.',
    exampleHy: 'Մի քանի վարժություն է արել և այսօր ես շատ բան եմ արել։'
  },
  {
    verbInfinitive: 'beber (խմել)',
    pastForm: 'ha bebido',
    hyTranslation: 'խմել է',
    exampleEs: 'Ha bebido mucha agua.',
    exampleHy: 'Շատ ջուր է խմել։'
  },
  {
    verbInfinitive: 'encontrarse (հանդիպել)',
    pastForm: 'se ha encontrado',
    hyTranslation: 'հանդիպել է',
    exampleEs: 'Carlos se ha encontrado con su amigo Pedro.',
    exampleHy: 'Կառլոսը հանդիպել է իր ընկեր Պեդրոյին։'
  },
  {
    verbInfinitive: 'volver (վերադառնալ - irregular)',
    pastForm: 'ha vuelto',
    hyTranslation: 'վերադարձել է',
    exampleEs: 'Carlos ha vuelto a casa.',
    exampleHy: 'Կառլոսը վերադարձել է տուն։'
  },
  {
    verbInfinitive: 'preparar (պատրաստել)',
    pastForm: 'ha preparado',
    hyTranslation: 'պատրաստել է',
    exampleEs: 'Ha preparado una comida saludable.',
    exampleHy: 'Առողջ ճաշ է պատրաստել։'
  },
  {
    verbInfinitive: 'sentirse (զգալ)',
    pastForm: 'se ha sentido',
    hyTranslation: 'զգացել է',
    exampleEs: 'Hoy se ha sentido muy bien.',
    exampleHy: 'Այսօր նա իրեն շատ լավ է զգացել։'
  },
  {
    verbInfinitive: 'tener (ունենալ)',
    pastForm: 'ha tenido',
    hyTranslation: 'ունեցել է',
    exampleEs: 'Esta semana Carlos ha tenido mucho trabajo.',
    exampleHy: 'Այս շաբաթ Կառլոսը շատ աշխատանք է ունեցել։'
  },
  {
    verbInfinitive: 'levantarse (արթնանալ)',
    pastForm: 'se ha levantado',
    hyTranslation: 'արթնացել է',
    exampleEs: 'Se ha levantado temprano.',
    exampleHy: 'Վաղ է արթնացել։'
  },
  {
    verbInfinitive: 'salir (դուրս գալ)',
    pastForm: 'ha salido',
    hyTranslation: 'դուրս է եկել',
    exampleEs: 'Ha salido de casa antes de las ocho.',
    exampleHy: 'Տնից դուրս է եկել ժամը ութից առաջ։'
  },
  {
    verbInfinitive: 'llegar (ժամանել / հասնել)',
    pastForm: 'ha llegado',
    hyTranslation: 'հասել է',
    exampleEs: 'Hoy ha llegado a la oficina a las ocho y media.',
    exampleHy: 'Այսօր նա գրասենյակ է հասել ժամը ութ անց կեսին։'
  },
  {
    verbInfinitive: 'comprar (գնել)',
    pastForm: 'ha comprado',
    hyTranslation: 'գնել է',
    exampleEs: 'Ha comprado algunas cosas.',
    exampleHy: 'Մի քանի բան է գնել։'
  }
];

export const VocabularyView: React.FC = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const current = flashcards[cardIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCardIndex((prev) => (prev + 1) % flashcards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCardIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">
      {/* Banner */}
      <div className="bg-slate-900 text-white p-6 rounded-xl shadow-sm border border-slate-800">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold mb-2 border border-blue-400/30">
          <BookMarked className="w-3.5 h-3.5" />
          <span>Pretérito Perfecto • Բայական Քարտեր</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">
          Բառապաշար և Բայեր (Pretérito Perfecto)
        </h1>
        <p className="text-slate-300 text-sm font-medium">
          Սովորեք տեքստերում օգտագործված անցյալ կատարյալ ժամանակաձևի հիմնական բայերը։
        </p>
      </div>

      {/* Interactive Flashcard */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className="w-full max-w-lg min-h-[260px] p-6 sm:p-8 rounded-3xl bg-white border-2 border-amber-200 shadow-xl cursor-pointer select-none transition-all duration-300 hover:scale-[1.02] hover:border-amber-400 flex flex-col justify-between text-center relative overflow-hidden"
          id="flashcard"
        >
          <div className="flex items-center justify-between text-xs text-amber-800 font-bold uppercase tracking-wider">
            <span>
              Քարտ {cardIndex + 1} / {flashcards.length}
            </span>
            <span>{isFlipped ? 'Թարգմանություն' : 'Սեղմեք քարտը շրջելու համար 🔄'}</span>
          </div>

          <div className="my-auto space-y-3">
            {!isFlipped ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-2"
              >
                <span className="text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                  {current.verbInfinitive}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {current.pastForm}
                </h2>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    speakText(current.pastForm, 'es');
                  }}
                  className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-full text-xs font-bold transition-colors"
                >
                  <Volume2 className="w-4 h-4" />
                  Լսել իսպաներեն
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-3"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-950">
                  {current.hyTranslation}
                </div>
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-sm text-slate-800 space-y-1">
                  <p className="font-semibold text-amber-900">{current.exampleEs}</p>
                  <p className="text-xs text-slate-600">{current.exampleHy}</p>
                </div>
              </motion.div>
            )}
          </div>

          <div className="text-xs text-slate-400">
            {isFlipped ? 'Սեղմեք՝ կրկին իսպաներենը տեսնելու համար' : 'Սեղմեք՝ հայերեն թարգմանությունը տեսնելու համար'}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrev}
            className="px-5 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-bold text-sm rounded-xl transition-all shadow-xs"
            id="prev-flashcard"
          >
            ← Նախորդը
          </button>
          <button
            onClick={() => setIsFlipped(!isFlipped)}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition-all shadow-xs"
            id="flip-flashcard"
          >
            Շրջել 🔄
          </button>
          <button
            onClick={handleNext}
            className="px-5 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-bold text-sm rounded-xl transition-all shadow-xs"
            id="next-flashcard"
          >
            Հաջորդը →
          </button>
        </div>
      </div>

      {/* Full Verb Grid Table */}
      <div className="mt-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-600" />
          Բոլոր Բայերի Ցանկը (Lista Completa de Verbos)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {flashcards.map((fc, i) => (
            <div
              key={i}
              className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-300 transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">{fc.verbInfinitive}</span>
                <button
                  onClick={() => speakText(fc.pastForm, 'es')}
                  className="p-1 text-slate-400 hover:text-amber-700"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="font-bold text-slate-900 text-base">{fc.pastForm}</div>
              <div className="text-xs font-medium text-amber-800">{fc.hyTranslation}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
