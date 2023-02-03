import Form from 'react-bootstrap/Form';
const Input = ({dataParent, setDataParent}) => {
    return (
        <>
            {/* <p>Parent Input : {dataParent}</p> */}
            {/* <input 
                placeholder={dataParent} 
                onChange={e=>(setDataParent(e.target.value))}
            /> */}
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Parent App : {dataParent}</Form.Label>
                <Form.Control type="text" value={dataParent} onChange={e=>(setDataParent(e.target.value))}/>
                </Form.Group>
            </Form>
        </>
       
    )
}
export default Input;
