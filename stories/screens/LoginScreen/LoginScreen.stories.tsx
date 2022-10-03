import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginScreen from '../../../src/screens/LoginScreen';

export default {
    title: 'Example/LoginScreen',
    component: LoginScreen,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof LoginScreen>;

const Template: ComponentStory<typeof LoginScreen> = (args) => <LoginScreen />;

export const InputTemplate = Template.bind({});

InputTemplate.args = {
    
}

