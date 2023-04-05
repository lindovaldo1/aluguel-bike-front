import { BikeElement } from 'src/app/models/BikeElement';
import { UserElement } from 'src/app/models/UserElement';
export interface RentElement {
  id: number
  user_id: number
  bike_id: number
  exit_time: string
  return_time: string
  state: boolean
  createdAt: Date
  updatedAt: Date
  user: UserElement
  Bike: BikeElement
}
