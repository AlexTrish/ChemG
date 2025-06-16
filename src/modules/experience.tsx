// Experience and Level System for ChemG
// Система опыта и уровней для ChemG

export interface LevelInfo {
  level: number;
  currentXP: number;
  xpForNextLevel: number;
  xpForCurrentLevel: number;
  progressPercent: number;
  title: string;
}

// Формула расчета XP для достижения уровня
export const getXPForLevel = (level: number): number => {
  if (level <= 1) return 0;
  return Math.floor(100 * Math.pow(1.5, level - 1));
};

// Получение информации об уровне по текущему XP
export const getLevelInfo = (currentXP: number): LevelInfo => {
  let level = 1;
  let xpForCurrentLevel = 0;
  
  // Находим текущий уровень
  while (getXPForLevel(level + 1) <= currentXP) {
    level++;
    xpForCurrentLevel = getXPForLevel(level);
  }
  
  const xpForNextLevel = getXPForLevel(level + 1);
  const xpProgress = currentXP - xpForCurrentLevel;
  const xpNeeded = xpForNextLevel - xpForCurrentLevel;
  const progressPercent = Math.floor((xpProgress / xpNeeded) * 100);
  
  // Определяем звание
  const getTitle = (level: number): string => {
    if (level >= 50) return 'Мастер Химии';
    if (level >= 40) return 'Эксперт';
    if (level >= 30) return 'Профессионал';
    if (level >= 20) return 'Специалист';
    if (level >= 15) return 'Продвинутый';
    if (level >= 10) return 'Опытный';
    if (level >= 5) return 'Ученик';
    return 'Новичок';
  };
  
  return {
    level,
    currentXP,
    xpForNextLevel,
    xpForCurrentLevel,
    progressPercent,
    title: getTitle(level),
  };
};

// Награды за различные действия
export const XP_REWARDS = {
  LESSON_COMPLETE: 50,
  TEST_COMPLETE: 100,
  PERFECT_TEST: 150, // за 100% правильных ответов
  EXPERIMENT_COMPLETE: 75,
  DAILY_LOGIN: 10,
  STREAK_BONUS: 25, // бонус за каждый день подряд
  ACHIEVEMENT_UNLOCK: 200,
  FIRST_TIME_BONUS: 50, // за первое выполнение чего-либо
};

// Типы достижений
export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  xpReward: number;
  condition: (userStats: any) => boolean;
  unlocked?: boolean;
}

// Список достижений
export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_lesson',
    title: 'Первые шаги',
    description: 'Завершите свой первый урок',
    icon: '🎯',
    xpReward: 100,
    condition: (stats) => stats.lessonsCompleted >= 1,
  },
  {
    id: 'chemistry_explorer',
    title: 'Исследователь химии',
    description: 'Завершите 5 уроков',
    icon: '🔬',
    xpReward: 200,
    condition: (stats) => stats.lessonsCompleted >= 5,
  },
  {
    id: 'test_master',
    title: 'Мастер тестов',
    description: 'Пройдите 10 тестов',
    icon: '📝',
    xpReward: 300,
    condition: (stats) => stats.testsCompleted >= 10,
  },
  {
    id: 'perfect_score',
    title: 'Идеальный результат',
    description: 'Получите 100% в любом тесте',
    icon: '⭐',
    xpReward: 250,
    condition: (stats) => stats.perfectTests >= 1,
  },
  {
    id: 'week_streak',
    title: 'Неделя подряд',
    description: 'Заходите в приложение 7 дней подряд',
    icon: '🔥',
    xpReward: 400,
    condition: (stats) => stats.loginStreak >= 7,
  },
  {
    id: 'organic_master',
    title: 'Мастер органики',
    description: 'Завершите модуль органической химии',
    icon: '🧪',
    xpReward: 500,
    condition: (stats) => stats.organicModuleCompleted,
  },
  {
    id: 'inorganic_master',
    title: 'Мастер неорганики',
    description: 'Завершите модуль неорганической химии',
    icon: '⚗️',
    xpReward: 500,
    condition: (stats) => stats.inorganicModuleCompleted,
  },
  {
    id: 'experiment_lover',
    title: 'Любитель экспериментов',
    description: 'Проведите 20 экспериментов',
    icon: '🧬',
    xpReward: 350,
    condition: (stats) => stats.experimentsCompleted >= 20,
  },
  {
    id: 'speed_learner',
    title: 'Быстрый ученик',
    description: 'Завершите 3 урока за один день',
    icon: '⚡',
    xpReward: 300,
    condition: (stats) => stats.lessonsInOneDay >= 3,
  },
  {
    id: 'knowledge_seeker',
    title: 'Искатель знаний',
    description: 'Потратьте 10 часов на изучение',
    icon: '📚',
    xpReward: 600,
    condition: (stats) => stats.totalTimeSpent >= 36000, // 10 часов в секундах
  },
];

// Функция для проверки новых достижений
export const checkAchievements = (userStats: any, currentAchievements: string[]): Achievement[] => {
  return ACHIEVEMENTS.filter(achievement => 
    !currentAchievements.includes(achievement.id) && 
    achievement.condition(userStats)
  );
};

// Функция для добавления XP
export const addExperience = (currentXP: number, amount: number): { newXP: number; leveledUp: boolean; newLevel?: number } => {
  const oldLevel = getLevelInfo(currentXP).level;
  const newXP = currentXP + amount;
  const newLevel = getLevelInfo(newXP).level;
  
  return {
    newXP,
    leveledUp: newLevel > oldLevel,
    newLevel: newLevel > oldLevel ? newLevel : undefined,
  };
};

// Функция для расчета прогресса модуля
export const calculateModuleProgress = (completedLessons: number, totalLessons: number): number => {
  if (totalLessons === 0) return 0;
  return Math.floor((completedLessons / totalLessons) * 100);
};

// Функция для определения сложности на основе уровня
export const getDifficultyForLevel = (level: number): 'Начальный' | 'Средний' | 'Продвинутый' => {
  if (level >= 20) return 'Продвинутый';
  if (level >= 10) return 'Средний';
  return 'Начальный';
};

// Экспорт всех функций и констант
export default {
  getLevelInfo,
  getXPForLevel,
  addExperience,
  checkAchievements,
  calculateModuleProgress,
  getDifficultyForLevel,
  XP_REWARDS,
  ACHIEVEMENTS,
};