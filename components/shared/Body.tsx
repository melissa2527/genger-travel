import styled from 'styled-components';
import { Size, Space } from '../../types';

interface BodyProps {
  gutter?: Space;
  size?: Size;
  color?: string;
}

const Body = styled.h2.attrs<BodyProps>(({ gutter = 'none', size = 0, color }) => ({
  gutter,
  size,
  color,
}))<BodyProps>`
  font-size: ${(props) => `var(--size-${props.size})`};
  margin-bottom: ${(props) => `var(--space-${props.gutter})`};
  color: ${(props) => props.color && props.color};
  line-height: 1.4;
  font-weight: 300;
`;

export default Body;
