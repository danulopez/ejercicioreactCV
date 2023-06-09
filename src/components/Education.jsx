
const Education = (education) => {
  console.log(education);
  return (
    <div>
      <ul>
        {education.map((element, i) =>{
          return (
            <li key={i}>
             <p>{element.date}</p> 
             <p>{element.name}</p> 
             <p>{element.where}</p>
            </li>
          )
        }
        )}
      </ul>
    </div>
  )
}

export default Education
