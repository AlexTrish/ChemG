import React, { useState } from 'react';
import { appWindow } from '@tauri-apps/api/window';
import { X, Minus, Square } from 'lucide-react';

const Titlebar: React.FC = () => {
  const [isMaximized, setIsMaximized] = useState(false);
  const isTauri = !!(window as any).__TAURI__;

  const toggleMaximize = async () => {
    const currentlyMaximized = await appWindow.isMaximized();
    if (currentlyMaximized) {
      await appWindow.unmaximize();
      setIsMaximized(false);
    } else {
      await appWindow.maximize();
      setIsMaximized(true);
    }
  };

  return (
    <div
      className="w-full h-10  flex items-center justify-between px-4 text-sm select-none bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700"
      {...(isTauri ? { 'data-tauri-drag-region': true } : {})}
    >
      <div className="flex-1 text-center ml-[10vw] mt-auto mb-auto text-gray-800 dark:text-gray-100 font-bold" {...(isTauri ? { 'data-tauri-drag-region': true } : {})}>
        ChemG
      </div>

      <div
        className="flex space-x-2"
        {...(isTauri ? { 'data-tauri-drag-region': true } : {})}
      >
        <button
          onClick={() => appWindow.minimize()}
          className="w-8 h-8 flex items-center justify-center rounded text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          {...(isTauri ? { 'data-tauri-drag-region': false } : {})}
          title="Свернуть"
        >
          <Minus size={16} />
        </button>
        <button
          onClick={toggleMaximize}
          className="w-8 h-8 flex items-center justify-center rounded text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          {...(isTauri ? { 'data-tauri-drag-region': false } : {})}
          title="Полноэкранный режим"
        >
          <Square size={16} />
        </button>
        <button
          onClick={() => appWindow.close()}
          className="w-8 h-8 flex items-center justify-center rounded text-gray-800 dark:text-gray-100 hover:bg-red-500 hover:text-white transition"
          {...(isTauri ? { 'data-tauri-drag-region': false } : {})}
          title="Закрыть"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default Titlebar;