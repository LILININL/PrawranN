import React from 'react';
import 'numeral/locales/th';

const numeral = require('numeral');

type UtilMoneyFormatProps = {
  value: number;
  includeSign?: string;
  transactionType?: any;
};

function UtilMoneyFormat({ value, includeSign, transactionType }: UtilMoneyFormatProps) {
  numeral.locale('th');
  let format = '$0,0.[00]';
  if (includeSign) {
    format = '$0,0.[00]';
  }
  let finalValue = value;
  if (transactionType && transactionType === 'WITHDRAW') {
    finalValue *= -1;
  }

  return <>{numeral(finalValue).format(format)}</>;
}

export default UtilMoneyFormat;
