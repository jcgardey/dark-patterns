import { useEffect } from "react";
import Navbar from "../../components/Petspace/Navbar";
import ProductCard from "../../components/Petspace/ProductCard";
import { Footer } from "../../components/Petspace/Footer";
import CrunchyBites from "../../assets/PetSpace/CrunchyBites.png";
import HappyPaws from "../../assets/PetSpace/HappyPaws.png";
import Tailtreats from "../../assets/PetSpace/TailTreats.png";
import FurFeast from "../../assets/PetSpace/FurFeast.png";
import portada2 from "../../assets/PetSpace/portada2.webp";
import { useTranslation } from "react-i18next";
import { updateDarkPatternState } from "../../utils/dark_patterns";

export const products = [
  {
    id: 1,
    name: "CrunchyBites",
    image: CrunchyBites,
    priceKg: 5,
    amountKg: 1,
  },
  {
    id: 2,
    name: "HappyPaws",
    image: HappyPaws,
    priceKg: 4,
    amountKg: 5,
    halfStar: true,
  },
  {
    id: 3,
    name: "TailTreats",
    image: Tailtreats,
    priceKg: 2,
    amountKg: 10,
  },
  {
    id: 4,
    name: "FurFeast",
    image: FurFeast,
    priceKg: 5,
    amountKg: 5,
  },
];

export function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    updateDarkPatternState();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Navbar />

      <section
        className="relative flex flex-col items-center justify-center text-center px-10 py-28 shadow-sm bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${portada2})` }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-40"></div>

        <div className="relative z-10 max-w-2xl space-y-5 text-white">
          <h2 className="text-4xl font-bold leading-tight drop-shadow-md">
            {t("PetSpace.Home.Title")}
          </h2>
          <p className="text-lg drop-shadow-sm">
            {t("PetSpace.Home.Subtitle")}
          </p>
        </div>
      </section>

      <section className="px-10 py-14">
        <h3 className="text-2xl font-semibold mb-8">
          {t("PetSpace.Home.FeaturedProducts")}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p) => {
            return <ProductCard key={p.id} product={p} />;
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
