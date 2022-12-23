import React from 'react';
import PropTypes from 'prop-types';

type CalcPropType = {
  x: number;
  y: number;
  oper: string;
};

const Calc = ({ x, y, oper }: CalcPropType) => {
  let result: number = 0;
  switch (oper) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    default:
      result = 0;
  }
  return (
    <div>
      <h3>연산방식 : {oper}</h3>
      <hr />
      <div>
        {x}
        {oper}
        {y} = {result}
      </div>
    </div>
  );
};

const calcChecker = (props: any, propName: string, componentName: string) => {
  if (propName === 'oper') {
    if (!props[propName].match(/[+*]/)) {
      return new Error(
        `${propName}속성의 값은 반드시 +* 이여야 합니다.(at ${componentName})`
      );
    }
  }
};

Calc.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  oper: calcChecker,
};

export default Calc;
