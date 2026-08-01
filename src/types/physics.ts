// Physics Lab Simulation Types
export type PhysicsSimulationType = 
  | 'motion'
  | 'forces'
  | 'energy'
  | 'momentum'
  | 'electricity'
  | 'magnetism'
  | 'circuits'
  | 'optics'
  | 'waves'
  | 'nuclear'
  | 'quantum';

export interface SimulationParameter {
  name: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
}

export interface PhysicsSimulation {
  id: string;
  title: string;
  description: string;
  type: PhysicsSimulationType;
  parameters: Record<string, SimulationParameter>;
  visualRepresentation: 'canvas' | '3d' | 'graph';
  createdAt: Date;
  updatedAt: Date;
}

export interface SimulationResult {
  id: string;
  simulationId: string;
  studentId: string;
  parameters: Record<string, number>;
  results: Record<string, any>;
  createdAt: Date;
}

// Question Bank Types
export interface QuestionBankQuestion {
  id: string;
  classLevel: 'first' | 'second' | 'third';
  semester: 'first' | 'second';
  unit: string;
  lesson: string;
  questionText: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer' | 'essay' | 'problem';
  options?: string[];
  correctAnswer?: string;
  explanation?: string;
  bloomLevel: 'remember' | 'understand' | 'apply' | 'analyze' | 'evaluate' | 'create';
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
  createdBy: string; // teacherId
  createdAt: Date;
  updatedAt: Date;
}

// AI Chat Types
export interface AIMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface AIChatSession {
  id: string;
  studentId: string;
  topic: string; // الموضوع الفيزيائي
  messages: AIMessage[];
  createdAt: Date;
  updatedAt: Date;
}

export interface AICapability {
  type: 'explanation' | 'problem-solving' | 'experiment-guide' | 'lesson-summary' | 'question-generation' | 'diagram-explanation' | 'formula-explanation';
  description: string;
  enabled: boolean;
}
