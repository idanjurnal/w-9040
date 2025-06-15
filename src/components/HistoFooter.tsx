import { Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
const HistoFooter = () => {
  return <footer className="bg-stone-900 text-cream-100 pt-16 pb-8 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. ADDITIONAL, TERMS & CONDITIONS */}
        <div className="mb-14 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h4 className="text-2xl font-serif italic mb-4 text-cream-100 tracking-wide">Additional</h4>
            <ul className="space-y-2 text-stone-300 font-light text-sm pl-2">
              <li>
                <span className="italic">Penambahan dokumentasi acara Siraman/Pengajian </span>
                <span className="text-amber-400">Rp.2.000.000 / hari</span> Sudah termasuk Foto &amp; video (<span className="italic">hanya untuk order paket lengkap prewed/wedding</span>)
              </li>
              <li>
                Penambahan 1 Fotografer <span className="text-amber-400">Rp.1.000.000</span> / orang
              </li>
              <li>
                Penambahan 1 Album Magazine <span className="text-amber-400">Rp.750.000</span> / album
              </li>
              <li>
                Penambahan 1 Cetak Pembesaran 16R <span className="text-amber-400">Rp.250.000</span> / foto
              </li>
              <li>
                Penambahan 1 Cetak Pembesaran 20R <span className="text-amber-400">Rp.300.000</span> / foto
              </li>
              <li>
                Penambahan Drone <span className="text-amber-400">Rp.1.000.000</span>
              </li>
              <li>
                Penambahan Wedding Invitation <span className="text-amber-400">Rp.250.000</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-serif italic mb-4 text-cream-100 tracking-wide">Term and Condition</h4>
            <ul className="space-y-2 text-stone-300 font-light text-sm pl-2">
              <li>Booking Fee Min 25% Dari Harga Paket</li>
              <li>Pelunasan 30 Hari Sebelum Hari H atau Selambat-lambatnya 1 Hari Sebelum Hari H</li>
              <li>Booking Fee dan Pembayaran lainnya yang sudah masuk tidak dapat di kembalikan apabila ada pembatalan dengan alasan apapun</li>
              <li>Overtime pada saat Photo/Video Session Dikenakan Charge Sebesar Rp.500.000/Jam</li>
              <li>Finishing Untuk Output Photo Di 7 - 14 Hari, Dan untuk Finishing Video Di 14 - 30 Hari, terhitung setelah Hari H</li>
              <li>Finishing untuk Album Photo wedding Di 30 Hari, terhitung setelah hari H</li>
              <li>Hasil Produksi album wedding, pembesaran wedding dan prewedding bisa diambil di office HISTO PROJECT dan untuk luar kota akan dikirim melalui agen paket (biaya dibebankan kepada pihak client)</li>
              <li>Untuk Photo/Video Session di luar Kota Bandung Dikenakan Charge tergantung jauh dekatnya dari Kota Bandung</li>
              <li>Biaya belum termasuk Charge tempat outdoor/indoor</li>
            </ul>
          </div>
        </div>

        {/* 2. LET'S CONNECT */}
        <div className="mb-14">
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            
            
            
          </div>
        </div>

        {/* 3. FOOTER / COPYRIGHT */}
        <div className="pt-5 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-400 text-xs mb-2 md:mb-0 font-light">
            © {new Date().getFullYear()} Histo Project. All rights reserved.
          </p>
          <p className="text-stone-400 text-xs font-light tracking-wider">
            Preserving memories, one story at a time.
          </p>
        </div>
      </div>
    </footer>;
};
export default HistoFooter;