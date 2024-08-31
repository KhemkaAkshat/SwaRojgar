// src/utils/geolocation.js
export const getUserLocation = (callback) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const location = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                callback(location); // Pass the location to the callback function
            },
            error => {
                console.error("Error fetching location:", error);
                callback(null); // Pass null if there's an error
            }
        );
    } else {
        console.error("Geolocation is not supported by this browser.");
        callback(null);
    }
};
