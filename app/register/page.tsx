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
    if (!/^\d{3,}-[A-Z]{3}$/.test(formData.employeeId)) newErrors.employeeId = 'Invalid employee ID format (e.g. 123-ABC)';
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
      alert('Registration successful!');
    } catch (error) {
      alert('Registration failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-500 via-yellow-500 to-red-500">
      <div className="relative w-full max-w-md p-8 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white/20 rounded-full blur-3xl" />
        <h1 className="text-3xl font-extrabold text-white text-center mb-8 drop-shadow-lg">
          HR Registration
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Company Name
            </label>
            <input
              className={`w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/70 outline-none border ${
                errors.companyName ? 'border-red-400' : 'border-white/30'
              } focus:ring-2 focus:ring-pink-400`}
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              placeholder="Acme Corp"
            />
            {errors.companyName && (
              <p className="text-red-300 text-sm mt-1">{errors.companyName}</p>
            )}
          </div>

          {/* Employee ID & Department */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Employee ID
              </label>
              <input
                className={`w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/70 outline-none border ${
                  errors.employeeId ? 'border-red-400' : 'border-white/30'
                } focus:ring-2 focus:ring-pink-400`}
                value={formData.employeeId}
                onChange={(e) => setFormData({ ...formData, employeeId: e.target.value })}
                placeholder="123-ABC"
              />
              {errors.employeeId && (
                <p className="text-red-300 text-sm mt-1">{errors.employeeId}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Department
              </label>
              <input
                className={`w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/70 outline-none border ${
                  errors.department ? 'border-red-400' : 'border-white/30'
                } focus:ring-2 focus:ring-pink-400`}
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                placeholder="Engineering"
              />
              {errors.department && (
                <p className="text-red-300 text-sm mt-1">{errors.department}</p>
              )}
            </div>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Full Name
            </label>
            <input
              className={`w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/70 outline-none border ${
                errors.fullName ? 'border-red-400' : 'border-white/30'
              } focus:ring-2 focus:ring-pink-400`}
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="John Doe"
            />
            {errors.fullName && (
              <p className="text-red-300 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Email
            </label>
            <input
              type="email"
              className={`w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/70 outline-none border ${
                errors.email ? 'border-red-400' : 'border-white/30'
              } focus:ring-2 focus:ring-pink-400`}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="text-red-300 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Password
            </label>
            <input
              type="password"
              className={`w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/70 outline-none border ${
                errors.password ? 'border-red-400' : 'border-white/30'
              } focus:ring-2 focus:ring-pink-400`}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-red-300 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-xl font-semibold shadow-lg hover:opacity-90 transition disabled:opacity-50"
          >
            {isSubmitting ? 'Registering...' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  );
}
