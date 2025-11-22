import { Category } from '../types';

export const menuCategories: Category[] = [
  {
    id: 'starters',
    name: 'المقبلات',
    items: [
      {
        id: 1,
        name: 'حمص بالطحينة',
        description: 'حمص طازج مع طحينة سائلة وزيت زيتون',
        price: 25,
        image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'starters'
      },
      {
        id: 2,
        name: 'متبل باذنجان',
        description: 'باذنجان مشوي مع طحينة والثوم',
        price: 28,
        image: 'https://images.pexels.com/photos/6659543/pexels-photo-6659543.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'starters'
      },
      {
        id: 3,
        name: 'ورق عنب',
        description: 'ورق عنب محشي بالأرز والخضروات',
        price: 32,
        image: 'https://images.pexels.com/photos/6824490/pexels-photo-6824490.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'starters'
      },
      {
        id: 4,
        name: 'فتة حمص',
        description: 'حمص مع خبز محمص واللبن والصنوبر',
        price: 35,
        image: 'https://images.pexels.com/photos/7363677/pexels-photo-7363677.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'starters'
      }
    ]
  },
  {
    id: 'main',
    name: 'الأطباق الرئيسية',
    items: [
      {
        id: 5,
        name: 'مشاوي مشكلة',
        description: 'تشكيلة من الكباب والدجاج والكفتة المشوية',
        price: 85,
        image: 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'main'
      },
      {
        id: 6,
        name: 'فروج مشوي',
        description: 'دجاج كامل مشوي مع البهارات الخاصة',
        price: 75,
        image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'main'
      },
      {
        id: 7,
        name: 'مقلوبة',
        description: 'أرز مع الخضار واللحم أو الدجاج',
        price: 65,
        image: 'https://images.pexels.com/photos/8753680/pexels-photo-8753680.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'main'
      },
      {
        id: 8,
        name: 'منسف',
        description: 'أرز مع لحم الخروف واللبن الجميد',
        price: 95,
        image: 'https://images.pexels.com/photos/6419720/pexels-photo-6419720.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'main'
      },
      {
        id: 9,
        name: 'كبسة لحم',
        description: 'أرز بخاري مع لحم الخروف والتوابل',
        price: 80,
        image: 'https://images.pexels.com/photos/16743487/pexels-photo-16743487.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'main'
      },
      {
        id: 10,
        name: 'شاورما دجاج',
        description: 'شاورما دجاج مع الثوم والمخللات',
        price: 45,
        image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'main'
      }
    ]
  },
  {
    id: 'salads',
    name: 'السلطات',
    items: [
      {
        id: 11,
        name: 'فتوش',
        description: 'سلطة خضار مع خبز محمص والسماق',
        price: 25,
        image: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'salads'
      },
      {
        id: 12,
        name: 'تبولة',
        description: 'بقدونس وبندورة مفرومة مع البرغل',
        price: 22,
        image: 'https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'salads'
      },
      {
        id: 13,
        name: 'سلطة يونانية',
        description: 'خضار طازجة مع جبنة فيتا والزيتون',
        price: 30,
        image: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'salads'
      }
    ]
  },
  {
    id: 'desserts',
    name: 'الحلويات',
    items: [
      {
        id: 14,
        name: 'كنافة نابلسية',
        description: 'كنافة بالجبنة والقطر',
        price: 35,
        image: 'https://images.pexels.com/photos/8753972/pexels-photo-8753972.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'desserts'
      },
      {
        id: 15,
        name: 'بقلاوة',
        description: 'حلوى شرقية بالفستق والقطر',
        price: 30,
        image: 'https://images.pexels.com/photos/17834914/pexels-photo-17834914.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'desserts'
      },
      {
        id: 16,
        name: 'مهلبية',
        description: 'حلوى باللبن والنشا والمكسرات',
        price: 25,
        image: 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'desserts'
      },
      {
        id: 17,
        name: 'أم علي',
        description: 'حلوى بالعجين والحليب والمكسرات',
        price: 32,
        image: 'https://images.pexels.com/photos/14107071/pexels-photo-14107071.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'desserts'
      }
    ]
  },
  {
    id: 'beverages',
    name: 'المشروبات',
    items: [
      {
        id: 18,
        name: 'عصير برتقال طازج',
        description: 'عصير برتقال طبيعي 100%',
        price: 18,
        image: 'https://images.pexels.com/photos/1435740/pexels-photo-1435740.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'beverages'
      },
      {
        id: 19,
        name: 'ليموناضة بالنعناع',
        description: 'عصير ليمون منعش مع نعناع طازج',
        price: 15,
        image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'beverages'
      },
      {
        id: 20,
        name: 'شاي بالنعناع',
        description: 'شاي أخضر مع نعناع طازج',
        price: 12,
        image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'beverages'
      },
      {
        id: 21,
        name: 'قهوة عربية',
        description: 'قهوة عربية أصيلة بالهيل',
        price: 15,
        image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'beverages'
      }
    ]
  }
];
