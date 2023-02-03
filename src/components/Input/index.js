const Input = ({dataParent, setDataParent}) => {
    return (
        <>
            <p>Parent Input : {dataParent}</p>
            <input placeholder={dataParent} onChange={e=>(setDataParent(e.target.value))}/>
        </>
    )
}
export default Input;
