import { useState } from "react";
import { Button, Container } from "./styles";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "@emailjs/browser";

export function InputButton({ icon: Icon, title, ...rest }) {
  const [email, setEmail] = useState("");

  const notifyError = () =>
    toast.error("O email digitado não é válido.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notifySuccess = () =>
    toast.success(
      "Email cadastrado! Você receberá nossas novidades no seu e-mail",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function handleMailSubmit() {
    if (!isValidEmail(email)) {
      notifyError();
      return;
    } else {
      notifySuccess();

      const templateParams = {
        user_email: email,
        message: "Sua mensagem personalizada aqui...",
      };

      emailjs
        .send(
          "service_wxcowdj",
          "template_zzafle3",
          templateParams,
          "C-o9l6n6rLdnMxAu1"
        )
        .then(
          (response) => {
            console.log("Email enviado com sucesso!", response);
            setEmail("");
          },
          (error) => {
            console.log("Erro ao enviar o email:", error);
          }
        );
    }
  }

  return (
    <Container>
      <div>
        {Icon && <Icon size={25} />}
        <input
          {...rest}
          value={email}
          name="user_email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Button {...rest} onClick={handleMailSubmit}>
        {title}
      </Button>
    </Container>
  );
}
