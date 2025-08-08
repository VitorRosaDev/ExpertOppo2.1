import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Expert Oppo',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
    },
    CapacitorAssets: {
      iconPath: 'resources/icon.png',
      splashPath: 'resources/splash.png',
    },
  },
};

export default config;