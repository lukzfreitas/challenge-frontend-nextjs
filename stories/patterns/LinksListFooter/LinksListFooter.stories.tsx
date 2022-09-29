import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LinksListFooter from '../../../src/patterns/LinksListFooter';



export default {
    title: 'Example/LinksListFooter',
    component: LinksListFooter,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof LinksListFooter>;

const Template: ComponentStory<typeof LinksListFooter> = (args) => <LinksListFooter {...args} />;

export const InputTemplate = Template.bind({});

InputTemplate.args = {
    linksList: ['Quem somos nós', 'Política de privacidade', 'Programa fidelidade', 'Nossas lojas', 'Quero ser franqueado', 'Anuncie aqui'],
}

