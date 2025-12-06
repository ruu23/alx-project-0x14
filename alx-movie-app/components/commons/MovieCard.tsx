import { MovieProps } from "@/interfaces"
import Image from "next/image"

const MovieCard: React.FC<MovieProps> = ({ title, posterImage, releaseYear }) => {
  return (
    <div className="h-[563px]">
      <div>
        {posterImage ? (
          <Image 
            className="h-[430px] w-full rounded-md hover:cursor-pointer" 
            src={posterImage} 
            width={100} 
            height={100} 
            alt={title} 
          />
        ) : (
          <div className="h-[430px] w-full rounded-md bg-gray-800 flex items-center justify-center">
            <span className="text-gray-400 text-center px-4">No Image Available</span>
          </div>
        )}
      </div>
      <div className="flex justify-between py-4">
        <p className="text-xl font-bold">{title}</p>
        <p className="text-xl text-[#E2D609]">{releaseYear}</p>
      </div>
    </div>
  )
}

export default MovieCard