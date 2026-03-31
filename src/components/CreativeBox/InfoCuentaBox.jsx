import React from 'react'
import { useTranslation } from 'react-i18next';
  
function InfoCuentaBox({titulo, valor}) {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col sm:flex-row sm:items-center justify-between items-start border-b border-gray-300 p-4 bg-white rounded-sm text-sm text-gray-500 font-bold'>
        <p className='text-gray-700 w-[24%]'>{titulo}</p>

        <p>{valor ? valor : t("CreativeBox.Account.NotAdded")}</p>

        <button className='rounded-full p-2 px-5 border-2 border-black text-gray-700'>{t("CreativeBox.Account.Add")}</button>
    </div>
  )
}

export default InfoCuentaBox
