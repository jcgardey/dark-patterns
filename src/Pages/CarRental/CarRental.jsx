import { SelectVehicle } from "./SelectVehicle"

const Input = ({name, onChange}) => (
    <input type="text" name={name} onChange={onChange} className="w-full rounded px-2 h-9" />
)

const Label = ({children}) => (
    <label className="text-white text-lg">{children}</label>
)

export function CarRental () {
    return (
        <>
        <div className="bg-blue-900 p-4">
            <h2 className="text-2xl text-white font-semibold">Start a Reservation</h2>
            <div className="my-4 flex items-end">
                <div className="mx-3 w-1/4">
                    <Label>Location</Label>
                    <Input name={'location'} />
                </div>
                <div className="mx-3 w-1/5">
                    <Label>Pick-up Date</Label>
                    <Input name={'pickup_date'} />
                </div>
                <div className="mx-3 w-1/5">
                    <Label>Return Date</Label>
                    <Input name={'return_date'} />
                </div>
                <div>
                    <button className="bg-yellow-300 hover:bg-yellow-400 p-4 rounded-lg text-xl font-semibold">Search</button>
                </div>               
            </div>
        </div>
        </>
    )
}