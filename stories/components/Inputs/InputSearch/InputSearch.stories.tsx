import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputSearch from '../../../../src/components/Inputs/InputSearch';


export default {
  title: 'Example/InputSearch',
  component: InputSearch,
  parameters: {    
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof InputSearch>;

const Template: ComponentStory<typeof InputSearch> = (args) => <InputSearch {...args} />;

export const InputNewsletter = Template.bind({});

InputNewsletter.args = {
    id: 'test',    
    placeholder: 'O que deseja encontrar?',    
}

