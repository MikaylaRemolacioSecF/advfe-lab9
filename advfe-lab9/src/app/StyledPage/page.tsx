'use client';
import styles from '../styles/StyledPage.module.css';
import styled, { css } from 'styled-components';

const DynamicButton = styled.button<{ bgColor?: string }>`
  background-color: ${props => props.bgColor || 'blue'};
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export default function StyledPage() {
  const headerStyle: React.CSSProperties = {
    backgroundColor: 'purple',
    fontSize: '2rem',
    padding: '20px',
    color: 'white',
    textAlign: 'center' as const,
  };

  

  return (
    <div className={styles.container}>
      <h1 style={headerStyle}>Welcome to the Styled Page</h1>
      <button className={styles.moduleButton}>CSS Module Button</button>
      <DynamicButton>Styled-Component Button</DynamicButton>
    </div>
  );
}
