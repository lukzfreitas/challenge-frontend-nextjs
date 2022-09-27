import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from '../../../../pages/src/components/Inputs/Input';


export default {
  title: 'Example/Input',
  component: Input,
  parameters: {    
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputNewsletter = Template.bind({});

InputNewsletter.args = {
    id: 'test',    
    placeholder: 'O que deseja encontrar?',
    height: '75px',
    width: '390px',
    fontSize: '16pt',
    backgroundColor: '#ffffff',
    border: '1px solid #2b2828',
    borderRadius: 4,
    iconUrl: '/search.png',    
    iconWidth: 40
}

