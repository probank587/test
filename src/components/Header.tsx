import { Shield } from 'lucide-react';

interface HeaderProps {
  onGetLoanClick: () => void;
}

function Header({ onGetLoanClick }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-emerald-600" />
            <span className="text-2xl font-bold text-gray-900">БыстроЗайм</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#benefits" className="text-gray-700 hover:text-emerald-600 transition">Преимущества</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 transition">Как получить</a>
            <a href="#conditions" className="text-gray-700 hover:text-emerald-600 transition">Условия</a>
            <a href="#faq" className="text-gray-700 hover:text-emerald-600 transition">Вопросы</a>
          </nav>
          <button
            onClick={onGetLoanClick}
            className="bg-emerald-600 text-white px-6 py-2.5 rounded-lg hover:bg-emerald-700 transition font-medium"
          >
            Получить займ
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
