const Title = (props) => {
  return (
    <div className="flex w-full flex-col rounded-t-xl md:w-10/12">
      <div className="flex w-full flex-col items-end gap-1">
        <div className="flex w-full justify-center m-2">
          <img
            src="images/spe_dg.png"
            alt="Save Planet Earth Logo"
            className="w-8"
          />
        </div>
        <div className="flex w-full justify-center">
          <p className="text-center text-green-700 sm:text-lg">
            SavePlanetEarth |{" "}
            <span className="font-bold">Carbon Calculator</span>
          </p>
        </div>
      </div>
      <div className="flex w-12/12 mb-6 justify-center">
        <h1 className="text-center text-lg font-bold text-amber-400 sm:text-lg sm:text-right">
          {props.name}
        </h1>
      </div>
    </div>
  );
};

export default Title;
