import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../../../../src/components/Inputs/Button';


export default {
  title: 'Example/Button',
  component: Button,
  parameters: {    
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonPrimary = Template.bind({});

ButtonPrimary.args = {
    label: 'Texto',
    type: "primary"
}

export const ButtonSecondary = Template.bind({});

ButtonSecondary.args = {
    label: 'Texto',
    type: "secondary"
}
