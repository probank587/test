import { Clock, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onGetLoanClick: () => void;
}

function Hero({ onGetLoanClick }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-emerald-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Займ онлайн <span className="text-emerald-600">за 15 минут</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Онлайн-займы до 100 000 ₽ без справок и поручителей. Быстрое решение, простое оформление.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <span className="text-gray-700">Одобрение в 92% случаев</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <span className="text-gray-700">Без проверки кредитной истории</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <span className="text-gray-700">Первый займ под 0% для новых клиентов</span>
              </div>
            </div>

            <button
              onClick={onGetLoanClick}
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition font-semibold text-lg shadow-lg"
            >
              Получить деньги сейчас
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Clock className="w-10 h-10 text-emerald-600" />
              <div>
                <p className="text-sm text-gray-500">Среднее время выдачи</p>
                <p className="text-3xl font-bold text-gray-900">15 минут</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-4 border-emerald-600 pl-4">
                <p className="text-3xl font-bold text-gray-900">до 100 000 ₽</p>
                <p className="text-sm text-gray-500 mt-1">Сумма займа</p>
              </div>
              <div className="border-l-4 border-emerald-600 pl-4">
                <p className="text-3xl font-bold text-gray-900">до 12 мес.</p>
                <p className="text-sm text-gray-500 mt-1">Срок займа</p>
              </div>
              <div className="border-l-4 border-emerald-600 pl-4">
                <p className="text-3xl font-bold text-gray-900">от 0%</p>
                <p className="text-sm text-gray-500 mt-1">Ставка в день</p>
              </div>
              <div className="border-l-4 border-emerald-600 pl-4">
                <p className="text-3xl font-bold text-gray-900">18 лет</p>
                <p className="text-sm text-gray-500 mt-1">Возраст от</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
