import React from 'react';
import Call from '../../components/call/Call';

import './style.scss';

export default class Calls extends React.Component {
  render () {
    return(
      <div className="calls-base">
        <Call title="Imperdível" spotlight="TAXA ZERO %" subtitle="Always first off the line. Instant torque delivers full power in a heartbeat." />
        <Call title="O carro mais" spotlight="SEGURO" subtitle="Always first of the line. Instant torque." />
        <Call title="Bónus de até" spotlight="R$ 3 mil" subtitle="Always first off the line. Instant torque delivers full power in a heartbeat." />
      </div>
    )
  }
}