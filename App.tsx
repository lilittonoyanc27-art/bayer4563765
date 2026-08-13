import React, { useState } from 'react';
import { articleText1, articleText2, quiz1Data, quiz2Data } from './data';
import { TextReader } from './TextReader';
import { QuizView } from './QuizView';
import { PracticeView } from './PracticeView';
import { VocabularyView } from './VocabularyView';
import { BookOpen, HelpCircle, MessageSquare, GraduationCap, Menu, X, Sparkles, ChevronRight } from 'lucide-react';

export type TabType = 'text-1' | 'text-2' | 'quiz-1' | 'quiz-2' | 'practice' | 'vocabulary';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('text-1');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const getSectionTitle = (tab: TabType) => {
    switch (tab) {
      case 'text-1':
        return 'Տեքստ 1: Կառլոսը և սպորտը';
      case 'text-2':
        return 'Texto 2: Un día ocupado';
      case 'quiz-1':
        return 'Quiz 1: Carlos y el deporte';
      case 'quiz-2':
        return 'Quiz 2: Un día ocupado';
      case 'practice':
        return 'Practice / Պրակտիկա';
      case 'vocabulary':
        return 'Vocabulary / Բառապաշար';
    }
  };

  const navItems = [
    { id: 'text-1' as TabType, label: 'Տեքստ 1: Կառլոսը և սպորտը', icon: BookOpen },
    { id: 'text-2' as TabType, label: 'Texto 2: Un día ocupado', icon: BookOpen },
    { id: 'quiz-1' as TabType, label: 'Quiz 1', icon: HelpCircle },
    { id: 'quiz-2' as TabType, label: 'Quiz 2', icon: HelpCircle },
    { id: 'practice' as TabType, label: 'Practice / Պրակտիկա', icon: MessageSquare },
    { id: 'vocabulary' as TabType, label: 'Vocabulary / Բառապաշար', icon: GraduationCap },
  ];

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <div className="flex h-screen w-full bg-slate-50 font-sans text-slate-800 overflow-hidden">
      {/* Sidebar Navigation - Desktop */}
      <nav className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col shadow-xs flex-shrink-0">
        <div className="p-6 border-b border-slate-100 flex items-center gap-3">
          <span className="bg-blue-600 text-white w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm shadow-xs flex-shrink-0">
            ES
          </span>
          <div>
            <h1 className="text-lg font-bold text-slate-900 leading-tight">
              Linguist ARM
            </h1>
            <p className="text-[11px] text-blue-600 font-semibold tracking-wide">
              Armenian & Spanish
            </p>
          </div>
        </div>

        <div className="flex-1 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={`w-full text-left px-6 py-3 text-sm font-medium transition-colors hover:bg-slate-50 border-l-4 flex items-center gap-3 ${
                  isActive
                    ? 'border-blue-600 bg-blue-50 text-blue-700 font-semibold'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
                id={`nav-btn-${item.id}`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        <div className="p-4 border-t border-slate-100 text-xs text-slate-400 text-center">
          Armenian - Spanish Learning Interface
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-8 shadow-xs flex-shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg md:hidden"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block"></span>
              <div id="section-title" className="text-sm font-bold text-slate-700 uppercase tracking-wider truncate">
                {getSectionTitle(activeTab)}
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-400 italic hidden sm:block">
            Սեղմեք նախադասության վրա թարգմանության համար / Clic para traducir
          </div>
        </header>

        {/* Mobile Menu Drawer Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 shadow-lg py-2 px-4 space-y-1 z-30">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  className={`w-full text-left px-4 py-2.5 text-sm font-medium rounded-lg flex items-center gap-3 ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-bold border-l-4 border-blue-600'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Content Container */}
        <div id="main-content" className="flex-1 p-4 sm:p-8 md:p-10 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-6">
            {activeTab === 'text-1' && <TextReader article={articleText1} />}
            {activeTab === 'text-2' && <TextReader article={articleText2} />}
            {activeTab === 'quiz-1' && (
              <QuizView
                quiz={quiz1Data}
                onNextQuiz={() => setActiveTab('quiz-2')}
                nextQuizTitle="Անցնել Quiz 2-ին"
              />
            )}
            {activeTab === 'quiz-2' && (
              <QuizView
                quiz={quiz2Data}
                onNextQuiz={() => setActiveTab('practice')}
                nextQuizTitle="Անցնել Պրակտիկային"
              />
            )}
            {activeTab === 'practice' && <PracticeView />}
            {activeTab === 'vocabulary' && <VocabularyView />}
          </div>
        </div>

        {/* Footer info bar */}
        <footer className="bg-white border-t border-slate-200 py-3 px-6 flex items-center justify-between text-xs text-slate-500 shadow-xs flex-shrink-0">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span className="font-semibold text-slate-700">
              Pretérito Perfecto • Spanish & Armenian
            </span>
          </div>

          <div className="flex items-center gap-2">
            {activeTab === 'text-1' && (
              <button
                onClick={() => setActiveTab('text-2')}
                className="flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-800"
              >
                <span>Հաջորդը: Texto 2</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
            {activeTab === 'text-2' && (
              <button
                onClick={() => setActiveTab('quiz-1')}
                className="flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-800"
              >
                <span>Հաջորդը: Quiz 1</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
            {activeTab === 'quiz-1' && (
              <button
                onClick={() => setActiveTab('quiz-2')}
                className="flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-800"
              >
                <span>Հաջորդը: Quiz 2</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
            {activeTab === 'quiz-2' && (
              <button
                onClick={() => setActiveTab('practice')}
                className="flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-800"
              >
                <span>Հաջորդը: Պրակտիկա</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
            {activeTab === 'practice' && (
              <button
                onClick={() => setActiveTab('vocabulary')}
                className="flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-800"
              >
                <span>Հաջորդը: Բառապաշար</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
            {activeTab === 'vocabulary' && (
              <button
                onClick={() => setActiveTab('text-1')}
                className="flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-800"
              >
                <span>Վերադառնալ: Տեքստ 1</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </footer>
      </main>
    </div>
  );
}

