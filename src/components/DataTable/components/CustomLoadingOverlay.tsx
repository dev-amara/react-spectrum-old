import { LinearProgress } from "@material-ui/core";
import { GridOverlay } from "@material-ui/data-grid";

export default () => (
  <GridOverlay>
    <div style={{ position: "absolute", top: 0, width: "100%" }}>
      <LinearProgress />
    </div>
  </GridOverlay>
);
