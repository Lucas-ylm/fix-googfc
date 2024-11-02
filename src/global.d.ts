declare var googletag: {
  cmd: Array<() => void>;
  display: (adSlot: string) => void;
  defineSlot: (
    adUnitPath: string,
    size: Array<Array<number>>,
    divId: string
  ) => {
    addService: (service: any) => void;
    setTargeting: (key: string, value: string) => void;
  };
  pubads: () => {
    refresh(): unknown;
    enableSingleRequest: () => void;
    enableServices: () => void;
  };
};
