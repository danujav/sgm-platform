// import React, { Component } from "react";
// import { Grid, Typography } from "@mui/material";
// import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
// import GDSEButton from "../../components/common/Button";
// import GDSESnackBar from "../../components/common/SnackBar";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import DeleteIcon from "@mui/icons-material/Delete";
// import IconButton from "@mui/material/IconButton";
// import Tooltip from "@mui/material/Tooltip";
// import EditIcon from "@mui/icons-material/Edit";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";

// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';


// class Supplier extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       formData: {
//         gym_photo_url: "",
//         gym_location: "",
//         gym_category: "",
//       },
//       alert: false,
//       message: "",
//       severity: "",

//       data: [
//         {
//           id: "S001",
//           name: "Danuja",
//           address: "Galle",
//           tel: "0756122196",
//           email: "danu@gamail.com",
//           product: "Bike",
//         },
//         {
//           id: "S002",
//           name: "Induwara",
//           address: "Colombo",
//           tel: "0775842157",
//           email: "info.induwara.com",
//           product: "Car",
//         },
//         {
//           id: "S003",
//           name: "Saman",
//           address: "Panadura",
//           tel: "0765412100",
//           email: "saman.com",
//           product: "Cycle",
//         },
//       ],
//       btnLabel: "save",
//       btnClearLabel: "Clear",
//       btnColor: "primary",
//       btnClearColor: "warning",
//       gymBranchescount: "4",
//     };
//   }
//   loadData = async () => {};

//   deleteCustomer = async (id) => {
//     console.log("delete customer");
//   };

//   updateCustomer = (data) => {
//     console.log(data);

//     this.setState({
//       btnLabel: "update",
//       btnColor: "secondary",
//       formData: {
//         gym_photo_url: data.gym_photo,
//         gym_location: data.gym_location,
//         gym_category: data.gym_category,
//       },
//     });
//   };

//   clearFields = () => {
//     this.setState({
//       btnLabel: "save",
//       btnColor: "primary",
//       formData: {
//         gym_photo_url: "",
//         gym_location: "",
//         gym_category: "",
//       },
//     });
//   };

//   submitCustomer = async () => {
//     let formData = this.state.formData;

//     if (this.state.btnLabel === "save") {
//       console.log("save");
//     } else {
//       console.log("update");
//     }
//   };

//   setSupplierCount = () => {
//     this.setState({
//       supplierCount: this.state.data.length,
//     });
//   };

//   componentDidMount() {
//     this.loadData();
//     this.setSupplierCount();
//   }


 

