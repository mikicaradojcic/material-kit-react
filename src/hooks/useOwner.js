import { useState, useEffect } from 'react';
import { directusService } from '../lib/directusService';
import { useRouter } from 'next/router';
import * as Yup from 'yup';


export const defaultPet = { petName: '' };
export const defaultOwner = { firstName: '', lastName: '', contactPhone: '', city: '', ownersNote: '' };

export const ownerValidationSchema = Yup.object({
  firstName: Yup
    .string()
    .max(255)
    .required('First name is required'),
  lastName: Yup
    .string()
    .max(255),
  contactPhone: Yup
    .string()
    .max(255),
  city: Yup
    .string()
    .max(255),
  ownersNote: Yup
    .string()
    .max(4000)
});

export const petValidationSchema = Yup.object({
  petName: Yup
    .string()
    .max(255)
    .required('Pet name is required')
});

const useOwner = (ownerId) => {

  const [owner, setOwner] = useState(defaultOwner);
  const [pets, setPets] = useState([]);

  const router = useRouter()


  useEffect(() => {
    if (ownerId && !owner.id) {
      console.log(`fetching owner ${ownerId}`, owner);
      fetchOwner();
      fetchPets();
    }
  }, [ownerId]);


  const fetchOwner = () => {
    if (ownerId) {
      directusService.items('owner').readOne(ownerId).then((data) => {
        setOwner(data ?? defaultOwner);
      });
    }
    else { setOwner(defaultOwner);; }
  };

  const saveOwner = (ownerToEdit) => {
    if (ownerToEdit.id) {
      directusService.items('owner').updateOne(ownerToEdit.id, ownerToEdit)
        .then(data => {
          router.push(`/owner/${data.id}`);
          setOwner(data);
          console.log('updated', data)
        });
      ;
    }
    else {
      directusService.items('owner').createOne(ownerToEdit).then(data => {
        router.push(`/owner/${data.id}`)//.then(() => router.reload());
        console.log('created', data)
      });

    }
  }

  const savePet = (petToEdit) => {
    if (petToEdit.id) {
      directusService.items('pet').updateOne(petToEdit.id, petToEdit).then(data => {
        fetchPets();
        console.log('updated pet', data)
      });
      ;
    }
    else {
      directusService.items('pet').createOne({
        ...petToEdit, ownerId: owner.id
      }).then(data => {
        fetchPets();
        console.log('created pet', data)
      });

    }
  }

  const fetchPets = () => {
    if (ownerId) {
      directusService.items('pet').readByQuery({
        filter: {
          ownerId: {
            _eq: ownerId,
          },
        },
        sort: ['petName']
      }).then((data) => {
        setPets(data.data);
        console.log('pets', data.data);
      });
    }
  };

  const addPet = () => {
    setPets([defaultPet, ...pets]);
  };

  return { owner, saveOwner, fetchOwner, pets, addPet, fetchPets, savePet };
}


export default useOwner;