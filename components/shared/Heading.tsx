import styled from 'styled-components';
import { Size, Space } from '../../types';

interface HeadingProps {
  gutter?: Space;
  size?: Size;
  color?: string;
}

const Heading = styled.h2.attrs<HeadingProps>(({ gutter = 'none', size = 3 }) => ({
  gutter,
  size,
}))<HeadingProps>`
  font-size: ${(props) => `var(--size-${props.size})`};
  margin-bottom: ${(props) => `var(--space-${props.gutter})`};
  color: ${(props) => props.color && props.color};
  line-height: 1.2;
`;

export default Heading;
