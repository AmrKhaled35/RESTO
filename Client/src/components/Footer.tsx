import { MapPin, Phone, Clock, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="relative bg-zinc-950 border-t border-red-900/20 mt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="/Roato.jpeg"
              alt="Resto Premium"
              className="h-16 w-auto mb-6"
            />
            <p className="text-gray-400 leading-relaxed">
              نقدم لكم أفضل تجربة طعام في أجواء فاخرة مع أطباق شهية محضرة بعناية فائقة
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-red-600" />
              ساعات العمل
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-between">
                <span>السبت - الخميس:</span>
                <span className="text-white font-semibold">10:00 - 00:00</span>
              </li>
              <li className="flex justify-between">
                <span>الجمعة:</span>
                <span className="text-white font-semibold">12:00 - 01:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-red-600" />
              العنوان
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              شارع الملك فيصل<br />
              رام الله، فلسطين
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Phone className="w-5 h-5 text-red-600" />
              تواصل معنا
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-red-600" />
                <span className="text-white font-semibold">02-1234567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-red-600" />
                <span className="text-white font-semibold">info@restopremium.ps</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8">
          <div className="text-center text-gray-400">
            <p className="mb-2">
              © 2025 <span className="text-red-600 font-bold">RESTO PREMIUM</span> - جميع الحقوق محفوظة
            </p>
            <p className="text-sm">
               أفضل تجربة طعام
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
