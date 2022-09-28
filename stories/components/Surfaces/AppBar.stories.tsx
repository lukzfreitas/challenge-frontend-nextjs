import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AppBar from '../../../src/components/Surfaces/AppBar';


export default {
  title: 'Example/InputSearch',
  component: AppBar,
  parameters: {    
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof AppBar>;

const Template: ComponentStory<typeof AppBar> = () => <AppBar/>;

export const AppBarTemplate = Template.bind({});


