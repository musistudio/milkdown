/* Copyright 2021, Milkdown by Mirone. */
import type { ConfigItem, Local } from './page-router';

export const config: ConfigItem[] = [
    {
        dir: 'guide',
        items: [
            'why-milkdown',
            'getting-started',
            'interacting-with-editor',
            'commands',
            'styling',
            'keyboard-shortcuts',
        ],
    },
    {
        dir: 'integrations',
        items: ['react', 'vue'],
    },
    {
        dir: 'plugins',
        items: [
            'using-plugins',
            'integrating-plugins',
            'writing-syntax-plugins',
            'writing-theme-plugins',
            'writing-custom-plugins',
        ],
    },
    {
        dir: 'internals',
        items: ['node-and-mark', 'parser', 'serializer', 'internal-plugins'],
    },
];

export const i18nConfig: Record<Local, { display: string; route: string }> = {
    en: {
        display: 'English',
        route: '',
    },
    'zh-hans': {
        display: '简体中文',
        route: 'zh-hans',
    },
};
