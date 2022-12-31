import { useState, useEffect, useContext } from 'react';
import { directusService } from '../lib/directusService';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { AuthContext } from '../contexts/auth-context';


export const defaultPet = { pet_name: '' };
export const defaultOwner = { first_name: '', last_name: '', contact_phone: '', city: '', owners_note: '' };

export const ownerValidationSchema = Yup.object({
  first_name: Yup
    .string()
    .max(255)
    .required('First name is required'),
    last_name: Yup
    .string()
    .max(255),
    contact_phone: Yup
    .string()
    .max(255).nullable(),
  city: Yup
    .string()
    .max(255).nullable(),
    owners_note: Yup
    .string()
    .max(4000).nullable()
});

export const petValidationSchema = Yup.object({
  pet_name: Yup
    .string()
    .max(255)
    .required('Pet name is required')
});

const useOwner = () => {
  
  const authContext = useContext(AuthContext);
  const user =authContext.user;
  const [owner, setOwner] = useState(defaultOwner);
  const [pets, setPets] = useState([]);

  const router = useRouter();


  const  fetchOwner = async (userId) => {
    const o =await directusService.items('owner').readByQuery({
      filter: {
        user_id: {
          _eq: userId,
        },
      }
    });

    if(!o.data || !o.data[0]){
      throw('missing owner for user id '+userId);
    }

    console.log('o.data[0]', )

    fixAndSetOwner(o.data[0]);
  };

  const fixAndSetOwner = (owner)=>{
    setOwner({...owner, first_name:user.first_name, last_name:user.last_name});

  }
  

  const fetchPets = async (userId) => {
      const p =await directusService.items('pet').readByQuery({
        filter: {
          user_id: {
            _eq: userId,
          },
        },
        sort: ['pet_name']
      });
      setPets(p.data);
  
    };

  const addPet = () => {
    setPets([defaultPet, ...pets]);
  };


  const saveOwner = async (ownerToEdit) => {
    const u = await directusService.users.updateOne(ownerToEdit.user_id, {first_name:ownerToEdit.first_name,last_name:ownerToEdit.last_name }); 
    authContext.updateUser(u);
    const o = await directusService.items('owner').updateOne(ownerToEdit.id, ownerToEdit); 
    fixAndSetOwner(o);
  }

  const savePet = async (petToEdit) => {
    if (petToEdit.id) {
      await directusService.items('pet').updateOne(petToEdit.id, petToEdit);
    }
    else {
      directusService.items('pet').createOne({
        ...petToEdit, user_id: user.id
      })
      fetchPets(user.id);

    }
  }
  useEffect(()=>{
    fetchOwner(user.id);
    fetchPets(user.id);

  }, []);
  return { owner, saveOwner, fetchOwner, pets, addPet, fetchPets, savePet };
}

export default useOwner;