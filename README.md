# ChemG
Программное обеспечение нацеленное на улучшения и упрощения в изучении школьной химии с 8-го по 11-й класс.

![GitHub top language](https://img.shields.io/github/languages/top/AlexTrish/ChemG) ![GitHub](https://img.shields.io/github/license/AlexTrish/ChemG) ![GitHub Repo stars](https://img.shields.io/github/stars/AlexTrish/ChemG) ![GitHub issues](https://img.shields.io/github/issues/AlexTrish/ChemG)

## Технические особенности

- **Архитектура:**
  - Фронтенд: React.
  - Бэкенд: Node.js.
  - ИИ: YandexGPT API для генерации текстов.
  - Лаборатория: Godot.

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
cd ChemG

# Установите зависимости
npm install

# Запуск разработки фронтенда
npm run tauri:dev
```

## Что доступно в ChemG?
На данный момент программа поддерживает: частичное взаимодействие с ИИ-наставником,
просмотр конспектов по неорганической химии для 8-х классов, тестирования по
пройденной теме.

## Описание файлов проекта
<table class="iksweb">
	<tbody>
		<tr>
			<th>Название</th>
			<th colspan="2">Описание</th>
		</tr>
		<tr>
			<td rowspan="5">/src</td>
			<td colspan="2">Это основная папка с исходным кодом фронтенд-приложения.</td>
		</tr>
		<tr>
			<td>/components</td>
			<td> Повторно используемые UI-компоненты — отдельные независимые или полузависимые элементы интерфейса.
        <br/>
        <br/>
        <b>UI элементы:</b>
        <br/>
        <ul>
          <li>Шапка - <code>navigation/Header.tsx</code>;</li> 
          <li>Боковое меню - <code>navigation/Sidebar.tsx</code>;</li> 
          <li>Поисковая строка - <code>navigation/Searchbar.tsx</code>;</li> <li>Горизонтальная полоса в верхней части окна приложения - <code>navigation/Titlebar.tsx</code>;</li>
        </ul> 
        <b>Шаблоны для коспектов и тестов с заполнением информации через JSON:</b>
        <br/>
        <ul>
          <li>Шаблон конспектов - <code>/notes/NotesTemplate.tsx</code></li>
          <li>Шаблон тестов с множественным выбором - <code>/tests/MultipleChoiceTest.tsx</code></li>
          <li>Шаблон тестов с одним вариантом ответа - <code>/tests/SingleChoiceTest.tsx</code></li>
          <li>Шаблон результатов теста - <code>/tests/TestResults.tsx</code></li> 
          <li>Шаблон теста - <code>/tests/TestTemplate.tsx</code></li> 
          <li>Шаблон тестов с вводом текста - <code>/tests/TextInputTest.tsx</code></li>
        </ul> 
        <b>Дополнительно:</b> 
        <ul>
          <li>Окно авторизации - <code>auth/AuthScreen.tsx</code>;</li> 
          <li>Карточки <code>cards/ModuleCard.tsx</code>;</li>
        </ul>
        <br/> 
      </td>
		</tr>
		<tr>
			<td>/contexts</td>
			<td>Провайдеры состояний, доступных всему приложению (Авторизация).</td>
		</tr>
		<tr>
			<td>/modules</td>
			<td> Логика и функциональность, сгруппированная по функциональным модулям (Взаимодействие с API, Механика с уровнями и опытом).</td>
		</tr>
		<tr>
			<td>/pages</td>
			<td>ницы приложения — корневые компоненты, которые привязаны к роутингу.</td>
		</tr>
		<tr>
			<td>/src-tauri</td>
			<td colspan="2">Это папка с исходным кодом и конфигурацией нативной части Tauri-приложения, которая работает на Rust.</td>
		</tr>
	</tbody>
</table>

---

## Лицензия

Это расширение распространяется под лицензией AGPL-3.0 license. Более подробная информация приведена в файле `LICENSE`.
