import React, { useState } from 'react';
import { QuizData } from './types';
import { speakText } from './speech';
import { Volume2, CheckCircle2, XCircle, RotateCcw, HelpCircle, Eye, EyeOff, Sparkles, ChevronRight, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface QuizViewProps {
  quiz: QuizData;
  onNextQuiz?: () => void;
  nextQuizTitle?: string;
}

export const QuizView: React.FC<QuizViewProps> = ({ quiz, onNextQuiz, nextQuizTitle }) => {
  // User selected answers: { [questionId]: optionId }
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  // Question translation visibility: { [questionId]: boolean }
  const [openQuestionsHy, setOpenQuestionsHy] = useState<Record<number, boolean>>({});
  // Option translation visibility: { [`${qId}-${optId}`]: boolean }
  const [openOptionsHy, setOpenOptionsHy] = useState<Record<string, boolean>>({});
  // Global show all translations toggle
  const [showAllTranslations, setShowAllTranslations] = useState<boolean>(false);
  // Submitted state to view overall score
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSelectOption = (qId: number, optId: string) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({
      ...prev,
      [qId]: optId,
    }));
  };

  const toggleQuestionHy = (qId: number) => {
    setOpenQuestionsHy((prev) => ({
      ...prev,
      [qId]: !prev[qId],
    }));
  };

  const toggleOptionHy = (qId: number, optId: string) => {
    const key = `${qId}-${optId}`;
    setOpenOptionsHy((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleToggleAllTranslations = () => {
    const nextVal = !showAllTranslations;
    setShowAllTranslations(nextVal);
    
    const newQuestionsHy: Record<number, boolean> = {};
    const newOptionsHy: Record<string, boolean> = {};
    
    quiz.questions.forEach((q) => {
      newQuestionsHy[q.id] = nextVal;
      q.options.forEach((opt) => {
        newOptionsHy[`${q.id}-${opt.id}`] = nextVal;
      });
    });

    setOpenQuestionsHy(newQuestionsHy);
    setOpenOptionsHy(newOptionsHy);
  };

  const handleReset = () => {
    setUserAnswers({});
    setIsSubmitted(false);
  };

  // Calculate score
  const totalQuestions = quiz.questions.length;
  const answeredCount = Object.keys(userAnswers).length;
  let correctCount = 0;
  quiz.questions.forEach((q) => {
    if (userAnswers[q.id] === q.correctOptionId) {
      correctCount++;
    }
  });

  const percentage = Math.round((correctCount / totalQuestions) * 100);

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">
      {/* Quiz Banner Header */}
      <div className="bg-slate-900 text-white p-6 rounded-xl shadow-sm border border-slate-800">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold mb-2 border border-blue-400/30">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Викторина • {quiz.questions.length} preguntas</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">
              {quiz.titleEs}
            </h1>
            <p className="text-slate-300 text-sm font-medium">
              {quiz.titleHy}
            </p>
          </div>

          <button
            onClick={handleToggleAllTranslations}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all shadow-xs"
            id={`toggle-quiz-trans-${quiz.id}`}
          >
            {showAllTranslations ? (
              <EyeOff className="w-4 h-4 text-slate-200" />
            ) : (
              <Eye className="w-4 h-4 text-slate-200" />
            )}
            <span>
              {showAllTranslations
                ? 'Թաքցնել հայերեն թարգմանությունները'
                : 'Ցուցադրել հայերեն թարգմանությունները'}
            </span>
          </button>
        </div>

        {/* Info notice */}
        <div className="mt-4 pt-4 border-t border-slate-800 text-xs sm:text-sm text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span>
            💡 <strong>Հուշում:</strong> Սեղմեք ցանկացած իսպաներեն հարցի կամ պատասխանի վրա՝ հայերեն թարգմանությունը տեսնելու համար։
          </span>
          <span className="font-semibold text-blue-400">
            {answeredCount} / {totalQuestions} պատասխանված
          </span>
        </div>
      </div>

      {/* Questions list */}
      <div className="space-y-6">
        {quiz.questions.map((q, index) => {
          const isQuestionHyOpen = showAllTranslations || !!openQuestionsHy[q.id];
          const selectedOptId = userAnswers[q.id];
          const isCorrect = selectedOptId === q.correctOptionId;

          return (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.03 }}
              className={`p-5 sm:p-6 rounded-2xl border transition-all shadow-sm bg-white border-slate-200 hover:border-slate-300 ${
                isSubmitted
                  ? isCorrect
                    ? 'border-emerald-300 bg-emerald-50/20'
                    : 'border-rose-300 bg-rose-50/20'
                  : ''
              }`}
              id={`quiz-q-${q.id}`}
            >
              {/* Question Header */}
              <div className="space-y-3 mb-4">
                <div className="flex items-start justify-between gap-3">
                  <div
                    onClick={() => toggleQuestionHy(q.id)}
                    className="cursor-pointer group flex-1"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-200">
                        Հարց {index + 1}
                      </span>
                      <span className="text-xs text-slate-400 group-hover:text-indigo-600 transition-colors">
                        (Սեղմեք իսպաներեն հարցին՝ թարգմանության համար)
                      </span>
                    </div>

                    {/* Spanish Question */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-indigo-900 transition-colors leading-snug">
                      {q.questionEs}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => speakText(q.questionEs, 'es')}
                      className="p-2 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                      title="Escuchar en español"
                      id={`speak-q-${q.id}`}
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Armenian Question translation popover/box */}
                <AnimatePresence>
                  {isQuestionHyOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-base font-medium flex items-center gap-2"
                    >
                      <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <div>
                        <span className="text-xs font-bold text-amber-800 block">Հայերեն թարգմանություն:</span>
                        <span>{q.questionHy}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Options Grid */}
              <div className="space-y-2.5">
                {q.options.map((opt) => {
                  const optHyKey = `${q.id}-${opt.id}`;
                  const isOptHyOpen = showAllTranslations || !!openOptionsHy[optHyKey];
                  const isSelected = selectedOptId === opt.id;
                  const isThisCorrect = opt.id === q.correctOptionId;

                  let optStyle = 'bg-slate-50 border-slate-200 hover:bg-indigo-50/50 hover:border-indigo-300';
                  if (isSelected) {
                    optStyle = 'bg-indigo-50 border-indigo-500 text-indigo-950 ring-2 ring-indigo-500/30';
                  }

                  if (isSubmitted) {
                    if (isThisCorrect) {
                      optStyle = 'bg-emerald-100/80 border-emerald-500 text-emerald-950 font-semibold ring-2 ring-emerald-500/30';
                    } else if (isSelected && !isThisCorrect) {
                      optStyle = 'bg-rose-100/80 border-rose-400 text-rose-950 ring-2 ring-rose-400/30';
                    }
                  }

                  return (
                    <div
                      key={opt.id}
                      className={`rounded-xl border p-3.5 transition-all ${optStyle}`}
                      id={`quiz-opt-${q.id}-${opt.id}`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        {/* Option Radio & Spanish Text */}
                        <div
                          onClick={() => handleSelectOption(q.id, opt.id)}
                          className="flex items-start gap-3 flex-1 cursor-pointer select-none"
                        >
                          <div
                            className={`w-5 h-5 rounded-full border flex items-center justify-center mt-0.5 flex-shrink-0 text-xs font-bold ${
                              isSelected
                                ? 'bg-indigo-600 border-indigo-600 text-white'
                                : 'border-slate-400 bg-white text-slate-600'
                            }`}
                          >
                            {opt.id.toUpperCase()}
                          </div>

                          <div className="space-y-0.5">
                            <p
                              onClick={(e) => {
                                // Clicking on option text toggles Armenian translation reveal
                                e.stopPropagation();
                                toggleOptionHy(q.id, opt.id);
                              }}
                              className="text-base font-medium text-slate-800 hover:text-indigo-900 cursor-pointer"
                              title="Սեղմեք թարգմանությունը տեսնելու համար"
                            >
                              {opt.textEs}
                            </p>
                            <span className="text-xs text-slate-400 hover:text-slate-600 cursor-pointer block" onClick={() => toggleOptionHy(q.id, opt.id)}>
                              {isOptHyOpen ? '▲ Թաքցնել թարգմանությունը' : '▼ Սեղմեք հայերեն թարգմանության համար'}
                            </span>
                          </div>
                        </div>

                        {/* Speech & status icon */}
                        <div className="flex items-center gap-1.5 flex-shrink-0">
                          {isSubmitted && isThisCorrect && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                          )}
                          {isSubmitted && isSelected && !isThisCorrect && (
                            <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
                          )}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              speakText(opt.textEs, 'es');
                            }}
                            className="p-1.5 rounded-md text-slate-400 hover:text-indigo-600 hover:bg-white transition-colors"
                            title="Escuchar opción"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Option Armenian Translation */}
                      <AnimatePresence>
                        {isOptHyOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2.5 pt-2 border-t border-slate-200/80 text-sm font-medium text-amber-900 bg-amber-50/80 px-3 py-1.5 rounded-lg flex items-center justify-between gap-2"
                          >
                            <span className="flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                              {opt.textHy}
                            </span>
                            <button
                              onClick={() => speakText(opt.textHy, 'hy')}
                              className="p-1 rounded text-amber-700 hover:bg-amber-100"
                              title="Լսել հայերեն"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer Submit & Score Card */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
        {!isSubmitted ? (
          <>
            <div className="text-sm text-slate-600">
              Պատասխանել եք <strong>{answeredCount}</strong> / <strong>{totalQuestions}</strong> հարցերին։
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <button
                onClick={handleReset}
                className="flex-1 sm:flex-none px-4 py-2.5 border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Մաքրել
              </button>
              <button
                onClick={() => setIsSubmitted(true)}
                disabled={answeredCount === 0}
                className="flex-1 sm:flex-none px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2"
                id={`submit-quiz-${quiz.id}`}
              >
                <Award className="w-4 h-4" />
                Ստուգել պատասխանները
              </button>
            </div>
          </>
        ) : (
          <div className="w-full space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                  {percentage}%
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">
                    Ձեր արդյունքը՝ {correctCount} / {totalQuestions} ճիշտ
                  </h3>
                  <p className="text-xs text-slate-600">
                    {percentage >= 80
                      ? '🎉 Գերազանց արդյունք: Դուք շատ լավ եք հասկացել տեքստը:'
                      : percentage >= 50
                        ? '👍 Լավ է: Կարող եք կրկին կարդալ տեքստը և փորձել:'
                        : '📖 Խորհուրդ է տրվում կրկին կարդալ տեքստը:'}
                  </p>
                </div>
              </div>

              <div className="flex gap-2 w-full sm:w-auto">
                <button
                  onClick={handleReset}
                  className="flex-1 sm:flex-none px-4 py-2.5 border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Կրկնել
                </button>
                {onNextQuiz && (
                  <button
                    onClick={onNextQuiz}
                    className="flex-1 sm:flex-none px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>{nextQuizTitle || 'Հաջորդ վիկտորինան'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
