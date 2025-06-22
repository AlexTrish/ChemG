import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast';
import { getLevelInfo } from './modules/experience';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import AuthScreen from './components/auth/AuthScreen';
import Layout from './components/layout/Layout';
import Titlebar from './components/layout/Titlebar';
import Dashboard from './pages/Dashboard';
import OrganicChemistry from './pages/OrganicChemistry';
import InorganicChemistry from './pages/InorganicChemistry';
import PeriodicTable from './pages/PeriodicTable';
import Experiments from './pages/Experiments';
import Profile from './pages/Profile';
import AiChat from './pages/AiChat';
import Settings from './pages/Settings';
import SingleChoiceTest, { TestResults as SingleTestResults } from './components/tests/SingleChoiceTest';
import MultipleChoiceTest, { TestResults as MultipleTestResults } from './components/tests/MultipleChoiceTest';
import TextInputTest, { TestResults as TextInputTestResults } from './components/tests/TextInputTest';
import NotesTemplate from './components/notes/NotesTemplate';
import './index.css';

// Cookie helpers
function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}
function getCookie(name: string) {
  return document.cookie.split('; ').reduce((r, v) => {
    const parts = v.split('=');
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, '');
}

// Пример JSON для теста (SingleChoice)
const testExampleData = {
  title: "Пример теста по химии",
  questions: [
    {
      id: "q1",
      question: "Какой элемент обозначается символом H?",
      options: ["Водород", "Гелий", "Кислород", "Азот"],
      correctAnswer: "Водород"
    },
    {
      id: "q2",
      question: "Сколько протонов у атома углерода?",
      options: ["6", "8", "12", "14"],
      correctAnswer: "6"
    }
  ]
};

// Пример JSON для конспекта
const notesExampleData = {
  title: "Органическая химия: Введение",
  subject: "Органическая химия",
  sections: [
    {
      id: "s1",
      title: "Что такое органическая химия?",
      content: "Органическая химия — это раздел химии, изучающий соединения углерода.",
      type: "text"
    },
    {
      id: "s2",
      title: "Пример формулы",
      content: "C6H12O6",
      type: "formula"
    },
    {
      id: "s3",
      title: "Таблица элементов",
      content: "<table><tr><td>H</td><td>1</td></tr><tr><td>C</td><td>6</td></tr></table>",
      type: "table"
    },
    {
      id: "s4",
      title: "Изображение молекулы",
      content: "https://upload.wikimedia.org/wikipedia/commons/8/88/Glucose_Haworth.png",
      type: "image"
    }
  ]
};

const AppContent: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <div className="h-[100vh] overflow-hidden bg-gray-50 dark:bg-gray-900">
        <Titlebar />
        <AuthScreen />
      </div>
    );
  }

  const handleTestComplete = (results: SingleTestResults | MultipleTestResults | TextInputTestResults) => {};
  const handleNotesBack = () => {};

  const isNotesPage = location.pathname === '/notes-example';

  return (
    <div className="h-[100vh] overflow-hidden bg-gray-50 dark:bg-gray-900">
      <Titlebar />
      <div className={`h-[calc(95vh)] overflow-hidden bg-gray-50 dark:bg-gray-900${isNotesPage ? '' : ' select-none'}`}>
        <Layout>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/organic" element={<OrganicChemistry />} />
              <Route path="/inorganic" element={<InorganicChemistry />} />
              <Route path="/periodic" element={<PeriodicTable />} />
              <Route path="/experiments" element={<Experiments />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/ai-chat" element={<AiChat />} />
              <Route path="/settings" element={<Settings />} />
              <Route
                path="/test-example"
                element={
                  <SingleChoiceTest
                    title={testExampleData.title}
                    questions={testExampleData.questions}
                    onComplete={handleTestComplete}
                    onExit={handleNotesBack}
                  />
                }
              />
              <Route
                path="/notes-example"
                element={
                  <NotesTemplate
                    title={notesExampleData.title}
                    subject={notesExampleData.subject}
                    sections={notesExampleData.sections}
                    onBack={handleNotesBack}
                  />
                }
              />
            </Routes>
          </motion.div>
        </Layout>
      </div>
    </div>
  );
};

function App() {
  // TODO: Получайте experience из глобального состояния или API
  const [experience, setExperience] = React.useState('0');
  const numericExperience = Number(experience.toString().replace(/\D/g, '')) || 0;
  const [levelInfo, setLevelInfo] = React.useState(() => getLevelInfo(numericExperience));
  const prevLevelRef = React.useRef(levelInfo.level);

  React.useEffect(() => {
    const cookieLevel = Number(getCookie('user_level')) || 1;
    prevLevelRef.current = cookieLevel;
  }, []);

  React.useEffect(() => {
    const info = getLevelInfo(numericExperience);
    setLevelInfo(info);

    if (info.level > prevLevelRef.current) {
      toast.success(`Поздравляем! Новый уровень: ${info.level}`);
      setCookie('user_level', String(info.level), 7);
    } else if (info.level !== prevLevelRef.current) {
      setCookie('user_level', String(info.level), 7);
    }
    prevLevelRef.current = info.level;
  }, [numericExperience]);

  return (
    <>
      <AuthProvider>
        <Router>
          <AppContent />
          <Toaster 
            position="top-center"
            toastOptions={{
              duration: 2000,
              style: {
                background: '#ffffff',
                color: '#1f2937',
                borderRadius: '12px',
                padding: '12px 16px',
                fontSize: '14px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e5e7eb',
              },
            }}
          />
        </Router>
      </AuthProvider>
      <Toaster />
    </>
  );
}

export default App;