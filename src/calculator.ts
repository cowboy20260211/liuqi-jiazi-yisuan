export const DIZHI = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
export const YINYANG = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]; // 1=阳, 0=阴

export const BINGQI_MAP: Record<string, string> = {
  '子': '少阴君火', '午': '少阴君火',
  '丑': '太阴湿土', '未': '太阴湿土',
  '寅': '少阳相火', '申': '少阳相火',
  '卯': '阳明燥金', '酉': '阳明燥金',
  '辰': '太阳寒水', '戌': '太阳寒水',
  '巳': '厥阴风木', '亥': '厥阴风木',
};

export function calculate(renming: string, sitian: string): Record<string, string> {
  // Parameter validation
  if (!DIZHI.includes(renming) || !DIZHI.includes(sitian)) {
    return { error: 'Invalid dizhi parameter' };
  }

  // Find indices
  const renmingIndex = DIZHI.indexOf(renming);
  const sitianIndex = DIZHI.indexOf(sitian);

  // Step 1: Calculate sidi (司地) - advance 3 positions from sitian
  const sidiIndex = (sitianIndex + 3) % 12;
  const sidi = DIZHI[sidiIndex];

  // Step 2: Calculate siren (司人) - based on sidi's yinyang
  let sirenIndex;
  if (YINYANG[sidiIndex] === 1) { // yang - advance 1
    sirenIndex = (sidiIndex + 1) % 12;
  } else { // yin - retreat 1
    sirenIndex = (sidiIndex - 1 + 12) % 12;
  }
  const siren = DIZHI[sirenIndex];

  // Step 3: Calculate bingjing (病经) - from renming to siren, then to sitian (circular)
  // Place renming at siren's position, then count forward to sitian
  const bingjingIndex = (sitianIndex + 12 - sirenIndex) % 12;
  const bingjing = DIZHI[bingjingIndex];

  // Step 4: Calculate bingqi (病气) based on bingjing
  const bingqi = BINGQI_MAP[bingjing] || 'Unknown';

  return {
    renming,
    sitian,
    sidi,
    siren,
    bingjing,
    bingqi
  };
}
