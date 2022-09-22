import axios from "axios";
import React, { useState, useEffect } from "react";

export function CallApiAxiso({}) {
  const baseUrl = "https://api2.plawarn.com";
  axios.get(`${baseUrl}/users`).then((res) => {
    // console.log(res.data);
  });
}
