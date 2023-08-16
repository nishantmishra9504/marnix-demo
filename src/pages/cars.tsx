'use client'
import React, { useEffect } from 'react';
import CarlistingPage from '../../components/CarlistingPage/Index'
import { useGetRequestQuery } from '@/redux/services/RequestHandler';
import {APIEndPoints} from '../../APIEndPoints';
import { useAppDispatch } from '@/redux/hooks';
import { setAllCarDetails } from '@/redux/slices/CarSlice';

const CarPage = () => {
  const {data, isSuccess, isError, error} = useGetRequestQuery({url: APIEndPoints.view_owned_vehicles});
  const dispatch = useAppDispatch();
  useEffect(()=>{
    if(isSuccess){
      dispatch(setAllCarDetails(data.data.vehicles))
    }
    else if(isError){
      console.log(error)
    }
  },[isSuccess, isError])
  return (
    <div>
      <CarlistingPage/>
    </div>
  )
}

export default CarPage;
