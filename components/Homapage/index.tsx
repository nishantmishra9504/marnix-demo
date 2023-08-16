import React from 'react'
import Navbar from '../Layout/Navbar'
import Banner from './Banner'
import FeatureCars from './FeatureCars'
import PlanningToSell from './PlanningToSell'
import HowItWork from './HowItWork'
import FinanceYourCar from './FinanceYourCar'
import PerfectCar from './PerfectCar'
import FAQ from './FAQ'
import Footer from '../Layout/Footer'

const Homepage = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <FeatureCars />
        <PlanningToSell />
        <HowItWork />
        <FinanceYourCar />
        <PerfectCar />
        <FAQ />
        <Footer />
    </div>
  )
}

export default Homepage
