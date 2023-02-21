const Results = (props) => {
  const footprint = props.value;
  return (
    <div className="h-20 flex flex w-full gap-5 p-5 text-white bg-green-700 rounded-b-xl ">
      <p className="text-md w-1/2 self-center mx-5 bg-green-800 p-2 px-4 rounded-md">
        <span className="text-2xl  font-semibold">{footprint}</span> CO2e(mt)
      </p>
      <button
        type="button"
        className="w-2/12 text-md font-normal text-amber-400 border-2 border-amber-400 rounded-md md:text-sm w-3/12"
        onClick={() => props.goBack()}
      >
        Previous page
      </button>
      <button
        type="button"
        className="w-2/12 text-md font-semibold text-white bg-amber-400 rounded-md md:text-sm w-3/12"
        onClick={() => props.sendData()}
      >
        Next page
      </button>
    </div>
  );
};

export default Results;
