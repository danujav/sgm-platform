import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography, Grid } from '@mui/material';

class Home extends Component {
    render() {
        return (
            <Grid container className="pt-2" spacing={3}>
                <Grid item lg={12} xs={12} sm={12} md={12}>
                    <Typography variant="h3">Dashboard</Typography>
                </Grid>
                <Grid item lg={4} xs={12} sm={12} md={6}>
                    <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "lightcoral" }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                In Stock
                            </Typography>
                            <Typography style={{ marginLeft: '18%' }} variant="h5" color="text.secondary">
                                {/* {this.state.supplierCount} */}
                                10
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={4} xs={12} sm={12} md={6}>
                    <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "lightslategray" }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Sold Items
                            </Typography>
                            <Typography style={{ marginLeft: '18%' }} variant="h5" color="text.secondary">
                                {/* {this.state.supplierCount} */}
                                54
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={4} xs={12} sm={12} md={6}>
                    <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "lightgreen" }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Law Stock
                            </Typography>
                            <Typography style={{ marginLeft: '18%' }} variant="h5" color="text.secondary">
                                {/* {this.state.supplierCount} */}
                                24
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={4} xs={12} sm={12} md={6}>
                    <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "lightskyblue" }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Cost
                            </Typography>
                            <Typography style={{ marginLeft: '18%' }} variant="h5" color="text.secondary">
                                {/* {this.state.supplierCount} */}
                                10000.00
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={4} xs={12} sm={12} md={6}>
                    <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "lightpink" }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Income
                            </Typography>
                            <Typography style={{ marginLeft: '18%' }} variant="h5" color="text.secondary">
                                {/* {this.state.supplierCount} */}
                                150000.00
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={4} xs={12} sm={12} md={6}>
                    <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "lightseagreen" }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Profit
                            </Typography>
                            <Typography style={{ marginLeft: '18%' }} variant="h5" color="text.secondary">
                                {/* {this.state.supplierCount} */}
                                95000.00
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={12} xs={12} sm={12} md={12}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Grid container spacing={3}>
                                <Grid item lg={6} xs={12} sm={12} md={6}>
                                    <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "lightsteelblue" }}>
                                        <CardContent>
                                            <Typography variant="h5" component="div">
                                                To Be Picked
                                            </Typography>
                                            <Typography style={{ marginLeft: '18%' }} variant="h5" color="text.secondary">
                                                {/* {this.state.supplierCount} */}
                                                15
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item lg={6} xs={12} sm={12} md={6}>
                                    <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "lightyellow" }}>
                                        <CardContent>
                                            <Typography variant="h5" component="div">
                                                To Be Shipped
                                            </Typography>
                                            <Typography style={{ marginLeft: '18%' }} variant="h5" color="text.secondary">
                                                {/* {this.state.supplierCount} */}
                                                25
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item lg={6} xs={12} sm={12} md={6}>
                                    <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "lightcyan" }}>
                                        <CardContent>
                                            <Typography variant="h5" component="div">
                                                Selling Orders
                                            </Typography>
                                            <Typography style={{ marginLeft: '18%' }} variant="h5" color="text.secondary">
                                                {/* {this.state.supplierCount} */}
                                                125
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item lg={6} xs={12} sm={12} md={6}>
                                    <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "lightsalmon" }}>
                                        <CardContent>
                                            <Typography variant="h5" component="div">
                                                Buying Orders
                                            </Typography>
                                            <Typography style={{ marginLeft: '18%' }} variant="h5" color="text.secondary">
                                                {/* {this.state.supplierCount} */}
                                                198
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

export default Home;