/**
 * Округляет число до ближайшего числа, кратного 5.
 */
function roundTo5(n: number): number {
  return Math.round(n / 5) * 5;
}

/**
 * Вычисляет текущий уровень, текущий порог и следующий порог по опыту.
 * @param experience - текущее количество опыта (XP)
 * @returns { level: number, currentThreshold: number, nextThreshold: number }
 */
export function getLevelInfo(experience: number) {
  let level = 1;
  let threshold = 150;
  let prevThreshold = 0;

  while (experience >= threshold) {
    prevThreshold = threshold;
    threshold = roundTo5(threshold + threshold * 0.5);
    level++;
  }

  return {
    level,
    currentThreshold: prevThreshold,
    nextThreshold: threshold
  };
}
