# ChemG
Программное обеспечение для инженерных вычислений, научно-естественных наук, математики и алгоритмов.

![GitHub top language](https://img.shields.io/github/languages/top/AlexTrish/ChemG)
![GitHub](https://img.shields.io/github/license/AlexTrish/ChemG)
![GitHub Repo stars](https://img.shields.io/github/stars/AlexTrish/ChemG)
![GitHub issues](https://img.shields.io/github/issues/AlexTrish/ChemG)

## Технические особенности

- **Архитектура:**
  - Фронтенд: React.
  - Бэкенд: Node.js.
  - ИИ: YandexGPT API для генерации текстов.
  - Лаборатория: Godot.

---

## Установка и запуск

### Системные требования

- Windows 10+ / macOS 10.15+ / Linux (Ubuntu 20.04+ или аналогичные)
- Поддержка Tauri и Rust (для сборки из исходников)

### Установка через готовый установщик

1. Скачайте установщик для вашей ОС с [релизов на GitHub](https://github.com/AlexTrish/ChemG/releases).
2. Запустите установщик и следуйте инструкциям.
3. После установки запустите программу через меню Пуск (Windows), Launchpad (macOS) или соответствующий ярлык (Linux).

### Запуск из исходников (для разработчиков)

```bash
git clone https://github.com/AlexTrish/ChemG.git
cd chem-learning-platform

# Установите зависимости
npm install

# Запуск разработки фронтенда
npm run tauri dev
```

## Что доступно в ChemG?
На данный момент программа поддерживает: частичное взаимодействие с ИИ-наставником,
просмотр конспектов по неорганической химии для 8-х классов, тестирования по
пройденной теме.

## Описание файлов проекта
| Название | Описание                                                        |
|----------|-----------------------------------------------------------------|
| /src	   | В данной папке находится весь Front-end                         |
| /src-tauri      | Безопасность, уязвимости                                 |

---

## 📝 Лицензия

Это расширение распространяется под лицензией AGPL-3.0 license. Более подробная информация приведена в файле `LICENSE`.
