import { ChefHat, UtensilsCrossed } from 'lucide-react';

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/90 via-zinc-900/80 to-zinc-900"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8 flex justify-center gap-4">
          <ChefHat className="w-16 h-16 text-red-600 animate-pulse" />
          <UtensilsCrossed className="w-16 h-16 text-red-600 animate-pulse" />
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white">
          <span className="text-red-600">RESTO</span> PREMIUM
        </h1>

        <div className="h-1 w-32 bg-red-600 mx-auto mb-8"></div>

        <p className="text-2xl md:text-3xl text-gray-200 mb-4 font-light">
          تجربة طعام لا تُنسى
        </p>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          نقدم لكم أشهى الأطباق الشرقية والعربية الأصيلة بلمسة عصرية فاخرة
        </p>

        <div className="mt-12 flex justify-center gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">15+</div>
            <div className="text-gray-300">عام من الخبرة</div>
          </div>
          <div className="w-px bg-red-600/30"></div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">50+</div>
            <div className="text-gray-300">طبق مميز</div>
          </div>
          <div className="w-px bg-red-600/30"></div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
            <div className="text-gray-300">جودة مضمونة</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent"></div>
    </section>
  );
}

export default Hero;
