export default class RouteCounterInteractor {
  defaultState() {
    return 0;
  }

  externalDependencies() {
    return [
      { on: ['@@router/LOCATION_CHANGE'], call: 'onLocationChange' }
    ]
  }

  onLocationChange() {
    return this.state + 1;
  }
}
