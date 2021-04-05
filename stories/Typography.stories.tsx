import { Story, Meta } from '@storybook/react'

import { Typography, Props } from '../components/Typography/Typography'

export default {
  title: 'UI Kit/Typography',
  component: Typography,
} as Meta

const Template: Story = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Typography variant="h1">H1 Headline</Typography>
    <Typography variant="h2">H2 Headline</Typography>
    <Typography variant="h3">H3 Headline</Typography>
    <Typography variant="h4">H4 Headline</Typography>
    <Typography variant="h5">H5 Headline</Typography>
    <Typography variant="h6">H6 Headline</Typography>
    <Typography variant="subtitle1">Subtitle 1</Typography>
    <Typography variant="subtitle2">Subtitle 2</Typography>
    <Typography variant="body1">Body 1</Typography>
    <Typography variant="body2">Body 2</Typography>
  </div>
)

export const General = Template.bind({})
General.args = {}

const TemplateDefault: Story<Props> = (args) => (
  <Typography {...args}>Some random text</Typography>
)

export const Default = TemplateDefault.bind({})
