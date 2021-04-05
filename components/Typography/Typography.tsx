import { DetailedHTMLProps, HTMLAttributes, ReactNode, useMemo } from 'react'
import styled from 'styled-components'
import { theme } from '../ThemeProvider/ThemeProvider'

type Headers = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type Component = Headers | 'p' | 'span'

type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'

export interface Props {
  className?: string
  children: ReactNode
  component?: Component
  variant?: Variant
  emphasys?: boolean
}

interface BaseComponentProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  variant?: Variant
  emphasys?: boolean
}

const Component = styled.p<BaseComponentProps>`
  margin: 0;
  font-stretch: normal;
  font-style: normal;
  font-weight: ${({emphasys}) => emphasys ? 'bold' : 'normal'};
  font-size: ${({ variant }) => `var(--font-size-${variant})`};
  line-height: ${({ variant }) => `var(--line-height-${variant})`};
  letter-spacing: ${({ variant }) => `var(--letter-spacing-${variant})`};
`

export const Typography: React.FC<Props> = ({
  className,
  children,
  component,
  variant,
  emphasys,
}: Props) => {
  const tag = useMemo<Component>(() => {
    if (component) {
      return component
    }

    return theme.variantMapping[variant] as Component
  }, [variant])

  return (
    <Component className={className} as={tag} variant={variant} emphasys={emphasys}>
      {children}
    </Component>
  )
}

Typography.defaultProps = {
  variant: 'body1',
  emphasys: false,
}
