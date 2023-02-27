const QuestionTwo = (props) => {
  const questions = props.questions;
  return (
    <div className="flex flex-col items-center gap-2 bg-gray-100 p-6 rounded-xl w-full sm:w-5/12">
      <img src={questions.image} className="w-10 lg:w-14" />
      <p className="h-auto text-center text-green-700 font-semibold text-sm lg:h-12 lg:text-normal">
        {questions.title}
      </p>
      <input
        className="p-3 w-2/3 rounded-lg m-2"
        type="number"
        name={questions.name}
        id={questions.name}
        placeholder={questions.placeholder}
        onChange={(e) => props.setValue(e.target.value)}
      />
      <div className="flex items-center gap-2">
        {questions.units.map((unit) => (
          <>
            <input
              type="radio"
              name={questions.name}
              id={questions.name}
              value={unit.value}
              onChange={(e) => props.setUnit(e.target.value)}
            />
            <label htmlFor={unit} className="text-gray-500 text-sm lg:text-normal">
              {unit.name}
            </label>
          </>
        ))}
      </div>
    </div>
  );
};

export default QuestionTwo;
