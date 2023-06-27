import React from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { typography, colors } from "../styles";
import { useAuth } from "../context/auth-context";

const Title = styled.h1`
  ${typography.head.lg}
  font-weight: 600;
`;

const Form = styled.form`
  width: 100%;
  border-radius: 6px;
  color: ${colors.gray[600]};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  background-color: ${colors.white};
`;

const Label = styled.label`
  font-size: 12px;
  font-family: Inter;
  line-height: 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

const Input = styled.input`
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  padding: 8px 12px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid ${colors.gray[200]};
  background: ${colors.white};
`;

const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 6px 16px;
  align-items: flex-start;
  color: ${colors.white};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
  background-color: ${colors.pink[600]};
  ${typography.text.md};
  &:active {
    background-color: ${colors.pink[400]};
  }
`;

const StyledNavLink = styled(NavLink)`
  padding: 0.5rem;
  display: flex;
  gap: 0.75rem;
  ${typography.text.sm};
  color: ${colors.pink[500]};
  font-weight: 400;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  &:focus {
    border-bottom: 1px solid ${colors.pink[400]};
  }
`;

export default function SignUpPage() {
  const { login } = useAuth();

  function handleSubmit(event) {
    event.preventDefault();

    const { email, password } = event.target.elements;

    const credentials = {
      email: email.value,
      password: password.value,
    };

    login(credentials).catch((error) => console.log(error));
  }

  return (
    <div
      style={{
        width: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <Title>Sign Up</Title>
      <Form onSubmit={handleSubmit}>
        <div
          style={{
            width: "100%",
          }}
        >
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" />
        </div>
        <div
          style={{
            width: "100%",
          }}
        >
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" />
        </div>
        <div
          style={{
            width: "100%",
          }}
        >
          <Label htmlFor="fisrtname">Firstname</Label>
          <Input id="firstname" name="firstname" />
        </div>
        <div
          style={{
            width: "100%",
          }}
        >
          <Label htmlFor="lastname">Lastname</Label>
          <Input id="lastname" name="lastname" />
        </div>
        <div
          style={{
            width: "100%",
          }}
        >
          <Label htmlFor="phone">phone</Label>
          <Input id="phone" name="phone" />
        </div>
        <SubmitButton type="submit">Sign Up</SubmitButton>
      </Form>
      <StyledNavLink to={"login"}>Login</StyledNavLink>
    </div>
  );
}
