import { useState } from "react";

function Dropdown() {
  const data = [
    {
      country: "India",
      city: [" Mumbai", "Bengaluru", "hydrabad", "Delhi"],
    },
    {
      country: "USA",
      city: ["New York", "Los Angeles", "chicago"],
    },
    {
      country: "Australia",
      city: ["Sydney", "Melbourne", "Brisbane"],
    },
  ];

  const [selectCountry, setSelectCountry] = useState("");
  const [selectCity, setSelectCity] = useState("");

  const handleCountryChanged = (event) => {
    setSelectCountry(event.target.value);
  };
  const handleCityChanged = (event) => {
    setSelectCity(event.target.value);
  };

  const cities =
    data.find((item) => item.country === selectCountry)?.city || [];
  return (
    <div>
      <select
        name="deopdown"
        id=""
        value={selectCountry}
        onChange={handleCountryChanged}
      >
        <option value="">Select Country</option>
        {data.map((item, index) => (
          <option key={index} value={item.country}>
            {item.country}
          </option>
        ))}
      </select>

      <select name="" id="" value={selectCity} onChange={handleCityChanged}>
        <option value="">Select City</option>
        {cities.map((city, i) => (
          <option key={i} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
