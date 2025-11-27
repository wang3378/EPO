export interface PatientData {
  cysc: string;
  alb: string;
  bun: string;
  ferritin: string;
  mg: string;
  transferrin: string;
  epo: string;
}

export interface PredictionResult {
  probability: number;
  riskLevel: 'low' | 'moderate' | 'high';
  treeResults: number[]; // 0 or 1
  lowResponseCount: number;
  totalTrees: number;
}

export interface FeatureImportance {
  name: string;
  value: number;
  label: string;
}