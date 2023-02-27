const QuestionThree = (props) => {
  const questions = props.questions;
  return (
    <div className="flex flex-col items-center gap-2 bg-gray-100 p-6 rounded-xl w-full lg:w-10/12">
      <img src={questions.image} className="w-10 lg:w-14" />
      <p className="h-auto lg:h-12 w-2/3 text-center text-green-700 font-semibold text-sm m-2 lg:text-normal">
        {questions.title}
      </p>
      <div className="flex items-center gap-2">
        {questions.units.map((unit) => (
          <>
            <input
              type="radio"
              name={questions.name}
              id={questions.name}
              value={unit.value}
              onChange={(e) => props.setValue(e.target.value)}
            />
            <label htmlFor={unit} className="text-gray-500 text-xs lg:text-normal">
              {unit.name}
            </label>
          </>
        ))}
      </div>
    </div>
  );
};

export default QuestionThree;
