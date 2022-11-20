interface IAccordion {
  question: string;
  answer: string;
  active?: boolean;
}

const Accordion = (props: IAccordion) => {
  return (
    <div className="accordion">
      <div className="accordion__question">{props.question}</div>
      <div className="accordion__answer">{props.answer}</div>
    </div>
  );
};

export default Accordion;
