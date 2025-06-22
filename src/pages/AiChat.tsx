import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Trash2, Copy, Sparkles, BookOpen, Lightbulb } from 'lucide-react';
import toast from 'react-hot-toast';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

const AiChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: 'Привет! Я ваш ИИ-наставник по химии. Готов помочь вам разобраться с любыми вопросами! 🧪\n\nВы можете спросить меня о:\n• Химических реакциях и уравнениях\n• Строении атомов и молекул\n• Периодической таблице\n• Органической и неорганической химии\n• Решении задач\n\nЧто вас интересует?',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
  }, [messages]);

  const quickQuestions = [
    "Объясни строение атома",
    "Как составить химическое уравнение?",
    "Что такое валентность?",
    "Расскажи о периодической таблице"
  ];

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Симуляция ответа ИИ
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: generateAiResponse(inputMessage),
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000 + Math.random() * 2000);
  };

  const generateAiResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('атом') || lowerQuestion.includes('строение')) {
      return `Отличный вопрос о строении атома! 🔬

Атом состоит из трех основных частиц:

**Ядро:**
• Протоны (положительный заряд)
• Нейтроны (нейтральный заряд)

**Электронная оболочка:**
• Электроны (отрицательный заряд)
• Движутся по орбиталям вокруг ядра

**Ключевые принципы:**
1. Число протонов = атомный номер элемента
2. Число электронов = число протонов (в нейтральном атоме)
3. Электроны определяют химические свойства

Хотите узнать больше о конкретном элементе или электронных конфигурациях?`;
    }
    
    if (lowerQuestion.includes('уравнение') || lowerQuestion.includes('реакция')) {
      return `Составление химических уравнений - важный навык! ⚗️

**Пошаговый алгоритм:**

1. **Записать формулы** реагентов и продуктов
2. **Подсчитать атомы** каждого элемента
3. **Расставить коэффициенты** для баланса
4. **Проверить** равенство атомов

**Пример:**
H₂ + O₂ → H₂O

Балансировка:
2H₂ + O₂ → 2H₂O

**Проверка:**
• H: 4 атома слева = 4 атома справа ✓
• O: 2 атома слева = 2 атома справа ✓

Попробуйте сбалансировать свое уравнение!`;
    }
    
    if (lowerQuestion.includes('валентность')) {
      return `Валентность - способность атома образовывать связи! 🔗

**Определение:**
Валентность показывает, сколько связей может образовать атом.

**Основные валентности:**
• H - I
• O - II  
• N - III
• C - IV
• Cl - I, III, V, VII

**Правила определения:**
1. По группе в таблице Менделеева
2. По числу неспаренных электронов
3. По готовым соединениям

**Применение:**
Валентность помогает составлять формулы:
H₂O (H-I, O-II)
NH₃ (N-III, H-I)

Какие соединения хотите разобрать?`;
    }
    
    const responses = [
      'Интересный вопрос! Давайте разберем это подробно...',
      'Отлично! Это важная тема в химии. Начнем с основ...',
      'Хороший вопрос для понимания химических процессов! 🧪',
      'Это можно объяснить через призму молекулярной структуры...',
      'Давайте пошагово разберем этот вопрос...'
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: '1',
        type: 'ai',
        content: 'Привет! Я ваш ИИ-наставник по химии. Готов помочь вам разобраться с любыми вопросами! 🧪',
        timestamp: new Date(),
      },
    ]);
    toast.success('История чата очищена');
  };

  const handleCopyMessage = (content: string) => {
    navigator.clipboard.writeText(content);
    toast.success('Сообщение скопировано');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
    inputRef.current?.focus();
  };

  return (
    <div className="h-[calc(95vh-10rem)] flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 rounded-lg">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between p-6 bg-white/50 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-700/50 rounded-tl-lg rounded-tr-lg"
      >
        <div className="flex h-[1rem] items-center space-x-4">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl"
          >
            <Sparkles className="w-6 h-6 text-white" />
          </motion.div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
              ИИ-наставник по химии
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Персональный помощник для изучения химии
            </p>
          </div>
        </div>
        
        <button
          onClick={handleClearChat}
          className="flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rad rounded-lg transition-all"
        >
          <Trash2 className="w-4 h-4" />
          <span className="text-sm">Очистить</span>
        </button>
      </motion.div>

      {/* Область сообщений */}
      <div className="flex-1 overflow-hidden rounded-lg">
        <div className="h-full flex flex-col">
          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-none">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-3 max-w-4xl ${
                    message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}>
                    {/* Аватар */}
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
                        message.type === 'user' 
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
                          : 'bg-gradient-to-r from-purple-500 to-pink-500'
                      }`}
                    >
                      {message.type === 'user' ? (
                        <User className="w-5 h-5 text-white" />
                      ) : (
                        <Bot className="w-5 h-5 text-white" />
                      )}
                    </motion.div>
                    
                    {/* Сообщение */}
                    <div className={`relative group ${
                      message.type === 'user' ? 'text-right' : 'text-left'
                    }`}>
                      <motion.div 
                        whileHover={{ scale: 1.01 }}
                        className={`inline-block p-4 rounded-2xl shadow-sm ${
                          message.type === 'user'
                            ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                            : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                      </motion.div>
                      
                      {/* Кнопки действий */}
                      <div className={`absolute top-2 opacity-0 group-hover:opacity-100 transition-opacity ${
                        message.type === 'user' ? 'left-2' : 'right-2'
                      }`}>
                        <button
                          onClick={() => handleCopyMessage(message.content)}
                          className="p-1 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                          title="Копировать сообщение"
                        >
                          <Copy className="w-3 h-3 text-gray-500 dark:text-gray-400" />
                        </button>
                      </div>
                      
                      <p className={`text-xs text-gray-500 dark:text-gray-400 mt-2 ${
                        message.type === 'user' ? 'text-right' : 'text-left'
                      }`}>
                        {message.timestamp.toLocaleTimeString('ru-RU', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {/* Индикатор печати */}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="flex items-start space-x-3 max-w-4xl">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 shadow-sm">
                    <div className="flex space-x-1">
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        className="w-2 h-2 bg-purple-400 rounded-full"
                      />
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 bg-purple-400 rounded-full"
                      />
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        className="w-2 h-2 bg-purple-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Поле ввода */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-gray-200/50 dark:border-gray-700/50 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
          >
            <div className="flex items-center space-x-3 max-w-4xl mx-auto">
              <div className="flex-1 relative">
                <textarea
                  ref={inputRef}
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Задайте вопрос по химии..."
                  className="flex items-center w-full h-[1rem] p-3 pr-12 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none transition-all shadow-sm scrollbar-none"
                  rows={1}
                  style={{ minHeight: '52px', maxHeight: '120px' }}
                />
                <div className="absolute right-3 bottom-3 text-xs text-gray-400">
                  {inputMessage.length}/500
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
              >
                <Send className="w-5 h-5" />
              </motion.button>
            </div>
            
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">
              Нажмите Enter для отправки, Shift+Enter для новой строки
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AiChat;