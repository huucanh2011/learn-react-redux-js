import React from "react";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/auth">Auth</Link>
      <Button type="primary">Test</Button>
    </div>
  );
}
