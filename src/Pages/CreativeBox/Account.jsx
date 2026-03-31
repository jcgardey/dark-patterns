import React, { useState } from 'react'
import NavBar from '../../components/CreativeBox/NavBar'
import Sidebar from '../../components/CreativeBox/Sidebar'
import InfoCuentaBox from '../../components/CreativeBox/InfoCuentaBox';
import Plan from '../../components/CreativeBox/Plan';
import { Footer } from '../../components/CreativeBox/Footer';
import { useTranslation } from 'react-i18next';

export function Account() {
  const [actual, setActual] = useState("cuenta");
  const { t } = useTranslation();

  return (
    <div className='flex flex-col items-center w-full bg-gray-100'>
      <NavBar />
      <div className='flex w-full h-[100%]'>
        <Sidebar actual={actual} setActual={setActual} />

        <div className='sm:w-full h-screen mb-20'>
          {actual == "cuenta" ? 
            <div className='p-2 sm:p-4 flex flex-col gap-2.5'>
              <h1 className="text-3xl font-bold">{t("CreativeBox.Sidebar.Account")}</h1>
              <hr />
              <InfoCuentaBox titulo={t("CreativeBox.Account.BoxAccountInfo1")}  />
              <InfoCuentaBox titulo={t("CreativeBox.Account.BoxAccountInfo2")} valor='José Hernandez'  />
              <InfoCuentaBox titulo={t("CreativeBox.Account.BoxAccountInfo3")}  />
              <InfoCuentaBox titulo={t("CreativeBox.Account.BoxAccountInfo4")}  />
              <InfoCuentaBox titulo={t("CreativeBox.Account.BoxAccountInfo5")} valor='jhernandez@gmail.com'  />
              <InfoCuentaBox titulo={t("CreativeBox.Account.BoxAccountInfo6")}  />
            </div>
          :
            <Plan />
          }
        </div>
      </div>

      <Footer />
    </div>
  )
}


