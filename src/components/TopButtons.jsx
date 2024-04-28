const TopButtons = () => {
  const cities = [
    {
      id: 1,
      title: "Mumbai",
    },
    {
      id: 2,
      title: "Delhi",
    },
    {
      id: 3,
      title: "Kolkata",
    },

    {
      id: 4,
      title: "Hyderabad",
    },
    {
      id: 5,
      title: "Bangalore",
    },
  ];
  return (
    <div className="flex items-center justify-between my-6">
      {cities.map((city) => (
        <button className="text-white text-lg font-medium" key={city.id}>
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
