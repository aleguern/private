interface RouteListI {
  step: number,
  time: number,
  name: string,
  route: string
};

interface CurrentRouteInformationsI {
  name: string,
  time: number,
  step: number
}

enum Popups {
  BREADCRUMB_STEPS_POPUP = 'BREADCRUMB_STEPS_POPUP',
  HELP_POPUP = 'HELP_POPUP'
}
