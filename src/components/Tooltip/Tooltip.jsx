import React from 'react'
import { Popover } from 'antd'
const contentImage = (
  <div className='tooltip__content'>
    <p><strong>Formatos:</strong>JPG - PNG - SVG</p>
    <p><strong>Medidas:</strong> Ancho_ 150px Alto: 65px</p>
    <p><strong>Calidad:</strong> .png 72dpi 70% RGB</p>
  </div>)
const contentPDF = (
  <div className='tooltip__content'>
    <p><strong>Formatos:</strong>PDF</p>
    <p><strong>Medidas:</strong> Pendientes Medidad de PDF</p>
    <p><strong>Calidad:</strong> .pdf Pendientes</p>
  </div>)
export const TooltipImage = () => (
  <div className='tooltip'>
    <Popover placement='bottomRight' title={undefined} content={contentImage} trigger='click'>
      <span className='ion-information-circled fa fa-fw fa-2x' />
    </Popover>
  </div>
)
export const TooltiPDF = () => (
  <div className='tooltip'>
    <Popover placement='bottomRight' title={undefined} content={contentPDF} trigger='click'>
      <span className='ion-information-circled fa fa-fw fa-2x' />
    </Popover>
  </div>
)
