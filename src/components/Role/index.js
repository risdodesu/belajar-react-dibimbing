const arrObj = [
    {
      name: "Bruce Banner",
      role: "Hulk"
    },
    {
      name: "Steve",
      role: "Captain America"
    }]

const Role = () => {
    return (
        <div>
            {arrObj.map((data, index) => {
            return <p key={index}>{data.name} as {data.role}</p>
            })}
        </div>
    )
}

export default Role;