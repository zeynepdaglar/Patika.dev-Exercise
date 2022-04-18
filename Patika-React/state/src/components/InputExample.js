import {useState} from 'react'

function InputExample() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    // const onChangeName = (event) => setName(event.target.value);
    // const onChangeSurname = (event) => setSurname(event.target.value);

    const [form, setForm] = useState({name: "", surname:""});
    const onChangeInput = (event) => {
        console.log(event.target.name);
        setForm({...form, [event.target.name]: event.target.value})
    }

  return (
    <div>
        <h1>Hello {form.name} {form.surname}</h1>
        <input name="name" value={form.name} placeholder="please write your name" onChange={onChangeInput}/>
        <br />
        <input name="surname" value={form.surname} placeholder="please write your surname" onChange={onChangeInput}/>
    </div>
  )
}

export default InputExample;