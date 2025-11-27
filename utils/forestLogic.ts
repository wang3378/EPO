import { PatientData, PredictionResult } from '../types';

// Decision Tree Logic Functions
// Based on the user's provided Random Forest implementation

const predictTree1 = (cysc: number, alb: number, bun: number, ferritin: number, mg: number, transferrin: number, epo: number): number => {
  if (cysc <= 7.90) {
    if (alb <= 37.75) {
      return bun <= 21.70 ? 1.0 : 1.0;
    } else {
      if (alb <= 39.25) return 0.0;
      if (ferritin <= 80.30) return mg <= 1.12 ? 0.0 : 0.0;
      return transferrin <= 2.58 ? 0.0 : 1.0;
    }
  } else {
    if (epo <= 122.72) return bun <= 23.45 ? 0.0 : 1.0;
    if (mg <= 1.09) {
      if (epo <= 183.15) return transferrin <= 2.51 ? 1.0 : 1.0;
      return ferritin <= 94.50 ? 1.0 : 1.0;
    } else {
      if (ferritin <= 28.45) return 0.0;
      return ferritin <= 77.25 ? 1.0 : 1.0;
    }
  }
};

const predictTree2 = (cysc: number, alb: number, bun: number, ferritin: number, mg: number, transferrin: number, epo: number): number => {
  if (bun <= 21.95) {
    if (epo <= 155.13) {
      if (epo <= 124.52) {
        if (epo <= 119.34) return alb <= 42.55 ? 0.0 : 0.0;
        return 1.0;
      }
      return mg <= 1.06 ? 1.0 : 0.0;
    }
    return mg <= 1.01 ? 1.0 : 0.0;
  } else {
    if (bun <= 25.90) {
      if (epo <= 131.36) return 0.0;
      if (bun <= 23.55) return 1.0;
      return transferrin <= 2.16 ? 1.0 : 0.0;
    }
    if (alb <= 41.85) {
      if (cysc <= 8.27) return transferrin <= 2.02 ? 1.0 : 1.0;
      return 1.0;
    }
    return 0.0;
  }
};

const predictTree3 = (cysc: number, alb: number, bun: number, ferritin: number, mg: number, transferrin: number, epo: number): number => {
  if (alb <= 43.45) {
    if (ferritin <= 37.15) return alb <= 37.35 ? 1.0 : (transferrin <= 3.63 ? (bun <= 26.25 ? 0.0 : 1.0) : 1.0);
    if (ferritin <= 71.05) return 1.0;
    return mg <= 1.22 ? (bun <= 20.25 ? 1.0 : 1.0) : 0.0;
  }
  return transferrin <= 2.16 ? (cysc <= 8.52 ? 1.0 : 0.0) : 0.0;
};

const predictTree4 = (cysc: number, alb: number, bun: number, ferritin: number, mg: number, transferrin: number, epo: number): number => {
  if (bun <= 21.15) {
    if (cysc <= 9.90) {
      if (transferrin <= 2.04) return 1.0;
      return epo <= 161.24 ? (mg <= 1.09 ? 0.0 : 0.0) : 0.0;
    }
    return 1.0;
  }
  if (alb <= 42.85) {
    if (cysc <= 6.43) return 1.0;
    if (cysc <= 10.46) return mg <= 1.17 ? 1.0 : 1.0;
    return alb <= 40.95 ? 1.0 : 0.0;
  }
  if (bun <= 30.10) {
    if (bun <= 23.10) return 0.0;
    return ferritin <= 92.00 ? 0.0 : 0.0;
  }
  return 1.0;
};

const predictTree5 = (cysc: number, alb: number, bun: number, ferritin: number, mg: number, transferrin: number, epo: number): number => {
  if (bun <= 25.95) {
    if (alb <= 37.20) return alb <= 35.75 ? 1.0 : 1.0;
    if (ferritin <= 85.30) return bun <= 20.20 ? 0.0 : (mg <= 1.12 ? 0.0 : 0.0);
    return mg <= 1.24 ? (epo <= 137.61 ? 0.0 : 1.0) : 0.0;
  }
  if (mg <= 1.17) return 1.0;
  return ferritin <= 119.95 ? 1.0 : 0.0;
};

