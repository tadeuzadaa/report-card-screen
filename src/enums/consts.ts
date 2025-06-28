import { ESubject } from './enums';
import { TGrade } from './types';

export const Semester = [
  { value: 1, label: '2025/1' },
  { value: 2, label: '2025/2' },
  { value: 3, label: '2026/1' },
  { value: 4, label: '2026/2' },
  { value: 5, label: '2027/1' },
  { value: 6, label: '2027/2' },
  { value: 7, label: '2028/1' },
  { value: 8, label: '2028/2' },
];

export const Grade: TGrade = {
  allocated: 0,
  grade: 0,
  lost: 0,
  missing: 0,
  needed: 0,
  safe: 0,
};

export const Subject = [
  ESubject.Sub1,
  ESubject.Sub2,
  ESubject.Sub3,
  ESubject.Sub4,
  ESubject.Sub5,
];