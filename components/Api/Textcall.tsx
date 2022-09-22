import React, { useState, useEffect } from "react";

export function CallApi({}) {
  const [isLoading, setLoading] = useState(true); // set loading to true
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api2.plawarn.com/users")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  console.log(data);
}
