import { useEffect, useRef, useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    latitude: "",
    longitude: "",
  });
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const searchBoxRef = useRef(null);

  useEffect(() => {
    // Google Map
    if (typeof window !== "undefined" && window.google) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 13.736717, lng: 100.523186 }, // Default location (Bangkok)
        zoom: 12,
      });

      // Search Box
      const input = searchBoxRef.current;
      const searchBox = new window.google.maps.places.SearchBox(input);

      // Bias the SearchBox results towards current map bounds
      map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
      });

      searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();
        if (places.length === 0) return;
        const place = places[0];
        const location = place.geometry.location;

        // Update map center and add marker
        map.setCenter(location);
        map.setZoom(15);

        addMarker(location.lat(), location.lng(), map);
      });

      // Click to add marker
      map.addListener("click", (event) => {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
        addMarker(lat, lng, map);
      });

      // Add marker
      const addMarker = (lat, lng, map) => {
        // Remove existing marker if any
        if (markerRef.current) {
          markerRef.current.setMap(null);
        }

        // Add a new marker
        const marker = new window.google.maps.Marker({
          position: { lat, lng },
          map: map,
          draggable: true,
        });

        markerRef.current = marker;

        // Update formData with the marker's position
        setFormData((prev) => ({
          ...prev,
          latitude: lat,
          longitude: lng,
        }));

        // Update formData on marker drag
        marker.addListener("dragend", () => {
          const position = marker.getPosition();
          setFormData((prev) => ({
            ...prev,
            latitude: position.lat(),
            longitude: position.lng(),
          }));
        });
      };
    }
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Send formData to backend here
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-2xl font-bold mb-5">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label className="block font-medium mb-1">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Search Location</label>
          <input
            ref={searchBoxRef}
            type="text"
            placeholder="Search for a location"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Location</label>
          <div
            ref={mapRef}
            className="w-full h-96 border rounded-md"
          ></div>
        </div>
        <div>
          <label className="block font-medium mb-1">Latitude</label>
          <input
            type="text"
            name="latitude"
            value={formData.latitude}
            readOnly
            className="w-full px-4 py-2 border rounded-md bg-gray-100"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Longitude</label>
          <input
            type="text"
            name="longitude"
            value={formData.longitude}
            readOnly
            className="w-full px-4 py-2 border rounded-md bg-gray-100"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Register
        </button>
      </form>
    </div>
  );
}
