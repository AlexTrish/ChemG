import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Search, Bookmark, BookmarkCheck, Type, Palette, Download, Share, Eye, EyeOff, Maximize, Minimize } from 'lucide-react';

interface NotesSection {
  id: string;
  title: string;
  content: string;
  type: 'text' | 'formula' | 'image' | 'table';
  isBookmarked?: boolean;
}

interface NotesTemplateProps {
  title: string;
  subject: string;
  sections: NotesSection[];
  onBack: () => void;
  onBookmark?: (sectionId: string) => void;
  onSearch?: (query: string) => void;
}

const NotesTemplate: React.FC<NotesTemplateProps> = ({
  title,
  subject,
  sections,
  onBack,
  onBookmark,
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [fontSize, setFontSize] = useState(16);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [highlightedText, setHighlightedText] = useState<string[]>([]);
  const [showSearch, setShowSearch] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleBookmark = (sectionId: string) => {
    if (onBookmark) {
      onBookmark(sectionId);
    }
  };

  const handleTextSelection = () => {
    const selection = window.getSelection();
    if (selection && selection.toString().trim()) {
      const selectedText = selection.toString().trim();
      if (!highlightedText.includes(selectedText)) {
        setHighlightedText([...highlightedText, selectedText]);
      }
    }
  };

  const exportNotes = () => {
    const content = sections.map(section => 
      `${section.title}\n${'='.repeat(section.title.length)}\n\n${section.content}\n\n`
    ).join('');
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredSections = sections.filter(section =>
    searchQuery === '' || 
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`${isFullscreen ? 'fixed inset-0 z-50 bg-white dark:bg-gray-900' : 'max-w-4xl mx-auto'}`}>
      {/* Заголовок */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
      >
        <div className="flex items-center space-x-4">
          <button
            onClick={onBack}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
          <div className="flex items-center space-x-3">
            <BookOpen className="w-6 h-6 text-blue-500" />
            <div>
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                {title}
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">{subject}</p>
            </div>
          </div>
        </div>

        {/* Панель инструментов */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            title="Поиск"
          >
            <Search className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          </button>
          
          <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
            <button
              onClick={() => setFontSize(Math.max(12, fontSize - 2))}
              className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              title="Уменьшить шрифт"
            >
              <Type className="w-3 h-3 text-gray-600 dark:text-gray-400" />
            </button>
            <span className="text-xs text-gray-500 dark:text-gray-400 px-2">{fontSize}px</span>
            <button
              onClick={() => setFontSize(Math.min(24, fontSize + 2))}
              className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              title="Увеличить шрифт"
            >
              <Type className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          <button
            onClick={exportNotes}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            title="Экспорт"
          >
            <Download className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          </button>

          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            title={isFullscreen ? "Выйти из полноэкранного режима" : "Полноэкранный режим"}
          >
            {isFullscreen ? (
              <Minimize className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            ) : (
              <Maximize className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Поиск */}
      {showSearch && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mb-4"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Поиск по конспекту..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
        </motion.div>
      )}

      {/* Содержимое конспекта */}
      <div 
        ref={contentRef}
        className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
        style={{ fontSize: `${fontSize}px` }}
      >
        <div className="max-h-[calc(100vh-200px)] overflow-y-auto p-6">
          {filteredSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-8 last:mb-0"
            >
              {/* Заголовок секции */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {section.title}
                </h2>
                <button
                  onClick={() => handleBookmark(section.id)}
                  className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  title={section.isBookmarked ? "Убрать закладку" : "Добавить закладку"}
                >
                  {section.isBookmarked ? (
                    <BookmarkCheck className="w-4 h-4 text-blue-500" />
                  ) : (
                    <Bookmark className="w-4 h-4 text-gray-400" />
                  )}
                </button>
              </div>

              {/* Содержимое секции */}
              <div 
                className="prose dark:prose-invert max-w-none"
                onMouseUp={handleTextSelection}
              >
                {section.type === 'text' && (
                  <div 
                    className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{ 
                      __html: section.content.replace(
                        new RegExp(`(${searchQuery})`, 'gi'),
                        searchQuery ? '<mark class="bg-yellow-200 dark:bg-yellow-800">$1</mark>' : '$1'
                      )
                    }}
                  />
                )}

                {section.type === 'formula' && (
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-blue-500">
                    <div className="font-mono text-center text-lg text-gray-900 dark:text-white">
                      {section.content}
                    </div>
                  </div>
                )}

                {section.type === 'table' && (
                  <div className="overflow-x-auto">
                    <div 
                      className="text-gray-700 dark:text-gray-300"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </div>
                )}

                {section.type === 'image' && (
                  <div className="text-center">
                    <img 
                      src={section.content} 
                      alt={section.title}
                      className="max-w-full h-auto rounded-lg border border-gray-200 dark:border-gray-600"
                    />
                  </div>
                )}
              </div>

              {/* Разделитель */}
              {index < filteredSections.length - 1 && (
                <hr className="mt-8 border-gray-200 dark:border-gray-700" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Выделенный текст */}
      {highlightedText.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700"
        >
          <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200 mb-2">
            Выделенные фрагменты:
          </h3>
          <div className="space-y-1">
            {highlightedText.map((text, index) => (
              <div key={index} className="text-sm text-yellow-700 dark:text-yellow-300">
                "...{text}..."
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default NotesTemplate;