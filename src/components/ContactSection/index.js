import React, { useState } from 'react'
import { ImLocation, ImWhatsapp } from 'react-icons/im'
import { FaEnvelope } from 'react-icons/fa'
import { MdDateRange } from 'react-icons/md'

import emailjs from 'emailjs-com';
import EmailSent from '../../images/mail-sent.svg'

import MomentUtils from '@date-io/moment';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

import moment from 'moment'; 
import 'moment/locale/es'
moment.locale('es')

export const ContactSection = () => {
    const [submitted, setSubmitted] = useState(false);    
    const [errors, setErrors] = useState(false);

    const [ formValues, setFormValues ] = useState ({
        name: '',
        email: '',
        entryDate: moment().toDate(),
        departureDate: moment().toDate(),
        message: ''
    })
    const { name, email,entryDate, departureDate, message } = formValues


    const handleEntryDate= (date) => { 
        setFormValues ( {
            ...formValues,
            entryDate : date
          })
      };
    const handleDepartureDate= (date) => { 
        setFormValues ( {
            ...formValues,
            departureDate : date
          })
      };

      const handleInputChange = ( { target }) => {
        setFormValues ( {
          ...formValues,
          [target.name] : target.value
        })
      }


    const sendEmail = (e) => {
        e.preventDefault();
        if ( name.trim().length === 0 || email.trim().length === 0 ) {
            return setErrors(true)
        }
        else {
            setErrors(false)
        }
        let entry = moment(formValues.entryDate).format('DD/MM/YYYY');  
        formValues.entryDate = entry
        let departure = moment(formValues.departureDate).format('DD/MM/YYYY');  
        formValues.departureDate = departure
        emailjs.sendForm('costa-del-este-gmail', 'costa-del-este-form', e.target, 'user_EjcujjhQDgaFRw2VPotqN' )
          .then((result) => {
              if(result.text){
                  setSubmitted(true) 
              }
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

    
    return (
    <>
        <div className='container contact-container' id='contact'>
            <div className='row contact-row' >
                <div className='col-12 col-md-6 contact-column-1'>
                    <p className='contact-up-title-section'>Contacto</p>
                    <p className='contact-text-info'>
                        <ImLocation className='contact-icon'/>Costa del Este, Buenos aires
                        <br/>
                        <ImWhatsapp className='contact-icon'/> +549 114 993 0524
                        <br/>
                        <FaEnvelope className='contact-icon'/> costadelestealquiler@gmail.com
                        <br/>
                        <MdDateRange className='contact-icon'/> <span className='contact-text-highlight'>Enero y Frebrero se alquila por quincena.</span>
                    </p>
                </div>

                <div className='col-12 col-md-6 contact-column-2'>
                    {
                        !submitted 
                    ?                    
                        ( 
                                <MuiPickersUtilsProvider utils={MomentUtils}>
                            <form className="contact-form" onSubmit={sendEmail}>
                                <input className='contact-input' type="text" name="name" placeholder='Nombre*' value={ name } onChange= { handleInputChange } />
                                <input className='contact-input' type="email" name="email" placeholder='Email*' value={ email } onChange= { handleInputChange }/>
                                
                                <div className='contact-input contact-display-flex'>
                                    <div className='contact-text-entry'>
                                        Entrada
                                    </div> 
                                    <div>
                                        <KeyboardDatePicker
                                            margin="normal"
                                            name="entry"                                     
                                            id="date-picker-dialog"
                                            format="DD/MM/yyyy"
                                            value={entryDate}
                                            onChange={handleEntryDate}
                                            KeyboardButtonProps={{ 'aria-label': 'change date', }}
                                        />
                                        
                                    </div> 
                                </div>
                                <div className='contact-input contact-display-flex'>
                                    <div className='contact-text-departure'>
                                        Salida
                                    </div>
                                    <div>
                                        <KeyboardDatePicker
                                            margin="normal"       
                                            name='departure'                              
                                            id="date-picker-dialog"
                                            format="DD/MM/yyyy"
                                            value={departureDate}
                                            onChange={handleDepartureDate}
                                            KeyboardButtonProps={{'aria-label': 'change date', }}
                                        />
                                    
                                    </div> 
                                </div>

                                <textarea className='contact-textarea' name="message" placeholder='Mensaje (opcional)' rows='2' value={ message } onChange= { handleInputChange }/>
                                <button className='contact-button' type="submit" >Enviar consulta</button>
                                {
                                    errors && <small className='contact-error'>*Todos los campos son requeridos</small>
                                }
                            </form>
                                </MuiPickersUtilsProvider>
                        )
                        
                    :
                        <div className='contact-wrapper-img-email'>
                            <img className='contact-img-email-sent' src={EmailSent} alt='Email sent!'/>
                            <p className='contact-text-email-sent'>Mensaje enviado!</p>                
                        </div>
                
                    }
                </div>
            </div>
        </div>        
    </>
    )
}
