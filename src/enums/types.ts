import { ESubject } from "./enums";

export type TGrade ={
    allocated: number;
    grade: number;
    lost: number;
    missing: number;
    needed: number;
    safe: number;
}

export type CardProps = {
  subject: ESubject;
  allocated: number;
  grade: number;
};