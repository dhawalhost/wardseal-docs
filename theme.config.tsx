import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
    logo: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src="/wardseal.svg" alt="WardSeal Logo" style={{ height: '24px' }} />
            <span style={{ fontWeight: 800, letterSpacing: '-0.02em', fontSize: '16px' }}>WardSeal</span>
            <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.4 }}>Docs</span>
        </div>
    ),
    project: {
        link: 'https://github.com/dhawalhost/wardseal',
    },
    docsRepositoryBase: 'https://github.com/dhawalhost/wardseal-docs',
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
            <link rel="icon" type="image/svg+xml" href="/wardseal.svg" />
        </>
    ),
    sidebar: {
        defaultMenuCollapseLevel: 1,
        toggleButton: true,
    },
}

export default config
