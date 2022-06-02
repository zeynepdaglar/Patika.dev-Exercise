import {useState, useEffect} from 'react'

const initialFormValues = { fullname: "", phone_number: ""};

function Form({addContact, contacts}) {
    const [form, setForm] = useState(initialFormValues);

    useEffect( ()=>{
        setForm(initialFormValues);
    }, [contacts]);

    // ...form yani formun önceki verilerini koymuş olduk
    //onChange: Bir metin kutusu, metin alanı ya da seçim listesindeki bir metin değiştiği zaman bir eylem grubunu harekete geçirir. 
    const onChangeInput = (event) => {
        setForm({...form, [event.target.name]: event.target.value});
    }

    const onSubmit= (event) => {
        //form etiketi default olarak veriyi gönderip/alıp sayfayı yeniler, biz bunu durmamak için şöyle yapabiliriz:
        event.preventDefault();
        
        //eğer bu alanlar boşsa formu gönderme 
        if (form.fullname === '' || form.phone_number === '') {
           return false; 
        }
        addContact([...contacts, form]);
        console.log(form);
    }


  return (
    //form tag: gideceği bir endpoint olur, o endpoint gider o veriyi gönderiri veya çeker.
    <form onClick={onSubmit}>
        <div>
            <input 
            name="fullname" 
            placeholder="Full Name"
            value={form.fullname} 
            onChange={onChangeInput}
            />
        </div>
        <br/>
        <div>
            <input 
            name="phone_number" 
            placeholder="Phone Number" 
            value={form.phone_number}
            onChange={onChangeInput}
            />
        </div>
        <button>Add</button>
    </form>
  )
}

export default Form
