import React from "react";
import { useTranslation } from "react-i18next";
import Settings from "../infrastructure/settings";

const Header: React.FC = () => {

  const { t } = useTranslation();
  return (
    <header>
      <h1>{Settings.appName()}</h1>
      <h2>{t('description')}</h2>
    </header>
  )
}

export default Header

