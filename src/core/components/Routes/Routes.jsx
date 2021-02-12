import { Route, Switch } from "react-router-dom";
import { TimelinePage } from "../../../pages/TimelinePage/TimelinePage";
import { HomePage } from "../../../pages/HomePage/HomePage";
import { CharactersPage } from "../../../pages/CharactersPage/CharactersPage";
import { HousesPage } from "../../../pages/HousesPage/HousesPage";

export function Routes() {
  return (
    <Switch>
      <Route path="/houses">
          <HousesPage></HousesPage>
      </Route>
      <Route path="/characters">
          <CharactersPage></CharactersPage>
      </Route>
      <Route path="/timeline">
          <TimelinePage></TimelinePage>
      </Route>
      <Route path="/">
          <HomePage></HomePage>
      </Route>
    </Switch>
  );
}
