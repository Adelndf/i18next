import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import { useEffect } from "react";

const languages = [
  {
    code: "en",
    name: "English",
    dir: "ltr",
  },
  {
    code: "ar",
    name: "عربي",
    dir: "rtl",
  },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const currentLanguageCookie = cookies.get("i18next") || "en";
  const currentLanguage = languages.find(
    (l) => l.code === currentLanguageCookie
  );

  useEffect(() => {
    document.body.dir = currentLanguage.dir;
  }, [currentLanguage.dir]);

  return (
    <div className="navbar">
      <div className="navbar__logo">
        Adel<span>Dev</span>
      </div>
      <div className="navbar__lists">
        <div className="navbar__list">
          <p>{t("nav_home")}</p>
        </div>
        <div className="navbar__list">
          <p>{t("nav_about")}</p>
        </div>

        {currentLanguageCookie === "en" && (
          <div
            onClick={() => i18n.changeLanguage("ar")}
            className="navbar__list"
          >
            <p>عربي</p>
          </div>
        )}
        {currentLanguageCookie === "ar" && (
          <div
            onClick={() => i18n.changeLanguage("en")}
            className="navbar__list"
          >
            <p>English</p>
          </div>
        )}
      </div>
      <div className="navbar__btn">{t("nav_download_CV")}</div>
    </div>
  );
};

export default Navbar;
