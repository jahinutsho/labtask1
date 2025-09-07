'use client';
import { useState } from 'react';
import axios from 'axios';

interface HRFormValues {
  fullName: string;
  email: string;
  password: string;
  companyName: string;
  employeeId: string;
  department: string;
}

export default function Register() {
  const [formData, setFormData] = useState<HRFormValues>({
    fullName: '',
    email: '',
    password: '',
    companyName: '',
    employeeId: '',
    department: ''
  });
  const [errors, setErrors] = useState<Partial<HRFormValues>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Partial<HRFormValues> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!/^\d{3,}-[A-Z]{3}$/.test(formData.employeeId)) newErrors.employeeId = 'Invalid employee ID format';
    if (!formData.department.trim()) newErrors.department = 'Department is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await axios.post('/api/register/hr', formData);
      // alert('Registration successful!');
    } catch (error) {
      alert('Registration failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          HR Registration
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Name
            </label>
            <input
              className={`w-full px-3 py-2 border rounded-lg text-black ${errors.companyName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={formData.companyName}
              onChange={(e) => setFormData({...formData, companyName: e.target.value})}
              placeholder="Acme Corp"
            />
            {errors.companyName && (
              <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Employee ID
              </label>
              <input
                className={`w-full px-3 py-2 border rounded-lg text-black ${errors.employeeId ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                value={formData.employeeId}
                onChange={(e) => setFormData({...formData, employeeId: e.target.value})}
                placeholder="123-ABC"
              />
              {errors.employeeId && (
                <p className="text-red-500 text-sm mt-1">{errors.employeeId}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Department
              </label>
              <input
                className={`w-full px-3 py-2 border rounded-lg text-black ${errors.department ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                value={formData.department}
                onChange={(e) => setFormData({...formData, department: e.target.value})}
                placeholder="Engineering"
              />
              {errors.department && (
                <p className="text-red-500 text-sm mt-1">{errors.department}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              className={`w-full px-3 py-2 border rounded-lg ${errors.fullName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              placeholder="John Doe"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className={`w-full px-3 py-2 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className={`w-full px-3 py-2 border rounded-lg ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-300"
          >
            {isSubmitting ? 'Registering...' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  );
}