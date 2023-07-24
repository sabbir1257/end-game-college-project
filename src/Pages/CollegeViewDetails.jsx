import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const CollegeViewDetails = () => {

    const { id } = useParams()
    const [viewCard, setViewCards] = useState([])

    useEffect(() => {
        fetch(`https://server-peach-eta.vercel.app/viewCollege/${id}`)
            .then(res => res.json())
            .then(data => setViewCards(data))
    }, [id])

    const { collegeImage, events, sports, collegeName, rating, admissionDates } = viewCard;
    return (
        <div className="max-w-[1240px] mx-auto mt-16 px-3">
            <h1 className="text-center mt-20 mb-16 text-3xl font-bold">Top Rated Colleges in USA</h1>
            <div>
                <div  className="grid md:grid-cols-2 gap-6 border p-4 rounded-md">
                    <img className="rounded-md md:h-[400px]" src={collegeImage} alt="" />
                    <div>
                        <h1 className="my-4 text-xl font-bold">Name: {collegeName}</h1>
                        <p className="font-bold">Rating: <span>{rating}</span>.00</p>
                        <p className="my-2 font-semibold">Admission: <span className="font-normal">{admissionDates}</span></p>
                        <p className="my-2 font-semibold">Event: <span className="font-normal text-justify">{events}</span></p>
                        <p className="font-semibold">Sports Fasility: <span className="font-normal md:text-justify">{sports}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeViewDetails;