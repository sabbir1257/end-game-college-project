

const ViewSingleCard = ({viewCardData}) => {
    const {collegeImage, events, sports } = viewCardData;
    return (
        <div>
            <img src={collegeImage} alt="" />
            <p>Event: {events}</p>
            <p>Sports Fasility: {sports}</p>
        </div>
    );
};

export default ViewSingleCard;