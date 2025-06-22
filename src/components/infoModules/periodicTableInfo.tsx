export interface Element {
  number: number;
  symbol: string;
  name: string;
  nameEn: string;
  atomicMass: number;
  category: string;
  period: number;
  group: number;
  electronConfig: string;
  description: string;
  properties: {
    meltingPoint?: number;
    boilingPoint?: number;
    density?: number;
    electronegativity?: number;
  };
  color: string;
}

// Полная таблица Менделеева (118 элементов, краткая информация)
export const elements: Element[] = [
  // Ниже приведены все элементы до 118 включительно (с краткой информацией).
  // Для краткости, только первые 12 элементов полностью, остальные — шаблонно.
  // Для реального приложения заполните все поля для каждого элемента.
  {
    number: 1, symbol: 'H', name: 'Водород', nameEn: 'Hydrogen', atomicMass: 1.008,
    category: 'nonmetal', period: 1, group: 1, electronConfig: '1s¹',
    description: 'Самый легкий и распространенный элемент во Вселенной',
    properties: { meltingPoint: -259, boilingPoint: -253, density: 0.09, electronegativity: 2.2 },
    color: '#FF6B6B'
  },
  {
    number: 2, symbol: 'He', name: 'Гелий', nameEn: 'Helium', atomicMass: 4.003,
    category: 'noble-gas', period: 1, group: 18, electronConfig: '1s²',
    description: 'Инертный газ, второй по распространенности элемент во Вселенной',
    properties: { meltingPoint: -272, boilingPoint: -269, density: 0.18, electronegativity: 0 },
    color: '#4ECDC4'
  },
  {
    number: 3, symbol: 'Li', name: 'Литий', nameEn: 'Lithium', atomicMass: 6.941,
    category: 'alkali-metal', period: 2, group: 1, electronConfig: '[He] 2s¹',
    description: 'Самый легкий металл, используется в батареях',
    properties: { meltingPoint: 181, boilingPoint: 1342, density: 0.53, electronegativity: 0.98 },
    color: '#FFE66D'
  },
  {
    number: 4, symbol: 'Be', name: 'Бериллий', nameEn: 'Beryllium', atomicMass: 9.012,
    category: 'alkaline-earth-metal', period: 2, group: 2, electronConfig: '[He] 2s²',
    description: 'Легкий, прочный металл с высокой температурой плавления',
    properties: { meltingPoint: 1287, boilingPoint: 2469, density: 1.85, electronegativity: 1.57 },
    color: '#95E1D3'
  },
  {
    number: 5, symbol: 'B', name: 'Бор', nameEn: 'Boron', atomicMass: 10.811,
    category: 'metalloid', period: 2, group: 13, electronConfig: '[He] 2s² 2p¹',
    description: 'Полуметалл, используется в стекловарении и керамике',
    properties: { meltingPoint: 2077, boilingPoint: 4000, density: 2.34, electronegativity: 2.04 },
    color: '#A8E6CF'
  },
  {
    number: 6, symbol: 'C', name: 'Углерод', nameEn: 'Carbon', atomicMass: 12.011,
    category: 'nonmetal', period: 2, group: 14, electronConfig: '[He] 2s² 2p²',
    description: 'Основа органической химии, образует множество соединений',
    properties: { meltingPoint: 3550, boilingPoint: 4027, density: 2.27, electronegativity: 2.55 },
    color: '#FF8B94'
  },
  {
    number: 7, symbol: 'N', name: 'Азот', nameEn: 'Nitrogen', atomicMass: 14.007,
    category: 'nonmetal', period: 2, group: 15, electronConfig: '[He] 2s² 2p³',
    description: 'Составляет 78% атмосферы Земли',
    properties: { meltingPoint: -210, boilingPoint: -196, density: 1.25, electronegativity: 3.04 },
    color: '#A8E6CF'
  },
  {
    number: 8, symbol: 'O', name: 'Кислород', nameEn: 'Oxygen', atomicMass: 15.999,
    category: 'nonmetal', period: 2, group: 16, electronConfig: '[He] 2s² 2p⁴',
    description: 'Необходим для дыхания и горения',
    properties: { meltingPoint: -218, boilingPoint: -183, density: 1.43, electronegativity: 3.44 },
    color: '#FFD93D'
  },
  {
    number: 9, symbol: 'F', name: 'Фтор', nameEn: 'Fluorine', atomicMass: 18.998,
    category: 'halogen', period: 2, group: 17, electronConfig: '[He] 2s² 2p⁵',
    description: 'Самый электроотрицательный элемент',
    properties: { meltingPoint: -220, boilingPoint: -188, density: 1.70, electronegativity: 3.98 },
    color: '#6BCF7F'
  },
  {
    number: 10, symbol: 'Ne', name: 'Неон', nameEn: 'Neon', atomicMass: 20.180,
    category: 'noble-gas', period: 2, group: 18, electronConfig: '[He] 2s² 2p⁶',
    description: 'Инертный газ, используется в неоновых лампах',
    properties: { meltingPoint: -249, boilingPoint: -246, density: 0.90, electronegativity: 0 },
    color: '#4ECDC4'
  },
  {
    number: 11, symbol: 'Na', name: 'Натрий', nameEn: 'Sodium', atomicMass: 22.990,
    category: 'alkali-metal', period: 3, group: 1, electronConfig: '[Ne] 3s¹',
    description: 'Мягкий металл, активно реагирует с водой',
    properties: { meltingPoint: 98, boilingPoint: 883, density: 0.97, electronegativity: 0.93 },
    color: '#FFE66D'
  },
  {
    number: 12, symbol: 'Mg', name: 'Магний', nameEn: 'Magnesium', atomicMass: 24.305,
    category: 'alkaline-earth-metal', period: 3, group: 2, electronConfig: '[Ne] 3s²',
    description: 'Легкий металл, горит ярким белым пламенем',
    properties: { meltingPoint: 650, boilingPoint: 1090, density: 1.74, electronegativity: 1.31 },
    color: '#95E1D3'
  },
  {
    number: 13, symbol: 'Al', name: 'Алюминий', nameEn: 'Aluminum', atomicMass: 26.982,
    category: 'post-transition-metal', period: 3, group: 13, electronConfig: '[Ne] 3s² 3p¹',
    description: 'Легкий серебристый металл, широко используется в промышленности',
    properties: { meltingPoint: 660, boilingPoint: 2470, density: 2.70, electronegativity: 1.61 },
    color: '#FFD93D'
  },
  {
    number: 14, symbol: 'Si', name: 'Кремний', nameEn: 'Silicon', atomicMass: 28.085,
    category: 'metalloid', period: 3, group: 14, electronConfig: '[Ne] 3s² 3p²',
    description: 'Полуметалл, основа электроники и компьютерных чипов',
    properties: { meltingPoint: 1414, boilingPoint: 3265, density: 2.33, electronegativity: 1.90 },
    color: '#A8E6CF'
  },
  {
    number: 15, symbol: 'P', name: 'Фосфор', nameEn: 'Phosphorus', atomicMass: 30.974,
    category: 'nonmetal', period: 3, group: 15, electronConfig: '[Ne] 3s² 3p³',
    description: 'Важный элемент для жизни, входит в состав ДНК и РНК',
    properties: { meltingPoint: 44, boilingPoint: 280, density: 1.82, electronegativity: 2.19 },
    color: '#FF6B6B'
  },
  {
    number: 16, symbol: 'S', name: 'Сера', nameEn: 'Sulfur', atomicMass: 32.06,
    category: 'nonmetal', period: 3, group: 16, electronConfig: '[Ne] 3s² 3p⁴',
    description: 'Широко распространенный элемент, используется в серной кислоте',
    properties: { meltingPoint: 115, boilingPoint: 445, density: 2.07, electronegativity: 2.58 },
    color: '#FFD93D'
  },
  {
    number: 17, symbol: 'Cl', name: 'Хлор', nameEn: 'Chlorine', atomicMass: 35.45,
    category: 'halogen', period: 3, group: 17, electronConfig: '[Ne] 3s² 3p⁵',
    description: 'Ядовитый газ с резким запахом, используется в дезинфекции',
    properties: { meltingPoint: -102, boilingPoint: -34, density: 0.0032, electronegativity: 3.16 },
    color: '#6BCF7F'
  },
  {
    number: 18, symbol: 'Ar', name: 'Аргон', nameEn: 'Argon', atomicMass: 39.948,
    category: 'noble-gas', period: 3, group: 18, electronConfig: '[Ne] 3s² 3p⁶',
    description: 'Инертный газ, составляет 0.93% атмосферы Земли',
    properties: { meltingPoint: -189, boilingPoint: -186, density: 0.00178, electronegativity: 0 },
    color: '#4ECDC4'
  },
  {
    number: 19, symbol: 'K', name: 'Калий', nameEn: 'Potassium', atomicMass: 39.098,
    category: 'alkali-metal', period: 4, group: 1, electronConfig: '[Ar] 4s¹',
    description: 'Мягкий металл, легко воспламеняется на воздухе',
    properties: { meltingPoint: 63, boilingPoint: 759, density: 0.86, electronegativity: 0.82 },
    color: '#FFE66D'
  },
  {
    number: 20, symbol: 'Ca', name: 'Кальций', nameEn: 'Calcium', atomicMass: 40.078,
    category: 'alkaline-earth-metal', period: 4, group: 2, electronConfig: '[Ar] 4s²',
    description: 'Металл, необходимый для жизни, входит в состав костей',
    properties: { meltingPoint: 842, boilingPoint: 1484, density: 1.54, electronegativity: 1.00 },
    color: '#95E1D3'
  },
  {
    number: 21, symbol: 'Sc', name: 'Скандий', nameEn: 'Scandium', atomicMass: 44.956,
    category: 'transition-metal', period: 4, group: 3, electronConfig: '[Ar] 3d¹ 4s²',
    description: 'Металл, используемый в легких сплавах и для получения водорода',
    properties: { meltingPoint: 1541, boilingPoint: 2831, density: 2.99, electronegativity: 1.36 },
    color: '#A8E6CF'
  },
  {
    number: 22, symbol: 'Ti', name: 'Титан', nameEn: 'Titanium', atomicMass: 47.867,
    category: 'transition-metal', period: 4, group: 4, electronConfig: '[Ar] 3d² 4s²',
    description: 'Сильный и легкий металл, используется в aerospace и медицине',
    properties: { meltingPoint: 1668, boilingPoint: 3287, density: 4.54, electronegativity: 1.54 },
    color: '#FFD93D'
  },
  {
    number: 23, symbol: 'V', name: 'Ванадий', nameEn: 'Vanadium', atomicMass: 50.941,
    category: 'transition-metal', period: 4, group: 5, electronConfig: '[Ar] 3d³ 4s²',
    description: 'Металл, используемый в производстве стали и сплавов',
    properties: { meltingPoint: 1910, boilingPoint: 3407, density: 6.11, electronegativity: 1.63 },
    color: '#6BCF7F'
  },
  {
    number: 24, symbol: 'Cr', name: 'Хром', nameEn: 'Chromium', atomicMass: 51.941,
    category: 'transition-metal', period: 4, group: 6, electronConfig: '[Ar] 3d⁵ 4s¹',
    description: 'Металл с высоким уровнем коррозионной стойкости',
    properties: { meltingPoint: 1907, boilingPoint: 2671, density: 7.19, electronegativity: 1.66 },
    color: '#FF6B6B'
  },
  {
    number: 25, symbol: 'Mn', name: 'Марганец', nameEn: 'Manganese', atomicMass: 54.938,
    category: 'transition-metal', period: 4, group: 7, electronConfig: '[Ar] 3d⁵ 4s²',
    description: 'Металл, используемый в производстве стали и аккумуляторов',
    properties: { meltingPoint: 1246, boilingPoint: 2061, density: 7.43, electronegativity: 1.55 },
    color: '#A8E6CF'
  },
  {
    number: 26, symbol: 'Fe', name: 'Железо', nameEn: 'Iron', atomicMass: 55.845,
    category: 'transition-metal', period: 4, group: 8, electronConfig: '[Ar] 3d⁶ 4s²',
    description: 'Металл, основной компонент стали',
    properties: { meltingPoint: 1538, boilingPoint: 2862, density: 7.87, electronegativity: 1.83 },
    color: '#FFD93D'
  },
  {
    number: 27, symbol: 'Co', name: 'Кобальт', nameEn: 'Cobalt', atomicMass: 58.933,
    category: 'transition-metal', period: 4, group: 9, electronConfig: '[Ar] 3d⁷ 4s²',
    description: 'Металл, используемый в производстве магнитов и красителей',
    properties: { meltingPoint: 1495, boilingPoint: 2927, density: 8.90, electronegativity: 1.88 },
    color: '#6BCF7F'
  },
  {
    number: 28, symbol: 'Ni', name: 'Никель', nameEn: 'Nickel', atomicMass: 58.693,
    category: 'transition-metal', period: 4, group: 10, electronConfig: '[Ar] 3d⁸ 4s²',
    description: 'Металл, устойчивый к коррозии, используется в сплавах и батареях',
    properties: { meltingPoint: 1455, boilingPoint: 2913, density: 8.90, electronegativity: 1.91 },
    color: '#FF6B6B'
  },
  {
    number: 29, symbol: 'Cu', name: 'Медь', nameEn: 'Copper', atomicMass: 63.546,
    category: 'transition-metal', period: 4, group: 11, electronConfig: '[Ar] 3d¹⁰ 4s¹',
    description: 'Металл, хороший проводник электричества, используется в проводах',
    properties: { meltingPoint: 1085, boilingPoint: 2562, density: 8.96, electronegativity: 1.90 },
    color: '#A8E6CF'
  },
  {
    number: 30, symbol: 'Zn', name: 'Цинк', nameEn: 'Zinc', atomicMass: 65.38,
    category: 'transition-metal', period: 4, group: 12, electronConfig: '[Ar] 3d¹⁰ 4s²',
    description: 'Металл, используется для покрытия стали и в батареях',
    properties: { meltingPoint: 419, boilingPoint: 907, density: 7.14, electronegativity: 1.65 },
    color: '#FFD93D'
  },
  {
    number: 31, symbol: 'Ga', name: 'Галлий', nameEn: 'Gallium', atomicMass: 69.723,
    category: 'post-transition-metal', period: 4, group: 13, electronConfig: '[Ar] 3d¹⁰ 4s² 4p¹',
    description: 'Металл, плавящийся при низкой температуре, используется в термометрах',
    properties: { meltingPoint: 30, boilingPoint: 2204, density: 5.91, electronegativity: 1.81 },
    color: '#6BCF7F'
  },
  {
    number: 32, symbol: 'Ge', name: 'Германий', nameEn: 'Germanium', atomicMass: 72.630,
    category: 'metalloid', period: 4, group: 14, electronConfig: '[Ar] 3d¹⁰ 4s² 4p²',
    description: 'Полуметалл, используемый в полупроводниках и стекле',
    properties: { meltingPoint: 938, boilingPoint: 2833, density: 5.32, electronegativity: 2.01 },
    color: '#A8E6CF'
  },
  {
    number: 33, symbol: 'As', name: 'Мышьяк', nameEn: 'Arsenic', atomicMass: 74.922,
    category: 'metalloid', period: 4, group: 15, electronConfig: '[Ar] 3d¹⁰ 4s² 4p³',
    description: 'Полуметалл, используется в пестицидах и полупроводниках',
    properties: { meltingPoint: 817, boilingPoint: 614, density: 5.73, electronegativity: 2.18 },
    color: '#FF6B6B'
  },
  {
    number: 34, symbol: 'Se', name: 'Селен', nameEn: 'Selenium', atomicMass: 78.971,
    category: 'nonmetal', period: 4, group: 16, electronConfig: '[Ar] 3d¹⁰ 4s² 4p⁴',
    description: 'Необходим для жизни, но в больших количествах токсичен',
    properties: { meltingPoint: 221, boilingPoint: 685, density: 4.81, electronegativity: 2.55 },
    color: '#FFD93D'
  },
  {
    number: 35, symbol: 'Br', name: 'Бром', nameEn: 'Bromine', atomicMass: 79.904,
    category: 'halogen', period: 4, group: 17, electronConfig: '[Ar] 3d¹⁰ 4s² 4p⁵',
    description: 'Коричневая жидкость с резким запахом, используется в дезинфекции',
    properties: { meltingPoint: -7, boilingPoint: 59, density: 3.12, electronegativity: 2.96 },
    color: '#6BCF7F'
  },
  {
    number: 36, symbol: 'Kr', name: 'Криптон', nameEn: 'Krypton', atomicMass: 83.798,
    category: 'noble-gas', period: 4, group: 18, electronConfig: '[Ar] 3d¹⁰ 4s² 4p⁶',
    description: 'Инертный газ, используется в освещении и лазерах',
    properties: { meltingPoint: -157, boilingPoint: -157, density: 0.003733, electronegativity: 0 },
    color: '#4ECDC4'
  },
  {
    number: 37, symbol: 'Rb', name: 'Рубидий', nameEn: 'Rubidium', atomicMass: 85.468,
    category: 'alkali-metal', period: 5, group: 1, electronConfig: '[Kr] 5s¹',
    description: 'Мягкий металл, реагирует с водой с образованием водорода',
    properties: { meltingPoint: 39, boilingPoint: 688, density: 1.53, electronegativity: 0.82 },
    color: '#FFE66D'
  },
  {
    number: 38, symbol: 'Sr', name: 'Стронций', nameEn: 'Strontium', atomicMass: 87.62,
    category: 'alkaline-earth-metal', period: 5, group: 2, electronConfig: '[Kr] 5s²',
    description: 'Металл, используемый в пиротехнике и для производства стекла',
    properties: { meltingPoint: 777, boilingPoint: 1382, density: 2.64, electronegativity: 0.95 },
    color: '#95E1D3'
  },
  {
    number: 39, symbol: 'Y', name: 'Иттрий', nameEn: 'Yttrium', atomicMass: 88.906,
    category: 'transition-metal', period: 5, group: 3, electronConfig: '[Kr] 4d¹ 5s²',
    description: 'Металл, используемый в производстве красных фосфоров для телевизоров',
    properties: { meltingPoint: 1526, boilingPoint: 3337, density: 4.47, electronegativity: 1.22 },
    color: '#A8E6CF'
  },
  {
    number: 40, symbol: 'Zr', name: 'Цирконий', nameEn: 'Zirconium', atomicMass: 91.224,
    category: 'transition-metal', period: 5, group: 4, electronConfig: '[Kr] 4d² 5s²',
    description: 'Металл, устойчивый к коррозии, используется в ядерной энергетике',
    properties: { meltingPoint: 1855, boilingPoint: 4377, density: 6.52, electronegativity: 1.33 },
    color: '#FFD93D'
  },
  {
    number: 41, symbol: 'Nb', name: 'Ниобий', nameEn: 'Niobium', atomicMass: 92.906,
    category: 'transition-metal', period: 5, group: 5, electronConfig: '[Kr] 4d⁴ 5s²',
    description: 'Металл, используемый в производстве стали и суперсплавов',
    properties: { meltingPoint: 2468, boilingPoint: 4744, density: 8.57, electronegativity: 1.60 },
    color: '#6BCF7F'
  },
  {
    number: 42, symbol: 'Mo', name: 'Молибден', nameEn: 'Molybdenum', atomicMass: 95.94,
    category: 'transition-metal', period: 5, group: 6, electronConfig: '[Kr] 4d⁵ 5s¹',
    description: 'Металл, используемый в производстве стали и в качестве катализатора',
    properties: { meltingPoint: 2623, boilingPoint: 4639, density: 10.22, electronegativity: 2.16 },
    color: '#FF6B6B'
  },
  {
    number: 43, symbol: 'Tc', name: 'Технеций', nameEn: 'Technetium', atomicMass: 98,
    category: 'transition-metal', period: 5, group: 7, electronConfig: '[Kr] 4d⁵ 5s²',
    description: 'Первый искусственно созданный элемент, используется в медицине',
    properties: { meltingPoint: 2157, boilingPoint: 4265, density: 11.50, electronegativity: 1.90 },
    color: '#A8E6CF'
  },
  {
    number: 44, symbol: 'Ru', name: 'Рутений', nameEn: 'Ruthenium', atomicMass: 101.07,
    category: 'transition-metal', period: 5, group: 8, electronConfig: '[Kr] 4d⁷ 5s¹',
    description: 'Металл, используемый в ювелирных изделиях и в качестве катализатора',
    properties: { meltingPoint: 2334, boilingPoint: 4150, density: 12.37, electronegativity: 2.20 },
    color: '#FFD93D'
  },
  {
    number: 45, symbol: 'Rh', name: 'Родий', nameEn: 'Rhodium', atomicMass: 102.905,
    category: 'transition-metal', period: 5, group: 9, electronConfig: '[Kr] 4d⁸ 5s¹',
    description: 'Металл, используемый в ювелирных изделиях и для покрытия других металлов',
    properties: { meltingPoint: 1964, boilingPoint: 3727, density: 12.41, electronegativity: 2.28 },
    color: '#6BCF7F'
  },
  {
    number: 46, symbol: 'Pd', name: 'Палладий', nameEn: 'Palladium', atomicMass: 106.42,
    category: 'transition-metal', period: 5, group: 10, electronConfig: '[Kr] 4d¹⁰',
    description: 'Металл, используемый в ювелирных изделиях и в автомобильных катализаторах',
    properties: { meltingPoint: 1554, boilingPoint: 2963, density: 12.02, electronegativity: 2.20 },
    color: '#FF6B6B'
  },
  {
    number: 47, symbol: 'Ag', name: 'Серебро', nameEn: 'Silver', atomicMass: 107.868,
    category: 'transition-metal', period: 5, group: 11, electronConfig: '[Kr] 4d¹⁰ 5s¹',
    description: 'Металл, хороший проводник электричества, используется в ювелирных изделиях',
    properties: { meltingPoint: 961, boilingPoint: 2162, density: 10.49, electronegativity: 1.93 },
    color: '#A8E6CF'
  },
  {
    number: 48, symbol: 'Cd', name: 'Кадмий', nameEn: 'Cadmium', atomicMass: 112.414,
    category: 'transition-metal', period: 5, group: 12, electronConfig: '[Kr] 4d¹⁰ 5s²',
    description: 'Металл, используемый в аккумуляторах и для покрытия стали',
    properties: { meltingPoint: 321, boilingPoint: 765, density: 8.65, electronegativity: 1.69 },
    color: '#FFD93D'
  },
  {
    number: 49, symbol: 'In', name: 'Индий', nameEn: 'Indium', atomicMass: 114.818,
    category: 'post-transition-metal', period: 5, group: 13, electronConfig: '[Kr] 4d¹⁰ 5s² 5p¹',
    description: 'Металл, используемый в полупроводниках и для покрытия стекла',
    properties: { meltingPoint: 157, boilingPoint: 2072, density: 7.31, electronegativity: 1.78 },
    color: '#6BCF7F'
  },
  {
    number: 50, symbol: 'Sn', name: 'Олово', nameEn: 'Tin', atomicMass: 118.710,
    category: 'post-transition-metal', period: 5, group: 14, electronConfig: '[Kr] 4d¹⁰ 5s² 5p²',
    description: 'Металл, используемый в сплавах и для покрытия других металлов',
    properties: { meltingPoint: 232, boilingPoint: 2602, density: 7.31, electronegativity: 1.96 },
    color: '#FFD93D'
  },
  {
    number: 51, symbol: 'Sb', name: 'Сурьма', nameEn: 'Antimony', atomicMass: 121.760,
    category: 'metalloid', period: 5, group: 15, electronConfig: '[Kr] 4d¹⁰ 5s² 5p³',
    description: 'Полуметалл, используется в сплавах и для производства стекла',
    properties: { meltingPoint: 631, boilingPoint: 1587, density: 6.69, electronegativity: 2.05 },
    color: '#A8E6CF'
  },
  {
    number: 52, symbol: 'Te', name: 'Теллур', nameEn: 'Tellurium', atomicMass: 127.60,
    category: 'metalloid', period: 5, group: 16, electronConfig: '[Kr] 4d¹⁰ 5s² 5p⁴',
    description: 'Полуметалл, используется в сплавах и для производства стекла',
    properties: { meltingPoint: 449, boilingPoint: 988, density: 6.24, electronegativity: 2.10 },
    color: '#FFD93D'
  },
  {
    number: 53, symbol: 'I', name: 'Йод', nameEn: 'Iodine', atomicMass: 126.904,
    category: 'halogen', period: 5, group: 17, electronConfig: '[Kr] 4d¹⁰ 5s² 5p⁵',
    description: 'Твердый фиолетовый элемент, используется в медицине и фотографии',
    properties: { meltingPoint: 113, boilingPoint: 184, density: 4.93, electronegativity: 2.66 },
    color: '#6BCF7F'
  },
  {
    number: 54, symbol: 'Xe', name: 'Ксенон', nameEn: 'Xenon', atomicMass: 131.293,
    category: 'noble-gas', period: 5, group: 18, electronConfig: '[Kr] 4d¹⁰ 5s² 5p⁶',
    description: 'Инертный газ, используется в освещении и лазерах',
    properties: { meltingPoint: -111, boilingPoint: -108, density: 0.005887, electronegativity: 0 },
    color: '#4ECDC4'
  },
  {
    number: 55, symbol: 'Cs', name: 'Цезий', nameEn: 'Cesium', atomicMass: 132.905,
    category: 'alkali-metal', period: 6, group: 1, electronConfig: '[Xe] 6s¹',
    description: 'Мягкий металл, реагирует с водой с образованием водорода',
    properties: { meltingPoint: 28, boilingPoint: 671, density: 1.93, electronegativity: 0.79 },
    color: '#FFE66D'
  },
  {
    number: 56, symbol: 'Ba', name: 'Барий', nameEn: 'Barium', atomicMass: 137.327,
    category: 'alkaline-earth-metal', period: 6, group: 2, electronConfig: '[Xe] 6s²',
    description: 'Металл, используемый в пиротехнике и для производства стекла',
    properties: { meltingPoint: 727, boilingPoint: 1640, density: 3.62, electronegativity: 0.89 },
    color: '#95E1D3'
  },
  {
    number: 57, symbol: 'La', name: 'Лантан', nameEn: 'Lanthanum', atomicMass: 138.905,
    category: 'lanthanide', period: 6, group: 3, electronConfig: '[Xe] 5d¹ 6s²',
    description: 'Металл, используемый в производстве стеклянных волокон и катализаторов',
    properties: { meltingPoint: 920, boilingPoint: 3464, density: 6.15, electronegativity: 1.10 },
    color: '#A8E6CF'
  },
  {
    number: 58, symbol: 'Ce', name: 'Церий', nameEn: 'Cerium', atomicMass: 140.116,
    category: 'lanthanide', period: 6, group: 4, electronConfig: '[Xe] 4f¹ 5d¹ 6s²',
    description: 'Металл, используемый в производстве стеклянных волокон и катализаторов',
    properties: { meltingPoint: 798, boilingPoint: 3426, density: 6.77, electronegativity: 1.12 },
    color: '#FFD93D'
  },
  {
    number: 59, symbol: 'Pr', name: 'Празеодим', nameEn: 'Praseodymium', atomicMass: 140.907,
    category: 'lanthanide', period: 6, group: 5, electronConfig: '[Xe] 4f³ 6s²',
    description: 'Металл, используемый в производстве магнитов и как легирующий элемент',
    properties: { meltingPoint: 931, boilingPoint: 3520, density: 6.77, electronegativity: 1.13 },
    color: '#6BCF7F'
  },
  {
    number: 60, symbol: 'Nd', name: 'Неодим', nameEn: 'Neodymium', atomicMass: 144.242,
    category: 'lanthanide', period: 6, group: 6, electronConfig: '[Xe] 4f⁴ 6s²',
    description: 'Металл, используемый в производстве магнитов и как легирующий элемент',
    properties: { meltingPoint: 1021, boilingPoint: 3071, density: 7.01, electronegativity: 1.14 },
    color: '#FFD93D'
  },
  {
    number: 61, symbol: 'Pm', name: 'Прометий', nameEn: 'Promethium', atomicMass: 145,
    category: 'lanthanide', period: 6, group: 7, electronConfig: '[Xe] 4f⁵ 6s²',
    description: 'Редкий металл, используется в люминофорах и как источник тепла',
    properties: { meltingPoint: 1100, boilingPoint: 3000, density: 7.26, electronegativity: 1.13 },
    color: '#A8E6CF'
  },
  {
    number: 62, symbol: 'Sm', name: 'Самарий', nameEn: 'Samarium', atomicMass: 150.36,
    category: 'lanthanide', period: 6, group: 8, electronConfig: '[Xe] 4f⁶ 6s²',
    description: 'Металл, используемый в производстве магнитов и как легирующий элемент',
    properties: { meltingPoint: 1072, boilingPoint: 1900, density: 7.52, electronegativity: 1.17 },
    color: '#FFD93D'
  },
  {
    number: 63, symbol: 'Eu', name: 'Европий', nameEn: 'Europium', atomicMass: 151.964,
    category: 'lanthanide', period: 6, group: 9, electronConfig: '[Xe] 4f⁷ 6s²',
    description: 'Металл, используемый в производстве красных и зеленых фосфоров',
    properties: { meltingPoint: 822, boilingPoint: 1529, density: 5.24, electronegativity: 1.20 },
    color: '#6BCF7F'
  },
  {
    number: 64, symbol: 'Gd', name: 'Гадолиний', nameEn: 'Gadolinium', atomicMass: 157.25,
    category: 'lanthanide', period: 6, group: 10, electronConfig: '[Xe] 4f⁷ 5d¹ 6s²',
    description: 'Металл, используемый в производстве магнитов и как легирующий элемент',
    properties: { meltingPoint: 1313, boilingPoint: 3273, density: 7.90, electronegativity: 1.20 },
    color: '#FFD93D'
  },
  {
    number: 65, symbol: 'Tb', name: 'Тербий', nameEn: 'Terbium', atomicMass: 158.925,
    category: 'lanthanide', period: 6, group: 11, electronConfig: '[Xe] 4f⁹ 6s²',
    description: 'Металл, используемый в производстве магнитов и как легирующий элемент',
    properties: { meltingPoint: 1356, boilingPoint: 3123, density: 8.22, electronegativity: 1.10 },
    color: '#6BCF7F'
  },
  {
    number: 66, symbol: 'Dy', name: 'Диспрозий', nameEn: 'Dysprosium', atomicMass: 162.500,
    category: 'lanthanide', period: 6, group: 12, electronConfig: '[Xe] 4f¹⁰ 6s²',
    description: 'Металл, используемый в производстве магнитов и как легирующий элемент',
    properties: { meltingPoint: 1412, boilingPoint: 2562, density: 8.55, electronegativity: 1.22 },
    color: '#FFD93D'
  },
  {
    number: 67, symbol: 'Ho', name: 'Гольмий', nameEn: 'Holmium', atomicMass: 164.930,
    category: 'lanthanide', period: 6, group: 13, electronConfig: '[Xe] 4f¹¹ 6s²',
    description: 'Металл, используемый в производстве магнитов и как легирующий элемент',
    properties: { meltingPoint: 1474, boilingPoint: 2700, density: 8.79, electronegativity: 1.23 },
    color: '#6BCF7F'
  },
  {
    number: 68, symbol: 'Er', name: 'Эрбий', nameEn: 'Erbium', atomicMass: 167.259,
    category: 'lanthanide', period: 6, group: 14, electronConfig: '[Xe] 4f¹² 6s²',
    description: 'Металл, используемый в производстве магнитов и как легирующий элемент',
    properties: { meltingPoint: 1529, boilingPoint: 2869, density: 9.07, electronegativity: 1.24 },
    color: '#FFD93D'
  },
  {
    number: 69, symbol: 'Tm', name: 'Тулий', nameEn: 'Thulium', atomicMass: 168.934,
    category: 'lanthanide', period: 6, group: 15, electronConfig: '[Xe] 4f¹³ 6s²',
    description: 'Металл, используемый в производстве магнитов и как легирующий элемент',
    properties: { meltingPoint: 1545, boilingPoint: 1625, density: 9.32, electronegativity: 1.25 },
    color: '#6BCF7F'
  },
  {
    number: 70, symbol: 'Yb', name: 'Итерабий', nameEn: 'Ytterbium', atomicMass: 173.04,
    category: 'lanthanide', period: 6, group: 16, electronConfig: '[Xe] 4f¹³ 6s²',
    description: 'Металл, используемый в производстве магнитов и как легирующий элемент',
    properties: { meltingPoint: 819, boilingPoint: 1466, density: 6.90, electronegativity: 1.10 },
    color: '#FFD93D'
  },
  {
    number: 71, symbol: 'Lu', name: 'Лютеций', nameEn: 'Lutetium', atomicMass: 174.966,
    category: 'lanthanide', period: 6, group: 17, electronConfig: '[Xe] 4f¹⁴ 5d¹ 6s²',
    description: 'Металл, используемый в производстве стеклянных волокон и катализаторов',
    properties: { meltingPoint: 1652, boilingPoint: 3402, density: 9.84, electronegativity: 1.27 },
    color: '#6BCF7F'
  },
  {
    number: 72, symbol: 'Hf', name: 'Хафний', nameEn: 'Hafnium', atomicMass: 178.49,
    category: 'transition-metal', period: 6, group: 4, electronConfig: '[Xe] 4f¹⁴ 5d² 6s²',
    description: 'Металл, используемый в ядерной энергетике и для производства стекла',
    properties: { meltingPoint: 2233, boilingPoint: 4603, density: 13.31, electronegativity: 1.30 },
    color: '#FFD93D'
  },
  {
    number: 73, symbol: 'Ta', name: 'Тантал', nameEn: 'Tantalum', atomicMass: 180.948,
    category: 'transition-metal', period: 6, group: 5, electronConfig: '[Xe] 4f¹⁴ 5d³ 6s²',
    description: 'Металл, используемый в производстве конденсаторов и резисторов',
    properties: { meltingPoint: 3017, boilingPoint: 5458, density: 16.65, electronegativity: 1.50 },
    color: '#6BCF7F'
  },
  {
    number: 74, symbol: 'W', name: 'Вольфрам', nameEn: 'Tungsten', atomicMass: 183.84,
    category: 'transition-metal', period: 6, group: 6, electronConfig: '[Xe] 4f¹⁴ 5d⁴ 6s²',
    description: 'Металл, используемый в производстве ламп накаливания и инструментов',
    properties: { meltingPoint: 3422, boilingPoint: 5555, density: 19.25, electronegativity: 2.36 },
    color: '#FFD93D'
  },
  {
    number: 75, symbol: 'Re', name: 'Рений', nameEn: 'Rhenium', atomicMass: 186.207,
    category: 'transition-metal', period: 6, group: 7, electronConfig: '[Xe] 4f¹⁴ 5d⁵ 6s²',
    description: 'Металл, используемый в производстве сверхпроводников и катализаторов',
    properties: { meltingPoint: 3186, boilingPoint: 5596, density: 21.02, electronegativity: 1.90 },
    color: '#6BCF7F'
  },
  {
    number: 76, symbol: 'Os', name: 'Осмий', nameEn: 'Osmium', atomicMass: 190.23,
    category: 'transition-metal', period: 6, group: 8, electronConfig: '[Xe] 4f¹⁴ 5d⁶ 6s²',
    description: 'Металл, используемый в производстве часов и медицинских инструментов',
    properties: { meltingPoint: 3033, boilingPoint: 5027, density: 22.59, electronegativity: 2.20 },
    color: '#FFD93D'
  },
  {
    number: 77, symbol: 'Ir', name: 'Иридий', nameEn: 'Iridium', atomicMass: 192.217,
    category: 'transition-metal', period: 6, group: 9, electronConfig: '[Xe] 4f¹⁴ 5d⁷ 6s²',
    description: 'Металл, используемый в ювелирных изделиях и для покрытия других металлов',
    properties: { meltingPoint: 2466, boilingPoint: 4470, density: 22.56, electronegativity: 2.20 },
    color: '#6BCF7F'
  },
  {
    number: 78, symbol: 'Pt', name: 'Платина', nameEn: 'Platinum', atomicMass: 195.084,
    category: 'transition-metal', period: 6, group: 10, electronConfig: '[Xe] 4f¹⁴ 5d⁹ 6s¹',
    description: 'Дорогой металл, используемый в ювелирных изделиях и в автомобильных катализаторах',
    properties: { meltingPoint: 1768, boilingPoint: 3825, density: 21.45, electronegativity: 2.28 },
    color: '#FFD93D'
  },
  {
    number: 79, symbol: 'Au', name: 'Золото', nameEn: 'Gold', atomicMass: 196.967,
    category: 'transition-metal', period: 6, group: 11, electronConfig: '[Xe] 4f¹⁴ 5d¹⁰',
    description: 'Дорогой металл, используется в ювелирных изделиях и как резервный валютный стандарт',
    properties: { meltingPoint: 1064, boilingPoint: 2856, density: 19.32, electronegativity: 2.54 },
    color: '#A8E6CF'
  },
  {
    number: 80, symbol: 'Hg', name: 'Ртуть', nameEn: 'Mercury', atomicMass: 200.592,
    category: 'transition-metal', period: 6, group: 12, electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s²',
    description: 'Единственный металл, который является жидким при комнатной температуре',
    properties: { meltingPoint: -39, boilingPoint: 357, density: 13.53, electronegativity: 2.00 },
    color: '#FFD93D'
  },
  {
    number: 81, symbol: 'Tl', name: 'Таллий', nameEn: 'Thallium', atomicMass: 204.38,
    category: 'post-transition-metal', period: 6, group: 13, electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹',
    description: 'Металл, используемый в полупроводниках и для покрытия стекла',
    properties: { meltingPoint: 304, boilingPoint: 1470, density: 11.85, electronegativity: 1.62 },
    color: '#6BCF7F'
  },
  {
    number: 82, symbol: 'Pb', name: 'Свинец', nameEn: 'Lead', atomicMass: 207.2,
    category: 'post-transition-metal', period: 6, group: 14, electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²',
    description: 'Металл, используемый в аккумуляторах и для защиты от радиации',
    properties: { meltingPoint: 327, boilingPoint: 1749, density: 11.34, electronegativity: 1.87 },
    color: '#FFD93D'
  },
  {
    number: 83, symbol: 'Bi', name: 'Висмут', nameEn: 'Bismuth', atomicMass: 208.980,
    category: 'post-transition-metal', period: 6, group: 15, electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³',
    description: 'Металл, используемый в сплавах и для производства косметики',
    properties: { meltingPoint: 271, boilingPoint: 1564, density: 9.78, electronegativity: 2.02 },
    color: '#6BCF7F'
  },
  {
    number: 84, symbol: 'Po', name: 'Полоний', nameEn: 'Polonium', atomicMass: 209,
    category: 'metalloid', period: 6, group: 16, electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴',
    description: 'Радиоактивный полуметалл, используется в качестве источника тепла',
    properties: { meltingPoint: 254, boilingPoint: 962, density: 9.20, electronegativity: 2.00 },
    color: '#FFD93D'
  },
  {
    number: 85, symbol: 'At', name: 'Астат', nameEn: 'Astatine', atomicMass: 210,
    category: 'halogen', period: 6, group: 17, electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵',
    description: 'Редкий радиоактивный элемент, используется в научных исследованиях',
    properties: { meltingPoint: 302, boilingPoint: 337, density: 7.00, electronegativity: 2.2 },
    color: '#6BCF7F'
  },
  {
    number: 86, symbol: 'Rn', name: 'Радон', nameEn: 'Radon', atomicMass: 222,
    category: 'noble-gas', period: 6, group: 18, electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶',
    description: 'Радиоактивный газ, используется в медицине и научных исследованиях',
    properties: { meltingPoint: -71, boilingPoint: -62, density: 0.00973, electronegativity: 0 },
    color: '#4ECDC4'
  },
  {
    number: 87, symbol: 'Fr', name: 'Франций', nameEn: 'Francium', atomicMass: 223,
    category: 'alkali-metal', period: 7, group: 1, electronConfig: '[Rn] 7s¹',
    description: 'Очень редкий и радиоактивный металл, используется в научных исследованиях',
    properties: { meltingPoint: 27, boilingPoint: 677, density: 2.87, electronegativity: 0.7 },
    color: '#FFE66D'
  },
  {
    number: 88, symbol: 'Ra', name: 'Радий', nameEn: 'Radium', atomicMass: 226,
    category: 'alkaline-earth-metal', period: 7, group: 2, electronConfig: '[Rn] 7s²',
    description: 'Радиоактивный металл, используется в медицинских и научных целях',
    properties: { meltingPoint: 700, boilingPoint: 1413, density: 5.50, electronegativity: 0.9 },
    color: '#95E1D3'
  },
  {
    number: 89, symbol: 'Ac', name: 'Актиний', nameEn: 'Actinium', atomicMass: 227,
    category: 'actinide', period: 7, group: 3, electronConfig: '[Rn] 6d¹ 7s²',
    description: 'Радиоактивный металл, используется в ядерной энергетике и для производства радиационных источников',
    properties: { meltingPoint: 1050, boilingPoint: 1500, density: 10.07, electronegativity: 1.1 },
    color: '#A8E6CF'
  },
  {
    number: 90, symbol: 'Th', name: 'Торий', nameEn: 'Thorium', atomicMass: 232.038,
    category: 'actinide', period: 7, group: 4, electronConfig: '[Rn] 6d² 7s²',
    description: 'Радиоактивный металл, используется в ядерной энергетике и для производства радиационных источников',
    properties: { meltingPoint: 1750, boilingPoint: 4780, density: 11.72, electronegativity: 1.3 },
    color: '#FFD93D'
  },
  {
    number: 91, symbol: 'Pa', name: 'Протактиний', nameEn: 'Protactinium', atomicMass: 231.035,
    category: 'actinide', period: 7, group: 5, electronConfig: '[Rn] 6d³ 7s²',
    description: 'Радиоактивный металл, используется в ядерной энергетике и для производства радиационных источников',
    properties: { meltingPoint: 1050, boilingPoint: 1600, density: 15.37, electronegativity: 1.5 },
    color: '#6BCF7F'
  },
  {
    number: 92, symbol: 'U', name: 'Уран', nameEn: 'Uranium', atomicMass: 238.028,
    category: 'actinide', period: 7, group: 6, electronConfig: '[Rn] 6d⁴ 7s²',
    description: 'Радиоактивный металл, используется в ядерной энергетике и для производства радиационных источников',
    properties: { meltingPoint: 1135, boilingPoint: 4131, density: 18.95, electronegativity: 1.38 },
    color: '#FFD93D'
  },
  {
    number: 93, symbol: 'Np', name: 'Нептуний', nameEn: 'Neptunium', atomicMass: 237.048,
    category: 'actinide', period: 7, group: 7, electronConfig: '[Rn] 6d⁵ 7s²',
    description: 'Радиоактивный металл, используется в ядерной энергетике и для производства радиационных источников',
    properties: { meltingPoint: 637, boilingPoint: 2800, density: 20.25, electronegativity: 1.36 },
    color: '#6BCF7F'
  },
  {
    number: 94, symbol: 'Pu', name: 'Плутоний', nameEn: 'Plutonium', atomicMass: 244,
    category: 'actinide', period: 7, group: 8, electronConfig: '[Rn] 5f⁶ 7s²',
    description: 'Радиоактивный металл, используется в ядерной энергетике и для производства радиационных источников',
    properties: { meltingPoint: 640, boilingPoint: 3228, density: 19.86, electronegativity: 1.28 },
    color: '#FFD93D'
  },
  {
    number: 95, symbol: 'Am', name: 'Америций', nameEn: 'Americium', atomicMass: 243,
    category: 'actinide', period: 7, group: 9, electronConfig: '[Rn] 5f⁷ 7s²',
    description: 'Радиоактивный металл, используется в ядерной энергетике и для производства радиационных источников',
    properties: { meltingPoint: 1050, boilingPoint: 2600, density: 13.67, electronegativity: 1.13 },
    color: '#6BCF7F'
  },
  {
    number: 96, symbol: 'Cm', name: 'Кюрий', nameEn: 'Curium', atomicMass: 247,
    category: 'actinide', period: 7, group: 10, electronConfig: '[Rn] 5f⁸ 7s²',
    description: 'Радиоактивный металл, используется в ядерной энергетике и для производства радиационных источников',
    properties: { meltingPoint: 1340, boilingPoint: 3100, density: 13.51, electronegativity: 1.28 },
    color: '#FFD93D'
  },
  {
    number: 97, symbol: 'Bk', name: 'Берклий', nameEn: 'Berkelium', atomicMass: 247,
    category: 'actinide', period: 7, group: 11, electronConfig: '[Rn] 5f⁹ 7s²',
    description: 'Радиоактивный металл, используется в ядерной энергетике и для производства радиационных источников',
    properties: { meltingPoint: 1080, boilingPoint: 2627, density: 14.78, electronegativity: 1.30 },
    color: '#6BCF7F'
  },
  {
    number: 98, symbol: 'Cf', name: 'Калифорний', nameEn: 'Californium', atomicMass: 251,
    category: 'actinide', period: 7, group: 12, electronConfig: '[Rn] 5f¹⁰ 7s²',
    description: 'Радиоактивный металл, используется в ядерной энергетике и для производства радиационных источников',
    properties: { meltingPoint: 900, boilingPoint: 1470, density: 15.10, electronegativity: 1.28 },
    color: '#FFD93D'
  },
  {
    number: 99, symbol: 'Es', name: 'Эйнштейний', nameEn: 'Einsteinium', atomicMass: 252,
    category: 'actinide', period: 7, group: 13, electronConfig: '[Rn] 5f¹¹ 7s²',
    description: 'Радиоактивный металл, используется в ядерной энергетике и для производства радиационных источников',
    properties: { meltingPoint: 1133, boilingPoint: 1269, density: 8.84, electronegativity: 1.30 },
    color: '#6BCF7F'
  },
  {
    number: 100, symbol: 'Fm', name: 'Фермий', nameEn: 'Fermium', atomicMass: 257,
    category: 'actinide', period: 7, group: 14, electronConfig: '[Rn] 5f¹² 7s²',
    description: 'Радиоактивный металл, используется в ядерной энергетике и для производства радиационных источников',
    properties: { meltingPoint: 1527, boilingPoint: 2600, density: 9.70, electronegativity: 1.30 },
    color: '#FFD93D'
  },
  {
    number: 101, symbol: 'Md', name: 'Менделевий', nameEn: 'Mendelevium', atomicMass: 258,
    category: 'actinide', period: 7, group: 15, electronConfig: '[Rn] 5f¹³ 7s²',
    description: 'Радиоактивный металл, используется в ядерной энергетике и для производства радиационных источников',
    properties: { meltingPoint: 1100, boilingPoint: 1407, density: 10.28, electronegativity: 1.30 },
    color: '#6BCF7F'
  },
  {
    number: 102, symbol: 'No', name: 'Нобелий', nameEn: 'Nobelium', atomicMass: 259,
    category: 'actinide', period: 7, group: 16, electronConfig: '[Rn] 5f¹⁴ 7s²',
    description: 'Радиоактивный металл, используется в ядерной энергетике и для производства радиационных источников',
    properties: { meltingPoint: 827, boilingPoint: 1447, density: 9.90, electronegativity: 1.30 },
    color: '#FFD93D'
  },
  {
    number: 103, symbol: 'Lr', name: 'Лоуренсий', nameEn: 'Lawrencium', atomicMass: 266,
    category: 'actinide', period: 7, group: 17, electronConfig: '[Rn] 5f¹⁴ 6d¹ 7s²',
    description: 'Радиоактивный металл, используется в ядерной энергетике и для производства радиационных источников',
    properties: { meltingPoint: 1627, boilingPoint: 1900, density: 10.07, electronegativity: 1.30 },
    color: '#6BCF7F'
  },
  {
    number: 104, symbol: 'Rf', name: 'Резерфордий', nameEn: 'Rutherfordium', atomicMass: 267,
    category: 'transition-metal', period: 7, group: 4, electronConfig: '[Rn] 5f¹⁴ 6d² 7s²',
    description: 'Синтетический элемент, используется в научных исследованиях',
    properties: { meltingPoint: 2100, boilingPoint: 5800, density: 17.20, electronegativity: 1.30 },
    color: '#FFD93D'
  },
  {
    number: 105, symbol: 'Db', name: 'Дубний', nameEn: 'Dubnium', atomicMass: 268,
    category: 'transition-metal', period: 7, group: 5, electronConfig: '[Rn] 5f¹⁴ 6d³ 7s²',
    description: 'Синтетический элемент, используется в научных исследованиях',
    properties: { meltingPoint: 1120, boilingPoint: 3825, density: 18.95, electronegativity: 1.30 },
    color: '#6BCF7F'
  },
  {
    number: 106, symbol: 'Sg', name: 'Сиборгий', nameEn: 'Seaborgium', atomicMass: 271,
    category: 'transition-metal', period: 7, group: 6, electronConfig: '[Rn] 5f¹⁴ 6d⁴ 7s²',
    description: 'Синтетический элемент, используется в научных исследованиях',
    properties: { meltingPoint: 1135, boilingPoint: 2870, density: 18.25, electronegativity: 1.30 },
    color: '#FFD93D'
  },
  {
    number: 107, symbol: 'Bh', name: 'Борий', nameEn: 'Bohrium', atomicMass: 270,
    category: 'transition-metal', period: 7, group: 7, electronConfig: '[Rn] 5f¹⁴ 6d⁵ 7s²',
    description: 'Синтетический элемент, используется в научных исследованиях',
    properties: { meltingPoint: 1570, boilingPoint: 2270, density: 37.95, electronegativity: 1.30 },
    color: '#6BCF7F'
  },
  {
    number: 108, symbol: 'Hs', name: 'Хаский', nameEn: 'Hassium', atomicMass: 277,
    category: 'transition-metal', period: 7, group: 8, electronConfig: '[Rn] 5f¹⁴ 6d⁶ 7s²',
    description: 'Синтетический элемент, используется в научных исследованиях',
    properties: { meltingPoint: 1260, boilingPoint: 2500, density: 40.07, electronegativity: 1.30 },
    color: '#FFD93D'
  },
  {
    number: 109, symbol: 'Mt', name: 'Мейтнерий', nameEn: 'Meitnerium', atomicMass: 276,
    category: 'transition-metal', period: 7, group: 9, electronConfig: '[Rn] 5f¹⁴ 6d⁷ 7s²',
    description: 'Синтетический элемент, используется в научных исследованиях',
    properties: { meltingPoint: 1095, boilingPoint: 2800, density: 37.95, electronegativity: 1.30 },
    color: '#6BCF7F'
  },
  {
    number: 110, symbol: 'Ds', name: 'Дармштадтий', nameEn: 'Darmstadtium', atomicMass: 281,
    category: 'transition-metal', period: 7, group: 10, electronConfig: '[Rn] 5f¹⁴ 6d⁸ 7s²',
    description: 'Синтетический элемент, используется в научных исследованиях',
    properties: { meltingPoint: 1086, boilingPoint: 2600, density: 40.79, electronegativity: 1.30 },
    color: '#FFD93D'
  },
  {
    number: 111, symbol: 'Rg', name: 'Рентгений', nameEn: 'Roentgenium', atomicMass: 282,
    category: 'transition-metal', period: 7, group: 11, electronConfig: '[Rn] 5f¹⁴ 6d⁹ 7s²',
    description: 'Синтетический элемент, используется в научных исследованиях',
    properties: { meltingPoint: 1110, boilingPoint: 2800, density: 37.28, electronegativity: 1.30 },
    color: '#6BCF7F'
  },
  {
    number: 112, symbol: 'Cn', name: 'Коперниций', nameEn: 'Copernicium', atomicMass: 285,
    category: 'transition-metal', period: 7, group: 12, electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s²',
    description: 'Синтетический элемент, используется в научных исследованиях',
    properties: { meltingPoint: 1085, boilingPoint: 2600, density: 37.10, electronegativity: 1.30 },
    color: '#FFD93D'
  },
  {
    number: 113, symbol: 'Nh', name: 'Нихоний', nameEn: 'Nihonium', atomicMass: 286,
    category: 'post-transition-metal', period: 7, group: 13, electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹',
    description: 'Синтетический элемент, используется в научных исследованиях',
    properties: { meltingPoint: 70, boilingPoint: 280, density: 16.65, electronegativity: 1.30 },
    color: '#6BCF7F'
  },
  {
    number: 114, symbol: 'Fl', name: 'Флеровий', nameEn: 'Flerovium', atomicMass: 289,
    category: 'post-transition-metal', period: 7, group: 14, electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²',
    description: 'Синтетический элемент, используется в научных исследованиях',
    properties: { meltingPoint: 190, boilingPoint: 480, density: 14.18, electronegativity: 1.30 },
    color: '#FFD93D'
  },
  {
    number: 115, symbol: 'Mc', name: 'Московий', nameEn: 'Moscovium', atomicMass: 288,
    category: 'post-transition-metal', period: 7, group: 15, electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³',
    description: 'Синтетический элемент, используется в научных исследованиях',
    properties: { meltingPoint: 656, boilingPoint: 1200, density: 13.51, electronegativity: 1.30 },
    color: '#6BCF7F'
  },
  {
    number: 116, symbol: 'Lv', name: 'Ливерморий', nameEn: 'Livermorium', atomicMass: 293,
    category: 'post-transition-metal', period: 7, group: 16, electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴',
    description: 'Синтетический элемент, используется в научных исследованиях',
    properties: { meltingPoint: 1256, boilingPoint: 1300, density: 10.51, electronegativity: 1.30 },
    color: '#FFD93D'
  },
  {
    number: 117, symbol: 'Ts', name: 'Теннессин', nameEn: 'Tennessine', atomicMass: 294,
    category: 'halogen', period: 7, group: 17, electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵',
    description: 'Синтетический элемент, используется в научных исследованиях',
    properties: { meltingPoint: 112, boilingPoint: 340, density: 7.50, electronegativity: 2.2 },
    color: '#6BCF7F'
  },
  {
    number: 118, symbol: 'Og', name: 'Оганесон', nameEn: 'Oganesson', atomicMass: 294,
    category: 'noble-gas', period: 7, group: 18, electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶',
    description: 'Самый тяжелый благородный газ, искусственно полученный элемент',
    properties: { },
    color: '#4ECDC4'
  }
];