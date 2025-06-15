// API Integration Module для ChemG
// Все API запросы и эндпоинты будут здесь

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

// Типы данных
export interface User {
  id: string;
  email: string;
  username: string;
  organization?: string;
  group?: string;
  level: number;
  xp: number;
  createdAt: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  organization?: string;
  group?: string;
}

export interface TestQuestion {
  id: string;
  type: 'single' | 'multiple' | 'input';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  subject: string;
  topic: string;
}

export interface TestSession {
  id: string;
  userId: string;
  testId: string;
  score: number;
  totalQuestions: number;
  timeSpent: number;
  answers: Record<string, string | string[]>;
  completedAt: string;
}

export interface LessonProgress {
  id: string;
  userId: string;
  lessonId: string;
  completed: boolean;
  progress: number;
  lastAccessed: string;
}

export interface ChatMessage {
  id: string;
  userId: string;
  message: string;
  response: string;
  timestamp: string;
}

// Утилиты для API запросов
class ApiClient {
  private baseURL: string;
  private token: string | null = null;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.token = localStorage.getItem('chemg_token');
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...(this.token && { Authorization: `Bearer ${this.token}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('chemg_token', token);
  }

  clearToken() {
    this.token = null;
    localStorage.removeItem('chemg_token');
  }

  // Методы аутентификации
  async login(data: LoginRequest): Promise<{ user: User; token: string }> {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async register(data: RegisterRequest): Promise<{ user: User; token: string }> {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async loginWithGoogle(token: string): Promise<{ user: User; token: string }> {
    return this.request('/auth/google', {
      method: 'POST',
      body: JSON.stringify({ token }),
    });
  }

  async logout(): Promise<void> {
    await this.request('/auth/logout', { method: 'POST' });
    this.clearToken();
  }

  async refreshToken(): Promise<{ token: string }> {
    return this.request('/auth/refresh', { method: 'POST' });
  }

  // Методы пользователя
  async getProfile(): Promise<User> {
    return this.request('/user/profile');
  }

  async updateProfile(data: Partial<User>): Promise<User> {
    return this.request('/user/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async getUserProgress(): Promise<LessonProgress[]> {
    return this.request('/user/progress');
  }

  // Методы тестов
  async getTests(subject?: string, difficulty?: string): Promise<TestQuestion[]> {
    const params = new URLSearchParams();
    if (subject) params.append('subject', subject);
    if (difficulty) params.append('difficulty', difficulty);
    
    return this.request(`/tests?${params.toString()}`);
  }

  async getTest(testId: string): Promise<TestQuestion[]> {
    return this.request(`/tests/${testId}`);
  }

  async submitTest(testId: string, answers: Record<string, string | string[]>): Promise<TestSession> {
    return this.request(`/tests/${testId}/submit`, {
      method: 'POST',
      body: JSON.stringify({ answers }),
    });
  }

  async getTestResults(sessionId: string): Promise<TestSession> {
    return this.request(`/tests/sessions/${sessionId}`);
  }

  async getUserTestHistory(): Promise<TestSession[]> {
    return this.request('/tests/history');
  }

  // Методы уроков
  async getLessons(subject?: string): Promise<any[]> {
    const params = subject ? `?subject=${subject}` : '';
    return this.request(`/lessons${params}`);
  }

  async getLesson(lessonId: string): Promise<any> {
    return this.request(`/lessons/${lessonId}`);
  }

  async updateLessonProgress(lessonId: string, progress: number): Promise<LessonProgress> {
    return this.request(`/lessons/${lessonId}/progress`, {
      method: 'POST',
      body: JSON.stringify({ progress }),
    });
  }

  async completLesson(lessonId: string): Promise<LessonProgress> {
    return this.request(`/lessons/${lessonId}/complete`, {
      method: 'POST',
    });
  }

  // Методы чата с ИИ
  async sendChatMessage(message: string): Promise<ChatMessage> {
    return this.request('/chat/message', {
      method: 'POST',
      body: JSON.stringify({ message }),
    });
  }

  async getChatHistory(): Promise<ChatMessage[]> {
    return this.request('/chat/history');
  }

  async clearChatHistory(): Promise<void> {
    return this.request('/chat/clear', { method: 'DELETE' });
  }

  // Методы статистики
  async getUserStats(): Promise<{
    totalXP: number;
    level: number;
    streak: number;
    timeSpent: number;
    testsCompleted: number;
    lessonsCompleted: number;
  }> {
    return this.request('/user/stats');
  }

  async getLeaderboard(type: 'xp' | 'tests' | 'lessons' = 'xp'): Promise<User[]> {
    return this.request(`/leaderboard?type=${type}`);
  }

  // Методы организаций
  async getOrganizations(): Promise<string[]> {
    return this.request('/organizations');
  }

  async getGroups(organization: string): Promise<string[]> {
    return this.request(`/organizations/${organization}/groups`);
  }
}

// Создаем экземпляр API клиента
export const apiClient = new ApiClient(API_BASE_URL);

// Хуки для React Query (если будем использовать)
export const useApiClient = () => {
  return apiClient;
};

// Обработчики ошибок
export const handleApiError = (error: any) => {
  if (error.status === 401) {
    // Токен истек, нужно перелогиниться
    apiClient.clearToken();
    window.location.href = '/login';
  } else if (error.status === 403) {
    // Нет доступа
    console.error('Access denied');
  } else if (error.status >= 500) {
    // Серверная ошибка
    console.error('Server error:', error);
  } else {
    // Другие ошибки
    console.error('API error:', error);
  }
};

// Типы для экспорта
export type {
  User,
  LoginRequest,
  RegisterRequest,
  TestQuestion,
  TestSession,
  LessonProgress,
  ChatMessage,
};