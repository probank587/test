import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Как быстро я получу деньги?',
      answer: 'После одобрения заявки деньги поступают на вашу карту в течение 5-15 минут. В редких случаях перевод может занять до 1 часа в зависимости от вашего банка.'
    },
    {
      question: 'Какие документы нужны для получения займа?',
      answer: 'Вам понадобится только паспорт гражданина РФ и номер мобильного телефона. Никаких справок о доходах, копий трудовой книжки или других документов не требуется.'
    },
    {
      question: 'Одобрят ли мне займ с плохой кредитной историей?',
      answer: 'Да, мы одобряем займы даже клиентам с плохой кредитной историей. Наша система анализирует множество факторов, и отрицательная КИ не является причиной для отказа.'
    },
    {
      question: 'Можно ли погасить займ досрочно?',
      answer: 'Да, вы можете погасить займ досрочно в любой момент без штрафов и дополнительных комиссий. Проценты будут начислены только за фактический период использования займа.'
    },
    {
      question: 'Безопасно ли передавать свои данные?',
      answer: 'Абсолютно безопасно. Мы используем современные технологии шифрования данных (SSL 256-бит), применяемые крупнейшими банками. Ваша информация защищена и не передается третьим лицам.'
    },
    {
      question: 'Какова максимальная сумма займа?',
      answer: 'Для новых клиентов максимальная сумма составляет 30 000 рублей. Для постоянных клиентов с хорошей историей погашений лимит увеличивается до 100 000 рублей.'
    },
    {
      question: 'Что будет, если я не смогу вовремя вернуть займ?',
      answer: 'Свяжитесь с нами до даты погашения - мы предложим варианты реструктуризации или продления займа. Мы всегда идем навстречу клиентам и находим оптимальное решение.'
    },
    {
      question: 'Есть ли скрытые комиссии?',
      answer: 'Нет, у нас полностью прозрачные условия. Вы платите только проценты за пользование займом. Никаких скрытых комиссий, платежей за обслуживание или других дополнительных сборов нет.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Частые вопросы
          </h2>
          <p className="text-xl text-gray-600">
            Ответы на популярные вопросы о наших займах
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-emerald-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-emerald-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Не нашли ответ на свой вопрос?
          </h3>
          <p className="text-gray-600 mb-4">
            Свяжитесь с нами любым удобным способом, и мы с радостью поможем
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:88005553535" className="text-emerald-600 font-semibold hover:underline">
              8 (800) 555-35-35
            </a>
            <span className="text-gray-400">•</span>
            <a href="mailto:support@bistrozaim.ru" className="text-emerald-600 font-semibold hover:underline">
              support@bistrozaim.ru
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
