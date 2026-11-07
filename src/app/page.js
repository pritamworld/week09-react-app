import Student from "./student";
import College from "./college";
import Counter from "./counter";
import CounterClassComponent from "./counterclasscomponent";

export default function Home() {
  let collegeDetails = {
    name: "ABC College",
    location: "New York",
    established: 1990,
  };

  return (
    <div>
      <h1>ReactJs Application using Next.js</h1>
      <Student />
      <College collegeDetails={collegeDetails} />
      <Counter />
      <CounterClassComponent />
    </div>
  );
}
