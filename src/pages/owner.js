import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { useRouter } from 'next/router';
import {OwnerEdit} from '../components/owner/owner-edit'
import {PetEdit} from '../components/pet/pet-edit'
import { v4 as uuidv4 } from 'uuid';
import useOwner from '../hooks/useOwner'
import {useState, useEffect} from 'react';
import { OpenWithRounded } from '@mui/icons-material';
const Page = () => { 
const router = useRouter();

const{owner, saveOwner, pets, addPet, savePet} = useOwner();

  return (
  <div key={'owner_key'}>
    <Head>
      'Edit Owner'
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Edit Owner
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid item  lg={12} md={12} xs={12} >
            <OwnerEdit owner={owner} addPet={addPet} saveOwner={saveOwner}/>
             {pets?.map(pet=>{
              return <PetEdit key={uuidv4()} pet={pet} savePet={savePet} ></PetEdit>
            })}
          </Grid>
        </Grid>
      </Container>
    </Box>
  </div>
)};

Page.getLayout = (page) => (
   <DashboardLayout>
    {page}
  </DashboardLayout>)

export default Page;
