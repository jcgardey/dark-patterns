import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const goToProducts = () => {
    navigate("/petspace", { state: { scroll: true } });
    window.scrollTo({
      top: 400,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (location.state?.scroll) {
      window.scrollTo({ top: 400, behavior: "smooth" });
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location]);

  return (
    <nav className="flex items-center justify-between bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div
        onClick={() => navigate("/petspace")}
        className="flex items-center gap-2 cursor-pointer"
      >
        <i className="fa-solid fa-paw text-blue-600 text-xl"></i>
        <h1 className="text-xl font-bold text-gray-800">PetSpace</h1>
      </div>
      <ul className="hidden sm:flex gap-6 text-gray-700 font-medium">
        <li
          onClick={goToProducts}
          href="#"
          className="hover:text-blue-600 transition-colors cursor-pointer"
        >
          {t("PetSpace.NavBar.Products")}
        </li>
        <li
          href="#"
          className="hover:text-blue-600 transition-colors cursor-pointer"
        >
          {t("PetSpace.NavBar.Offers")}
        </li>
        <li
          href="#"
          className="hover:text-blue-600 transition-colors cursor-pointer"
        >
          {t("PetSpace.NavBar.Contact")}
        </li>
      </ul>
      <div className="flex gap-4 items-center">
        <i className="fa fa-shopping-cart text-gray-600 cursor-pointer"></i>
        <span className="inline sm:hidden">
          <i className="fa-solid fa-bars"></i>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
