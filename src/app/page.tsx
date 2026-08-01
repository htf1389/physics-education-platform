'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/hooks';

export default function Home() {
  const { user, loading } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚛️</div>
          <h1 className="text-5xl font-bold text-primary-600 dark:text-primary-400 mb-4">
            المنصة التعليمية الفيزيائية
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Physics Education Platform
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            منصة تعليمية فيزيائية احترافية مبنية كـ Progressive Web App
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="card">
            <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">
              🎓 للطلاب
            </h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li>✓ مشاهدة المقرر كاملاً</li>
              <li>✓ حل الواجبات والاختبارات</li>
              <li>✓ متابعة الدرجات والحضور</li>
              <li>✓ التفاعل مع مختبر الفيزياء</li>
              <li>✓ السؤال عن الذكاء الاصطناعي</li>
            </ul>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold text-secondary-600 dark:text-secondary-400 mb-4">
              👨‍🏫 للمعلمين
            </h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li>✓ إضافة الدروس والمحتوى</li>
              <li>✓ إدارة الواجبات والاختبارات</li>
              <li>✓ رصد الدرجات</li>
              <li>✓ متابعة الحضور</li>
              <li>✓ تقارير متقدمة</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="btn-primary text-lg px-8 py-3">
            ابدأ الآن
          </button>
        </div>
      </div>
    </main>
  );
}
