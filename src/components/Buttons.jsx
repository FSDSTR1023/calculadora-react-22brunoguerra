/* eslint-disable react/prop-types */
function Buttons(props) {
  const { handleClick } = props;
  const calculators = [
    'C',
    '+/-',
    '←',
    '/',
    7,
    8,
    9,
    '*',
    4,
    5,
    6,
    '-',
    1,
    2,
    3,
    '+',
    0,
    '.',
    '=',
  ];

  return (
    <div className='button-container'>
      {calculators.map((num, index) => (
        <button
          className='button'
          key={index}
          onClick={() => handleClick(num)}>
          {num}
        </button>
      ))}
    </div>
  );
}
export default Buttons;
