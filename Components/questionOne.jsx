const QuestionOne = (props) => {
  const questions = props.questions;

  return (
    <div className="flex flex-col items-center gap-2 bg-gray-100 p-6 rounded-xl w-full sm:w-5/12">
      <img src={questions.image} className="w-10 lg:w-14" />
      <p className="h-auto lg:h-12 w-2/3 text-center w-full text-green-700 font-semibold text-sm lg:text-normal">
        {questions.title}
      </p>
      <input
        className="p-3 w-2/3 rounded-lg"
        type="number"
        name={questions.name}
        id={questions.name}
        placeholder={questions.placeholder}
        onChange={(e) => props.setValue(e.target.value)}
      />
    </div>
  );
};

export default QuestionOne;
