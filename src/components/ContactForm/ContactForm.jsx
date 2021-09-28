/* eslint-disable react/jsx-props-no-spreading */
// I had to disable eslint because react-hook-form requires props spreading
import React, { useState, useRef } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useMutation } from 'react-query';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useModal } from '@root/contextProviders/useModal';
import { useForm } from 'react-hook-form';
import { useScroll } from '@root/contextProviders/useScroll';
import { useWindowSize } from 'react-use';
import CloseIcon from '../icons/svgs/coolicon.svg';
import LoaderIcon from '../icons/svgs/loader.svg';
import SuccessIcon from '../icons/svgs/formSuccess.svg';
import ErrorIcon from '../icons/svgs/formError.svg';
import { FormWrapper, Form, StyledH3, Description, Names, NameField, FormField, Label, Declaration, PrivacyInfo, Info, FormSubmit, Layer, CloseButton, UserCode, Reset } from './ContactForm.styles';
import Input from '../FormElements/Input';

const ContactForm = ({
  formText: {
    fields: { title, text1: description },
  },
  formTooltip: {
    fields: { text1: tooltip },
  },
  isModal,
}) => {
  const { formRef } = useScroll();

const url = process.env.NEXT_PUBLIC_FORMCARRY_URL;

const ContactForm = ({ formText: { fields: { title, text1: description } }, formTooltip: { fields: { text1: tooltip } }, isModal }) => {

    const formRef = useRef(null);

    const { formWrapperRef } = useScroll();

    const { height: windowHeight } = useWindowSize();


  const [messages, setMessages] = useState({
    name: false,
    surname: false,
    email: false,
    topic: false,
    content: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

    const [messages, setMessages] = useState({ name: false, surname: false, email: false, topic: false, content: false, privacy: false });

  const onFormSubmit = (data) => mutate(data);

    const { isLoading, isError, isSuccess, mutate, reset: resetQuery } = useMutation(async (mail) => {
        const response = await axios.post(url, {
            name: mail.name,
            surname: mail.surname,
            email: mail.email,
            topic: mail.topic,
            content: mail.content,
            consent: mail.consent,
            ...(mail.userCode ? { _gotcha: mail.userCode } : {})
        });
        if (response.status === 200) reset();
    }, {
        retry: false
    });

  const getBtnContent = () => {
    if (isError)
      return (
        <>
          <img src={ErrorIcon.src} alt="error-icon" />
          <span>Coś poszło nie tak. Spróbuj jeszcze raz.</span>
          <span>Spróbuj jeszcze raz.</span>
        </>
      );
    if (isSuccess)
      return (
        <>
          <img src={SuccessIcon.src} alt="success-icon" />
          <span>Wiadomość wysłana! Odpowiemy wkrótce.</span>
          <span>Wiadomość wysłana!</span>
        </>
      );
    if (isLoading) return <img src={LoaderIcon.src} alt="loader-icon" />;
    return 'Wyślij wiadomość';
  };


ContactForm.propTypes = {
  formText: PropTypes.objectOf(PropTypes.any).isRequired,
  formTooltip: PropTypes.objectOf(PropTypes.any).isRequired,
  isModal: PropTypes.bool.isRequired,
};

export default ContactForm;
