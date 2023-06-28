import styled from "@emotion/styled";
import { colors, typography } from "../../styles";

export const Wrapper = styled.div`
  padding: 1.25rem 0.5rem;
  background-color: ${colors.gray[100]};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.25rem;
`;

export const Button = styled.button`
  background: none;
  border: none;
  ${typography.text.sm};
  cursor: pointer;
  color: ${colors.gray[600]};
  &:hover {
    background-color: ${colors.pink[100]};
    border_radius: 6px;
  }
  &:focus {
    outline: 1px solid ${colors.pink[500]};
    border_radius: 6px;
  }
`;

export const Name = styled.p`
  color: ${colors.gray[600]};
  ${typography.text.md};
`;
