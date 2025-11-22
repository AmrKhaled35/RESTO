import { X } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ShareModal({ isOpen, onClose }: ShareModalProps) {
  if (!isOpen) return null;
  const currentUrl = window.location.href;
  const downloadQR = () => {
    const svg = document.querySelector('#qr-code-svg') as SVGElement;
    const svgData = new XMLSerializer().serializeToString(svg);

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const pngFile = canvas.toDataURL('image/png');

      const downloadLink = document.createElement('a');
      downloadLink.download = 'menu-qr.png';
      downloadLink.href = pngFile;
      downloadLink.click();
    };

    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-zinc-900 rounded-2xl border-2 border-red-600/30 shadow-2xl max-w-md w-full overflow-hidden animate-slideUp">
        <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-4 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-white">مشاركة القائمة</h3>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-8 text-center">
          <p className="text-gray-300 mb-6 text-lg">
            امسح الرمز للوصول إلى قائمة الطعام
          </p>

          <div className="bg-white p-6 rounded-xl inline-block shadow-2xl">
            <QRCodeSVG
              id="qr-code-svg"
              value={currentUrl}
              size={220}
              level="H"
              includeMargin={true}
              fgColor="#DC2626"
              bgColor="#FFFFFF"
            />

          </div>

          <div className="mt-6 p-4 bg-zinc-800 rounded-lg border border-zinc-700">
            <p className="text-sm text-gray-400 mb-2">الرابط المباشر</p>
            <p className="text-white font-mono text-xs break-all select-all">
              {currentUrl}
            </p>
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(currentUrl);
              alert('تم نسخ الرابط بنجاح!');
            }}
            className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-red-600/50"
          >
            نسخ الرابط
          </button>
          <button
            onClick={downloadQR}
            className="mt-3 w-full bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            تنزيل QR
          </button>

        </div>
      </div>
    </div>
  );
}

export default ShareModal;
