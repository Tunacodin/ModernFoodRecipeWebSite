import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-white text-black">
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-4xl text-foreground md:text-5xl text-center mb-12 tracking-wide">
          İletişime Geçin
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Telefon */}
          <Card className="bg-white/10 backdrop-blur-lg shadow-lg rounded-xl">
            <CardContent className="flex items-center gap-6 p-8">
              <Phone className="h-8 w-8 text-black-300" />
              <div>
                <h3 className="text-lg font-semibold">Telefon</h3>
                <p className="text-sm text-black-100">+90 555 123 4567</p>
              </div>
            </CardContent>
          </Card>

          {/* E-posta */}
          <Card className="bg-white/10 backdrop-blur-lg shadow-lg rounded-xl">
            <CardContent className="flex items-center gap-6 p-8">
              <Mail className="h-8 w-8 text-black-300" />
              <div>
                <h3 className="text-lg font-semibold">E-posta</h3>
                <p className="text-sm text-black-100">info@semranintarifleri.com</p>
              </div>
            </CardContent>
          </Card>

          {/* Adres */}
          <Card className="bg-white/10 backdrop-blur-lg shadow-lg rounded-xl">
            <CardContent className="flex items-center gap-6 p-8">
              <MapPin className="h-8 w-8 text-black-300" />
              <div>
                <h3 className="text-lg font-semibold">Adres</h3>
                <p className="text-sm text-black-100">Zonguldak, Türkiye</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
