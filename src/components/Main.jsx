import mainImg from "../images/For.jpg";
import { Trans, useTranslation } from "react-i18next";
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

const Main = () => {
  const { t } = useTranslation();
  const currentLanguageCookie = cookies.get("i18next") || "en";
  const currentLanguage = languages.find(
    (l) => l.code === currentLanguageCookie
  );

  useEffect(() => {
    document.body.dir = currentLanguage.dir;
  }, [currentLanguage.dir]);

  return (
    <div className="main">
      <div className="main__left">
        <h1 className="left__text">{t("main_page_text")}</h1>
      </div>
      <div className="main__right">
        <img
          src={mainImg}
          alt="myImage"
          style={
            currentLanguage.dir === "rtl"
              ? { borderTopRightRadius: 200 }
              : { borderTopLeftRadius: 200 }
          }
        />
      </div>
    </div>
  );
};

export default Main;
