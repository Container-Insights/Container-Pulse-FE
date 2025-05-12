"use client";

import React from "react";

const API_URL =
  "http://ec2-13-209-22-133.ap-northeast-2.compute.amazonaws.com:8080/cluster/2";

async function testAPI() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log("API 응답:", data);
    return data;
  } catch (error) {
    console.error("API 호출 에러:", error);
    return null;
  }
}

const TestAPI: React.FC = () => {
  return (
    <div style={{ height: "100px", width: "100px", backgroundColor: "red" }}>
      <button onClick={testAPI}>TEST</button>
    </div>
  );
};

export default TestAPI;
