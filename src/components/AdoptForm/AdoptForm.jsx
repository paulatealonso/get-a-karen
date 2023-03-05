import { useState } from "react";
import Button from "../Button/Button";
import './AdoptForm.css'


const AdoptForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        nameKaren: '',
        email: '',
        phone: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        nameKaren: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });

        setErrors({
            ...errors,
            [event.target.name]: '',
        });
    };

    const validate = () => {
        let nameError = '';
        let nameKarenError = '';
        let emailError = '';
        let phoneError = '';
        let messageError = '';

        if (!formData.name) {
            nameError = 'Name is required';
        }

        if (!formData.nameKaren) {
            nameKarenError = 'Name is required';
        }

        if (!formData.email) {
            emailError = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            emailError = 'Email is not valid';
        }

        if (!formData.message) {
            messageError = 'Message is required';
        }

        if (!formData.phone) {
            phoneError = 'Number phone is required';
        }

        if (nameError || nameKarenError ||emailError || messageError || phoneError) {
            setErrors({ name: nameError, nameKaren: nameKarenError, email: emailError, message: messageError, phone: phoneError });
            return false;
        }

        return true;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const isValid = validate();
        if (isValid) {
            console.log(formData);
            setFormData({ name: '', nameKaren: '', email: '', message: '', phone: '' });
        }
    };





    return (
        <div className="form-adopt-conteiner">
            <form onSubmit={handleSubmit} className="form-adopt">
            <div>
                <label>Nombre del gatito</label>
                <br/>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className='cat-for-adopt'
                />
                {errors.name && <div style={{ color: '#ffbadb' }}>{errors.name}</div>}
            </div>
            <div>
                <label>Nombre</label>
                <br/>
                <input
                    type="text"
                    name="nameKaren"
                    value={formData.nameKaren}
                    onChange={handleChange}
                    className='cat-for-adopt'
                />
                {errors.nameKaren && <div style={{ color: '#ffbadb' }}>{errors.nameKaren}</div>}
            </div>

            <div>
            <label>Email</label>
                <br/>
                <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className='cat-for-adopt'
                />
                {errors.email && <div style={{ color: '#ffbadb' }}>{errors.email}</div>}
            </div>

            <div>
            <label>Teléfono</label>
                <br/>
                <input
                    type="text"
                    name="phone"
                    placeholder="+1 (555) 987-6543"
                    value={formData.phone}
                    onChange={handleChange}
                    className='cat-for-adopt'
                />
                {errors.phone && <div style={{ color: '#ffbadb' }}>{errors.phone}</div>}
            </div>

            <Button type='submit' className={'btn-form-adopt'} text= {'ENVIAR'}/>
        </form>


        </div>
    )
}

export default AdoptForm