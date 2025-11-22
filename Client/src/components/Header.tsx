import { Share2 } from 'lucide-react';

interface HeaderProps {
  onShareClick: () => void;
}

function Header({ onShareClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/95 backdrop-blur-sm border-b border-red-900/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/Roato.jpeg"
            alt="Resto Premium"
            className="h-14 w-14"
          />
        </div>

        <button
          onClick={onShareClick}
          className="flex items-center gap-2 px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-red-600/50 font-bold"
        >
          <Share2 className="w-5 h-5" />
          <span>مشاركة</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
