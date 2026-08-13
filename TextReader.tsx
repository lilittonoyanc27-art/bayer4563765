import React, { useState } from 'react';
import { TextArticle } from './types';
import { speakText } from './speech';
import { Volume2, ChevronDown, ChevronUp, Eye, EyeOff, BookOpen, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TextReaderProps {
  article: TextArticle;
}

export const TextReader: React.FC<TextReaderProps> = ({ article }) => {
  // Store set of sentence IDs whose translations are explicitly revealed
  const [openSentences, setOpenSentences] = useState<Record<string, boolean>>({});
  const [showAll, setShowAll] = useState<boolean>(false);

  const toggleSentence = (id: string) => {
    setOpenSentences((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleToggleAll = () => {
    const nextState = !showAll;
    setShowAll(nextState);
    const newOpenState: Record<string, boolean> = {};
    article.sentences.forEach((s) => {
      newOpenState[s.id] = nextState;
    });
    setOpenSentences(newOpenState);
  };

  const revealedCount = Object.values(openSentences).filter(Boolean).length;
  const totalSentences = article.sentences.length;

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white p-6 rounded-xl shadow-sm border border-slate-800">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold mb-2 border border-blue-400/30">
              <BookOpen className="w-3.5 h-3.5" />
              {article.primaryLang === 'hy'
                ? 'Սկզբնական տեքստը՝ Հայերեն → Թարգմանությունը՝ Իսպաներեն'
                : 'Texto Principal: Español → Traducción: Armenio'}
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1">
              {article.titleOriginal}
            </h1>
            <p className="text-slate-300 text-sm font-medium">
              {article.titleTranslation}
            </p>
          </div>

          {/* Controls */}
          <button
            onClick={handleToggleAll}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all shadow-xs"
            id={`toggle-all-${article.id}`}
          >
            {showAll ? <EyeOff className="w-4 h-4 text-slate-200" /> : <Eye className="w-4 h-4 text-slate-200" />}
            <span>
              {showAll
                ? article.primaryLang === 'hy'
                  ? 'Թաքցնել թարգմանությունները'
                  : 'Ocultar traducciones'
                : article.primaryLang === 'hy'
                  ? 'Բացել բոլոր թարգմանությունները'
                  : 'Mostrar todas las traducciones'}
            </span>
          </button>
        </div>

        {/* Instructions */}
        <div className="mt-4 pt-4 border-t border-slate-800 text-xs sm:text-sm text-slate-300 flex items-center justify-between">
          <span>
            💡 {article.primaryLang === 'hy' 
              ? 'Սեղմեք յուրաքանչյուր նախադասության վրա՝ իսպաներեն թարգմանությունը տեսնելու համար:' 
              : 'Haz clic en cada frase para ver la traducción al armenio:'}
          </span>
          <span className="font-semibold text-blue-400">
            {revealedCount} / {totalSentences} {article.primaryLang === 'hy' ? 'բացված' : 'reveladas'}
          </span>
        </div>
      </div>

      {/* Sentences List */}
      <div className="space-y-3">
        {article.sentences.map((sentence, index) => {
          const isOpen = showAll || !!openSentences[sentence.id];

          return (
            <motion.div
              key={sentence.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, delay: index * 0.02 }}
              className={`group rounded-xl border transition-all duration-200 shadow-xs overflow-hidden ${
                isOpen
                  ? 'bg-white border-blue-300 ring-2 ring-blue-500/10'
                  : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-xs'
              }`}
              id={`sentence-card-${sentence.id}`}
            >
              {/* Primary Clickable Sentence */}
              <div
                onClick={() => toggleSentence(sentence.id)}
                className="p-4 sm:p-5 cursor-pointer flex items-start gap-3 justify-between select-none"
              >
                <div className="flex items-start gap-3 flex-1">
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold flex items-center justify-center mt-0.5 border border-blue-200">
                    {index + 1}
                  </span>
                  <div className="space-y-1">
                    <p className="text-base sm:text-lg font-semibold text-slate-900 leading-relaxed group-hover:text-blue-700 transition-colors">
                      {sentence.original}
                    </p>
                    <p className="text-xs text-slate-400 font-medium">
                      {sentence.originalLang === 'hy' ? 'Հայերեն' : 'Español'} • {isOpen ? (sentence.primaryLang === 'hy' ? 'Սեղմեք՝ թաքցնելու համար' : 'Clic para ocultar') : (sentence.primaryLang === 'hy' ? 'Սեղմեք՝ իսպաներեն թարգմանության համար' : 'Clic para ver traducción')}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0 pt-0.5">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      speakText(sentence.original, sentence.originalLang);
                    }}
                    className="p-2 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-slate-100 transition-colors"
                    title={sentence.originalLang === 'hy' ? 'Լսել հայերեն' : 'Escuchar en español'}
                    id={`speak-orig-${sentence.id}`}
                  >
                    <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <div className="p-1 text-slate-400 group-hover:text-blue-600">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-blue-600" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>
              </div>

              {/* Translation Dropdown Section */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="bg-blue-50/70 border-t border-blue-100 px-4 py-3.5 sm:px-5 sm:py-4 flex items-start justify-between gap-3"
                  >
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <span className="text-[11px] font-bold text-blue-800 uppercase tracking-wider block mb-0.5">
                          {sentence.targetLang === 'es' ? 'Թարգմանություն (Español):' : 'Traducción (Armenio):'}
                        </span>
                        <p className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed">
                          {sentence.translation}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        speakText(sentence.translation, sentence.targetLang);
                      }}
                      className="p-2 rounded-lg bg-white border border-blue-200 text-blue-700 hover:bg-blue-100 transition-colors flex-shrink-0 mt-1 shadow-xs"
                      title={sentence.targetLang === 'es' ? 'Լսել իսպաներեն' : 'Escuchar en armenio'}
                      id={`speak-trans-${sentence.id}`}
                    >
                      <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Grammar & Vocabulary Helper Notes */}
      {article.grammarNotes && (
        <div className="mt-8 bg-slate-900 text-slate-100 p-5 sm:p-6 rounded-2xl border border-slate-800 shadow-md">
          <h3 className="text-base font-bold text-amber-400 mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            {article.primaryLang === 'hy' ? 'Քերականական և բառապաշարի հուշումներ' : 'Notas Gramaticales y Vocabulario'}
          </h3>
          <ul className="space-y-1.5 text-sm text-slate-300">
            {article.grammarNotes.map((note, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
