import { Container, Grid, Divider } from '@material-ui/core'
import React from 'react'
import { Messagebox } from './MessageBox'

export default function Mensajes(props) {
    

    return (
        <>
            <Divider />
            <Container>
                <Grid container>
                    <Grid item md={2}>
                        {"side bar"}
                    </Grid>
                    <Grid item md={10}>
                        <Messagebox />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
