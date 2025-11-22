import { Category } from '../types';
import MenuCard from './MenuCard';

interface MenuSectionProps {
  category: Category;
}

function MenuSection({ category }: MenuSectionProps) {
  return (
    <div className="mb-24 scroll-mt-24" id={category.id}>
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-white mb-4 inline-block relative">
          {category.name}
          <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default MenuSection;
