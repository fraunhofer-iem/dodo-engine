export interface Metric {
  name: string;
  // maybe as an array of numbers to set a specific
  // scaling factor dependend on the current maturity level
  scalingFactor?: number;
  category?: string;
  description?: string;
  initialValue?: number;
}

export interface Requirement {
  category?: string;
  threshold: number;
}

export interface MaturityLevel {
  name: string;
  // an array with one element without category signalizes no
  // needed category but just a overall needed threshold to reach
  // this maturity level
  requirements: Array<Requirement>;
  description?: string;
}

export interface Action {
  name: string;
  description?: string;
  effects: Array<{ metric: Metric; scalingFactor?: number }>;
}

export interface Goal {
  name: string;
  description?: string;
  effects: Array<{ metric: Metric; scalingFactor?: number }>;
}

export interface DataModel {
  metrics: Array<Metric>;
  maturityLevel: Array<MaturityLevel>;
  actions: Array<Action>;
  goals: Array<Goal>;
}
