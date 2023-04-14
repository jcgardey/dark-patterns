import convertible from '../../assets/CarRental/convertible.avif';
import people from '../../assets/CarRental/people.svg';
import bag from '../../assets/CarRental/bag.svg';


const Vehicle = ({vehicle}) => (
    <div className="bg-white p-4 flex w-4/5 mx-auto my-3">
        <div className="w-1/3">
            <h3 className="text-blue-800 text-2xl font-bold">{vehicle.name}</h3>
            <p>Additional description</p>
            <div className='flex my-2'>
                <div className='mx-2'>
                    <img className='w-7 mx-auto' src={people} />
                    <span>{vehicle.capacity} seater</span>
                </div>
                <div className='mx-2'>
                    <img className='w-7 mx-auto bg-red' src={bag} />
                    <span>{vehicle.capacity} bags</span>
                </div>
            </div>
        </div>
        <div className="w-1/3">
            <img src={vehicle.img} />
        </div>
        <div className='w-1/3'>
            <p className='text-2xl text-center font-bold text-blue-500 my-2'>&#36;{vehicle.price} / day</p>
            <button className='w-full bg-blue-800 text-white py-2'>Select</button>
        </div>
    </div>
)


export const SelectVehicle = ({}) => {

    const vehicles = [
        { name: 'Standard SUV', capacity: 5, price: 357.15, img: convertible},
        { name: 'Standard', capacity: 5, price: 357.35, img: convertible},
        { name: 'Convertible', capacity: 4, price: 357.65, img: convertible},
    ]

    return (
        <div className="bg-blue-950 p-4">
            <h2 className="text-2xl text-white font-bold">Select Vehicle</h2>
            <div className='flex my-4'>
                <div className='w-1/5 border border-color-white rounded'>

                </div>
                <div className="w-4/5">
                    {vehicles.map((vehicle, i) => <Vehicle key={i} vehicle={vehicle} />)}
                </div>
            </div>
        </div>
    )
}