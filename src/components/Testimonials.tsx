import { Star, Quote } from 'lucide-react';

function Testimonials() {
  const testimonials = [
    {
      name: 'Мария С.',
      city: 'Москва',
      rating: 5,
      text: 'Срочно понадобились деньги на лечение. Заявку одобрили за 10 минут, деньги пришли моментально. Очень благодарна за оперативность!',
      date: '2 дня назад'
    },
    {
      name: 'Дмитрий К.',
      city: 'Санкт-Петербург',
      rating: 5,
      text: 'Уже третий раз беру займ здесь. Все быстро, понятно, без лишних вопросов. Процент адекватный, условия прозрачные.',
      date: '5 дней назад'
    },
    {
      name: 'Елена В.',
      city: 'Казань',
      rating: 5,
      text: 'Первый займ был под 0%, что приятно удивило. Никаких скрытых комиссий не обнаружила. Погасила досрочно без проблем.',
      date: '1 неделю назад'
    },
    {
      name: 'Алексей М.',
      city: 'Новосибирск',
      rating: 5,
      text: 'Оформлял займ ночью, думал придется ждать до утра. Но нет - деньги пришли через 15 минут! Сервис работает круглосуточно.',
      date: '2 недели назад'
    },
    {
      name: 'Ольга П.',
      city: 'Екатеринбург',
      rating: 5,
      text: 'Плохая кредитная история, но здесь одобрили без проблем. Очень помогли в сложной ситуации. Рекомендую!',
      date: '3 недели назад'
    },
    {
      name: 'Сергей Л.',
      city: 'Ростов-на-Дону',
      rating: 5,
      text: 'Простая анкета, минимум документов. Не нужно было бегать за справками. Все онлайн, очень удобно.',
      date: '1 месяц назад'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-xl text-gray-600">
            Более 50 000 положительных отзывов от довольных клиентов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-emerald-100" />

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.city}</p>
                </div>
                <p className="text-xs text-gray-400">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 bg-white rounded-xl px-8 py-6 shadow-md">
            <div className="text-center">
              <p className="text-4xl font-bold text-emerald-600">4.9</p>
              <div className="flex items-center space-x-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-gray-900">500 000+</p>
              <p className="text-gray-600">довольных клиентов</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
