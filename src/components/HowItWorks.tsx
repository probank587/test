import { FileText, CheckCircle, Smartphone, Wallet } from 'lucide-react';

function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      title: 'Заполните заявку',
      description: 'Укажите желаемую сумму, срок и контактные данные. Это займет всего 2 минуты',
      time: '2 мин'
    },
    {
      icon: CheckCircle,
      title: 'Получите одобрение',
      description: 'Автоматическая система мгновенно проверит заявку и примет решение',
      time: '5 мин'
    },
    {
      icon: Smartphone,
      title: 'Подтвердите данные',
      description: 'Введите код из СМС для подтверждения личности и договора займа',
      time: '3 мин'
    },
    {
      icon: Wallet,
      title: 'Получите деньги',
      description: 'Деньги поступят на вашу карту любого банка в течение нескольких минут',
      time: '5 мин'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Как получить займ
          </h2>
          <p className="text-xl text-gray-600">
            Всего 4 простых шага до получения денег
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 mt-2">
                  <step.icon className="w-8 h-8 text-emerald-600" />
                </div>

                <p className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </p>

                <p className="text-gray-600 mb-3">
                  {step.description}
                </p>

                <span className="inline-block bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                  {step.time}
                </span>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-emerald-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 font-medium">
            Общее время оформления: <span className="text-emerald-600 font-bold">всего 15 минут</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
