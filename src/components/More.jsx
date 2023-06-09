

const More = (more) => {
    console.log(more);
  return (
    <div>
    <h1>Languages</h1>
    <p>
        {more.languages.language}
    </p>
    <h2>Habilities</h2>
    <ul>
        {more.habilities.map((element, i)=>{
            return (
                <li key={i}>
                    {element}
                </li>
            )
        })}
    </ul>
   <h2>Volunteer</h2>
   <ul>
    {more.volunteer.map((element, i)=>{
        return (
            <li key={i}>
                <p>{element.name}</p>
                <p>{element.where}</p>
                <p>{element.description}</p>
            </li>
        )
    })}
   </ul>
   
      
    </div>
  )
}

export default More
