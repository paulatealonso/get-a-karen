import { useState } from "react";
import './PaymentForm.css'
import logoForm from '../assets/logo-form.png'

const PaymentForm = ({ title }) => {
    const [selectedMethod, setSelectedMethod] = useState(null);
    const [showDebitForm, setShowDebitForm] = useState(false);
    const [showTransferenceForm, setShowTransferenceForm] = useState(false);


    const handleRadioChange = event => {
        setSelectedMethod(event.target.value);
        if (event.target.value === 'debit') {
            setShowDebitForm(true);
            setShowTransferenceForm(false);
        } else {
            setShowDebitForm(false);
            setShowTransferenceForm(true);
        }
    };

    const [formData, setFormData] = useState({
        name: '',
        debt: '',
        date: '',
        cvc: '',
    });


    const [errors, setErrors] = useState({
        name: '',
        debt: '',
        date: '',
        cvc: '',
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
        let debtError = '';
        let dateError = '';
        let cvcError = '';

        if (!formData.name) {
            nameError = 'Name is required';
        }

        if (formData.name.length < 2) {
            nameError = 'Name is required';
        }

        if (!formData.debt) {
            debtError = 'Tarjet number is required';
        } else if (/\S+@\S+\.\S+/.test(formData.debt)) {
            debtError = 'Tarjet number is not valid';
        } else if (formData.debt.length < 15) {
            debtError = 'Tarjet number is not valid';
        }

        if (!formData.date) {
            dateError = 'Date is required';
        }

        if (!formData.cvc) {
            cvcError = 'CVC is required';
        }

        if (formData.cvc < 3) {
            cvcError = 'CVC is required';
        }

        if (nameError || debtError || cvcError || dateError) {
            setErrors({ name: nameError, debt: debtError, date: dateError, cvc: cvcError, });
            return false;
        }

        return true;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const isValid = validate();
        if (isValid) {
            console.log(formData);
            setFormData({ name: '', debt: '', date: '', cvc: '' });
        }
    };

    // SECOND FORM


    const [formDataTwo, setFormDataTwo] = useState({
        name: '',
        lastName: '',
        phone: '',
        email: '',
        country: '',
        poblation: '',
        postal: '',
        street: '',
        num: '',
        piso: '',
        door: '',
    });

    const [errorsTwo, setErrorsTwo] = useState({});

    const handleInputChange = (event) => {
        setFormDataTwo({
            ...formDataTwo,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmitTwo = (event) => {
        event.preventDefault();
        setErrorsTwo({});

        const newErrors = {};

        if (!formDataTwo.name) {
            newErrors.name = 'El nombre es obligatorio';
        }

        if (formDataTwo.name.length < 2) {
            newErrors.name = 'El nombre no es válido';
        }

        if (!formDataTwo.lastName) {
            newErrors.lastName = 'El apellido es obligatorio';
        }

        if (!formDataTwo.phone) {
            newErrors.phone = 'El teléfono es obligatorio';
        }

        if (formDataTwo.phone.length < 7) {
            newErrors.phone = 'El teléfono es obligatorio';
        }

        if (!formDataTwo.email) {
            newErrors.email = 'El correo electrónico es obligatorio';
        } else if (!/\S+@\S+\.\S+/.test(formDataTwo.email)) {
            newErrors.email = 'El correo electrónico no es válido';
        }

        if (!formDataTwo.poblation) {
            newErrors.poblation = 'La ciudad es obligatoria';
        }
        if (!formDataTwo.postal) {
            newErrors.postal = 'El código postal es necesario';
        }

        if (formDataTwo.postal.length < 4) {
            newErrors.postal = 'El código postal no es válido';
        }
        if (!formDataTwo.street) {
            newErrors.street = 'La calle es necesaria';
        }
        if (!formDataTwo.num) {
            newErrors.num = 'El número de calle es necesario';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrorsTwo(newErrors);
            return;
        }

    };


    // TERCER FORMULARIO TRANSFERENCIA 


    const [formDataThree, setFormDataThree] = useState({
        name: '',
        transference: '',
        date: '',
    });


    const [errorsThree, setErrorsThree] = useState({
        name: '',
        transference: '',
        import: '',
    });

    const handleChangeThree = (event) => {
        setFormDataThree({
            ...formDataThree,
            [event.target.name]: event.target.value,
        });

        setErrorsThree({
            ...errorsThree,
            [event.target.name]: '',
        });
    };

    const validateThree = () => {
        let nameError = '';
        let transferenceError = '';
        let importError = '';

        if (!formDataThree.name) {
            nameError = 'Name is required';
        }

        if (formDataThree.name.length < 2) {
            nameError = 'Name is required';
        }

        if (!formDataThree.debt) {
            transferenceError = 'Tarjet number is required';
        } else if (/\S+@\S+\.\S+/.test(formDataThree.transference)) {
            transferenceError = 'Tarjet number is not valid';
        } else if (formDataThree.transference.length < 20) {
            transferenceError = 'Tarjet number is not valid';
        }

        // if (!formDataThree.import) {
        //     importError = 'Date is required';
        // }



        if (nameError || transferenceError || importError) {
            setErrorsThree({ name: nameError, transference: transferenceError, import: importError, });
            return false;
        }

        return true;
    };

    const handleSubmitThree = (event) => {
        event.preventDefault();

        const isValid = validateThree();
        if (isValid) {
            setFormDataThree({ name: '', transference: '', import: '' });
        }
    };





    return (
        <div style={{ margin: '0 30px' }}>
            <div id='conteiner-paid'>
                <h3>{title}</h3>
                <h5>Seleccionar método de pago</h5>
                <div id='conteiner-debit'>
                    <input
                        type="radio"
                        id="debit"
                        name="paymentMethod"
                        value="debit"
                        checked={selectedMethod === "debit"}
                        onChange={handleRadioChange}
                    />
                    <label className='label-bold'>Tarjeta de débito <br /> <span className='span-separ'>Pago único de primer mes </span></label>
                </div>
                {showDebitForm && (
                    <form onChange={handleSubmit}>
                        <div id='titular-form'>
                            <label>Titular</label>
                            <br />
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                placeholder='Nombre del titular'
                                onChange={handleChange}
                                id='titular'
                            />
                            {errors.name && <div style={{ color: '#ffbadb' }}>{errors.name}</div>}
                        </div>

                        <div id='target-form'>
                            <label>Número de tarjeta</label>
                            <br />
                            <input
                                type="text"
                                name="debt"
                                placeholder="7644 3530 0513 8439"
                                value={formData.debt}
                                onChange={handleChange}
                                id='debt'
                            />
                            {errors.debt && <div style={{ color: '#ffbadb' }}>{errors.debt}</div>}
                        </div>
                        <div id='expiration-cvc'>
                            <div id='expiration-form'>
                                <label>Fecha de caducidad</label>
                                <br />
                                <input
                                    type="text"
                                    name="date"
                                    placeholder="MM / YY"
                                    value={formData.date}
                                    onChange={handleChange}
                                    id='tel'
                                />
                                {errors.date && <div style={{ color: '#ffbadb' }}>{errors.date}</div>}
                            </div>

                            <div id='secret-form'>
                                <label>CVC</label>
                                <br />
                                <input
                                    type="text"
                                    name="cvc"
                                    placeholder="123"
                                    value={formData.cvc}
                                    onChange={handleChange}
                                    id='cvc'
                                />
                                {errors.cvc && <div style={{ color: '#ffbadb' }}>{errors.cvc}</div>}
                                <br />
                            </div>
                        </div>
                    </form>
                )}

                <div id='conteiner-transferencia'>
                    <input
                        type="radio"
                        id="trans"
                        name="paymentMethod"
                        value="trans"
                        checked={selectedMethod === "trans"}
                        onChange={handleRadioChange}
                    />
                    <label className='label-bold'>Transferencia bancaria a la cuenta ES23 4264 8234 6269 2770 <br /></label>
                    <br />
                    <br />
                    {showTransferenceForm && (
                        <form onChange={handleSubmitThree}>
                            <div id='titular-form'>
                                <label>Titular</label>
                                <br />
                                <input
                                    type="text"
                                    name="name"
                                    value={formDataThree.name}
                                    placeholder='Nombre del titular'
                                    onChange={handleChangeThree}
                                    id='titular'
                                />
                                {errorsThree.name && <div style={{ color: '#ffbadb' }}>{errorsThree.name}</div>}
                            </div>

                            <div id='target-form'>
                                <label>Número de cuenta </label>
                                <br />
                                <input
                                    type="text"
                                    name="transference"
                                    placeholder="ES23 4264 8234 6269 2770"
                                    value={formDataThree.transference}
                                    onChange={handleChangeThree}
                                    id='transference'
                                />
                                {errorsThree.transference && <div style={{ color: '#ffbadb' }}>{errorsThree.transference}</div>}
                            </div>
                            <div id='import-select'>
                                <div id='import-select-box'>
                                    <label>Importe mensual</label>
                                    <br />
                                    <select
                                        id="import"
                                        name="import"
                                        value={formDataThree.import}
                                        onChange={handleChangeThree}
                                    >
                                        <option value="8.00">8,00€</option>
                                        <option value="15.00">15,00€</option>
                                        <option value="20.00">20,00€</option>
                                        <option value="30.00">30,00€</option>
                                        <option value="50.00">50,00€</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    )}
                </div>

                <div id='conteiner-bizum'>
                    <input
                        type="radio"
                        id="bizum"
                        name="paymentMethod"
                        value="bizum"
                        checked={selectedMethod === "bizum"}
                        onChange={handleRadioChange}
                    />
                    <label className='label-bold'>Bizum</label>
                    {/* <img src={bizum} alt='bizum' id='img-bizum'/> */}
                </div>
            </div>


            {/* SEGUNDO FORM */}

            <form onChange={handleSubmitTwo}>
                <div id="formName">
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formDataTwo.name}
                        onChange={handleInputChange}
                    />
                    {errorsTwo.name && <div style={{ color: '#ffbadb' }}>{errorsTwo.name}</div>}
                </div>

                <div id="formLastName">
                    <label htmlFor="lastName">Apellidos:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formDataTwo.lastName}
                        onChange={handleInputChange}
                    />
                    {errorsTwo.lastName && <div style={{ color: '#ffbadb' }}>{errorsTwo.lastName}</div>}
                </div>

                <div id="formPhone">
                    <label htmlFor="phone">Teléfono:</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formDataTwo.phone}
                        onChange={handleInputChange}
                    />
                    {errorsTwo.phone && <div style={{ color: '#ffbadb' }}>{errorsTwo.phone}</div>}
                </div>

                <div id="formEmail">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formDataTwo.email}
                        onChange={handleInputChange}
                    />
                    {errorsTwo.email && <div style={{ color: '#ffbadb' }}>{errorsTwo.email}</div>}
                </div>

                <div id="formCountry">
                    <label htmlFor="country">País</label>
                    <select name="country" value={formDataTwo.country} onChange={handleChange}>
                        <option value="España">España</option>
                        <option value="México">Francia</option>
                        <option value="México">Italia</option>
                        <option value="México">Alemania</option>
                        <option value="México">Polonia</option>
                        <option value="México">Holanda</option>
                        <option value="México">Japón</option>
                        <option value="México">China</option>
                        <option value="México">Venezuela</option>
                        <option value="México">Dinamarca</option>
                        <option value="México">Bélgica</option>
                        <option value="México">Luxemburgo</option>
                        <option value="México">Estados Unidos</option>
                        <option value="México">México</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Chile">Chile</option>

                    </select>

                </div>

                <div id="box-city">
                    <div id="formPoblation">
                        <label htmlFor="poblation">Población</label>
                        <input
                            type="text"
                            id="poblation"
                            name="poblation"
                            value={formDataTwo.poblation}
                            onChange={handleInputChange}
                        />
                        {errorsTwo.poblation && <div style={{ color: '#ffbadb' }}>{errorsTwo.poblation}</div>}
                    </div>

                    <div id="formPostal">
                        <label htmlFor="postal">Código postal</label>
                        <input
                            type="text"
                            id="postal"
                            name="postal"
                            value={formDataTwo.postal}
                            onChange={handleInputChange}
                        />
                        {errorsTwo.postal && <div style={{ color: '#ffbadb' }}>{errorsTwo.postal}</div>}
                    </div>

                </div>

                <div id="box-street">

                    <div id="formStreet">
                        <label htmlFor="street">Calle</label>
                        <input
                            type="text"
                            id="street"
                            name="street"
                            value={formDataTwo.street}
                            onChange={handleInputChange}
                        />
                        {errorsTwo.street && <div style={{ color: '#ffbadb' }}>{errorsTwo.street}</div>}
                    </div>

                    <div id="formNum">
                        <label htmlFor="num">Número</label>
                        <input
                            type="text"
                            id="num"
                            name="num"
                            value={formDataTwo.num}
                            onChange={handleInputChange}
                        />
                        {errorsTwo.num && <div style={{ color: '#ffbadb' }}>{errorsTwo.num}</div>}
                    </div>

                    <div id="formPiso">
                        <label htmlFor="piso">Piso</label>
                        <input
                            type="text"
                            id="piso"
                            name="piso"
                            value={formDataTwo.piso}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div id="formDoor">
                        <label htmlFor="door">Puerta</label>
                        <input
                            type="text"
                            id="door"
                            name="door"
                            value={formDataTwo.door}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

            </form>
            <br/>
            <button disabled={!selectedMethod} type="submit" className="btn-form-cat">Continuar</button>
            <div className="form-logo">
                <img src={logoForm} alt=''/>
            </div>
        </div>
    );
};
export default PaymentForm