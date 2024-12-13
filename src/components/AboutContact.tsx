import img from "../img/semra.png";
import { Contact } from "@/components/Contact";

const AboutContact = () => {
  return (
    <section className="py-16 w-3/5 mx-auto">
      <div className="bg-white rounded-xl  p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="w-44 h-44 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg">
          <img
            src={img}
            alt="Hakkımda Görsel"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="text-center md:text-left flex-1 w-full">
          <h2 className="text-3xl font-bold text-primary mb-4">Hakkımda</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            Merhaba, ben Semra! 20 yılı aşkın bir süredir yemek tarifleriyle
            sofralara lezzet katıyorum. Geleneksel tatları modern yorumlarla
            birleştirerek mutfağınıza yeni deneyimler sunuyorum. Yemek yapma
            sanatını daha eğlenceli ve pratik hale getirmek için buradayım.
          </p>
        </div>
      </div>
      <Contact />
    </section>
  );
};

export default AboutContact; 