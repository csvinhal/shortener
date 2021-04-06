import styled from 'styled-components'

interface Props {
  color: string
}

const ColorContent = styled.div<Props & { position: number }>`
  width: 100%;
  height: '100%';
  background-color: ${({ color, position }) =>
    `var(--color-${color}-${position})`};
`

export const Colors = ({ color }: Props): JSX.Element => {
  const colors = []

  for (let i = 1; i < 7; i++) {
    colors.push(<ColorContent color={color} position={i} />)
  }
  return <>{colors}</>
}
