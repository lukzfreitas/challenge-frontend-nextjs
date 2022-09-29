import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '../../../../src/components/Inputs/Input';



export default {
  title: 'Example/Input',
  component: Input,
  parameters: {    
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputTemplate = Template.bind({});

InputTemplate.args = {
    value: 'André Lisboa',    
    label: 'Nome'
}

