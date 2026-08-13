export type Language = 'es' | 'hy';

export interface SentenceItem {
  id: string;
  original: string;
  translation: string;
  originalLang: Language;
  targetLang: Language;
}

export interface TextArticle {
  id: string;
  titleOriginal: string;
  titleTranslation: string;
  primaryLang: Language;
  targetLang: Language;
  sentences: SentenceItem[];
  grammarNotes?: string[];
}

export interface QuizOption {
  id: string;
  textEs: string;
  textHy: string;
}

export interface QuizQuestion {
  id: number;
  questionEs: string;
  questionHy: string;
  options: QuizOption[];
  correctOptionId: string; // 'a', 'b', or 'c'
}

export interface QuizData {
  id: string;
  titleEs: string;
  titleHy: string;
  descriptionEs: string;
  descriptionHy: string;
  questions: QuizQuestion[];
}

export interface PracticeAnswerExample {
  id: string;
  textEs: string;
  textHy: string;
}

export interface PracticeQuestion {
  id: number;
  questionEs: string;
  questionHy: string;
  examples: PracticeAnswerExample[];
}
