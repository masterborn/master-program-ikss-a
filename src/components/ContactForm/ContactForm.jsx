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
import {
  FormWrapper,
  Form,
  StyledH3,
  Description,
  Names,
  NameField,
  FormField,
  Label,
  Declaration,
  PrivacyInfo,
  Info,
  FormSubmit,
  Layer,
  CloseButton,
  UserCode,
  Reset,
} from './ContactForm.styles';
import Input from '../FormElements/Input';

const url = process.env.NEXT_PUBLIC_FORMCARRY_URL;

const ContactForm = ({
  formText: {
    fields: { title, text1: description },
  },
  formTooltip: {
    fields: { text1: tooltip },
  },
  isModal,
}) => {
  const formRef = useRef(null);

  const { formWrapperRef } = useScroll();

  const { height: windowHeight } = useWindowSize();

  const { modalOpen, handleModal } = useModal();

  const [closed, setClosed] = useState(false);

  const [messages, setMessages] = useState({
    name: false,
    surname: false,
    email: false,
    topic: false,
    content: false,
    privacy: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const {
    isLoading,
    isError,
    isSuccess,
    mutate,
    reset: resetQuery,
  } = useMutation(
    async (mail) => {
      const response = await axios.post(url, {
        name: mail.name,
        surname: mail.surname,
        email: mail.email,
        topic: mail.topic,
        content: mail.content,
        consent: mail.consent,
        ...(mail.userCode ? { _gotcha: mail.userCode } : {}),
      });
      if (response.status === 200) reset();
    },
    {
      retry: false,
    },
  );

  const onFormSubmit = (data) => mutate(data);

  const displayTooltip = (name) => {
    if (messages[name]) setMessages((prevState) => ({ ...prevState, [name]: false }));
    else {
      setMessages((prevState) => ({ ...prevState, [name]: !messages[name] }));
      setTimeout(() => setMessages((prevState) => ({ ...prevState, [name]: false })), 5000);
    }
  };

  const getBtnContent = () => {
    if (isError)
      return (
        <>
          <img src={ErrorIcon.src} alt="error-icon" />
          <span>Co?? posz??o nie tak. Spr??buj jeszcze raz.</span>
          <span>Spr??buj jeszcze raz.</span>
        </>
      );
    if (isSuccess)
      return (
        <>
          <img src={SuccessIcon.src} alt="success-icon" />
          <span>Wiadomo???? wys??ana! Odpowiemy wkr??tce.</span>
          <span>Wiadomo???? wys??ana!</span>
        </>
      );
    if (isLoading) return <img src={LoaderIcon.src} alt="loader-icon" />;
    return 'Wy??lij wiadomo????';
  };

  const closeModal = () => {
    setClosed(true);
    setTimeout(() => {
      handleModal('close');
      setClosed(false);
      if (isError || isSuccess) resetQuery();
    }, 400);
  };

  return (
    <FormWrapper ref={formWrapperRef} modalOpen={modalOpen} isModal={isModal}>
      <Form
        modalOpen={modalOpen}
        isModal={isModal}
        closed={closed}
        onSubmit={handleSubmit(onFormSubmit)}
        ref={formRef}
        aria-label="contact form"
      >
        <StyledH3>{title}</StyledH3>
        <Description as="div">{documentToReactComponents(description)}</Description>
        <Names>
          <NameField>
            <Label htmlFor="name" as="label" role="alert" label="name">
              Imi??
            </Label>
            <Input
              contact
              id="name"
              name="name"
              text="Wpisz swoje imi??"
              {...register('name', { required: true, minLength: 2, maxLength: 255 })}
              error={!!errors.name}
              icon={!!errors.name}
              message="Imi?? powinno zawiera?? od 2 do 255 znak??w"
              activeMessage={messages.name}
              displayTooltip={displayTooltip}
              aria-required="true"
              contenteditable="true"
              aria-placeholder="Write your name"
              aria-labelledby="your name"
            />
          </NameField>
          <NameField>
            <Label htmlFor="surname" as="label" role="alert" label="surname">
              Nazwisko
            </Label>
            <Input
              contact
              id="surname"
              name="surname"
              text="Wpisz swoje nazwisko"
              {...register('surname', { required: true, minLength: 2, maxLength: 255 })}
              error={!!errors.surname}
              icon={!!errors.surname}
              message="Nazwisko powinno zawiera?? od 2 do 255 znak??w"
              activeMessage={messages.surname}
              displayTooltip={displayTooltip}
              role="textbox"
              contenteditable="true"
              aria-placeholder="Write your surname"
              aria-labelledby="your surname"
              aria-required="true"
            />
          </NameField>
        </Names>
        <FormField>
          <Label htmlFor="email" as="label" role="alert" label="email adress">
            Adres email
          </Label>
          <Input
            contact
            id="email"
            name="email"
            text="Wpisz sw??j adres e-mail"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            error={!!errors.email}
            icon={!!errors.email}
            message="Wpisz adres e-mail w poprawnym formacie"
            activeMessage={messages.email}
            displayTooltip={displayTooltip}
            aria-required="true"
            role="textbox"
            contenteditable="true"
            aria-placeholder="Write your email address"
            aria-labelledby="your email address"
          />
        </FormField>
        <FormField>
          <Label htmlFor="topic" as="label" role="alert" label="Subject">
            Temat
          </Label>
          <Input
            contact
            id="topic"
            name="topic"
            text="Temat wiadomo??ci"
            {...register('topic', { required: true, minLength: 5, maxLength: 255 })}
            error={!!errors.topic}
            icon={!!errors.topic}
            message="Temat powinien zawiera?? od 5 do 255 znak??w"
            activeMessage={messages.topic}
            displayTooltip={displayTooltip}
            role="textbox"
            contenteditable="true"
            aria-placeholder="Write the subject of your email"
            aria-labelledby="the subject line"
            aria-required="true"
          />
        </FormField>
        <FormField>
          <Label htmlFor="content" as="label" role="alert" label="your message">
            Tre????
          </Label>
          <Input
            contact
            id="content"
            name="content"
            text="O czym chcesz z nami porozmawia???"
            isTextArea
            {...register('content', { required: true, minLength: 15, maxLength: 5000 })}
            error={!!errors.content}
            icon={!!errors.content}
            message="Wiadomo???? powinna zawiera?? od 15 do 5000 znak??w"
            activeMessage={messages.content}
            displayTooltip={displayTooltip}
            aria-required="true"
            contenteditable="true"
            aria-placeholder="Write your message here"
            aria-labelledby="your message"
          />
        </FormField>
        <Declaration>
          <Input
            checkbox
            id="consent"
            name="consent"
            {...register('consent', { required: true })}
            error={!!errors.consent}
            icon={!!errors.consent}
            aria-checked="false"
            aria-required="true"
            aria-labelledby="consent"
          />
          <Label as="label" role="alert">
            Zapozna??em si?? z
            <PrivacyInfo as="span" name="privacy" onClick={() => displayTooltip('privacy')}>
              informacj?? o administratorze i przetwarzaniu danych.
            </PrivacyInfo>
            <Info activeMessage={messages.privacy} isModal={isModal}>
              {documentToReactComponents(tooltip)}
            </Info>
          </Label>
        </Declaration>
        <UserCode type="text" name="userCode" id="userCode" {...register('userCode')} />
        <FormSubmit type="submit" process={isLoading} correct={isSuccess} failure={isError}>
          {getBtnContent()}
        </FormSubmit>
        {modalOpen ? (
          <CloseButton type="button" onClick={closeModal}>
            <img src={CloseIcon.src} alt="close-icon" aria-label="click to close the form" />{' '}
          </CloseButton>
        ) : null}
        {isSuccess && <Reset onClick={closeModal} isModal={isModal} />}
      </Form>
      {modalOpen ? (
        <Layer
          closed={closed}
          onClick={closeModal}
          formHeight={formRef.current.offsetHeight}
          windowHeight={windowHeight}
        />
      ) : null}
    </FormWrapper>
  );
};

ContactForm.propTypes = {
  formText: PropTypes.objectOf(PropTypes.any).isRequired,
  formTooltip: PropTypes.objectOf(PropTypes.any).isRequired,
  isModal: PropTypes.bool.isRequired,
};

export default ContactForm;
