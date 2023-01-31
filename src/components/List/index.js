const text2 = "Here's list of some marvel's hero that I like :"
const arr = ["Hulk", "Captain Amerika", "Iron Man", "Thor", "Ghost Rider"]

const List = () => { 
    return (
        <div>
            <p>{text2}</p>
            {arr.map((data,index) => {
            return <p key={index}>{index+1}. {data}</p>
            })}
        </div>
    )
}

export default List;