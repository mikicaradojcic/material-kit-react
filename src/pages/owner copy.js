import {useState, useEffect} from 'react';
import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { AccountProfile } from '../components/account/account-profile';
import { AccountProfileDetails } from '../components/account/account-profile-details';
import { DashboardLayout } from '../components/dashboard-layout';
import { useRouter } from 'next/router';
import {OwnerEdit} from '../components/owner/owner-edit'
import {directusService} from '../lib/directusService';
import {PetEdit} from '../components/pet/pet-edit'
import { v4 as uuidv4 } from 'uuid';


const Page = () => { 
const defaultOwner = {firstName:'', lastName:''};
const defaultPet = {petName:''};

  const [owner, setOwner] = useState(defaultOwner);



  
  const [pets, setPets] = useState([]);
  const router = useRouter()
  const {id} = router.query;

  const title = id?'Edit Owner':'New Owner';

  useEffect(()=>{

    if(id){
      loadOwner(id);
      loadPets();

    }  
  
    
  }, []);
  const loadPets=()=>{
    directusService.items('pet').readByQuery({
      filter: {
        ownerId: {
          _eq: id,
        },
      },
      sort:['petName']
     }).then((data)=>{
      setPets(data.data);
      console.log('pets', data.data);
    });
  };

  const loadOwner=(ownerId)=>{
    directusService.items('owner').readOne(ownerId).then((data)=>{
      setOwner(data??defaultOwner);
    });
  };
  const saveOwner = (ownerToEdit) => {
    if(ownerToEdit.id){
      directusService.items('owner').updateOne(ownerToEdit.id, {
        firstName: ownerToEdit.firstName,
        lastName: ownerToEdit.lastName,
      }).then(data=>{
        router.push(`/owner?&refresh=true&id=${data.id}`);
        setOwner(data);
        console.log('updated', data)});
      ;
    }
    else{
      directusService.items('owner').createOne({
        firstName: ownerToEdit.firstName,
        lastName: ownerToEdit.lastName,
      }).then(data=>{
        router.push(`/owner?id=${data.id}`)
        console.log('created', data)});
      
    }
  }

  const addPet=()=>{
    setPets([ defaultPet, ...pets]);
  };


  return (
  <>
    <Head>
      {title}
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
          {title}
        </Typography>
        <Grid
          container
          spacing={3}
        >
         
          <Grid item  lg={12} md={12} xs={12} >
             <OwnerEdit owner={owner} addPet={addPet} saveOwner={saveOwner}/>
             {pets?.map(pet=>{
              return <PetEdit key={uuidv4()} pet={pet} ></PetEdit>
            })}
            
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
)};

Page.getLayout = (page) => (
   <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
