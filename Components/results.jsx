const Results = (props) => {
  const footprint = props.value;
  return (
    <div className="h-auto w-full text-white bg-green-700 rounded-b-xl items-center justify-center lg:h-20 lg:flex lg:gap-5 p-2 ">
      <p className="text-sm rounded-md bg-green-800 w-12/12 lg:w-1/2 lg:mx-5 p-2 lg:px-4">
        <span className="text-2xl  font-semibold">{footprint}</span> CO2e(mt)
      </p>
      <button
        type="button"
        className="text-sm w-5/12 m-2 p-2 font-normal text-amber-400 border-2 border-amber-400 rounded-md lg:w-2/12 lg:text-md"
        onClick={() => props.goBack()}
      >
        Previous page
      </button>
      <button
        type="button"
        className="text-sm w-5/12 p-2 text-md font-semibold text-white bg-amber-400 rounded-md lg:w-2/12 lg:text-normal "
        onClick={() => props.sendData()}
      >
        Next page
      </button>
    </div>
  );
};

export default Results;
