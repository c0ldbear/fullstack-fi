const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

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

function App() {
  const courses = [
    {
      id: 1,
      name: "Half Stack application development",
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <Header text="Web development curriculum" />
      {courses.map((course) => {
        return <Course key={course.id} course={course} />;
      })}
    </div>
  );
}

export default App;