const predictTree6 = (cysc: number, alb: number, bun: number, ferritin: number, mg: number, transferrin: number, epo: number): number => {
  if (mg <= 1.10) {
    if (alb <= 43.55) {
      if (bun <= 14.05) return 1.0;
      return transferrin <= 2.12 ? (cysc <= 8.79 ? 1.0 : 1.0) : 1.0;
    }
    return epo <= 152.17 ? 0.0 : 1.0;
  }
  if (bun <= 21.50) return 0.0;
  if (bun <= 23.55) return 1.0;
  if (alb <= 40.55) return 1.0;
  return alb <= 43.00 ? 0.0 : 0.0;
};

const predictTree7 = (cysc: number, alb: number, bun: number, ferritin: number, mg: number, transferrin: number, epo: number): number => {
  if (bun <= 20.25) {
    if (ferritin <= 83.70) return cysc <= 8.05 ? 0.0 : (mg <= 1.18 ? 1.0 : 0.0);
    return mg <= 0.97 ? 1.0 : 0.0;
  }
  if (alb <= 43.30) return mg <= 1.18 ? 1.0 : (alb <= 38.60 ? 1.0 : 0.0);
  if (bun <= 23.10) return 1.0;
  return alb <= 45.80 ? 0.0 : 0.0;
};

const predictTree8 = (cysc: number, alb: number, bun: number, ferritin: number, mg: number, transferrin: number, epo: number): number => {
  if (mg <= 1.05) {
    if (cysc <= 8.62) {
      if (transferrin <= 1.87) return 1.0;
      if (bun <= 24.20) return 0.0;
      return transferrin <= 2.58 ? 1.0 : 1.0;
    }
    if (bun <= 30.85) return 1.0;
    return ferritin <= 86.10 ? 1.0 : 1.0;
  }
  if (bun <= 21.20) return 0.0;
  if (ferritin <= 20.00) return 0.0;
  if (cysc <= 8.94) return ferritin <= 94.05 ? 0.0 : 1.0;
  return mg <= 1.25 ? 1.0 : 0.0;
};

const predictTree9 = (cysc: number, alb: number, bun: number, ferritin: number, mg: number, transferrin: number, epo: number): number => {
  if (mg <= 1.25) {
    if (alb <= 43.45) {
      if (bun <= 20.25) return cysc <= 7.99 ? (transferrin <= 2.52 ? 1.0 : 0.0) : 1.0;
      if (bun <= 30.90) return 1.0;
      return bun <= 33.70 ? 1.0 : 1.0;
    }
    return transferrin <= 2.18 ? (bun <= 25.75 ? 1.0 : 1.0) : 0.0;
  }
  return alb <= 40.75 ? 0.0 : 0.0;
};

const predictTree10 = (cysc: number, alb: number, bun: number, ferritin: number, mg: number, transferrin: number, epo: number): number => {
  if (ferritin <= 17.85) return transferrin <= 3.04 ? 0.0 : 0.0;
  if (mg <= 1.05) {
    if (alb <= 44.05) return alb <= 41.85 ? 1.0 : 1.0;
    return 0.0;
  }
  if (transferrin <= 2.09) {
    if (bun <= 28.70) return cysc <= 7.64 ? 1.0 : 0.0;
    return 1.0;
  }
  if (transferrin <= 2.44) return cysc <= 8.94 ? 0.0 : 1.0;
  return cysc <= 7.72 ? 0.0 : 1.0;
};

const decisionTrees = [
  predictTree1, predictTree2, predictTree3, predictTree4, predictTree5,
  predictTree6, predictTree7, predictTree8, predictTree9, predictTree10
];

export const runPrediction = (data: PatientData): PredictionResult => {
  const cysc = parseFloat(data.cysc) || 0;
  const alb = parseFloat(data.alb) || 0;
  const bun = parseFloat(data.bun) || 0;
  const ferritin = parseFloat(data.ferritin) || 0;
  const mg = parseFloat(data.mg) || 0;
  const transferrin = parseFloat(data.transferrin) || 0;
  const epo = parseFloat(data.epo) || 0;

  const treeResults: number[] = [];
  let lowResponseCount = 0;

  decisionTrees.forEach((tree) => {
    const result = tree(cysc, alb, bun, ferritin, mg, transferrin, epo);
    treeResults.push(result);
    if (result === 1.0) {
      lowResponseCount++;
    }
  });

  const probability = (lowResponseCount / decisionTrees.length) * 100;

  let riskLevel: 'low' | 'moderate' | 'high' = 'low';
  if (probability >= 50) riskLevel = 'high';
  else if (probability >= 20) riskLevel = 'moderate';

  return {
    probability,
    riskLevel,
    treeResults,
    lowResponseCount,
    totalTrees: decisionTrees.length
  };
};