import React from 'react';
import './DataGrid/company.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { StatsGridIcons } from './Stats/StatsGridIcons';
import DemoPie from './Chart/DemoChart';
import BarChart from './BarChart/BarChart';
import DemoWaterfall from './Waterfallchart/DemoWaterfall';
import DemoGauge from './Guage/DemoGuage';
import CompanyStatsSection from './DataGrid/CompanyStatsSection';
import { Typography } from '@mui/material';
import Sidebar from '../Sidebar/Sidebar';

function Dashboard() {
    return (
        <>
            {/* Sidebar */}
            <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-md z-10">
                <Sidebar />
            </div>

            {/* Main Content Box */}
            <Box sx={{ marginLeft: '256px', paddingTop: '20px' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'Black' }}>Dashboard</h1>
                <Box sx={{ width: '100%' }}>
                    <Grid container spacing={2}>
                        {/* This Grid is for the StatsGridIcons */}
                        <Grid item xs={11.7}>
                            <StatsGridIcons />
                        </Grid>

                        {/* This Grid is for the Company Visits Section */}
                        <Grid container spacing={3} sx={{ marginTop: '30px' }}>
                            {/* BarChart Section */}
                            <Grid item xs={12} sm={8} md={7} sx={{ backgroundColor: 'white', borderRadius: '8px', marginX: '45px' }}>
                                <div>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', marginLeft: '18px', color: 'black' }}>
                                        Company Visits
                                    </Typography>
                                    <BarChart />
                                </div>
                            </Grid>

                            {/* DemoPie Section */}
                            <Grid item xs={12} sm={6} md={4} sx={{ backgroundColor: 'white', borderRadius: '8px' }}>
                                <div>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', marginLeft: '18px', color: 'black' }}>
                                        Current Visits
                                    </Typography>
                                    <DemoPie />
                                </div>
                            </Grid>
                        </Grid>

                        {/* Additional Grid Section */}
                        <Grid container spacing={3} sx={{ marginTop: '30px' }}>
                            {/* DemoGauge Section */}
                            <Grid item xs={12} sm={6} md={4} sx={{ backgroundColor: 'white', marginX: '45px', borderRadius: '8px' }}>
                                <div>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', marginLeft: '18px', color: 'black' }}>
                                        Current Gauge
                                    </Typography>
                                    <DemoGauge />
                                </div>
                            </Grid>

                            {/* DemoWaterfall Section */}
                            <Grid item xs={12} sm={8} md={7} sx={{ backgroundColor: 'white', borderRadius: '8px' }}>
                                <div>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', marginLeft: '18px', color: 'black' }}>
                                        Data Analytics
                                    </Typography>
                                    <DemoWaterfall />
                                </div>
                            </Grid>

                            {/* Company Stats Section */}
                            <div className="Company">
                                <CompanyStatsSection />
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
}

export default Dashboard;
