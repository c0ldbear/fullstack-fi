const CourseTitle = ({ name }) => {
  return <h2>{name}</h2>;
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => {
        return <Part key={part.id} name={part.name} exercises={part.exercises} />;
      })}
      <SumOfExercises parts={parts} />
    </div>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const SumOfExercises = ({ parts }) => {
  const exercises = parts.map((part) => {
    return part.exercises;
  });
  let sum = exercises.reduce((sum, value) => sum + value, 0);
  return (
    <p>
      <b>total of {sum} exercises</b>
    </p>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <CourseTitle name={course.name} />
      <Content parts={course.parts} />
    </>
  );
};

export default Course;
