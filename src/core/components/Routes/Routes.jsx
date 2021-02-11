import { Route, Switch } from "react-router-dom";
import { CasasPage } from "../../../pages/CasasPage/CasasPage";
import { CronologiaPage } from "../../../pages/CronologiaPage/CronologiaPage";
import { HomePage } from "../../../pages/HomePage/HomePage";
import { PersonajesPage } from "../../../pages/PersonajesPage/PersonajesPage";

export function Routes() {
  return (
    <Switch>
      <Route path="/casas">
          <CasasPage></CasasPage>
      </Route>
      <Route path="/personajes">
          <PersonajesPage></PersonajesPage>
      </Route>
      <Route path="/cronologia">
          <CronologiaPage></CronologiaPage>
      </Route>
      <Route path="/">
          <HomePage></HomePage>
      </Route>
    </Switch>
  );
}
