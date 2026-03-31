import React from 'react'
import { useTranslation } from 'react-i18next';

function ProductoBox({nombre, descripcion, imagen, logo, esPlan=false, esCambiarPlan=false, setOpenModal}) {
  const { t } = useTranslation();

  return (
    <div className={`border max-w-xs rounded ${!esPlan && "cursor-pointer hover:bg-gray-200"} shadow bg-white`}>
        <div className='w-full h-24 bg-cover bg-center rounded-tl rounded-tr' style={{ backgroundImage: `url(${imagen})` }}>
          &nbsp;
        </div>

      <div className={`flex flex-col justify-between h-[190px] ${esCambiarPlan ? "p-2" : "p-5"} overflow-auto lg:overflow-visible`}>
        {esPlan && <h1 className='text-lg font-bold'>{nombre}</h1>}
        <p className={`text-sm ${!esPlan && "font-bold"}  whitespace-pre-line`}>{descripcion}</p>
        
        {esPlan ?
          <div className='flex items-center justify-center'>
            <button onClick={() => setOpenModal(true)} className='my-3 rounded border border-black p-1 px-3 rounded-full hover:bg-gray-200 font-semibold'>{esCambiarPlan ? t("CreativeBox.Plan.Change") : t("CreativeBox.Plan.Cancel")} plan</button>
          </div>
        :
          <div className='flex gap-1 items-center'>
              <img className='w-5 h-5 rounded' src={logo} alt=""  /> 
              <h2 className='text-sm font-semibold'>{nombre}</h2>
          </div>}
      </div>
    </div>
  )
}

export default ProductoBox
