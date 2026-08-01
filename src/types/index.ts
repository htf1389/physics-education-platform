// User Types
export type UserRole = 'admin' | 'teacher' | 'student' | 'parent';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  phone?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Teacher extends User {
  role: 'teacher';
  classIds: string[];
  subjectIds: string[];
}

export interface Student extends User {
  role: 'student';
  classId: string;
  parentIds: string[];
  rollNumber?: string;
}

export interface Parent extends User {
  role: 'parent';
  childrenIds: string[];
}

// Class Types
export interface Class {
  id: string;
  name: string;
  description?: string;
  level: 'first' | 'second' | 'third'; // أول، ثاني، ثالث ثانوي
  teacherIds: string[];
  studentIds: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Lesson Types
export interface Lesson {
  id: string;
  title: string;
  description?: string;
  unitId: string;
  classId: string;
  objectives: string[];
  content: string;
  videoUrl?: string;
  duration: number; // in minutes
  createdAt: Date;
  updatedAt: Date;
}

export interface Unit {
  id: string;
  title: string;
  description?: string;
  classId: string;
  semester: 'first' | 'second';
  lessons: Lesson[];
  createdAt: Date;
  updatedAt: Date;
}

// Homework Types
export interface Homework {
  id: string;
  title: string;
  description: string;
  classId: string;
  lessonId?: string;
  dueDate: Date;
  totalPoints: number;
  createdBy: string; // teacherId
  createdAt: Date;
  updatedAt: Date;
}

export interface HomeworkSubmission {
  id: string;
  homeworkId: string;
  studentId: string;
  submissionDate: Date;
  fileUrls: string[];
  status: 'pending' | 'submitted' | 'graded';
  grade?: number;
  feedback?: string;
  gradedAt?: Date;
  gradedBy?: string; // teacherId
}

// Exam Types
export interface Exam {
  id: string;
  title: string;
  description: string;
  classId: string;
  unitId?: string;
  type: 'online' | 'paper';
  totalQuestions: number;
  totalPoints: number;
  duration: number; // in minutes
  startDate: Date;
  endDate: Date;
  createdBy: string; // teacherId
  createdAt: Date;
  updatedAt: Date;
}

export interface ExamQuestion {
  id: string;
  examId: string;
  questionText: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer' | 'essay';
  options?: string[]; // for multiple choice
  correctAnswer?: string;
  points: number;
  bloomLevel: 'remember' | 'understand' | 'apply' | 'analyze' | 'evaluate' | 'create';
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface ExamSubmission {
  id: string;
  examId: string;
  studentId: string;
  startTime: Date;
  endTime?: Date;
  answers: Record<string, string>; // questionId -> answer
  totalScore?: number;
  status: 'in-progress' | 'submitted' | 'graded';
  createdAt: Date;
  updatedAt: Date;
}

// Attendance Types
export interface AttendanceRecord {
  id: string;
  studentId: string;
  classId: string;
  date: Date;
  status: 'present' | 'absent' | 'late' | 'excuse';
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Grade Types
export interface Grade {
  id: string;
  studentId: string;
  classId: string;
  lessonId?: string;
  type: 'homework' | 'exam' | 'participation' | 'project';
  score: number;
  maxScore: number;
  percentage: number;
  createdAt: Date;
  updatedAt: Date;
}

// Notification Types
export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  read: boolean;
  relatedId?: string; // homework, exam, etc.
  relatedType?: string;
  createdAt: Date;
}

// Achievement Types
export interface Achievement {
  id: string;
  studentId: string;
  title: string;
  description: string;
  icon: string;
  earnedAt: Date;
}

// Portfolio Types
export interface PortfolioFile {
  id: string;
  userId: string;
  title: string;
  description?: string;
  fileUrl: string;
  fileType: string;
  uploadedAt: Date;
}
