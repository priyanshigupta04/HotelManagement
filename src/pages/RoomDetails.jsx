import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import StarRating from "../components/StarRating";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const room = roomsDummyData.find((room) => room._id === id);
    room && setRoom(room);
    room && setMainImage(room.images[0]);
  }, []);

  return (
    room && (
      <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* Room Details */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <h1 className="text-3xl md:text-4xl font-playfair">
            {room.hotel.name}{" "}
            <span className="font-inter text-sm">{room.RoomType}</span>
          </h1>
          <p className="text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full">
            20% OFF
          </p>
        </div>

        {/* Room Rating */}
        <div className="flex items-center gap-1 mt-2">
          <StarRating />
          <p className="ml-2">200+ reviews</p>
        </div>

        {/* Room Address */}
        <div className="flex items-center gap-1 text-gray-500 mt-2">
          <img src={assets.locationIcon} alt="location-icon" />
          <span>{room.hotel.address}</span>
        </div>

        {/* Room Images */}
        <div className="flex flex-col lg:flex-row mt-6 gap-6">
          <div className="lg:w-1/2 w-full">
            <img
              src={mainImage}
              alt="Room Image"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
            {room?.images.length > 1 &&
              room.images.map((image, index) => (
                <img
                  onClick={() => setMainImage(image)}
                  key={index}
                  src={image}
                  alt="Room Image"
                  className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${
                    mainImage === image && "outline-3 outline-orange-500"
                  }`}
                />
              ))}
          </div>
        </div>
          {/* Room Highlights */}
        <div className="flex flex-col md:flex-row md:justify-between mt-10">
            <div>
              <h1 className="text-3xl md:text-4xl font-playfair">
                Experience Luxury Like Never Before
              </h1>
              <div>
                {room.amenities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100">
                    <img
                      src={facilityIcons[item]}
                      alt={item}
                      className="w-5 h-5"
                    />
                    <p className="text-xs">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        <p className="text-2xl font-medium">Rs.{room.pricePerNight} / Night</p>
        <form className="flex flex-col bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl">
          <div className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-4 md:gap-10 text-gray-500">
            <div className="flex flex-col">
              <label htmlFor="checkInDate" className="font-medium">Check-In</label>
              <input id="checkInDate" className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none" placeholder="Check-In" required type="date"/>
            </div>
            <div className="flex flex-col">
              <label htmlFor="checkOutDate" className="font-medium">Check-Out</label>
              <input id="checkOutDate" className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none" placeholder="Check-Out" required type="date"/>
            </div>
            <div className="flex flex-col">
              <label htmlFor="guests" className="font-medium">Guests</label>
              <input id="guests" className="max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none" placeholder="0" required type="number"/>
            </div>
            <div className="flex items-end w-full md:w-auto">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 ml-80  active:scale-95 transition-all text-white rounded-md w-full md:w-auto mt-6 md:mt-0 md:px-10 px-6 py-3 text-base font-semibold shadow-lg cursor-pointer"
              >
                Check Avaiblity
              </button>
            </div>
          </div>
        </form>

      </div>
    )
  );
};

export default RoomDetails;


