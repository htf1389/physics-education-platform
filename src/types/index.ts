// User Types
export interface User {
  id: string
  name: string
  email: string
  phone: string
  role: 'admin' | 'teacher' | 'student' | 'parent'
  profileImage?: string
  createdAt: Date
  updatedAt: Date
}

export interface Teacher extends User {
  specialization: string
  qualifications: Qualification[]
  bio?: string
  academicYear: string[]
}

export interface Student extends User {
  studentId: string
  qrCode: string
  guardian: Guardian
  classRoom: string
  academicYear: string
  performance: StudentPerformance
  attendance: AttendanceRecord[]
}

export interface Parent extends User {
  students: Student[]
  notifications: Notification[]
}

export interface Guardian {
  name: string
  relationship: string
  phone: string
  email?: string
}

// Academic Types
export interface AcademicYear {
  id: string
  year: string
  semesters: Semester[]
  isActive: boolean
  createdAt: Date
}

export interface Semester {
  id: string
  name: 'الفصل الأول' | 'الفصل الثاني' | 'First Semester' | 'Second Semester'
  number: 1 | 2
  startDate: Date
  endDate: Date
  academicYearId: string
}

export interface Classroom {
  id: string
  name: string
  grade: number
  teacher: Teacher
  students: Student[]
  academicYear: string
  semester: string
  timetable: Timetable[]
  subjects: Subject[]
}

export interface Subject {
  id: string
  name: string
  nameAr: string
  code: string
  icon?: string
  color: string
  curriculum: Curriculum
}

export interface Curriculum {
  id: string
  subject: Subject
  units: Unit[]
  totalLessons: number
  completedLessons: number
}

export interface Unit {
  id: string
  name: string
  nameAr: string
  lessons: Lesson[]
  curriculum: Curriculum
}

export interface Lesson {
  id: string
  name: string
  nameAr: string
  unit: Unit
  duration: number
  objectives: string[]
  content: string
  experiments: Experiment[]
  resources: Resource[]
  assignments: Assignment[]
}

// Assessment Types
export interface Grades {
  homework: number
  classroomParticipation: number
  extraCurricularActivities: number
  periodTests: number
  practicalWork: number
  research: number
  projects: number
  worksheets: number
  finalExam: number
  total?: number
}

export interface StudentPerformance {
  student: Student
  grades: Grades
  skillsMastery: SkillMastery[]
  level: number
  xp: number
  badges: Badge[]
  medals: Medal[]
  rank: number
}

export interface SkillMastery {
  skill: string
  masteryPercentage: number
  trend: 'up' | 'down' | 'stable'
}

export interface Assessment {
  id: string
  title: string
  titleAr: string
  type: 'test' | 'quiz' | 'homework' | 'worksheet'
  subject: Subject
  questions: Question[]
  totalPoints: number
  dueDate?: Date
  classroom?: Classroom
  createdBy: Teacher
  results: AssessmentResult[]
}

export interface Question {
  id: string
  type: 'multiple-choice' | 'true-false' | 'short-answer' | 'essay' | 'calculation'
  question: string
  questionAr: string
  options?: string[]
  correctAnswer: string | string[]
  points: number
  difficulty: 'easy' | 'medium' | 'hard'
  unit?: Unit
}

export interface AssessmentResult {
  id: string
  student: Student
  assessment: Assessment
  answers: string[]
  score: number
  percentage: number
  submittedAt: Date
  feedback?: string
}

// Lab & Experiment Types
export interface Experiment {
  id: string
  title: string
  titleAr: string
  lesson: Lesson
  objective: string
  objectiveAr: string
  equipment: string[]
  safetyPrecautions: string[]
  steps: string[]
  videoUrl?: string
  simulation?: SimulationData
  worksheet?: Worksheet
  rubric?: GradingRubric
}

export interface SimulationData {
  id: string
  title: string
  url: string
  description: string
}

export interface ExperimentResult {
  id: string
  student: Student
  experiment: Experiment
  data: Record<string, any>
  observations: string
  conclusion: string
  submittedAt: Date
  grade?: number
  feedback?: string
}

// Portfolio Types
export interface StudentPortfolio {
  student: Student
  experiments: ExperimentResult[]
  projects: Project[]
  research: Research[]
  certificates: Certificate[]
  badges: Badge[]
  medals: Medal[]
  achievements: Achievement[]
  performanceGraph: PerformanceData[]
}

export interface TeacherPortfolio {
  teacher: Teacher
  bio: string
  qualifications: Qualification[]
  courses: Course[]
  certificates: Certificate[]
  lessonPlans: LessonPlan[]
  createdTests: Assessment[]
  presentations: Presentation[]
  experiments: Experiment[]
  workshops: Workshop[]
  achievements: Achievement[]
  kpis: KPI[]
}

export interface Qualification {
  id: string
  title: string
  issuer: string
  date: Date
}

