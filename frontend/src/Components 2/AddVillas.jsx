import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AddVillas() {
    const [input, setInput] = useState({
        name: '',
        location: '',
        price: '',
        size: '',
        guests: '',
        bedrooms: '',
        bathrooms: '',
        squareMeters: '',
        checkInTime: '',
        checkOutTime: '',
        image: '',
    });
    const [categoryData, setCategoryData] = useState([]);
    const [villasData, setVillasData] = useState([]);

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const fileHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append('name', input.name);
        formData.append('location', input.location);
        formData.append('price', input.price);
        formData.append('size', input.size);
        formData.append('guests', input.guests);
        formData.append('bedrooms', input.bedrooms);
        formData.append('bathrooms', input.bathrooms);
        formData.append('squareMeters', input.squareMeters);
        formData.append('checkInTime', input.checkInTime);
        formData.append('checkOutTime', input.checkOutTime);
        formData.append('image', input.image);

        try {
            let res = await axios.post('http://localhost:3400/addvillas', formData);
            if (res.data.success) {
                alert('Villa Added Successfully');
            }
        } catch (error) {
            console.error('Error adding villa:', error);
            alert('Failed to add villa. Please try again.');
        }

        setInput({
            name: '',
            location: '',
            price: '',
            size: '',
            guests: '',
            bedrooms: '',
            bathrooms: '',
            squareMeters: '',
            checkInTime: '',
            checkOutTime: '',
            image: '',
        });
    };

    useEffect(() => {
        axios.get('http://localhost:3400/getAllCategory').then((res) => {
            setCategoryData(res.data.categoryData);
        });

        axios.get('http://localhost:3400/getAllVilla').then((res) => {
            setVillasData(res.data.villasData);
        });
    }, []);

    return (
        <div className="add-villa p-6 md:p-8 bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="container max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-10">
                <h3 className="text-3xl font-semibold text-center text-gray-700 mb-8">Add Villa</h3>
                <form
                    onSubmit={handleSubmit}
                    method="post"
                    encType="multipart/form-data"
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    <div>
                        <label className="block text-gray-600 font-medium mb-2">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={input.name}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                            onChange={handleChange}
                            name="name"
                            placeholder="Enter Villa Name"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 font-medium mb-2">
                            Location <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={input.location}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                            onChange={handleChange}
                            name="location"
                            placeholder="Enter Location"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 font-medium mb-2">
                            Price <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            value={input.price}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                            onChange={handleChange}
                            name="price"
                            placeholder="Enter Price"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 font-medium mb-2">
                            Image <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="file"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                            onChange={fileHandler}
                            name="image"
                            required
                        />
                    </div>

                    {/* Additional Villa Fields */}
                    <div>
                        <label className="block text-gray-600 font-medium mb-2">
                            Size <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            value={input.size}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                            onChange={handleChange}
                            name="size"
                            placeholder="Enter Size"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 font-medium mb-2">
                            Guests <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            value={input.guests}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                            onChange={handleChange}
                            name="guests"
                            placeholder="Enter Number of Guests"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 font-medium mb-2">
                            Bedrooms <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            value={input.bedrooms}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                            onChange={handleChange}
                            name="bedrooms"
                            placeholder="Enter Number of Bedrooms"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 font-medium mb-2">
                            Bathrooms <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            value={input.bathrooms}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                            onChange={handleChange}
                            name="bathrooms"
                            placeholder="Enter Number of Bathrooms"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 font-medium mb-2">
                            Square Meters <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            value={input.squareMeters}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                            onChange={handleChange}
                            name="squareMeters"
                            placeholder="Enter Square Meters"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 font-medium mb-2">
                            Check-In Time
                        </label>
                        <input
                            type="time"
                            value={input.checkInTime}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                            onChange={handleChange}
                            name="checkInTime"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 font-medium mb-2">
                            Check-Out Time
                        </label>
                        <input
                            type="time"
                            value={input.checkOutTime}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                            onChange={handleChange}
                            name="checkOutTime"
                        />
                    </div>

                    <div className="col-span-2 text-center">
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-300"
                        >
                            Add Villa
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddVillas;
