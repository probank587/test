import { Shield, Phone, Mail, Clock } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-8 h-8 text-emerald-400" />
              <span className="text-2xl font-bold">БыстроЗайм</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Онлайн-сервис микрозаймов. Быстро, надежно, безопасно. Работаем с 2018 года.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">О компании</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">О нас</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Как получить займ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Условия займа</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Вакансии</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Клиентам</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Личный кабинет</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Способы погашения</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Частые вопросы</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Отзывы</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4 text-emerald-400" />
                <a href="tel:88005553535" className="hover:text-emerald-400 transition">
                  8 (800) 555-35-35
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4 text-emerald-400" />
                <a href="mailto:support@bistrozaim.ru" className="hover:text-emerald-400 transition">
                  support@bistrozaim.ru
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Круглосуточно, без выходных</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-400">
            <p>© 2024 БыстроЗайм. Все права защищены.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-emerald-400 transition">Пользовательское соглашение</a>
              <a href="#" className="hover:text-emerald-400 transition">Политика конфиденциальности</a>
            </div>
          </div>

          <div className="mt-6 text-xs text-gray-500 leading-relaxed">
            <p className="mb-2">
              ООО МКК "БыстроЗайм". Регистрационный номер записи в государственном реестре микрофинансовых организаций: 2103045006123.
            </p>
            <p>
              Предоставление займов осуществляется с соблюдением требований Федерального закона от 02.07.2010 № 151-ФЗ «О микрофинансовой деятельности и микрофинансовых организациях».
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
