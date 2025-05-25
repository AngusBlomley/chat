import * as React from 'react';
import { cn } from '../../lib/utils';
import styled from 'styled-components';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <InputText
      type={type}
      data-slot='input'
      className={cn(className)}
      {...props}
    />
  );
}

const InputText = styled.input`
  padding: 15px 20px;
  border: 1px solid black;
  border-radius: 2px;
  width: 500px;
`;

export { Input };
