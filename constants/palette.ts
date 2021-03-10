export interface Theme {
  presets: {
    heading?: any
    subheading?: any
    body?: any
  }
  size: {
    h1: number
    h2: number
    h3: number
    h4: number
    h5: number
    h6: number
    text: number
  }
  colors: {
    primary: string
    primaryGradient: string
    transparentPrimary: string
    accent: string
    text: string
    surface: string
    backdrop: string
  }
  spacing: {
    bodyWrapper: number
    itemGutter: number
    sectionVerticalDistance: number
    insets: {
      top: number
      bottom: number
      left: number
      right: number
    }
  }
  borderRadius: number
  shadow: {
    ios: object
    android: object
  }
  tabBar: {
    activeTintColor: string
    tintColor: string
  }
  fontSize: {
    h1: number
    h2: number
    h3: number
    h4: number
    h5: number
    h6: number
    h7: number
    h8: number
  }
}

export const defaultTheme: Theme = {
  presets: {
    heading: {
      fontSize: 28,
      fontWeight: 'bold',
      color: 'white'
    },
    subheading: {
      fontSize: 20,
      fontWeight: 'semi-bold',
      color: '#193254'
    },
    body: {
      fontSize: 18
    }
  },
  size: {
    h1: 28,
    h2: 20,
    h3: 16,
    h4: 14,
    h5: 12,
    h6: 10,
    text: 10
  },
  colors: {
    primary: '#f6b111',
    primaryGradient: '#FFD060',
    transparentPrimary: '#fdefcf',
    accent: '#193254',
    text: '#888888',
    surface: '#ffffff',
    backdrop: '#333333'
  },
  spacing: {
    bodyWrapper: 10,
    itemGutter: 5,
    sectionVerticalDistance: 10,
    insets: {
      top: 10,
      bottom: 10,
      left: 10,
      right: 10
    }
  },
  borderRadius: 6,
  shadow: {
    ios: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 5
    },
    android: {
      elevation: 2
    }
  },
  tabBar: {
    activeTintColor: '#193254',
    tintColor: '#c5c5c5'
  },
  fontSize: {
    h1: 50,
    h2: 30,
    h3: 22,
    h4: 20,
    h5: 16,
    h6: 14,
    h7: 12,
    h8: 18
  }
}

export const redTheme = {
  presets: {
    heading: {
      fontSize: 28,
      fontWeight: 'bold',
      color: 'white'
    },
    subheading: {
      fontSize: 20,
      fontWeight: 'semi-bold',
      color: 'white'
    },
    body: {
      fontSize: 18
    }
  },
  size: {
    h1: 28,
    h2: 20,
    h3: 16,
    h4: 14,
    h5: 12,
    h6: 10,
    text: 10
  },
  colors: {
    primary: '#730116',
    primaryGradient: '#b80425',
    transparentPrimary: '#fff6f6',
    accent: '#193254',
    text: '#888888',
    surface: '#ffffff',
    backdrop: '#333333'
  },
  spacing: {
    bodyWrapper: 10,
    itemGutter: 3,
    sectionVerticalDistance: 10,
    insets: {
      top: 10,
      bottom: 10,
      left: 10,
      right: 10
    }
  },
  borderRadius: 6,
  shadow: {
    ios: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 5
    },
    android: {
      elevation: 2
    }
  },
  tabBar: {
    activeTintColor: '#193254',
    tintColor: '#c5c5c5'
  },
  fontSize: {
    h1: 50,
    h2: 30,
    h3: 22,
    h4: 20,
    h5: 16,
    h6: 14,
    h7: 12,
    h8: 18
  }
}

declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}
