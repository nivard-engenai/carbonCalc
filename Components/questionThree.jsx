const QuestionThree = (props) => {
  const questions = props.questions;
  return (
    <div className="flex basis-10/12 flex-col items-center gap-2 bg-gray-100 p-6 rounded-xl md:basis-11/12">
      <img src={questions.image} className="w-14" />
      <p className="h-12 w-2/3 text-center text-green-700 font-semibold md:text-sm m-2">
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
            <label htmlFor={unit} className="text-gray-500 md:text-xs">
              {unit.name}
            </label>
          </>
        ))}
      </div>
    </div>
  );
};

export default QuestionThree;
