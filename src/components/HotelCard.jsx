import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const HotelCard = ({ room, index }) => {
  return (
    <Link
      to={`/rooms/${room._id}`}
      onClick={() => scrollTo(0, 0)}
      key={room._id}
      className="relative max-w-[280px] w-full rounded-xl overflow-hidden bg-white text-gray-500 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]"
    >
      <div className="relative">
        <img src={room.images[0]} alt="hotel" className="w-full h-48 object-cover" />
        {index % 2 === 0 && (
          <p className="px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full shadow">
            Best Sellers
          </p>
        )}
      </div>

      <div className="p-4 pt-5 space-y-3">
        <div className="flex items-center justify-between">
          <p className="font-playfair text-xl font-medium text-gray-800">
            {room.hotel.name}
          </p>
          <div className="flex items-center gap-1">
            <img src={assets.starIconFilled} alt="star-icon" className="h-4" />
            4.5
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <img src={assets.locationIcon} alt="location-icon" className="h-4" />
          <span>{room.hotel.address}</span>
        </div>

        <div className="flex items-center justify-between">
          <p>
            <span className="text-xl text-gray-800">
              Rs{room.pricePerNight}
            </span>
            /night
          </p>
          <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;
