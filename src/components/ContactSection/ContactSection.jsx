import { useState } from 'react';
import './ContactSection.css'
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';



const USER_ID = 'tTLYESeJhE17W82or';
const TEMPLATE_ID = 'template_rxkow2a';
const SERVICE_ID = 'service_c2afk6p';

const ContactSection = () => {

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

    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
            .then((response) => {
                Swal.fire({
                    title: 'Custom width, padding, color, background.',
                    width: 600,
                    padding: '3em',
                    color: '#716add',
                    background: '#fff url(/images/trees.png)',
                    backdrop: `
                      rgba(0,0,123,0.4)
                      url("https://res.cloudinary.com/dvfxffbqu/image/upload/v1678229285/cat-space_gxzsll.gif")
                      left top
                      no-repeat
                    `
                });
                setFormData({
                    name: '',
                    nameKaren: '',
                    email: '',
                    phone: '',
                    message: '',
                });
                setErrors({
                    name: '',
                    nameKaren: '',
                    email: '',
                    phone: '',
                    message: '',
                });
            }, (error) => {
                console.log('FAILED...', error);
                alert('Sorry, there was an error sending your message. Please try again later.');
            });
    }



    return (
        <div style={{ margin: '150px 0' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#ffbadb', fontSize: '50px' }}>CONTÁCTANOS</h1>
            <div className="container-contact-last">
                <div className="card-contact-last">¿GATITOS EN LA CALLE?</div>
                <div className="card-contact-last">¿QUIERES UN GATO?</div>
                <div className="card-contact-last">¿QUIERES HACER UNA DONACIÓN?</div>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '60px 0 40px 0'}}>
                <form onSubmit={handleSubmit} className="form-adopt">
                    <div>
                        <label>Nombre</label>
                        <br />
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
                        <br />
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
                        <br />
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

                    <div>
                        <label>Mensaje</label>
                        <br />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className='cat-for-adopted'
                        ></textarea>
                        {errors.message && <div style={{ color: '#ffbadb' }}>{errors.message}</div>}
                    </div>

                    <button type='submit' className='btn-form-adopt'>ENVIAR</button>
                </form>

            </div>



        </div>
    )
}


export default ContactSection