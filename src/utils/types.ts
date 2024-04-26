export type State = {
  name: string
  abbreviation: string
}

export type Employee = {
  firstName: string
  lastName: string
  birthDate: Date
  startDate: Date
  addressStreet: string
  addressCity: string
  addressState: string
  addressZip: number
  department: string
}

export type Store = {
  employees: Employee[]
  addEmployee: (employee: Employee) => void
}