export interface Certificate {
  id: string
  title: string
  titleAr: string
  recipient: Student | Teacher
  issueDate: Date
  certificateUrl: string
}

export interface Badge {
  id: string
  name: string
  nameAr: string
  icon: string
  description: string
}

export interface Medal {
  id: string
  name: string
  nameAr: string
  icon: string
  type: 'gold' | 'silver' | 'bronze' | 'special'
  recipients: Student[]
}

export interface Achievement {
  id: string
  title: string
  titleAr: string
  description: string
  icon: string
  recipient: Student | Teacher
  awardedAt: Date
  points: number
}

// Gamification Types
export interface GameProfile {
  student: Student
  level: number
  xp: number
  coins: number
  stars: number
  badges: Badge[]
  medals: Medal[]
  tradingCards: TradingCard[]
  rank: number
}

export interface TradingCard {
  id: string
  name: string
  image: string
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
  owner: Student
}

// File & Content Types
export interface Assignment {
  id: string
  title: string
  titleAr: string
  description: string
  classroom: Classroom
  dueDate: Date
  submissions: Submission[]
  createdBy: Teacher
}

export interface Submission {
  id: string
  assignment: Assignment
  student: Student
  files: string[]
  submittedAt: Date
  grade?: number
  feedback?: string
}

export interface Project {
  id: string
  title: string
  titleAr: string
  student: Student
  subject: Subject
  description: string
  files: string[]
  grade?: number
  rubric?: GradingRubric
  submittedAt: Date
}

export interface Research {
  id: string
  title: string
  titleAr: string
  student: Student
  content: string
  references: string[]
  submittedAt: Date
  grade?: number
}

export interface Worksheet {
  id: string
  title: string
  titleAr: string
  questions: Question[]
  subject: Subject
  difficultyLevel: 'easy' | 'medium' | 'hard'
  createdBy: Teacher
}

export interface Presentation {
  id: string
  title: string
  titleAr: string
  subject: Subject
  unit: Unit
  slides: Slide[]
  videoUrl?: string
  notes?: string
  createdBy: Teacher
}

export interface Slide {
  id: string
  title: string
  content: string
  image?: string
  notes?: string
  order: number
}

export interface Resource {
  id: string
  title: string
  type: 'video' | 'pdf' | 'image' | 'link' | 'simulation'
  url: string
  description?: string
}

// Grading & Analytics
export interface GradingRubric {
  id: string
  title: string
  criteria: RubricCriteria[]
}

export interface RubricCriteria {
  id: string
  name: string
  maxPoints: number
  levels: RubricLevel[]
}

export interface RubricLevel {
  name: string
  points: number
  description: string
}

export interface PerformanceData {
  date: Date
  percentage: number
  level: number
  xp: number
}

export interface AnalyticsReport {
  classId: string
  subject: Subject
  successRate: number
  averageGrade: number
  gradeDistribution: { grade: string; count: number }[]
  skillAnalysis: SkillMastery[]
  studentComparison: StudentGradeComparison[]
  semesterComparison?: SemesterComparison
}

export interface StudentGradeComparison {
  student: Student
  grade: number
  improvement: number
  rank: number
}

export interface SemesterComparison {
  semester1: number
  semester2: number
  improvement: number
}

export interface KPI {
  name: string
  value: number
  target: number
  percentage: number
  trend: 'up' | 'down' | 'stable'
}

// Attendance & Notifications
export interface AttendanceRecord {
  id: string
  student: Student
  date: Date
  status: 'present' | 'absent' | 'late' | 'excused'
  classroom: Classroom
}

export interface Notification {
  id: string
  recipient: User
  title: string
  titleAr: string
  message: string
  messageAr: string
  type: 'assignment' | 'test' | 'grade' | 'achievement' | 'announcement'
  read: boolean
  createdAt: Date
  link?: string
}

export interface AuditLog {
  id: string
  user: User
  action: string
  entity: string
  entityId: string
  changes: Record<string, any>
  timestamp: Date
}

// Timetable
export interface Timetable {
  id: string
  classroom: Classroom
  dayOfWeek: number
  period: number
  subject: Subject
  startTime: string
  endTime: string
  teacher: Teacher
}

// Lesson Plan
export interface LessonPlan {
  id: string
  teacher: Teacher
  lesson: Lesson
  objectives: string[]
  materials: string[]
  activities: Activity[]
  duration: number
  date: Date
}

export interface Activity {
  id: string
  title: string
  description: string
  duration: number
  resources?: Resource[]
}

export interface Workshop {
  id: string
  title: string
  description: string
  date: Date
  attendees: (Teacher | Student)[]
  materials: Resource[]
}

// Course (for AI-generated content)
export interface Course {
  id: string
  title: string
  titleAr: string
  description: string
  createdBy: Teacher
  lessons: Lesson[]
  assessments: Assessment[]
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
  timestamp: Date
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  pages: number
}
