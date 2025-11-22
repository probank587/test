import { Zap, Shield, Clock, FileCheck, CreditCard, ThumbsUp } from 'lucide-react';

function Benefits() {
  const benefits = [
    {
      icon: Zap,
      title: 'Мгновенное решение',
      description: 'Автоматическое одобрение заявки в течение 5 минут без звонков и проверок'
    },
    {
      icon: Shield,
      title: 'Безопасность данных',
      description: 'Защита информации по стандартам банков. SSL-шифрование всех данных'
    },
    {
      icon: Clock,
      title: 'Круглосуточно',
      description: 'Оформляйте займ в любое время: днем, ночью, в выходные и праздники'
    },
    {
      icon: FileCheck,
      title: 'Минимум документов',
      description: 'Только паспорт и телефон. Никаких справок о доходах и поручителей'
    },
    {
      icon: CreditCard,
      title: 'На любую карту',
      description: 'Переводим на карты всех российских банков за несколько минут'
    },
    {
      icon: ThumbsUp,
      title: 'Без отказов',
      description: 'Одобряем даже с плохой кредитной историей и просрочками'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600">
            Более 500 000 довольных клиентов по всей России
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-7 h-7 text-emerald-600" />
              </div>
              <p className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
