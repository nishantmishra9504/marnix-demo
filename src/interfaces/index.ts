export type CarDetails = {
    id: number
    brand: {
      id: number
      name: string
    }
    vehicle: {
      id: number
      modelId: string
      modelName: string
      bodyType: string
      price: number
    }
    yearOfRegistration: number
    RTOLocation: string
    color: string
    fuelType?: string
    ownerNumber?: number
    distanceDriven?: number
    transmission?: string
    vehicleDocument?: {
      insurance: {
        type: string
        validity: string
      }
    }
    pricePaid?: number
    expectedPrice?: number
    sold?: boolean
    status?: boolean
    images?: {
        General: [],
        Wheels: [],
        Others: [],
    }
}

export type ContactUs = {
  name: string,
  email: string,
  phone: string,
  type: string,
  description: string
}