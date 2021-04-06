import { Meta, Story } from '@storybook/react'
import styled from 'styled-components'
import { Colors } from './Colors'

export default {
  title: 'UI Kit/Colors',
} as Meta

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 96px);
  border-radius: 4px;
  grid-gap: 0px;
  overflow: hidden;
  width: 960px;
`

const Template: Story = () => (
  <Container>
    <div style={{ display: 'grid', gridTemplateRows: 'repeat(6, 96px)' }}>
      <Colors color="grey" />
    </div>
    <div style={{ display: 'grid', gridTemplateRows: 'repeat(6, 96px)' }}>
      <Colors color="pink" />
    </div>
    <div style={{ display: 'grid', gridTemplateRows: 'repeat(6, 96px)' }}>
      <Colors color="red" />
    </div>
    <div style={{ display: 'grid', gridTemplateRows: 'repeat(6, 96px)' }}>
      <Colors color="orange" />
    </div>
    <div style={{ display: 'grid', gridTemplateRows: 'repeat(6, 96px)' }}>
      <Colors color="yellow" />
    </div>
    <div style={{ display: 'grid', gridTemplateRows: 'repeat(6, 96px)' }}>
      <Colors color="green" />
    </div>
    <div style={{ display: 'grid', gridTemplateRows: 'repeat(6, 96px)' }}>
      <Colors color="teal" />
    </div>
    <div style={{ display: 'grid', gridTemplateRows: 'repeat(6, 96px)' }}>
      <Colors color="blue" />
    </div>
    <div style={{ display: 'grid', gridTemplateRows: 'repeat(6, 96px)' }}>
      <Colors color="indigo" />
    </div>
    <div style={{ display: 'grid', gridTemplateRows: 'repeat(6, 96px)' }}>
      <Colors color="purple" />
    </div>
  </Container>
)

export const General = Template.bind({})
