
const Experience = ({experience}) => {
  console.log(experience);
   
  return (
      <div className = "experience">
       <h1>Experience</h1>
      <ul>
          {experience.map((element, i) => {

             return (
              <li key = {i}>
              <h3>{element.name}</h3>
              <h4>{element.where}</h4>
              <p>{element.description}</p>
              </li>
          )})}
      </ul>
      </div>
  )
}

export default Experience