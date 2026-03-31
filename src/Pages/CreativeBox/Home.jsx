import React, { useEffect } from "react";
import NavBar from "../../components/CreativeBox/NavBar";
import imagenFondo from "../../assets/CreativeBox/FondoPaisaje.jpg";
import Buscador from "../../components/CreativeBox/Buscador";
import ProductoBox from "../../components/CreativeBox/ProductoBox";
import fondo1 from "../../assets/CreativeBox/fondo1.jpeg";
import logo1 from "../../assets/CreativeBox/logo1.jpeg";
import fondo2 from "../../assets/CreativeBox/fondo2.jpeg";
import logo2 from "../../assets/CreativeBox/logo2.jpeg";
import fondo3 from "../../assets/CreativeBox/fondo3.jpg";
import logo3 from "../../assets/CreativeBox/logo3.jpeg";
import fondo4 from "../../assets/CreativeBox/fondo4.jpeg";
import { Footer } from "../../components/CreativeBox/Footer";
import { useTranslation } from "react-i18next";
import { updateDarkPatternState } from "../../utils/dark_patterns";


export function Home() {
  const { t } = useTranslation();

    useEffect(() => {
      updateDarkPatternState();
    }, []);

  return (
    <div className="flex flex-col justify-between items-center gap-5 w-full bg-gray-100 h-screen overflow-y-auto">
      <NavBar />

      <div
        className="flex flex-col items-center gap-5 w-4/5 bg-cover bg-center p-8 pb-14 rounded-lg "
        style={{ backgroundImage: `url(${imagenFondo})` }}
      >
        <h1 className="text-2xl font-semibold">{t("CreativeBox.Home.CreateSomethingNew")}</h1>
        <Buscador />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center w-4/5 gap-2">
        <ProductoBox imagen={fondo1} logo={logo1} nombre={"QuickCreatives"} descripcion={t("CreativeBox.Home.Product1Description")} />
        <ProductoBox imagen={fondo2} logo={logo2} nombre={"Creative Fonts"} descripcion={t("CreativeBox.Home.Product2Description")} />
        <ProductoBox imagen={fondo3} logo={logo3} nombre={"Creative Blazewing"} descripcion={t("CreativeBox.Home.Product3Description")} />
        <ProductoBox imagen={fondo4} logo={logo1} nombre={"QuickCreatives"} descripcion={t("CreativeBox.Home.Product4Description")} />
      </div>

      <Footer />
    </div>
  );
}
