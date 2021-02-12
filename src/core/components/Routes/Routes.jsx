import { Route, Switch } from "react-router-dom";
import { CasasPage } from "../../../pages/CasasPage/CasasPage";
import { CronologiaPage } from "../../../pages/CronologiaPage/CronologiaPage";
import { HomePage } from "../../../pages/HomePage/HomePage";
import { PersonajesPage } from "../../../pages/PersonajesPage/PersonajesPage";

export function Routes() {
  return (
    <Switch>
      <Route exact path="/casas">
          <CasasPage></CasasPage>
      </Route>
      <Route exact path="/personajes:_id">

      </Route>
      <Route exact path="/personajes">
          <PersonajesPage></PersonajesPage>
      </Route>
      <Route exact path="/cronologia">
          <CronologiaPage></CronologiaPage>
      </Route>
      <Route exact path="/">
          <HomePage></HomePage>
      </Route>
      <Route path="*">
          <p>Error</p>
      </Route>
    </Switch>
  );
}
