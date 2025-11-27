import { FeatureImportance } from './types';

export const FEATURE_IMPORTANCE_DATA: FeatureImportance[] = [
  { name: 'ALB', value: 23.0, label: 'ALB' },
  { name: 'Mg', value: 21.8, label: 'Mg' },
  { name: 'BUN', value: 20.7, label: 'BUN' },
  { name: 'EPO', value: 11.5, label: '周EPO剂量' },
  { name: 'Cysc', value: 9.2, label: 'Cysc' },
  { name: 'Transferrin', value: 9.2, label: '转铁蛋白' },
  { name: 'Ferritin', value: 4.6, label: '铁蛋白' },
];

export const DEFAULT_FORM_DATA = {
  cysc: '',
  alb: '',
  bun: '',
  ferritin: '',
  mg: '',
  transferrin: '',
  epo: '',
};
