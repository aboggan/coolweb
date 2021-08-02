import { Divider, Grid, Hidden } from '@material-ui/core';
import React from 'react';
import { Messagebox } from './MessageBox';
import MessageSideBar from './MessageSideBar';

export default function Mensajes(props) {
    

    return (
        <>
            <Divider />
            <div>
                <Grid container>
                    <Hidden mdDown>
                        <Grid item md={3}>
                            <MessageSideBar/>
                        </Grid>

                    </Hidden>
                    <Grid item xs={12} md={9}>
                        <Messagebox />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
