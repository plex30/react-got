import { Route, Switch } from "react-router-dom";
import { TimelinePage } from "../../../pages/TimelinePage/TimelinePage";
import { HomePage } from "../../../pages/HomePage/HomePage";
import { CharactersPage } from "../../../pages/CharactersPage/CharactersPage";
import { CharactersDetailPage } from "../../../pages/CharactersPage/pages/CharactersDetailPage/CharactersDetailPage";
import { HousesPage } from "../../../pages/HousesPage/HousesPage";
import { HousesDetails } from "../../../pages/HousesPage/HousesDetails/HousesDetails";


export function Routes() {
  return (
    <Switch>
      <Route path="/houses/:name">
          <HousesDetails></HousesDetails>
      </Route>
      <Route path="/houses">
          <HousesPage></HousesPage>
      </Route>
      <Route path="/characters/:name">
          <CharactersDetailPage></CharactersDetailPage>
      </Route>
      <Route path="/characters">
          <CharactersPage></CharactersPage>
      </Route>
      <Route path="/timeline">
          <TimelinePage></TimelinePage>
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
