import { useState } from 'react';
import { ArrowRight, Lock } from 'lucide-react';

function ApplicationForm() {
  const [formData, setFormData] = useState({
    amount: '30000',
    term: '30',
    name: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const calculatePayment = () => {
    const amount = parseInt(formData.amount);
    const term = parseInt(formData.term);
    const dailyRate = 0.01;
    const totalInterest = amount * dailyRate * term;
    return Math.round(amount + totalInterest);
  };

  return (
    <section id="application-form" className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Оформить займ онлайн
            </h2>
            <p className="text-gray-600">
              Заполните простую форму и получите деньги на карту
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Сумма займа: <span className="text-2xl font-bold text-emerald-600">{formData.amount} ₽</span>
              </label>
              <input
                type="range"
                min="5000"
                max="100000"
                step="1000"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>5 000 ₽</span>
                <span>100 000 ₽</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Срок займа: <span className="text-2xl font-bold text-emerald-600">{formData.term} дней</span>
              </label>
              <input
                type="range"
                min="7"
                max="365"
                step="1"
                value={formData.term}
                onChange={(e) => setFormData({ ...formData, term: e.target.value })}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>7 дней</span>
                <span>365 дней</span>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">К возврату:</span>
                <span className="text-3xl font-bold text-emerald-600">
                  {calculatePayment().toLocaleString()} ₽
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                  placeholder="Иван Иванов"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Номер телефона
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-4 rounded-lg hover:bg-emerald-700 transition font-semibold text-lg flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Получить деньги</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <Lock className="w-4 h-4" />
              <span>Ваши данные защищены и не передаются третьим лицам</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ApplicationForm;
