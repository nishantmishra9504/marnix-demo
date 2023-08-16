import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Homepage from '../../components/Homapage';
import { useGetRequestQuery } from '@/redux/services/RequestHandler';
import { APIEndPoints } from '../../APIEndPoints';
import { useAppDispatch } from '@/redux/hooks';
import { setAllCarDetails } from '@/redux/slices/CarSlice';
import { useEffect } from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data, isSuccess, isError, error } = useGetRequestQuery({ url: APIEndPoints.view_owned_vehicles });
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isSuccess) {
      dispatch(setAllCarDetails(data.data.vehicles))
    }
    else if (isError) {
      console.log(error)
    }
  }, [isSuccess, isError])
  return (
    <>
      <Homepage />
    </>
  )
}
