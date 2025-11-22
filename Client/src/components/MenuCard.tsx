import { MenuItem } from '../types';

interface MenuCardProps {
  item: MenuItem;
}

function MenuCard({ item }: MenuCardProps) {
  return (
    <div className="group relative bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-red-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-600/20 hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

        <div className="absolute top-4 right-4">
          <div className="bg-red-600 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
            {item.price} ₪
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-600 transition-colors duration-300">
          {item.name}
        </h3>

        <p className="text-gray-400 leading-relaxed text-base">
          {item.description}
        </p>

        <div className="mt-4 h-1 w-16 bg-red-600 rounded-full group-hover:w-full transition-all duration-500"></div>
      </div>
    </div>
  );
}

export default MenuCard;