//   render() {
//     return (
//       <>
//         <ValidatorForm
//           ref="form"
//           className="pt-2"
//           onSubmit={this.submitCustomer}
//         >
//           <Grid container className="pt-2" spacing={3}>
//             <Grid item lg={6} xs={12} sm={12} md={6}>
//               <Typography variant="h3">Add Gym Branches</Typography>
//             </Grid>
//             <Grid item lg={6} xs={12} sm={12} md={6}>
//               <Card variant="outlined">
//                 <CardContent style={{ marginLeft: "35%", color: "red" }}>
//                   <Typography variant="h6" component="div">
//                     Branches Count
//                   </Typography>
//                   <Typography
//                     style={{ marginLeft: "15%" }}
//                     variant="h4"
//                     color="text.secondary"
//                   >
//                     {this.state.gymBranchescount}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//             <Grid item xs={12} sm={12} md={4} lg={4}>
//               <InputLabel id="demo-simple-select-label">Age</InputLabel>
//               <Select
//                 labelId="demo-simple-select-label"
//                 id="demo-simple-select"
//                 value={this.state.gym_category}
//                 label="Age"
//                 // onChange={handleChange}
//               >
//                 <MenuItem value={10}>Ten</MenuItem>
//                 <MenuItem value={20}>Twenty</MenuItem>
//                 <MenuItem value={30}>Thirty</MenuItem>
//               </Select>
//             </Grid>
//             <Grid item xs={12} sm={12} md={4} lg={4}>
//               <Typography variant="subtitle1">Supplier Name</Typography>
//               <TextValidator
//                 id="outlinedbasic"
//                 placeholder="Customer Name"
//                 variant="outlined"
//                 size="small"
//                 style={{ width: "100%" }}
//                 value={this.state.formData.name}
//                 onChange={(e) => {
//                   let formData = this.state.formData;
//                   formData.name = e.target.value;
//                   this.setState({ formData });
//                 }}
//                 validators={["required"]}
//               />
//             </Grid>
//             <Grid item xs={12} sm={12} md={4} lg={4}>
//               <Typography variant="subtitle1">Supplier Address</Typography>
//               <TextValidator
//                 id="outlinedbasic"
//                 placeholder="Customer Address"
//                 variant="outlined"
//                 size="small"
//                 style={{ width: "100%" }}
//                 value={this.state.formData.address}
//                 onChange={(e) => {
//                   let formData = this.state.formData;
//                   formData.address = e.target.value;
//                   this.setState({ formData });
//                 }}
//                 validators={["required"]}
//               />
//             </Grid>
//             <Grid item xs={12} sm={12} md={4} lg={4}>
//               <Typography variant="subtitle1">Contact Number</Typography>
//               <TextValidator
//                 id="outlinedbasic"
//                 placeholder="Contact Number"
//                 variant="outlined"
//                 size="small"
//                 style={{ width: "100%" }}
//                 value={this.state.formData.tel}
//                 onChange={(e) => {
//                   let formData = this.state.formData;
//                   formData.tel = e.target.value;
//                   this.setState({ formData });
//                 }}
//                 validators={["required"]}
//               />
//             </Grid>
//             <Grid item xs={12} sm={12} md={4} lg={4}>
//               <Typography variant="subtitle1">Supplier Email</Typography>
//               <TextValidator
//                 id="outlinedbasic"
//                 placeholder="Supplier Email"
//                 variant="outlined"
//                 size="small"
//                 style={{ width: "100%" }}
//                 value={this.state.formData.email}
//                 onChange={(e) => {
//                   let formData = this.state.formData;
//                   formData.email = e.target.value;
//                   this.setState({ formData });
//                 }}
//                 validators={["required"]}
//               />
//             </Grid>
//             <Grid item xs={12} sm={12} md={4} lg={4}>
//               <Typography variant="subtitle1">Products</Typography>
//               <TextValidator
//                 id="outlinedbasic"
//                 placeholder="Products"
//                 variant="outlined"
//                 size="small"
//                 style={{ width: "100%" }}
//                 value={this.state.formData.product}
//                 onChange={(e) => {
//                   let formData = this.state.formData;
//                   formData.product = e.target.value;
//                   this.setState({ formData });
//                 }}
//                 validators={["required"]}
//               />
//             </Grid>
//             <Grid
//               container
//               style={{ marginTop: "10px" }}
//               direction="row"
//               justifyContent="flex-end"
//               alignItems="center"
//             >
//               <GDSEButton
//                 style={{ marginRight: "10px" }}
//                 onClick={this.clearFields}
//                 label={this.state.btnClearLabel}
//                 size="small"
//                 color={this.state.btnClearColor}
//                 variant="contained"
//               />
//               <GDSEButton
//                 label={this.state.btnLabel}
//                 type="submit"
//                 size="small"
//                 color={this.state.btnColor}
//                 variant="contained"
//               />
//             </Grid>
//           </Grid>
//         </ValidatorForm>
//         <Grid contaner style={{ marginTop: "15px" }}>
//           <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 650 }} aria-label="customer table">
//               <TableHead>
//                 <TableRow>
//                   <TableCell style={{ fontWeight: 1000 }} align="left">
//                     ID
//                   </TableCell>
//                   <TableCell style={{ fontWeight: 1000 }} align="left">
//                     Name
//                   </TableCell>
//                   <TableCell style={{ fontWeight: 1000 }} align="left">
//                     Address
//                   </TableCell>
//                   <TableCell style={{ fontWeight: 1000 }} align="left">
//                     Contact Number
//                   </TableCell>
//                   <TableCell style={{ fontWeight: 1000 }} align="left">
//                     Email
//                   </TableCell>
//                   <TableCell style={{ fontWeight: 1000 }} align="left">
//                     Productss
//                   </TableCell>
//                   <TableCell style={{ fontWeight: 1000 }} align="left">
//                     Action
//                   </TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {this.state.data.map((row) => (
//                   <TableRow>
//                     <TableCell align="left">{row.id}</TableCell>
//                     <TableCell align="left">{row.name}</TableCell>
//                     <TableCell align="left">{row.address}</TableCell>
//                     <TableCell align="left">{row.tel}</TableCell>
//                     <TableCell align="left">{row.email}</TableCell>
//                     <TableCell align="left">{row.product}</TableCell>
//                     <TableCell align="left">
//                       <Tooltip title="Edit">
//                         <IconButton
//                           onClick={() => {
//                             console.log("edit icon clicked!");
//                             this.updateCustomer(row);
//                           }}
//                         >
//                           <EditIcon color="primary" />
//                         </IconButton>
//                       </Tooltip>
//                       <Tooltip title="Delete">
//                         <IconButton
//                           onClick={() => {
//                             this.deleteCustomer(row.id);
//                           }}
//                         >
//                           <DeleteIcon color="error" />
//                         </IconButton>
//                       </Tooltip>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Grid>
//         <GDSESnackBar
//           open={this.state.alert}
//           onClose={() => {
//             this.setState({ alert: false });
//           }}
//           message={this.state.message}
//           autoHideDuration={3000}
//           severity={this.state.severity}
//           variant="filled"
//         />
//       </>
//     );
//   }
// }

// export default Supplier;
