import React from 'react';
import { SerialItensElement } from '../serial-itens-element/SerialItensElement';
import CommomLabel from '../commom-label/CommomLabel';

import './style.scss';

export const SerialItens = () => {
  return(
    <div className="serial-itens">
      <div className="serial-itens-title">
        <CommomLabel className="serial-itens-title-label" label="Itens de série"/>
      </div>
      <div className="serial-itens-base">
        <SerialItensElement label="Ar condicionado" />
        <SerialItensElement label="Airbag" />
        <SerialItensElement label="Desembaçador traseiro" />
        <SerialItensElement label="Ar quente" />
        <SerialItensElement label="Freio ABS" />
        <SerialItensElement label="Ar condicionado" />
        <SerialItensElement label="Teto Solar" />
        <SerialItensElement label="Teto Solar" />
        <SerialItensElement label="Freio ABS" />
        <SerialItensElement label="Ar quente" />
        <SerialItensElement label="Desembaçador traseiro" />
        <SerialItensElement label="Teto Solar" />
        <SerialItensElement label="Freio ABS" />
        <SerialItensElement label="Ar quente" />
        <SerialItensElement label="Desembaçador traseiro" />
        <SerialItensElement label="Teto Solar" />
        <SerialItensElement label="Ar quente" />
        <SerialItensElement label="Ar condicionado" />
        <SerialItensElement label="Freio ABS" />
        <SerialItensElement label="Desembaçador traseiro" />
        <SerialItensElement label="Teto Solar" />
        <SerialItensElement label="Freio ABS" />
        <SerialItensElement label="Ar quente" />
        <SerialItensElement label="Desembaçador traseiro" />
        <SerialItensElement label="Teto Solar" />
        <SerialItensElement label="Ar quente" />
        <SerialItensElement label="Ar condicionado" />
        <SerialItensElement label="Freio ABS" />
        <SerialItensElement label="Desembaçador traseiro" />
        <SerialItensElement label="Teto Solar" />
        <SerialItensElement label="Freio ABS" />
        <SerialItensElement label="Ar quente" />
        <SerialItensElement label="Desembaçador traseiro" />
        <SerialItensElement label="Teto Solar" />
        <SerialItensElement label="Ar quente" />
        <SerialItensElement label="Ar condicionado" />
        <SerialItensElement label="Freio ABS" />
      </div>
    </div>
  )
}