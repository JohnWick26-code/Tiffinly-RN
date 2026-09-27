import { Mixpanel } from 'mixpanel-react-native';

class MixpanelInstance {
  private static instance: MixpanelInstance;
  private mixpanel: Mixpanel | null = null;

  private constructor() {}

  static getInstance(): MixpanelInstance {
    if (!MixpanelInstance.instance) {
      MixpanelInstance.instance = new MixpanelInstance();
    }

    return MixpanelInstance.instance;
  }

  async initialize(token: string) {
    this.mixpanel = new Mixpanel(token, true);
    await this.mixpanel.init();
  }

  track(
    eventName: string,
    properties?: Record<string, unknown>,
  ) {
    this.mixpanel?.track(eventName, properties);
  }
}

export default MixpanelInstance.getInstance();