import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetail = () => {

    const params = useParams();
    const eventId = params.eventId;
    return (
        <div>
            details of {eventId}
        </div>
    );
}

export default EventDetail;
