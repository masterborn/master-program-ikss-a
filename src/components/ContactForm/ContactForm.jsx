/* eslint-disable react/jsx-props-no-spreading */
// I had to disable eslint because react-hook-form requires props spreading
import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useModal } from '@root/contextProviders/useModal';
import { useForm } from 'react-hook-form';
import { useScroll } from '@root/contextProviders/useScroll';
import CloseIcon from '../icons/svgs/coolicon.svg';
import LoaderIcon from '../icons/svgs/loader.svg';
import SuccessIcon from '../icons/svgs/formSuccess.svg';
import ErrorIcon from '../icons/svgs/formError.svg';
import { FormWrapper, Form, StyledH3, Description, Names, NameField, FormField, Label, Declaration, PrivacyLink, Info, FormSubmit, Layer, CloseButton, UserCode } from './ContactForm.styles';
import Input from '../FormElements/Input';


const ContactForm = ({ formText: { fields: { title, text1: description } }, formTooltip: { fields: { text1: tooltip } } }) => {

    const { formRef } = useScroll();

    const { modalOpen, handleModal } = useModal();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [request, setRequest] = useState({ loading: false, correct: false, failure: false });

    const { loading, correct, failure } = request;

    const [closed, setClosed] = useState(false);

    const [messages, setMessages] = useState({ name: false, surname: false, email: false, topic: false, content: false });

    const displayTooltip = (name) => {
        setMessages(prevState => ({ ...prevState, [name]: !messages[name] }));
        setTimeout(() => setMessages(prevState => (
            { ...prevState, [name]: false }
        )), 5000);
    };

    const getBtnContent = () => {
        if (failure) return <><img src={ErrorIcon.src} alt='error-icon' /><span>Coś poszło nie tak. Spróbuj jeszcze raz.</span><span>Spróbuj jeszcze raz.</span></>
        if (correct) return <><img src={SuccessIcon.src} alt='success-icon' /><span>Wiadomość wysłana! Odpowiemy wkrótce.</span><span>Wiadomość wysłana!</span></>
        if (loading) return <img src={LoaderIcon.src} alt='loader-icon' />
        return 'Wyślij wiadomość'
    };

    const closeModal = () => {
        setClosed(true);
        setTimeout(() => handleModal('close'), 400);
    }

    const onFormSubmit = (data) => {

        const { name, surname, email, topic, content, consent, userCode } = data;

        if (!userCode) {
            setRequest({ ...request, loading: true, correct: false, failure: false });
            setTimeout(() => {
                axios.post('https://formcarry.com/s/D_0rPBQNVQl', {
                    name,
                    surname,
                    email,
                    topic,
                    content,
                    consent,
                })
                    .then((res) => {
                        if (res.status === 200) {
                            setRequest({ ...request, correct: true, loading: false, failure: false });
                            reset();
                        } else {
                            throw new Error('Request failed')
                        }
                    })
                    .catch(() => {
                        setRequest({ ...request, failure: true, correct: false, loading: false })
                    })
            }, 500);
        } else {
            setRequest({ ...request, loading: true, correct: false, failure: false });
            setTimeout(() => {
                axios.post('https://formcarry.com/s/D_0rPBQNVQl', {
                    name,
                    surname,
                    email,
                    topic,
                    content,
                    consent,
                    gotcha: userCode
                })
                    .then((res) => {
                        if (res.status === 200) {
                            setRequest({ ...request, correct: true, loading: false, failure: false });
                            reset();
                        } else {
                            throw new Error('Request failed')
                        }
                    })
                    .catch(() => {
                        setRequest({ ...request, failure: true, correct: false, loading: false })
                    })
            }, 500);
        }
    };

    return (
        <FormWrapper ref={formRef} modalOpen={modalOpen}>
            <Form modalOpen={modalOpen} closed={closed} onSubmit={handleSubmit(onFormSubmit)} >
                <StyledH3>{title}</StyledH3>
                <Description as='div'>{documentToReactComponents(description)}</Description>
                <Names>
                    <NameField>
                        <Label htmlFor='name' as='label'>Imię</Label>
                        <Input contact
                            id='name'
                            name='name'
                            text='Wpisz swoje imię'
                            {...register("name", { required: true })}
                            error={!!errors.name}
                            icon={!!errors.name && true}
                            message='Wpisz imię'
                            activeMessage={messages.name}
                            displayTooltip={displayTooltip}
                        />
                    </NameField>
                    <NameField>
                        <Label htmlFor='surname' as='label'>Nazwisko</Label>
                        <Input contact
                            id='surname'
                            name='surname'
                            text='Wpisz swoje nazwisko'
                            {...register("surname", { required: true })}
                            error={!!errors.surname}
                            icon={!!errors.surname && true}
                            message='Wpisz nazwisko'
                            activeMessage={messages.surname}
                            displayTooltip={displayTooltip}
                        />
                    </NameField>
                </Names>
                <FormField>
                    <Label htmlFor='email' as='label'>Adres email</Label>
                    <Input contact
                        id='email'
                        name='email'
                        text='Wpisz swój adres e-mail'
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                        error={!!errors.email}
                        icon={!!errors.email && true}
                        message='Wpisz adres e-mail'
                        activeMessage={messages.email}
                        displayTooltip={displayTooltip}
                    />
                </FormField>
                <FormField>
                    <Label htmlFor='topic' as='label'>Temat</Label>
                    <Input contact
                        id='topic'
                        name='topic'
                        text='Temat wiadomości'
                        {...register("topic", { required: true })}
                        error={!!errors.topic}
                        icon={!!errors.topic && true}
                        message='Wpisz temat'
                        activeMessage={messages.topic}
                        displayTooltip={displayTooltip}
                    />
                </FormField>
                <FormField>
                    <Label htmlFor='content' as='label'>Treść</Label>
                    <Input contact
                        id='content'
                        name='content'
                        text='O czym chcesz z nami porozmawiać?'
                        isTextArea
                        {...register("content", { required: true })}
                        error={!!errors.content}
                        icon={!!errors.content && true}
                        message='Wpisz treść wiadomości'
                        activeMessage={messages.content}
                        displayTooltip={displayTooltip}
                    />
                </FormField>
                <Declaration>
                    <Input checkbox
                        id='consent'
                        name='consent'
                        {...register('consent', { required: true })}
                        error={!!errors.consent}
                        icon={!!errors.consent && true} />
                    <Label htmlFor='consent' as='label'>Zapoznałem się z
                        <PrivacyLink as='a' target='_blank' href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/">informacją o administratorze i przetwarzaniu danych.</PrivacyLink>
                        <Info>{documentToReactComponents(tooltip)}</Info>
                    </Label>
                </Declaration>
                <UserCode
                    type='text'
                    name="userCode"
                    id='userCode'
                    {...register('userCode')} />
                <FormSubmit type='submit'
                    process={loading}
                    correct={correct}
                    failure={failure}
                    onClick={() => { if (correct) closeModal() }}
                >
                    {
                        getBtnContent()
                    }
                </FormSubmit>
                {modalOpen ?
                    <CloseButton type='button' onClick={closeModal} ><img src={CloseIcon.src} alt="close-icon" /> </CloseButton> :
                    null
                }
            </Form>
            {modalOpen ? <Layer closed={closed} /> : null}
        </FormWrapper>
    )
}

ContactForm.propTypes = {
    formText: PropTypes.objectOf(PropTypes.any).isRequired,
    formTooltip: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default ContactForm

