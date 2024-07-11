import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { init } from "@sentry/angular-ivy";


init({
  dsn: "https://4b0c25221ff24da3a11547878a6013a8@app.glitchtip.com/7276",
  environment: "production",
  release: "1.0.0",
  autoSessionTracking: false,
  tracesSampleRate: 0.01,
});



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
