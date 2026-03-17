import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
    logo: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src="/logo.png" alt="WardSeal Logo" style={{ height: '24px' }} />
        </div>
    ),
    project: {
        link: 'https://github.com/dhawalhost/wardseal',
    },
    docsRepositoryBase: 'https://github.com/dhawalhost/wardseal/tree/main/web/docs',
    footer: {
        text: 'WardSeal — Open Source Identity & Access Management',
    },
    useNextSeoProps() {
        return {
            titleTemplate: '%s – WardSeal',
        }
    },
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content="WardSeal Documentation" />
            <meta property="og:description" content="Official documentation for WardSeal Identity Infrastructure." />
            <link rel="icon" type="image/svg+xml" href="/logo.png" />
        </>
    ),
    sidebar: {
        defaultMenuCollapseLevel: 1,
        toggleButton: true,
    },
}

export default config
