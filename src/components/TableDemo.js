import {
    BottomNavigation,
    BottomNavigationAction,
    makeStyles,
    Typography
  } from "@material-ui/core";
  import { DataGrid } from "@material-ui/data-grid";
  import FavoriteIcon from "@material-ui/icons/Favorite";
  import LocationOnIcon from "@material-ui/icons/LocationOn";
  import RestoreIcon from "@material-ui/icons/Restore";
  import * as React from "react";
  const columns = [
    { field: "id", headerName: "ID", flex: 0.3 },
    { field: "firstName", headerName: "Nombre", flex: 1, editable: true },
    { field: "lastName", headerName: "Apellido", flex: 1, editable: true },
    {
      field: "age",
      headerName: "Edad",
      type: "number",
      flex: 0.5,
    },
    {
      field: "fullName",
      headerName: "Nombre Completo",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      flex: 1,
      valueGetter: (params) =>
        `${params.getValue("firstName") || ""} ${
          params.getValue("lastName") || ""
        }`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];
  
  const useStyles = makeStyles({
    root: {
      width: 280,
      textAlign: "left",
    },
  });
  
  export default function TableDemo() {
    const handleChange = (type) => {
      const options = ["standard", "comfortable", "compact"]
      setDensity(options[type])
      setButtonValue(type)
    };
  
    const classes = useStyles();
    const [density, setDensity] = React.useState("standard");
    const [buttonValue, setButtonValue] = React.useState(0)
  
    return (
      <div style={{ height: 450, width: "100%" }}>
        <Typography variant="body1" gutterBottom={true}>
          Cambiar densidad
        </Typography>
        <BottomNavigation
          value={buttonValue}
          onChange={(event, newValue) => {
            handleChange(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction label="Normal" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Confortable" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Compacta" icon={<LocationOnIcon />} />
        </BottomNavigation>
        <DataGrid rows={rows} columns={columns} pageSize={8} density={density} />
  
      
      </div>
    );
  }
  