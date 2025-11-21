import { Percent, Calendar, CreditCard, Users } from 'lucide-react';

interface LoanConditionsProps {
  onGetLoanClick: () => void;
}

function LoanConditions({ onGetLoanClick }: LoanConditionsProps) {
  const conditions = [
    {
      icon: CreditCard,
      title: 'Сумма займа',
      items: [
        'От 5 000 до 100 000 рублей',
        'Первый займ до 30 000 ₽',
        'Постоянным клиентам до 100 000 ₽'
      ]
    },
    {
      icon: Calendar,
      title: 'Срок займа',
      items: [
        'От 7 до 365 дней',
        'Возможность продления',
        'Досрочное погашение без штрафов'
      ]
    },
    {
      icon: Percent,
      title: 'Процентная ставка',
      items: [
        'Первый займ 0% для новых клиентов',
        'От 1% в день для повторных займов',
        'Специальные условия для постоянных клиентов'
      ]
    },
    {
      icon: Users,
      title: 'Требования',
      items: [
        'Возраст от 18 до 75 лет',
        'Гражданство РФ',
        'Только паспорт и телефон'
      ]
    }
  ];

  return (
    <section id="conditions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Условия займа
          </h2>
          <p className="text-xl text-gray-600">
            Прозрачные условия без скрытых комиссий и платежей
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {conditions.map((condition, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6">
              <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <condition.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {condition.title}
              </h3>
              <ul className="space-y-2">
                {condition.items.map((item, idx) => (
                  <li key={idx} className="text-gray-600 flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">
              Специальное предложение для новых клиентов
            </h3>
            <p className="text-xl mb-8 text-emerald-50">
              Первый займ до 30 000 рублей под 0% на срок до 30 дней
            </p>
            <button
              onClick={onGetLoanClick}
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold text-lg shadow-lg"
            >
              Воспользоваться предложением
            </button>
            <p className="mt-6 text-sm text-emerald-100">
              * Предложение действует для новых клиентов при первом обращении
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoanConditions;
