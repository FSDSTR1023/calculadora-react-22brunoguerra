/* eslint-disable react/prop-types */
function Pantalla(props) {
  const { result, operation } = props;
  return (
    <div className='screen-container'>
      <h4 className='result'>{result}</h4>
      <p className='operation'>{operation}</p>
    </div>
  );
}
export default Pantalla;
