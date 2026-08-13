import React, { useState } from 'react';
import { practiceQuestionsData } from './data';
import { speakText } from './speech';
import { Volume2, MessageSquare, ChevronDown, ChevronUp, Sparkles, Send, Mic, RefreshCw, Eye, EyeOff } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const PracticeView: React.FC = () => {
  // Store state for open Armenian question translations: { [qId]: boolean }
  const [openQuestionHy, setOpenQuestionHy] = useState<Record<number, boolean>>({});
  // Store state for open examples accordion: { [qId]: boolean }
  const [openExamples, setOpenExamples] = useState<Record<number, boolean>>({});
  // Global show all translations
  const [showAllHy, setShowAllHy] = useState<boolean>(false);
  // User written answers: { [qId]: string }
  const [userCustomAnswers, setUserCustomAnswers] = useState<Record<number, string>>({});

  const toggleQuestionHy = (qId: number) => {
    setOpenQuestionHy((prev) => ({
      ...prev,
      [qId]: !prev[qId],
    }));
  };

  const toggleExamples = (qId: number) => {
    setOpenExamples((prev) => ({
      ...prev,
      [qId]: !prev[qId],
    }));
  };

  const toggleAllHy = () => {
    const nextVal = !showAllHy;
    setShowAllHy(nextVal);
    const newHyState: Record<number, boolean> = {};
    const newExState: Record<number, boolean> = {};
    practiceQuestionsData.forEach((q) => {
      newHyState[q.id] = nextVal;
      newExState[q.id] = nextVal;
    });
    setOpenQuestionHy(newHyState);
    setOpenExamples(newExState);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white p-6 rounded-xl shadow-sm border border-slate-800">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold mb-2 border border-blue-400/30">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>3. Preguntas para practicar • Խոսակցական պրակտիկա</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">
              Preguntas para practicar — Հարցեր պրակտիկայի համար
            </h1>
            <p className="text-slate-300 text-sm font-medium">
              Sobre deporte y tiempo libre — Սպորտի և ազատ ժամանակի մասին
            </p>
          </div>

          <button
            onClick={toggleAllHy}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all shadow-xs"
            id="toggle-all-practice"
          >
            {showAllHy ? (
              <EyeOff className="w-4 h-4 text-slate-200" />
            ) : (
              <Eye className="w-4 h-4 text-slate-200" />
            )}
            <span>
              {showAllHy ? 'Թաքցնել բոլոր թարգմանությունները' : 'Ցուցադրել բոլոր թարգմանությունները'}
            </span>
          </button>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-800 text-xs sm:text-sm text-slate-300">
          💡 Սեղմեք իսպաներեն հարցի վրա՝ հայերեն թարգմանությունը տեսնելու համար, ապա սեղմեք <strong>«Ejemplos / Օրինակներ»</strong> կոճակը՝ պատասխանի տարբերակները բացելու համար։
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {practiceQuestionsData.map((pq) => {
          const isHyOpen = showAllHy || !!openQuestionHy[pq.id];
          const isExamplesOpen = showAllHy || !!openExamples[pq.id];

          return (
            <motion.div
              key={pq.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-purple-300 transition-all"
              id={`practice-card-${pq.id}`}
            >
              {/* Question Header */}
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div
                    onClick={() => toggleQuestionHy(pq.id)}
                    className="cursor-pointer group flex-1"
                  >
                    <span className="text-xs font-bold text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full inline-block mb-1.5 border border-purple-200">
                      Հարց {pq.id}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-purple-900 transition-colors leading-snug">
                      {pq.questionEs}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1 flex-shrink-0">
                    <button
                      onClick={() => speakText(pq.questionEs, 'es')}
                      className="p-2 rounded-lg text-slate-500 hover:text-purple-600 hover:bg-purple-50 transition-colors"
                      title="Escuchar en español"
                      id={`speak-pq-${pq.id}`}
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Armenian Question Translation */}
                <AnimatePresence>
                  {isHyOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 font-medium text-base flex items-center gap-2"
                    >
                      <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <div>
                        <span className="text-xs font-bold text-amber-800 block">Հայերեն թարգմանություն:</span>
                        <span>{pq.questionHy}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Button for Ejemplos / Օրինակներ */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => toggleExamples(pq.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs ${
                      isExamplesOpen
                        ? 'bg-purple-600 text-white shadow-purple-200'
                        : 'bg-purple-50 hover:bg-purple-100 text-purple-800 border border-purple-200'
                    }`}
                    id={`btn-examples-${pq.id}`}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Ejemplos de respuesta / Պատասխանների օրինակներ</span>
                    {isExamplesOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Accordion for Examples */}
              <AnimatePresence>
                {isExamplesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="mt-4 pt-4 border-t border-slate-100 space-y-3"
                  >
                    <div className="text-xs font-bold text-purple-900 uppercase tracking-wider flex items-center gap-1.5">
                      <span>Օրինակներ (Ejemplos):</span>
                    </div>

                    <div className="grid gap-3">
                      {pq.examples.map((ex) => (
                        <div
                          key={ex.id}
                          className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-purple-50/40 hover:border-purple-200 transition-colors space-y-1"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <p className="text-base font-semibold text-slate-900">
                              {ex.textEs}
                            </p>
                            <button
                              onClick={() => speakText(ex.textEs, 'es')}
                              className="p-1.5 text-slate-400 hover:text-purple-600 rounded-md transition-colors flex-shrink-0"
                              title="Escuchar ejemplo"
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="flex items-center justify-between gap-2 text-xs text-amber-900 font-medium">
                            <span>• {ex.textHy}</span>
                            <button
                              onClick={() => speakText(ex.textHy, 'hy')}
                              className="p-1 text-amber-700 hover:text-amber-900"
                              title="Լսել հայերեն"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Interactive Input for User Response */}
                    <div className="mt-4 pt-3 border-t border-slate-200/60">
                      <label className="block text-xs font-bold text-slate-600 mb-1">
                        ✍️ Փորձիր գրել քո պատասխանը իսպաներենով (Práctica escrita):
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={userCustomAnswers[pq.id] || ''}
                          onChange={(e) =>
                            setUserCustomAnswers({
                              ...userCustomAnswers,
                              [pq.id]: e.target.value,
                            })
                          }
                          placeholder="Ej: Sí, he hecho deporte hoy..."
                          className="flex-1 px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                        />
                        <button
                          onClick={() => {
                            if (userCustomAnswers[pq.id]) {
                              speakText(userCustomAnswers[pq.id], 'es');
                            }
                          }}
                          disabled={!userCustomAnswers[pq.id]}
                          className="px-3 py-2 bg-purple-600 disabled:opacity-40 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 hover:bg-purple-700 transition-all"
                          title="Escuchar mi respuesta"
                        >
                          <Volume2 className="w-4 h-4" />
                          Լսել
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
